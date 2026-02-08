# 💌 Chat de San Valentín

Un chat interactivo y romántico creado con Next.js como detalle especial para San Valentín.

## 🎯 Características

- ✨ Mensajes animados con efecto de "escribiendo..."
- 💐 Animación de flores virtuales
- 🎵 Integración de playlist de Spotify
- 📱 Diseño mobile-first inspirado en WhatsApp/iMessage
- 🎨 Animaciones suaves y transiciones elegantes
- ⚙️ Contenido fácilmente editable

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## ✏️ Personalización

### Editar mensajes y contenido

Abre el archivo `data/messages.ts` para personalizar:

- **Nombre del contacto**: Cambia `CONTACT_NAME`
- **Playlist de Spotify**: 
  1. Ve a tu playlist en Spotify
  2. Click en `...` > `Compartir` > `Insertar playlist`
  3. Copia la URL del iframe y pégala en `PLAYLIST_URL`
- **Número de teléfono**: Actualiza `PHONE_NUMBER`
- **Mensajes**: Modifica el array `MESSAGE_FLOW`
- **Tiempos**: Ajusta `TYPING_DELAY` y `MESSAGE_DELAY`

### Ejemplo de URL de Spotify

```typescript
export const PLAYLIST_URL = "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M";
```

## 📁 Estructura del Proyecto

```
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales
├── components/
│   ├── Chat.tsx            # Componente principal del chat
│   ├── Chat.module.css     # Estilos del chat
│   ├── MessageBubble.tsx   # Componente de burbuja de mensaje
│   └── MessageBubble.module.css
├── data/
│   └── messages.ts         # Configuración de mensajes
└── package.json
```

## 🎨 Personalización de Estilos

Los estilos están en módulos CSS separados:
- `components/Chat.module.css` - Estilos del chat
- `components/MessageBubble.module.css` - Estilos de burbujas
- `app/globals.css` - Estilos globales

## 📦 Build para Producción

```bash
# Crear build de producción
npm run build

# Ejecutar en producción
npm start
```

## 🌐 Deploy

Puedes deployar fácilmente en:

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Sube la carpeta .next a Netlify
```

## 💡 Notas

- El chat se reproduce automáticamente al cargar la página
- Los mensajes aparecen con delays realistas
- La interacción con los botones continúa el flujo del chat
- Todo el contenido está centralizado en `data/messages.ts` para fácil edición

## 🤍 Hecho con amor

Creado como un detalle especial y personalizado para San Valentín.
# jessica
