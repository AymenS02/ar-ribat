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
            <a href="#"><img src="/btn.png" alt="logo" /></a>
          </div>
          <div className="menu-toggle-btn">
            <div className="menu-toggle-label">
              <p>Menu</p>
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
              <img src="/logo.png" alt="menu media" />
            </div>
            <div className="menu-content-wrapper">
              <div className="menu-content-main">
                <div className="menu-col">
                  <div className="menu-link"><a href="#">Index</a></div>
                  <div className="menu-link"><a href="#">Portfolio</a></div>
                  <div className="menu-link"><a href="#">Studio</a></div>
                  <div className="menu-link"><a href="#">Journal</a></div>
                  <div className="menu-link"><a href="#">Connect</a></div>
                </div>

                <div className="menu-col">
                  <div className="menu-tag"><a href="#">Web Animations</a></div>
                  <div className="menu-tag"><a href="#">Interactive Media</a></div>
                  <div className="menu-tag"><a href="#">Motion Craft</a></div>
                </div>
              </div>
              <div className="menu-footer">
                <div className="menu-col">
                  <p>Toronto, Canada</p>
                </div>
                <div className="menu-col">
                  <p>+1 437 555 0199</p>
                  <p>hello@nullspace.studio</p>
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
