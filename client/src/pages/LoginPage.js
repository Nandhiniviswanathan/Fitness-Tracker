import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, Paper, Avatar, Box } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Perform the login request without assigning the response to a variable
      await axios.post('http://localhost:5000/api/auth/login', { email, password });
      
      // Save email to localStorage if login is successful
      localStorage.setItem('userEmail', email);

      alert('Login successful!');
      
      // Redirect to the fitness page or home page
      window.location.href = '/';  // Adjust the route as needed
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
      alert('Login failed!');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper 
        elevation={6} 
        sx={{
          padding: 4, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          borderRadius: 3,
          backgroundColor: '#f9f9f9',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            sx={{ backgroundColor: '#fff', borderRadius: 1 }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            sx={{ backgroundColor: '#fff', borderRadius: 1 }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              mt: 2,
              padding: '10px',
              backgroundColor: '#1976d2',
              '&:hover': { backgroundColor: '#1565c0' },
            }}
          >
            Login
          </Button>
        </form>
        <Box mt={3}>
          <Typography variant="body2" color="textSecondary" align="center">
            Don't have an account? <a href="/signup" style={{ color: '#1976d2', textDecoration: 'none' }}>Sign Up here</a>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default LoginPage;
// git init.
// git add .
// git commit -m "Add existing project files to Git"
// git push -u -f origin master