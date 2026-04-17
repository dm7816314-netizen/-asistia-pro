# AsistIA Pro 🤖

Plataforma de asistente administrativo con IA para negocios chilenos.
Planes en pesos chilenos · Pagos con MercadoPago · Panel de administración incluido.

---

## Cómo publicar en Vercel (5 minutos)

### Paso 1 · Sube el proyecto a GitHub
1. Ve a github.com y crea una cuenta gratis si no tienes
2. Crea un nuevo repositorio (New repository) → ponle nombre: `asistia-pro`
3. Sube todos estos archivos a ese repositorio

### Paso 2 · Despliega en Vercel
1. Ve a vercel.com e inicia sesión con tu cuenta de GitHub
2. Haz clic en "Add New Project"
3. Elige tu repositorio `asistia-pro`
4. Haz clic en "Deploy" → Vercel construye y publica tu sitio automáticamente

### Paso 3 · Configura las variables de entorno
En Vercel → tu proyecto → Settings → Environment Variables, agrega:

| Variable | Valor |
|----------|-------|
| `ANTHROPIC_API_KEY` | Tu API key de console.anthropic.com |
| `ADMIN_EMAIL` | Tu correo para notificaciones |

### Paso 4 · Conecta MercadoPago
1. Ve a mercadopago.cl → Cobros → Suscripciones
2. Crea un plan para cada precio ($4.990 / $9.990 / $19.990)
3. Copia los links y pégalos en tu panel admin → MercadoPago

### Paso 5 · Dominio personalizado (opcional)
- En Vercel → Settings → Domains agrega tu dominio .cl
- O usa el dominio gratuito de Vercel: `tuapp.vercel.app`

---

## Estructura del proyecto

```
asistia/
├── public/
│   ├── index.html      ← Landing page pública con planes y precios
│   └── admin.html      ← Panel de administración (solo tú)
├── api/
│   ├── chat.js         ← API del asistente IA (usa Claude Haiku)
│   └── subscribe.js    ← API para registrar nuevas suscripciones
├── vercel.json         ← Configuración de Vercel
└── .env.example        ← Variables de entorno necesarias
```

---

## Costos de operación

| Servicio | Costo |
|----------|-------|
| Vercel hosting | Gratis |
| Anthropic API (Claude Haiku) | ~$0,0008 USD por mensaje |
| MercadoPago comisión | ~3,49% + IVA por cobro |
| Dominio .cl (NIC Chile) | ~$5.000 CLP / año |

Con 20 clientes en Plan Pro ($9.990/mes) → ingresos ~$199.800 CLP/mes.
Costo API estimado con 500 mensajes/cliente/mes → ~$8 USD total.

---

## Precios sugeridos

| Plan | Precio | Incluye |
|------|--------|---------|
| Básico | $4.990/mes | Chat web, 100 mensajes/mes |
| Pro | $9.990/mes | Todo Básico + correos + citas, 500 mensajes/mes |
| Premium | $19.990/mes | Todo + mensajes ilimitados + soporte prioritario |

---

¿Necesitas ayuda? Pregúntale a Claude en claude.ai 🙌
