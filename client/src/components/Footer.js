import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Grid, Box } from '@mui/material';

function Footer() {
  return (
    <footer style={{ padding: '0.5rem', backgroundColor: '#f1f1f1', borderTop: '1px solid #ddd' }}>
      <Container>
        <Grid container justifyContent="center">
          <Grid item>
            <Typography variant="body2" align="center" gutterBottom style={{ fontSize: '0.875rem' }}>
              Contact us to get daily information to stay fit.
            </Typography>
            <Box textAlign="center">
              <Link to="/contact-us" style={{ textDecoration: 'none', color: '#1976d2' }}>
                <Typography variant="body2" style={{ fontSize: '0.875rem' }}>
                  Contact us
                </Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
