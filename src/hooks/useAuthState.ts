import { auth } from '@/firebase/config';
import { setUser } from '@/store/userSlice/userSlice';
import { UserState } from '@/types/UserState';
import { User, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useAppDispatch } from './useAppDispatch';

const useAuthState = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        const newUser = user.toJSON() as UserState;
        dispatch(setUser(newUser));

        console.log('User logged in');
      } else {
        dispatch(setUser(null));
        console.log('User logged out');
      }
    });

    return () => unsubscribe();
  }, [dispatch]);
};

export default useAuthState;
