/* eslint-disable jsx-a11y/anchor-is-valid */
// src/App.js
import React, { useState, useEffect } from 'react';
import SocialLogin from './components/SocialLogin';
import { InputField } from './components/InputField';
import Loading from './components/Loading';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set loading time to 30-35 seconds (35000 milliseconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='login-container'>
          <h2 className="form-title">Log in with</h2>

          <SocialLogin />

          <p className="separator"><span>or</span></p>
          <form action="#" className="login-form">
            <InputField type="email" placeholder="Email address" icon="mail" />
            <InputField type="password" placeholder="Password" icon="lock" />

            <a href="#" className="forget-pass-link">Forget Password</a>
            <button className="login-button">Log In</button>
            <p className="signup-text">Don't have an account? <a href="#">Signup now</a></p>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
