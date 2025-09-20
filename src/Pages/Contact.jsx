import React from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";

export default function Contact() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" align="center" sx={{ fontWeight: "bold", mb: 4 }}>
        Contact Us
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // stack on mobile, row on desktop
          gap: 4,
        }}
      >
        {/* Contact Form */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            Get in Touch
          </Typography>
          <form>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Subject"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Box>

        {/* Map Section */}
        <Box sx={{ flex: 1, height: { xs: 300, md: 500 } }}>
  <iframe
    title="Kushaiguda ECIL Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.624826008896!2d78.55772537493608!3d17.44930598801057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915e3f5b65a7%3A0x54f6f1b9b5f0b4e4!2sKushaiguda%2C%20ECIL%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0, borderRadius: "8px" }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</Box>

      </Box>
    </Container>
  );
}
