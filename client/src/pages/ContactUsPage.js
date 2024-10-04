import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Link, Paper, IconButton, Grid, Tooltip } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { styled } from '@mui/material/styles';

// Styled components for better visual appeal
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(5),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  transition: 'background-color 0.3s ease',
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const IconWrapper = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  transition: 'color 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
  fontWeight: 500,
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

function ContactUsPage() {
  return (
    <Container component="main" maxWidth="md">
      <StyledPaper elevation={3}>
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={8}>
            <List>
              <StyledListItem>
                <Tooltip title="Call Us" arrow>
                  <IconWrapper>
                    <PhoneIcon />
                  </IconWrapper>
                </Tooltip>
                <ListItemText primary="Phone Number" secondary="+91 9988776655" />
              </StyledListItem>
              <StyledListItem>
                <Tooltip title="Send an Email" arrow>
                  <IconWrapper>
                    <MailIcon />
                  </IconWrapper>
                </Tooltip>
                <ListItemText
                  primary="Email"
                  secondary={<StyledLink href="https://www.myfitnesspal.com/">dailyDairy@gmail.com</StyledLink>}
                />
              </StyledListItem>
              <StyledListItem>
                <Tooltip title="Connect on LinkedIn" arrow>
                  <IconWrapper>
                    <LinkedInIcon />
                  </IconWrapper>
                </Tooltip>
                <ListItemText
                  primary="LinkedIn"
                  secondary={<StyledLink href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">DailyDairy</StyledLink>}
                />
              </StyledListItem>
              <StyledListItem>
                <Tooltip title="Follow on Instagram" arrow>
                  <IconWrapper>
                    <InstagramIcon />
                  </IconWrapper>
                </Tooltip>
                <ListItemText
                  primary="Instagram"
                  secondary={<StyledLink href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">Daily_dairy</StyledLink>}
                />
              </StyledListItem> 
              <StyledListItem>
                <Tooltip title="Like us on Facebook" arrow>
                  <IconWrapper>
                    <FacebookIcon />
                  </IconWrapper>
                </Tooltip>
                <ListItemText
                  primary="Facebook"
                  secondary={<StyledLink href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">Daily_dairy</StyledLink>}
                />
              </StyledListItem>
            </List>
          </Grid>
        </Grid>
      </StyledPaper>
    </Container>
  );
}

export default ContactUsPage;
