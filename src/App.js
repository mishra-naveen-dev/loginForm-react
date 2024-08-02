import React from 'react';
import './App.css'
import img from './assets/image/image.png';
import img1 from './assets/image/image2.png';

const App = () => {
  return (
    <div className='login-container'>
      <h2 className="form-title">Log in with</h2>
      <div className="social-login">
        <button className="social-button">
          <img src={img} alt="google" className="social-icon" />Google
        </button>
        <button className="social-button">
          <img src={img1} alt="apple" className="social-icon" />Apple
        </button>
      </div>
      <p className="separator"><span>or</span></p>
      <form action="#" className="login-form">
        <div className="input-wrapper">
          <input type="email" placeholder='Email address' className="input-field" required />
          <i className="material-symbols-rounded">
            mail
          </i>
        </div>
        <div className="input-wrapper">
          <input type="password" placeholder='Password' className="input-field" required />
          <i className="material-symbols-rounded">
            lock
          </i>
        </div>
        <a href="#" className="forget-pass-link">Forget Password</a>
        <button className="login-button">Log In</button>
        <p className="sigup-text">Don&apos;t have an account? <a href="#">Signup now</a></p>
      </form>
    </div>
  );
};

export default App;
