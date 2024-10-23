import type { Metadata } from "next";
import { Courgette } from 'next/font/google';
import "./globals.css";
import Header from '@/containers/Header/Header';

// Gestion de la police via "Next/Font"
const courgette = Courgette({
  weight: '400',
  subsets: ['latin']
});

// Les méta données du site
export const metadata: Metadata = {
  title: "Demo Next.js",
  description: "DigitalCity ♥ Logal",
};

// Le layout principal (Racine de la page)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${courgette.className} antialiased`} >
        <Header />
        <main className='p-5 mx-auto max-w-screen-lg'>
          {children}
        </main>
      </body>
    </html>
  );
}
