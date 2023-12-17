'use client';

import styles from './page.module.css';
import Navbar from '../components/navbar/Navbar';
import useAuthState from '@/hooks/useAuthState';

export default function Home() {
  useAuthState();
  return (
    <main className={styles.main}>
      {/* <Navbar /> */}
      <div>Helllllooooooooooooooooo</div>
    </main>
  );
}
