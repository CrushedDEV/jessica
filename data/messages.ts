// CONFIGURACIÓN DEL CHAT
// Edita aquí los mensajes, playlist y número de teléfono

export const CONTACT_NAME = "Oihan";

// URL de la playlist de Spotify (embed)
// Para obtener el embed: Spotify > Playlist > ... > Compartir > Insertar playlist
// Pega la URL del iframe aquí
export const PLAYLIST_URL = "https://open.spotify.com/embed/playlist/4DoEE1ICOOnXsCCscAC0oA?si=a7cf45afe2484d59";

// Número de teléfono
export const PHONE_NUMBER = "+34 640 898 461";

// Fecha de desbloqueo (cuando se mostrará el chat)
// Formato: 'YYYY-MM-DDTHH:MM:SS'
export const UNLOCK_DATE = '2026-02-14T00:00:00';

// URL de la imagen de amor para la respuesta final
// Pon tu foto en la carpeta public y pon aquí el nombre, o renómbrala a 'foto.jpg'
export const LOVE_IMAGE_URL = "/foto.png";

// Tipos de mensajes
export type MessageType =
    | { type: 'text'; content: string; sender: 'her' | 'me'; id?: string }
    | { type: 'question'; content: string; options: string[]; id?: string }
    | { type: 'flowers'; id?: string }
    | { type: 'playlist'; id?: string }
    | { type: 'phone'; id?: string }
    | { type: 'image'; src: string; alt: string; sender: 'her' | 'me'; id?: string };

// Flujo de mensajes
export const MESSAGE_FLOW: MessageType[] = [
    { type: 'text', content: 'Hola Jessica 🙂', sender: 'her' },
    { type: 'text', content: 'Como tas? espero que bien', sender: 'her' },
    { type: 'text', content: 'Te quería hacerte un detallito por San Valentín', sender: 'her' },
    { type: 'text', content: 'Como vivimos lejos, pensé en hacerlo así :3', sender: 'her' },
    {
        type: 'question',
        content: '¿Te gustan las flores?',
        options: ['Sí, claro', 'No (mentira, se que te gustan jiji)']
    },
    // Mensajes después de responder
    { type: 'text', content: 'Pues te tengo una sorpresa', sender: 'her' },
    { type: 'text', content: 'Toma unas florecitas para ti <3', sender: 'her' },
    { type: 'flowers' },
    { type: 'text', content: 'Y ya que estamos…', sender: 'her' },
    { type: 'text', content: 'Te hice una pequeña playlist, la hice pensando en ti, ya sabes lo importante que es para mi la musica', sender: 'her' },
    { type: 'playlist' },
    { type: 'text', content: 'Y bueno, aqui tienes mi numero, por si quieres agregarme :3 solo si quieres eh', sender: 'her' },
    { type: 'phone' },
    { type: 'text', content: 'Feliz San Valentín Jessica ❤️ te quiero muchito', sender: 'her' },
    {
        type: 'question',
        content: 'Una última pregunta... ¿Me quieres?',
        options: ['Sí', 'No'],
        id: 'love_question'
    },
    { type: 'text', content: 'Pa ti guapa', sender: 'her' }

];

// Delays entre mensajes (en milisegundos)
export const TYPING_DELAY = 1500; // Tiempo mostrando "escribiendo..."
export const MESSAGE_DELAY = 2000; // Tiempo entre mensajes
