import React from 'react';

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user..." />
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/18360087/pexels-photo-18360087/free-photo-of-bird-animal-grass-blur.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <div className="userChatInfo">
          <span>Meshi</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
