'use client';

import React, { useEffect } from 'react';
import './Header.css';
import runHeaderAnimations from '../animations/header';

const Header = () => {
  useEffect(() => {
    runHeaderAnimations();
  }, []);

  return (
    <>
      <nav>
        <div className="menu-bar">
          <div className="menu-logo">
            <a className='links' href="#"><img className="image" src="/btn.png" alt="logo" /></a>
          </div>
          <div className="menu-toggle-btn">
            <div className="menu-toggle-label">
              <p className='paragraph'>Menu</p>
            </div>
            <div className="menu-hamburger-icon">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className="menu-overlay">
          <div className="menu-overlay-content">
            <div className="menu-media-wrapper">
              <img className="image" src="/logo.png" alt="menu media" />
            </div>
            <div className="menu-content-wrapper">
              <div className="menu-content-main">
                <div className="menu-col">
                  <div className="menu-link"><a className='links' href="#">Index</a></div>
                  <div className="menu-link"><a className='links' href="#">Portfolio</a></div>
                  <div className="menu-link"><a className='links' href="#">Studio</a></div>
                  <div className="menu-link"><a className='links' href="#">Journal</a></div>
                  <div className="menu-link"><a className='links' href="#">Connect</a></div>
                </div>

                <div className="menu-col">
                  <div className="menu-tag"><a className='links' href="#">Web Animations</a></div>
                  <div className="menu-tag"><a className='links' href="#">Interactive Media</a></div>
                  <div className="menu-tag"><a className='links' href="#">Motion Craft</a></div>
                </div>
              </div>
              <div className="menu-footer">
                <div className="menu-col">
                  <p className='paragraph'>Toronto, Canada</p>
                </div>
                <div className="menu-col">
                  <p className='paragraph'>+1 437 555 0199</p>
                  <p className='paragraph'>hello@nullspace.studio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
