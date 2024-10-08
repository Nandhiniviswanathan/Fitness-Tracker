import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/healthy-habits">Healthy Habits</Link></li>
        <li><Link to="/fitness-tracking">Track Fitness</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/food-habits">Food Habits</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
