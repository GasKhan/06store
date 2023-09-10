import { useState } from 'react';
import { signTypes } from '@/types/signTypes';
import signIn from '@/firebase/auth/signIn';
import signUp from '@/firebase/auth/signUp';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const useSignInOrSignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<Error | null>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'email') setEmail(e.target.value);
    if (e.target.name === 'password') setPassword(e.target.value);
  };

  const formHandler = async (e: React.FormEvent, signType: signTypes) => {
    e.preventDefault();

    try {
      if (signType === 'signUp') await signUp(email, password);
      else if (signType === 'signIn') {
        signIn(email, password).then(async ({ result, error }) => {
          setError(error);
          await axios.post('/api/setCustomClaims', {
            idToken: result?.user.getIdToken(),
          });
        });
      }
    } catch (e: any) {
      console.log(e.message);
    }

    if (error) {
      setError(error);
    }
    router.push('/');
  };

  return { email, password, error, changeHandler, formHandler };
};

export default useSignInOrSignUp;
