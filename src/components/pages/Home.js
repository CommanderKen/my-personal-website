import React from 'react';
import '../../App.css';
import './Home.css';

function Home() {
  return (
    <div className='background'>
      <div className='profile-container'>
        <div className='profile-card'>
          <img
            src="/images/profile.jpg"
            alt="Profile Picture"
            className='profile-picture'
          />
          <h1 className='profile-name'>Name Surname</h1>
          <p className='profile-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home;