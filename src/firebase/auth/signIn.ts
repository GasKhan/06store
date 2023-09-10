import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config';

const signIn = async (email: string, password: string) => {
  let result = null;
  let error = null;

  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    if (e instanceof Error) {
      error = e;
      console.log(e.message);
    }
  }

  return { result, error };
};

export default signIn;
