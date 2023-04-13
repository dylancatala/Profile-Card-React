import React from 'react';
import './Footer.css';
import twitter from '../../images/Twitter Icon.png'
import facebook from '../../images/Facebook Icon.png'
import instagram from '../../images/Instagram Icon.png'
import github from '../../images/GitHub Icon.png'

const Footer = () => {
  return (
    <div className='footer-container'>
      <img src={twitter} alt="Twitter" />
      <img src={facebook} alt="Facebook" />
      <img src={instagram} alt="Instagram" />
      <img src={github} alt="Github" />
    </div>
  );
};

export default Footer;