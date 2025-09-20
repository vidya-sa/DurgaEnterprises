import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ProductCard from "../components/ProductCard";

import {
  image1,
  image2,
  image3,
  image6,
  image7,
  image8,
  image9,
  image10,
  ink1,
  ink2,
} from "../assets/images";

const productData = [
  { id: 1, name: "Sublimation Roll", img: image1 },
  { id: 2, name: "DTF Ink", img: ink1 },
  { id: 3, name: "Screen Printing Frame", img: image2 },
  { id: 4, name: "Screen Printing Frame", img: image3 },
  { id: 5, name: "Screen Printing Frame", img: image6 },
  { id: 6, name: "Screen Printing Frame", img: image7 },
  { id: 7, name: "DTF Ink", img: ink2 },
  { id: 8, name: "Screen Printing Frame", img: image8 },
  { id: 9, name: "Screen Printing Frame", img: image9 },
  { id: 10, name: "Screen Printing Frame", img: image10 },
];

export default function Products() {
  return (
    <Container sx={{ py: 5, paddingTop: '38px' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 4 }}
      >
        Our Products
      </Typography>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", // responsive columns
          gap: "1.5rem",
        }}
      >
        {productData.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </Container>
  );
}
