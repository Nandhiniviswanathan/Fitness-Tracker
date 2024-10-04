import React from 'react';
import { Container, Typography, List, ListItem, Grid, CardMedia, Card } from '@mui/material';
import img4 from '../img/img4.jpg';

function WaterPage() {
  return (
    <Container sx={{ backgroundColor: 'white', padding: 3, color: '#555', borderRadius: '8px' }}>
      <Grid container spacing={2} alignItems="center">
        {/* Left side - Content */}
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            Tips for Healthy Detox Water
          </Typography>
          
          <Typography variant="body1" gutterBottom>
            Staying hydrated is crucial for overall health. Here are some tips for making detox water that can enhance your hydration routine:
          </Typography>
          
          <List>
            <ListItem>
              <Typography variant="body1">
                1. Use fresh fruits and herbs to infuse flavor and nutrients into your water. Citrus fruits, berries, and mint are excellent choices.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">
                2. Consider adding cucumber slices for a refreshing taste and hydration boost.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">
                3. Experiment with spices like ginger or turmeric for added health benefits and flavor.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">
                4. Allow your water to sit in the refrigerator for a few hours to let the flavors meld together.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">
                5. Keep your detox water interesting by changing the combinations of ingredients regularly.
              </Typography>
            </ListItem>
          </List>

          <Typography variant="body1" gutterBottom>
            Remember to drink plenty of water throughout the day, and enjoy your flavorful creations!
          </Typography>
        </Grid>

        {/* Right side - Image */}
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 2, boxShadow: 5, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
            <CardMedia
              component="img"
              sx={{ height: 400, objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
              image={img4}
              alt="Detox Water"
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default WaterPage;
