import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Kaziro Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/18360087/pexels-photo-18360087/free-photo-of-bird-animal-grass-blur.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <span>Bar</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
