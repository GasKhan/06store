'use client';

import useSignInOrSignUp from '@/hooks/useSignInOrSignUp';

const SignInPage = () => {
  const { email, password, error, changeHandler, formHandler } =
    useSignInOrSignUp();

  return (
    <div>
      <form>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="email"
          onChange={changeHandler}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={changeHandler}
        />
        <button onClick={(e) => formHandler(e, 'signIn')}>Sign in</button>
      </form>
      {error && <div>Email or password is invalid</div>}
    </div>
  );
};

export default SignInPage;
