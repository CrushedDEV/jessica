import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Jessica',
    description: 'Un detallito especial para Jessica',
    icons: {
        icon: {
            url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>❤️</text></svg>",
            type: 'image/svg+xml',
        },
    },
    openGraph: {
        title: 'Un mensaje especial para Jessica 💝',
        description: 'Alguien (crusheed :3) preparó algo especial para ti este San Valentín...',
        type: 'website',
        locale: 'es_ES',
        siteName: 'Jessica',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Un mensaje especial para Jessica 💝',
        description: 'Alguien (crusheed :3) preparó algo especial para ti este San Valentín...',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
