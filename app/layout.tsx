import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';
import { AuthProvider } from '@/app/providers';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Todo',
  description: 'A todo app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <div className={styles.center}>{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
