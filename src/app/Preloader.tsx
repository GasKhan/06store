import store from '@/store/store';
import { setUser } from '@/store/userSlice/userSlice';
import { UserState } from '@/types/UserState';
import { useRef } from 'react';

export default function Preloader({ user }: { user: UserState }) {
  const isUserLoaded = useRef(false);

  if (!isUserLoaded.current) {
    store.dispatch(setUser(user));
    console.log('dispatching!');
    isUserLoaded.current = true;
  }
  return null;
}
