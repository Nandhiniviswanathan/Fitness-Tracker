import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, Paper, Box } from '@mui/material'; 
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

function FitnessPage() {
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(true); // Added loading state
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    // Fetch email from local storage
    const email = localStorage.getItem('userEmail');
    if (email) {
      setUserEmail(email);
    }
    setLoading(false); // Stop loading when email check is complete
  }, []);

  useEffect(() => {
    if (!loading && !userEmail) {
      alert('User email not found. Please log in.');
    }
  }, [loading, userEmail]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userEmail) {
      alert('User email is missing.');
      return;
    }
    try {
      await axios.post('http://localhost:5000/api/fitness/add', {
        email: userEmail,
        activity,
        duration,
        date,
      });
      alert('Fitness record added!');
      setActivity('');
      setDuration('');
      setCalories('');
      setDate(new Date().toISOString().split('T')[0]);
    } catch (error) {
      console.error('Fitness record error:', error.response ? error.response.data : error.message);
      alert('Failed to add fitness record!');
    }
  };

  const handleCalculateCalories = () => {
    const activityRates = {
      running: 10,
      cycling: 8,
      swimming: 7,
      walking: 5,
    };
    const rate = activityRates[activity.toLowerCase()] || 0;
    const calculatedCalories = duration * rate;
    setCalories(calculatedCalories);
  };

  if (loading) {
    return <Typography>Loading...</Typography>; // Add loading indicator
  }

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
          backgroundColor: '#f9f9f9'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <FitnessCenterIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
          <Typography variant="h5">Track Your Fitness Data</Typography>
        </Box>
        {userEmail && (
          <Typography variant="h6" gutterBottom>
            Welcome, {userEmail.split('@')[0]}!
          </Typography>
        )}
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Activity"
            type="text"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            variant="outlined"
            sx={{ backgroundColor: '#fff', borderRadius: 1 }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Duration (minutes)"
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            variant="outlined"
            sx={{ backgroundColor: '#fff', borderRadius: 1 }}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Calories Burned"
            type="number"
            value={calories}
            InputProps={{ readOnly: true }}
            variant="outlined"
            sx={{ backgroundColor: '#fff', borderRadius: 1 }}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            variant="outlined"
            sx={{ backgroundColor: '#fff', borderRadius: 1 }}
          />
          <Button
            type="button"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, mb: 2, padding: '10px', backgroundColor: '#1976d2', '&:hover': { backgroundColor: '#1565c0' } }}
            onClick={handleCalculateCalories}
          >
            Calculate Calories
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ padding: '10px', backgroundColor: '#1976d2', '&:hover': { backgroundColor: '#1565c0' } }}
          >
            Add Fitness Data
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default FitnessPage;
