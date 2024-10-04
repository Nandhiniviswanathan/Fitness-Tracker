// src/pages/FoodHabitsPage.js
import React, { useState } from 'react';
import { Container, Typography, Paper, Grid, TextField, Button, List, ListItem, ListItemText, Divider } from '@mui/material';

function FoodHabitsPage() {
  const [foodItem, setFoodItem] = useState('');
  const [foodList, setFoodList] = useState([]);

  const handleAddFood = () => {
    if (foodItem) {
      setFoodList([...foodList, foodItem]);
      setFoodItem('');
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Food Habits for Fitness
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Meal Planning
            </Typography>
            <Typography variant="body1" paragraph>
              Proper meal planning is essential for achieving fitness goals. Ensure that you include a balance of protein, carbohydrates, and healthy fats in your diet. Aim for lean proteins like chicken or tofu, whole grains, and plenty of fruits and vegetables.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Nutrition Tips
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Stay Hydrated" secondary="Drink at least 8 glasses of water daily." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Balanced Diet" secondary="Include a variety of foods to get all essential nutrients." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Limit Sugar" secondary="Reduce intake of sugary snacks and drinks." />
              </ListItem>
            </List>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Food Intake Tracker
            </Typography>
            <TextField
              margin="normal"
              fullWidth
              label="Add Food Item"
              variant="outlined"
              value={foodItem}
              onChange={(e) => setFoodItem(e.target.value)}
            />
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleAddFood}
              sx={{ marginTop: 2 }}
            >
              Add Food
            </Button>
            <Divider sx={{ margin: '20px 0' }} />
            <List>
              {foodList.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default FoodHabitsPage;
