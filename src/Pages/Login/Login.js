import React from 'react';
import './Login.css';

function Login() {
  return (
    <div class="auth__container">
      <div class="auth__contents border--grey">
          <h3 class="text--center margin-tb--medium">Login</h3>
          <div class="auth__section">
              <label class="auth-label form-label--required text--medium">Enter Email</label>
              <input type="text" class="form-field margin-tb--small" placeholder="abc@example.com"/>
          </div>
          <div class="auth__section">
              <label class="auth-label form-label--required text--medium">Enter Password</label>
              <input type="password" class="form-field margin-tb--small" placeholder="Password"/>
          </div>
          <button class="btn btn-auth margin-bottom--medium">Login</button>

          <a class="auth__link margin-tb--medium" href="signup.html">Create New Account</a>
      </div>
    </div>
  )
}

export default Login