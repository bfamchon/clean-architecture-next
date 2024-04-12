import { AppWrapper } from '@/modules/app/react/AppWrapper';
import { Layout } from '@/modules/app/react/Layout';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Formidable',
  description: 'Déclaration de sinistre en ligne'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <AppWrapper>
          <Layout>{children}</Layout>
        </AppWrapper>
      </body>
    </html>
  );
}
