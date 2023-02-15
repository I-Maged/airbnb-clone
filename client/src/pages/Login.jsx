import '../styles/Login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [signupActive, setSignupActive] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  // };

  const handleSignUp = (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
      password2,
    };
    console.log(userData);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
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
              id='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Email'
            />
            <input
              type='text'
              className='input'
              id='name'
              name='name'
              value={name}
              onChange={onChange}
              placeholder='Username'
            />
            <input
              type='password'
              className='input'
              id='password'
              name='password'
              value={password}
              onChange={onChange}
              autoComplete='off'
              placeholder='Password'
            />
            <input
              type='password'
              className='input'
              id='password2'
              name='password2'
              value={password2}
              onChange={onChange}
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
              id='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Email'
            />
            <input
              type='password'
              className='input'
              id='password'
              name='password'
              value={password}
              onChange={onChange}
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
