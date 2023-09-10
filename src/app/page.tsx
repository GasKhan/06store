'use client';

import styles from './page.module.css';
import Navbar from '../components/navbar/Navbar';
import useAuthState from '@/hooks/useAuthState';
import { useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  useAuthState();
  useEffect(() => {}, []);

  return (
    <main className={styles.main}>
      <Navbar />
      <div>Helllllooooooooooooooooo</div>
    </main>
  );
}
