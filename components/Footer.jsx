import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Eyes Green Store All rights reserverd</p>
      <p className="icons">
        <div className='button-social'>
          <a href="https://www.instagram.com/eyesgreen_tech" target='blank_'>
            <AiFillInstagram />
          </a>

          <a href="https://twitter.com/elvis__felix"  target='blank_'>
            <AiOutlineTwitter />
          </a>
        </div>
      </p>
    </div>
  )
}

export default Footer
