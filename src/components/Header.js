import React from 'react'

function Header() {
  return (
    <>
      <header>
        <div className="header-inner">
          <a href="#">
            <img src="./images/logo.png" alt="logo" className="logo" />
          </a>
          <div class="hamburger"></div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header