import React from 'react';

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Kaziro Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="Email" name="" id="" />
          <input type="password" placeholder="Password" name="" id="" />
          <button>Sign in</button>
        </form>
        <p>Don't have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
