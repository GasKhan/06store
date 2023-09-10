import { auth } from '@/firebase/config';
import { signOut } from 'firebase/auth';
import React from 'react';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const signOutHandler = () => {
    signOut(auth);
  };
  return (
    <div>
      <button onClick={signOutHandler}>Sign out</button>
    </div>
  );
};
export default Navbar;
