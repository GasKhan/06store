import { auth } from '@/firebase/config';
import Preloader from './Preloader';
import ReduxProvider from './ReduxProvider';
import './globals.css';
import { Inter } from 'next/font/google';
import { UserState } from '@/types/UserState';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
