import React, { useState } from 'react';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
  };

  return (
    <section className='header-section'>
      <div className='container'>
        <div className='menu-section'>
          <div className='logo'>MY COMPANY.COM</div>
          <div className={`menu-main ${isActive ? 'active' : ''}`}>
            <div className='mobile-head'>
              <div className='logo'>MY COMPANY.COM</div>
              <button
                className='close'
                onClick={() => setIsActive(false)}
              ></button>
            </div>
            <ul>
              <li>
                <a href='#'>THE EDIT</a>
              </li>
              <li>
                <a href='#'>NEW ARRIVALS</a>
              </li>
              <li>
                <a href='#'>DESIGNERS</a>
              </li>
              <li>
                <a href='#'>CLOTHING</a>
              </li>
              <li>
                <a href='#'>SHOES</a>
              </li>
              <li>
                <a href='#'>BAGS</a>
              </li>
              <li>
                <a href='#'>ACCESSORIES</a>
              </li>
              <li>
                <a href='#'>JEWELRY</a>
              </li>
              <li>
                <a href='#'>BEAUTY</a>
              </li>
              <li>
                <a href='#'>HOME</a>
              </li>
            </ul>
          </div>
          <div className='menu-login'>login</div>
          <div className='hamburger-icon' onClick={handleClick}>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
