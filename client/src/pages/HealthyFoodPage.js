import React from 'react';
import { Container, Typography, List, ListItem, Grid , CardMedia,Card } from '@mui/material';
import img4 from '../img/img4.jpg';
function HealthyFoodPage() {
  return (
    <Container sx={{ backgroundColor: 'white', padding: 3, color: '#555',borderRadius: '8px'}}>
      <Grid container spacing={2} alignItems="center">
        {/* Left side - Content */}
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            Healthy Food Tips
          </Typography>
          
          <Typography variant="body1" gutterBottom>
            Eating a variety of nutrient-dense foods, including fruits, vegetables, lean proteins, and whole grains, can help you stay healthy and strong. Here are some additional tips to enhance your diet:
          </Typography>
          
          <List>
            <ListItem>
              <Typography variant="body1">
                1. Include a wide range of colorful vegetables to get a variety of essential nutrients.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">
                2. Choose whole grains like quinoa, oats, and brown rice for sustained energy and fiber.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">
                3. Incorporate healthy fats, such as avocados, nuts, and olive oil, to support heart health.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">
                4. Stay hydrated by drinking water throughout the day, and limit sugary drinks.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">
                5. Opt for lean proteins, like chicken, fish, beans, and legumes, to build and repair body tissues.
              </Typography>
            </ListItem>
          </List>

          <Typography variant="body1" gutterBottom>
            Eating well is not just about restriction—it's about balance. Enjoy a variety of foods, and remember that moderation is key to long-term health.
          </Typography>
        </Grid>

        {/* Right side - Image */}
        <Grid item xs={12} md={4}>
        <Card sx={{ borderRadius: 2, boxShadow: 5, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <CardMedia
                  component="img"
                  sx={{ height: 400, objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
                  image={img4}
                  alt="Healthy Eating"
                />
                </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HealthyFoodPage;
