import React from 'react';
import { Container, Typography, List, ListItem, Grid, CardMedia, Card } from '@mui/material';
import img4 from '../img/img4.jpg'; // You can change this image if needed

function OatsBreakfastPage() {
  return (
    <Container sx={{ backgroundColor: 'white', padding: 3, color: '#555', borderRadius: '8px' }}>
      <Grid container spacing={2} alignItems="center">
        {/* Left side - Content */}
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            Oats for a Healthy Breakfast
          </Typography>
          
          <Typography variant="body1" gutterBottom>
            Starting your day with oats is a great way to fuel your body. Oats are rich in fiber and nutrients that provide long-lasting energy and promote heart health. Here are a few benefits of adding oats to your breakfast:
          </Typography>
          
          <List>
            <ListItem>
              <Typography variant="body1">
                1. Fiber-rich: Oats are high in dietary fiber, which supports digestion and keeps you feeling full for longer.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">
                2. Heart Health: Oats contain beta-glucan, which helps lower cholesterol levels, promoting heart health.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">
                3. Versatile: You can add fruits, nuts, seeds, and even spices like cinnamon to make your oatmeal more flavorful and nutritious.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">
                4. Lowers Blood Sugar: Oats have been shown to help lower blood sugar levels, making them great for people with diabetes.
              </Typography>
            </ListItem>
          </List>

          <Typography variant="body1" gutterBottom>
            Try experimenting with different toppings and flavors to make your oatmeal both tasty and nutritious!
          </Typography>
        </Grid>

        {/* Right side - Image */}
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 2, boxShadow: 5, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
            <CardMedia
              component="img"
              sx={{ height: 400, objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
              image={img4} // Change this to a relevant image if needed
              alt="Oats for Breakfast"
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default OatsBreakfastPage;
