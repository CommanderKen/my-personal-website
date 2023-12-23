import React from 'react';
import { GoMail } from "react-icons/go";
import '../../App.css';
import './Contacts.css';

function Contacts() {
  return (
    <div className='background-contacts'>
      <div className='contacts-container'>
        <div className='contacts-card'>
          <h1 className='contacts-title'>I miei contatti:</h1>
          <div className='contacts-description'>
            <span><GoMail className='mail-icon' /></span>
            <a href="mailto:example@mail.com" className='link'>example@mail.com</a>
          </div>
          <div className='contacts-description'>
            <span>
              <img src="/images/github-mark-white.svg" alt="Github" className='github-icon' />
            </span>
            <a href="https://github.com/..." className='link'>github.com/...</a>
          </div>
          <div className='contacts-description'>
            <span>
              <img src="/images/linkedin.png" alt="Linkedin" className='linkedin-icon' />
            </span>
            <a href="https://www.linkedin.com/in/..." className='link'>linkedin.com/in/...</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts;