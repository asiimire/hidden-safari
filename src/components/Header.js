import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* Logo and Navigation */}
      <div className="navbar">
        <h1 className="logo">HiddenSafari</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>

      {/* Tagline and Description */}
      <div className="tagline">
        <h2>Experience Nature</h2>
        <p>India's Largest Trekking Organization</p>
      </div>

      {/* Statistics */}
      <div className="stats">
        <div className="stat-item">
          <h3>21.5K+</h3>
          <p>Participants</p>
        </div>
        <div className="stat-item">
          <h3>2,750+</h3>
          <p>Volunteers</p>
        </div>
        <div className="stat-item">
          <h3>58+</h3>
          <p>Events</p>
        </div>
        <div className="stat-item">
          <h3>Team</h3>
          <p>Experts</p>
        </div>
      </div>
    </header>
  );
};

export default Header;