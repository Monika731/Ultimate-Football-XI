import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Menu</h2>
      <ul className="sidebar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create">Create Player</Link></li>
        <li><Link to="/gallery">Squad Gallery</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
