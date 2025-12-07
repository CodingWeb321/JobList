import React from "react";

const Header = () => {
  return (
    <header className='main-header'>
      <div className='logo-container'>
        <span className='logo'>⚫ Jobseeker</span>
      </div>
      <nav className='main-nav'>
        <a href='#jobs' className='active-link'>
          Jobs
        </a>
        <a href='#companies'>Companies</a>
        <a href='#jobs'>About Us</a>
      </nav>
      <div className='header-actions'>
        <button>➕ Add New Job</button>
        <div className='user-avatar'>A </div>
      </div>
    </header>
  );
};

export default Header;
