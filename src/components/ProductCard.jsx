import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ProductCard({ name, img }) {
  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        maxWidth: { xs: "100%", sm: 280, md: 300 }, // full width on very small screens
        margin: "auto",
        flexGrow: 1, // allows card to expand in grid
      }}
    >
      <CardMedia
        component="img"
        image={img}
        alt={name}
        sx={{
          height: { xs: 150, sm: 180, md: 200 },
          objectFit: "contain",
          backgroundColor: "#f9f9f9",
          p: { xs: 1, sm: 2 },
        }}
      />
      <CardContent sx={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography
          variant="h6"
          align="center"
          sx={{ fontWeight: "bold", fontSize: { xs: "0.9rem", sm: "1rem" } }}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
