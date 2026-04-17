# AsistIA Pro

## Estructura (archivos en la raíz, así Vercel los encuentra)
```
asistia-pro/
├── index.html       ← landing pública
├── admin.html       ← panel de administración
├── api/
│   ├── chat.js
│   └── subscribe.js
├── vercel.json
└── .env.example
```

## Variables de entorno en Vercel
Settings → Environment Variables:
- `ANTHROPIC_API_KEY` → tu key de console.anthropic.com
