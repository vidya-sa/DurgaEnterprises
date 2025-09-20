import { Box, Container, Typography } from '@mui/material';
import React from 'react';

export default function About() {
  return (
    <Box sx={{ width: '100%' }}>
      {/* Intro Section */}
      <Box
        sx={{
          py: { xs: 5, md: 8 },
          px: { xs: 2, md: 0 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            About Us
          </Typography>
          <Typography variant="body1" paragraph>
            Sri Durga Enterprises is a dynamic startup dedicated to providing high-quality printing and packaging solutions for businesses of all sizes. We specialize in sublimation rolls, DTF inks, DTF films, powders, and screen printing materials—ensuring premium quality and reliability for every project.
          </Typography>
          <Typography variant="body1" paragraph>
            Our mission is to empower creative businesses with the tools they need to succeed, offering products that combine innovation, durability, and cost-effectiveness. Whether you’re a small studio or an established printing company, we provide solutions tailored to your unique requirements.
          </Typography>
          <Typography variant="body1" paragraph>
            At Sri Durga Enterprises, we believe in building strong partnerships. We proudly collaborate with industry leaders and trusted suppliers to deliver consistent quality and service. Our partners include Partner 1, Partner 2, and Partner 3, helping us bring the best materials directly to your business.
          </Typography>
          <Typography variant="body1" paragraph>
            As a startup, we are committed to growth, sustainability, and innovation, ensuring that our customers always stay ahead in the fast-paced world of printing and packaging.
          </Typography>
        </Container>
      </Box>

      {/* Company Details + Products Section */}
      <Container sx={{ py: 5, px: { xs: 2, md: 0 } }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', mb: 4 }}
        >
          About Sri Durga Enterprises
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            alignItems: { xs: 'center', md: 'flex-start' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {/* Left: Company Details */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
              Company Details
            </Typography>
            <Typography variant="body1" paragraph>
              Manufacturer to Customer - No Middleman, Best Prices
            </Typography>
            <Typography variant="body1" paragraph>
              24/7 Service | Quick Response | Fast Delivery | Quality Guaranteed
            </Typography>
            <Typography variant="body1" paragraph>
              Email: sridurgaenterprises600@gmail.com <br />
              Phone: 9177839860
            </Typography>
            <Typography variant="body1" paragraph>
              Address: Padma Nilayam, Street No.4, Kushaiguda Bus Stop, ECIL, Hyderabad
            </Typography>
          </Box>

          {/* Right: Products */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
              Our Products
            </Typography>
            <Typography variant="body1" paragraph>
              • Sublimation Rolls & Papers (All sizes, GSM) <br />
              • Sublimation Inks <br />
              • DTF Inks <br />
              • DTF Rolls & Films <br />
              • DTF Powders <br />
              • Screen Printing Cloth & Frames <br />
              • Rubber Inks
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
