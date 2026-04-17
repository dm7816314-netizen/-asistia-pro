export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) return res.status(400).json({ error: 'Invalid messages' });

  const systemPrompt = process.env.ASSISTANT_PROMPT ||
    'Eres el asistente administrativo virtual de AsistIA Pro. Responde siempre en español, de forma amable y profesional. Puedes responder preguntas frecuentes sobre planes y precios, agendar citas y derivar al equipo humano cuando sea necesario. Los planes disponibles son: Básico $4.990/mes, Pro $9.990/mes, Premium $19.990/mes. Sé conciso y útil.';

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 512,
        system: systemPrompt,
        messages: messages.slice(-10)
      })
    });

    const data = await response.json();
    const reply = data.content?.[0]?.text || 'Lo siento, hubo un error. Por favor intenta de nuevo.';
    return res.status(200).json({ reply });
  } catch (error) {
    return res.status(500).json({ error: 'Error interno', reply: 'Hubo un problema. Intenta de nuevo en un momento.' });
  }
}
