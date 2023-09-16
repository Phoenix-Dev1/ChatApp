import React from 'react';
import AddAvater from '../img/addAvatar.png';

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
          <input style={{ display: 'none' }} type="file" name="" id="file" />
          <label htmlFor="file">
            <img src={AddAvater} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
