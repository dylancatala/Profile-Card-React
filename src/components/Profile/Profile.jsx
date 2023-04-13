import React from 'react';
import './Profile.css';
import Logo from '../../images/profile-pic.webp';

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='image-container'>
        <img src={Logo} alt="Me" />
      </div>
      <div className='profile-content'>
        <h1 className='profile-name'>Javier Smith</h1>
        <p className='profile-job'>Frontend Developer</p>
        <p className='profile-website'>javiersmith.website</p>
      </div>
    </div>
  );
};

export default Profile;