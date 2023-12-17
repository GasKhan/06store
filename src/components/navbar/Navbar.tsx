import { auth } from '@/firebase/config';
import { signOut } from 'firebase/auth';
import React from 'react';

import classes from './navbar.module.css';
import { useAppSelector } from '@/hooks/useAppSelector';
import Link from 'next/link';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const user = useAppSelector((store) => store.user);
  console.log(user);

  const signOutHandler = () => {
    signOut(auth);
  };
  return (
    <nav className={classes.navbar}>
      <div className={classes.navTitleBlock}>
        <h3 className={classes.navTitle}>06 Store</h3>
      </div>
      {user ? (
        <button className={classes.navButton} onClick={signOutHandler}>
          Sign out
        </button>
      ) : (
        <div className={classes.navSignPanel}>
          <Link href="/signIn" className={classes.navButton}>
            Sign In
          </Link>
          <Link href="/signUp" className={classes.navButton}>
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
