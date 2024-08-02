import React from 'react';
import SocialLogin from './components/SocialLogin';
import { InputField } from './components/InputField';



const App = () => {
  return (
    <div className='login-container'>
      <h2 className="form-title">Log in with</h2>

      <SocialLogin />

      <p className="separator"><span>or</span></p>
      <form action="#" className="login-form">
        <InputField type="email" placeholder="Email address" icon="mail" />
        <InputField type="password" placeholder="Password" icon="lock" />

        <a href="#" className="forget-pass-link">Forget Password</a>
        <button className="login-button">Log In</button>
        <p className="sigup-text">Don&apos;t have an account? <a href="#">Signup now</a></p>
      </form>
    </div>
  );
};

export default App;
