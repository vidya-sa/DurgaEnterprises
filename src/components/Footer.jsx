import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Marquee from 'react-fast-marquee';

const brands = [
  'Splashjet',
  'S-Race',
  'Sublinova InkTee',
  'Hot Subiet - Jet Cartridge',
  'Imperial Overseas',
  'Dignity International',
  'Hansol Roll',
  'Photokina - Screen Printing',
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#111',
        color: '#fff',
        mt: 4,
        py: 3,
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        {/* Brand Marquee */}
        <Box sx={{ mb: 2 }}>
          <Marquee gradient={false} speed={50} pauseOnHover>
            {brands.map((b, i) => (
              <Typography
                key={i}
                sx={{
                  mx: 4,
                  fontWeight: 600,
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  whiteSpace: 'nowrap',
                }}
              >
                {b}
              </Typography>
            ))}
          </Marquee>
        </Box>

        {/* Footer Text */}
        <Typography
          variant="body2"
          align="center"
          sx={{ opacity: 0.8, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
        >
          © {new Date().getFullYear()} Sri Durga Enterprises. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
