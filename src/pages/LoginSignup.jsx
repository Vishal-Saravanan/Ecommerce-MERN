import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='your name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='password' />
          <button>Continue</button>
        </div>        
        <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
        <div class="loginsignup-agree">
          <input type="checkbox" id="agree" />
          <label for="agree">I agree to the terms and conditions</label>
        </div>

        
      </div>
      
    </div>
  )
}

export default LoginSignup
