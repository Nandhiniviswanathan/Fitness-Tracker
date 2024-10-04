import React, { useState } from 'react';
import { Container, Typography, Paper, Grid, TextField, Card, CardMedia, CardContent, Button, Divider, Snackbar, Alert, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link for navigation
import styles from './FoodHabitsPage.module.css';

// Import images
import diet1 from '../img/diet1.jpeg';
import diet2 from '../img/diet2.jpeg';
import diet3 from '../img/diet3.jpeg';
import diet4 from '../img/diet4.jpeg';

function FoodHabitsPage() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [bmiStatus, setBmiStatus] = useState('');
  const [dietRecommendation, setDietRecommendation] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const calculateBMI = (event) => {
    event.preventDefault();
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));

      const status = bmiValue < 18.5 ? 'Underweight' :
                     bmiValue < 24.9 ? 'Normal weight' : 'Overweight';
      setBmiStatus(status);

      setDietRecommendation(getDietRecommendations(status));
    } else {
      setSnackbarOpen(true);
    }
  };

  const getDietRecommendations = (status) => {
    switch (status) {
      case 'Underweight':
        return 'Focus on calorie-dense foods like nuts, seeds, avocados, and lean proteins. Include more snacks and meals throughout the day to increase calorie intake.';
      case 'Normal weight':
        return 'Maintain a balanced diet with a mix of proteins, carbohydrates, and healthy fats. Ensure you eat a variety of foods including fruits, vegetables, whole grains, and lean proteins.';
      case 'Overweight':
        return 'Opt for nutrient-dense foods with fewer calories. Include plenty of vegetables, lean proteins, and whole grains. Avoid sugary snacks and high-fat foods.';
      default:
        return '';
    }
  };

  return (
    <Container component="main" maxWidth="lg" className={styles.container}>
      <Paper elevation={8} className={styles.paper}>
        <Typography variant="h3" className={styles.header} align="center" gutterBottom>
          Food Habits for Fitness
        </Typography>
        
        <Grid container spacing={4} alignItems="flex-start">
          {/* Text and Tips Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" className={styles.subHeader} gutterBottom>
              Meal Planning
            </Typography>
            <Typography variant="body1" paragraph className={styles.text}>
              Proper meal planning is essential for achieving fitness goals. Ensure that you include a balance of protein, carbohydrates, and healthy fats in your diet. Aim for lean proteins like chicken or tofu, whole grains, and plenty of fruits and vegetables.
            </Typography>
            <Typography variant="h5" className={styles.subHeader} gutterBottom>
              Nutrition Tips
            </Typography>
            <ul className={styles.nutritionList}>
              <li>Stay Hydrated: Drink at least 8 glasses of water daily.</li>
              <li>Balanced Diet: Include a variety of foods to get all essential nutrients.</li>
              <li>Limit Sugar: Reduce intake of sugary snacks and drinks.</li>
            </ul>
          </Grid>
          
          {/* Height, Weight, and BMI Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" className={styles.subHeader} gutterBottom>
              Calculate Your BMI
            </Typography>
            <form onSubmit={calculateBMI}>
              <TextField
                margin="normal"
                fullWidth
                label="Height (cm)"
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className={styles.textField}
                variant="outlined"
              />
              <TextField
                margin="normal"
                fullWidth
                label="Weight (kg)"
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className={styles.textField}
                variant="outlined"
              />
              <Tooltip title="Click to calculate your BMI based on height and weight" arrow>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={styles.calculateButton}
                >
                  Calculate BMI
                </Button>
              </Tooltip>
            </form>
            <Divider className={styles.divider} />
            {bmi && (
              <>
                <Typography variant="h6" align="center" className={styles.bmiResult}>
                  Your BMI: {bmi} ({bmiStatus})
                </Typography>
                <Typography variant="h6" align="center" className={styles.dietRecommendation}>
                  Dietary Recommendations: {dietRecommendation}
                </Typography>
              </>
            )}
          </Grid>

          {/* Images Section */}
          <Grid item xs={12}>
            <Typography variant="h5" className={styles.subHeader} gutterBottom align="center">
              Healthy Eating Ideas
            </Typography>
            <Grid container spacing={4} className={styles.imageSection} justifyContent="center">
              <Grid item xs={12} sm={6} md={3}>
                <Card className={styles.imageCard}>
                  <CardMedia
                    component="img"
                    className={styles.cardMedia}
                    image={diet1}
                    alt="Healthy Food"
                  />
                  <CardContent>
                    <Typography variant="h6" align="center" className={styles.cardTitle}>
                      Healthy Food
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                      A balanced diet includes a variety of fruits, vegetables, proteins and whole grains to be strong and healthy.
                    </Typography>
                    <center>
                    <Button
                      component={Link}
                      to="/healthy-food"
                      variant="contained"
                      color="primary"
                      className={styles.learnMoreButton}
                      sx={{ marginTop: 2, padding: '10px 20px', fontSize: '16px' }}
                    >
                      More
                    </Button>
                    </center>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card className={styles.imageCard}>
                  <CardMedia
                    component="img"
                    className={styles.cardMedia}
                    image={diet2}
                    alt="Oats for Breakfast"
                  />
                  <CardContent>
                    <Typography variant="h6" align="center" className={styles.cardTitle}>
                      Oats for Breakfast
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                      Start your day with a hearty bowl of oats. Packed with fiber and nutrients, oats provide lasting energy and support heart health.
                    </Typography>
                    <center>
                    <Button
                    component={Link}
                    to="/oats-breakfasts"  // Ensure the route matches the one in App.js
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: 2, padding: '10px 20px', fontSize: '16px' }}  // Styling for visibility
                    >
                    More
                    </Button>
                    </center>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card className={styles.imageCard}>
                  <CardMedia
                    component="img"
                    className={styles.cardMedia}
                    image={diet3}
                    alt="Detox"
                  />
                  <CardContent>
                    <Typography variant="h6" align="center" className={styles.cardTitle}>
                      Detox
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                      Boost your digestion and energy with detoxifying drinks like green smoothies or herbal teas to cleanse your body.
                    </Typography>
                    <center>
                    <Button
                      component={Link}
                      to="/detox"
                      variant="contained"
                      color="primary"
                      className={styles.learnMoreButton}
                      sx={{ marginTop: 2, padding: '10px 20px', fontSize: '16px' }}
                    >
                      More
                    </Button>
                    </center>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card className={styles.imageCard}>
                  <CardMedia
                    component="img"
                    className={styles.cardMedia}
                    image={diet4}
                    alt="Glass of Water"
                  />
                  <CardContent>
                    <Typography variant="h6" align="center" className={styles.cardTitle}>
                      Glass of Water
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                      Stay hydrated by drinking plenty of water throughout the day. It helps with digestion, energy levels, and overall wellness.
                    </Typography>
                    <center>
                    <Button
                      component={Link}
                      to="/water"
                      variant="contained"
                      color="primary"
                      className={styles.learnMoreButton}
                      sx={{ marginTop: 2, padding: '10px 20px', fontSize: '16px' }}
                    >
                      More
                    </Button>
                    </center>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="warning">
          Please enter both height and weight
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default FoodHabitsPage;
