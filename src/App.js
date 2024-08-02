import React from 'react';
import img from './assest/image/image.png'
import img1 from './assest/image/image.png'


const App = () => {
  return (
    <div className='login-container'>
      <h2 className="form-title">Log in with</h2>
      <div className="social-login">
        <button className="social-button">
          <img src={img} alt="google" className="social-icon" />
        </button>
        <button className="social-button">
          <img src={img1} alt="google" className="social-icon" />
        </button>
      </div>
      <p className="separator"><span>or</span></p>
      <form action="#" className="login-form">
        <div className="input-wrapper">
          <input type="email" placeholder='Email address' className="input-field" required />
        </div>
      </form>

    </div>
  )
}
export default App