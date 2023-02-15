import '../styles/Login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [signupActive, setSignupActive] = useState(true);

  const [signUpFormData, setSignUpFormData] = useState({
    signUpName: '',
    signUpEmail: '',
    signUpPassword: '',
    signUpPassword2: '',
  });
  const { signUpName, signUpEmail, signUpPassword, signUpPassword2 } =
    signUpFormData;

  const [loginFormData, setLoginFormData] = useState({
    loginEmail: '',
    loginPassword: '',
  });
  const { loginEmail, loginPassword } = loginFormData;

  const onSignUpChange = (e) => {
    setSignUpFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onLoginChange = (e) => {
    setLoginFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const userData = {
      signUpName,
      signUpEmail,
      signUpPassword,
      signUpPassword2,
    };
    console.log(userData);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = {
      loginEmail,
      loginPassword,
    };
    console.log(userData);
  };

  return (
    <div className='form-wrap'>
      <div className='tabs'>
        <h3 className='signup-tab'>
          <Link
            to='#signup-tab-content'
            onClick={() => setSignupActive(true)}
            className={`toggle ${signupActive ? 'active' : ''}`}
          >
            Sign Up
          </Link>
        </h3>
        <h3 className='login-tab'>
          <Link
            to='#login-tab-content'
            onClick={() => setSignupActive(false)}
            className={`toggle ${signupActive ? '' : 'active'}`}
          >
            Login
          </Link>
        </h3>
      </div>
      <div className='tabs-content'>
        <div
          id='signup-tab-content'
          className={`toggle ${signupActive ? 'active' : ''}`}
        >
          <form className='signup-form' onSubmit={handleSignUp}>
            <input
              type='email'
              className='input'
              id='signUpEmail'
              name='signUpEmail'
              value={signUpEmail}
              onChange={onSignUpChange}
              placeholder='Email'
            />
            <input
              type='text'
              className='input'
              id='signUpName'
              name='signUpName'
              value={signUpName}
              onChange={onSignUpChange}
              placeholder='Username'
            />
            <input
              type='password'
              className='input'
              id='signUpPassword'
              name='password'
              value={signUpPassword}
              onChange={onSignUpChange}
              autoComplete='off'
              placeholder='Password'
            />
            <input
              type='password'
              className='input'
              id='signUpPassword2'
              name='signUpPassword2'
              value={signUpPassword2}
              onChange={onSignUpChange}
              autoComplete='off'
              placeholder='Confirm Password'
            />
            <input type='submit' className='button' value='Sign Up' />
          </form>
        </div>

        <div
          id='login-tab-content'
          className={`toggle ${signupActive ? '' : 'active'}`}
        >
          <form className='login-form' onSubmit={handleLogin}>
            <input
              type='email'
              className='input'
              id='loginEmail'
              name='loginEmail'
              value={loginEmail}
              onChange={onLoginChange}
              placeholder='Email'
            />
            <input
              type='password'
              className='input'
              id='loginPassword'
              name='loginPassword'
              value={loginPassword}
              onChange={onLoginChange}
              autoComplete='off'
              placeholder='Password'
            />
            <input type='submit' className='button' value='Login' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
