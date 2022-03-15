import React from 'react'

function SignUp() {
  return (
    <div class="auth__container">
      <div class="auth__contents border--grey">
          <h3 class="text--center margin-tb--medium">Sign Up</h3>
          <div class="auth__section">
              <label class="auth-label form-label--required text--medium">Enter Email</label>
              <input type="text" class="form-field margin-tb--small" placeholder="abc@example.com"/>
          </div>
          <div class="auth__section">
              <label class="auth-label form-label--required text--medium">Enter Password</label>
              <input type="password" class="form-field margin-tb--small" placeholder="Password"/>
          </div>
          <div class="auth__description">
              <input type="checkbox" class="form-checkbox" /> 
              <span>I accept all Terms and Conditions </span>
          </div>
          <button class="btn btn-auth margin-bottom--medium">Sign Up</button>

          <a class="auth__link margin-tb--medium" href="login.html">Already have an account</a>
      </div>
    </div>
  )
}

export default SignUp