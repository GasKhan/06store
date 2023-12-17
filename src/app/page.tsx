'use client';

import styles from './page.module.css';
import Navbar from '../components/navbar/Navbar';
import useAuthState from '@/hooks/useAuthState';
import { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/config';

export default function Home() {
  useAuthState();
  return (
    <main className={styles.main}>
      <Navbar />
      <div>Helllllooooooooooooooooo</div>
    </main>
  );
}
