import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
    <Box sx={{background: 'linear-gradient(135deg, #4a90e2 0%, #50e3c2 100%)'}}>
      {/* Banner */}
      <Box
        sx={{
          minHeight: { xs: '60vh', md: '0vh' }, // responsive height
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textAlign: 'center',
          mt: { xs: 'calc(56px + 20px)', md: 'calc(64px + 20px)' }, // header offset
          py: { xs: 4, md: 6 },
          
        }}
      >
        <Container>
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
            Sri Durga Enterprises
          </Typography>
          <Typography variant="h5">
            Your One-Stop Solution for Sublimation, DTF, and Screen Printing Supplies
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Button variant="contained" color="primary" component={Link} to="/products">
              Explore Products
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Body */}
      <Box
  sx={{
    minHeight: { xs: 'auto', md: '30vh' },
    py: { xs: 5, md: 8 },
    display: 'flex',
    flexDirection: 'column',
    alignItems: { xs: 'center', md: 'flex-start' }, // center on mobile, left on desktop
    textAlign: { xs: 'center', md: 'left' },       // text center on mobile, left on desktop
  }}
>
  <Container maxWidth="lg">
    <Typography variant="h4" gutterBottom>
      About Us
    </Typography>
    <Typography variant="body1" paragraph>
  At Sri Durga Enterprises, we specialize in delivering premium printing solutions for businesses and individuals. 
  Our wide range of products includes high-quality sublimation rolls, DTF inks, DTF rolls, DTF films, powders, 
  and screen printing materials. Every product we offer is carefully sourced and tested to ensure consistent 
  performance, vibrant prints, and long-lasting results—helping you achieve excellence in all your printing projects.
</Typography>
  </Container>
</Box>

      </Box>
    </>
  );
}
