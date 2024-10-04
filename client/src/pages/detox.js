import React from 'react';
import { Container, Typography, List, ListItem, Grid, CardMedia, Card } from '@mui/material';
import img4 from '../img/img4.jpg'; // You can change this image if needed

function DetoxWaterPage() {
  return (
    <Container sx={{ backgroundColor: 'white', padding: 3, color: '#555', borderRadius: '8px' }}>
      <Grid container spacing={2} alignItems="center">
        {/* Left side - Content */}
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            Healthy Detox Water Tips
          </Typography>
          
          <Typography variant="body1" gutterBottom>
            Detox water is a refreshing way to stay hydrated while aiding your body in flushing out toxins. Here are some tips to create delicious detox waters:
          </Typography>
          
          <List>
            <ListItem>
              <Typography variant="body1">
                1. Lemon and Cucumber: Refreshing and alkalizing, this combo helps in digestion and boosts hydration.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">
                2. Mint and Lime: A cooling blend that aids digestion and has a revitalizing scent.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">
                3. Berry Infusion: Berries like strawberries, blueberries, and raspberries are rich in antioxidants and add natural sweetness.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">
                4. Ginger and Turmeric: Both have anti-inflammatory properties and can support digestion and immunity.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">
                5. Watermelon and Basil: A hydrating and refreshing mix, perfect for hot days, with a hint of sweetness.
              </Typography>
            </ListItem>
          </List>

          <Typography variant="body1" gutterBottom>
            Remember to let your detox water sit for a few hours or overnight for maximum flavor and benefits. Enjoy a variety of combinations to keep your hydration exciting!
          </Typography>
        </Grid>

        {/* Right side - Image */}
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 2, boxShadow: 5, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
            <CardMedia
              component="img"
              sx={{ height: 400, objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
              image={img4} // Change this to a relevant image if needed
              alt="Detox Water"
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default DetoxWaterPage;
