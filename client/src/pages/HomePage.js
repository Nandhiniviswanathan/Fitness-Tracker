import React from 'react';
import { Container, Typography, Paper, Box, Grid, Card, CardMedia, CardContent } from '@mui/material';
import img1 from '../img/img1.jpg';  // Adjust path if necessary
import img2 from '../img/img2.jpg';  // Adjust path if necessary
import './HomePage.css';  // Import the CSS file

function HomePage() {
  return (
    <div>
      <Container component="main" maxWidth="md" sx={{ mt: 4 }}>
        <Paper elevation={6} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '12px' }}>
          <Typography variant="h3" component="h1" sx={{ mb: 3, fontWeight: 'bold', textAlign: 'center', color: '#3f51b5' }}>
            Welcome to Fitness Tracker
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, textAlign: 'center', color: '#555' }}>
            Track your fitness journey and stay healthy with our easy-to-use app. Discover how to improve your lifestyle and reach your fitness goals.
          </Typography>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', color: '#3f51b5' }}>
            Healthy Lifestyle Tips:
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card sx={{ borderRadius: 2, boxShadow: 5, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <CardMedia
                  component="img"
                  sx={{ height: 300, objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
                  image={img1}
                  alt="Healthy Eating"
                />
                <CardContent>
                  <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
                    Eat a Balanced Diet
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Include plenty of vegetables, fruits, and whole grains in your diet for optimal health. A balanced diet provides essential nutrients and energy.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ borderRadius: 2, boxShadow: 5, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <CardMedia
                  component="img"
                  sx={{ height: 300, objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
                  image={img2}
                  alt="Regular Exercise"
                />
                <CardContent>
                  <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
                    Exercise Regularly
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Aim for at least 30 minutes of moderate exercise most days of the week. Regular exercise improves cardiovascular health, strength, and mood.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Box sx={{ mt: 4, width: '100%', textAlign: 'center' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: '#3f51b5' }}>
              Additional Tips:
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="body1" sx={{ mb: 1, color: '#555' }}>
                <ul>
                  <li>Stay hydrated and drink plenty of water.</li>
                  <li>Get adequate sleep to support your fitness goals.</li>
                  <li>Set realistic and achievable goals for continuous improvement.</li>
                </ul>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

export default HomePage;
