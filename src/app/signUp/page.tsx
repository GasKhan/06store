'use client';
import useSignInOrSignUp from '@/hooks/useSignInOrSignUp';

const SignUpPage = () => {
  const { email, password, error, changeHandler, formHandler } =
    useSignInOrSignUp();

  return (
    <div>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={changeHandler}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={changeHandler}
        />
        <button onClick={(e) => formHandler(e, 'signUp')}>
          Create a new user
        </button>
      </form>
      {error && <div>Something went wrong</div>}
    </div>
  );
};
export default SignUpPage;
