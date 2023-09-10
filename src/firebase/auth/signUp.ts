import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config';

const signUp = async (email: string, password: string) => {
  let result = null;
  let error = null;

  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    if (e instanceof Error) {
      error = e;
      console.log(e.message);
    }
  }

  return { result, error };
};

export default signUp;
