import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { Typography, Menu, MenuItem, IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const HeaderWrapper = styled.header`
  background: linear-gradient(90deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
  padding: 0.5rem 1rem;
  color: ${theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;

  a {
    color: ${theme.colors.white};
    font-size: 0.9rem;
    text-decoration: none;
    font-weight: 500;
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    transition: background 0.3s, color 0.3s, box-shadow 0.3s;

    &:hover {
      background: ${theme.colors.secondary};
      color: ${theme.colors.primary};
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    }

    &.active {
      font-weight: bold;
      color: ${theme.colors.secondary};
      border-bottom: 2px solid ${theme.colors.secondary};
    }
  }
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Header = () => {
  const [userEmail, setUserEmail] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate(); // Replacing useHistory with useNavigate

  useEffect(() => {
    // Fetch email from localStorage
    const email = localStorage.getItem('userEmail');
    if (email) {
      setUserEmail(email.split('@')[0]); // Get part before '@'
    }
  }, []);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Clear user session (remove email from localStorage)
    localStorage.removeItem('userEmail');
    setUserEmail(''); // Clear the email from state
    handleMenuClose(); // Close the menu
    navigate('/login'); // Use navigate instead of history.push to redirect
  };

  return (
    <HeaderWrapper>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '1.2rem' }}>Fitness Tracker</h1>
      </div>

      <Nav>
      <Link to="/signup" activeClassName="active">Signup</Link>
      <Link to="/login" activeClassName="active">Login</Link>
        <Link to="/" exact activeClassName="active">Home</Link>
        <Link to="/fitness" activeClassName="active">Track Fitness</Link>
        <Link to="/food-habits" activeClassName="active">Food Habits</Link>
        <Link to="/contact-us" activeClassName="active">Contact Us</Link>
      </Nav>

      <UserSection>
        {userEmail && (
          <>
            <Typography variant="body1">Welcome, {userEmail}!</Typography>
            <IconButton
              onClick={handleMenuClick}
              sx={{ color: theme.colors.white }}
            >
              <PersonIcon fontSize="large" />
            </IconButton>
            {/* Menu for Logout */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </>
        )}
        {!userEmail && (
          <Link to="/signup" activeClassName="active">
            <PersonIcon style={{ color: theme.colors.white, fontSize: '2rem' }} />
          </Link>
        )}
      </UserSection>
    </HeaderWrapper>
  );
};

export default Header;
