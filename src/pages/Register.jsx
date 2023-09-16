import React from 'react';

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Kaziro Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Display name" name="" id="" />
          <input type="email" placeholder="Email" name="" id="" />
          <input type="password" placeholder="Password" name="" id="" />
          <input type="file" name="" id="" />
          <button>Sign up</button>
        </form>
        <p>Do you have an account? Lgin</p>
      </div>
    </div>
  );
};

export default Register;
