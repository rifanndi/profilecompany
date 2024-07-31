import React from "react";

//import Lizard2 from "./components/konten1";
//import Lizard1 from "./components/konten2";
//import Lizard3 from "./components/konten3";
import card1 from "../img/card1.png";
import card2 from "../img/card2.png";
import card3 from "../img/card3.png";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const cardData = [
  {
    image: card1,
    title: "Why Coconut Charcoal Briquette?",
    description:
      "Located on the equatorial line, Indonesia is blessed with abundant resources for coconut products.",
    link: "/lizard1",
  },
  {
    image: card3,
    title: " Indonesia Coconut Charcoal Briquette",
    description:
      " Located on the equatorial line, Indonesia is blessed with abundant resources for coconut products",
    link: "/lizard2",
  },
  {
    image: card2,
    title: "Lump Charcoal",
    description:
      "Charcoal is made by burning wood in the absence of oxygen, and lump charcoal is the product of that. Since lump is charcoal in its most natural form, it s no wonder purists will almost always prefer it.",
    link: "/lizard3",
  },
];

const MediaCard = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        backgroundImage: `url(${card1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        padding: "5%",
        display: "flex",
        justifyContent: "center",
        boxShadow: "9 400px 120px rgba(0, 0, 0, 0.0)",
        filter: "brightness(0.8)",
      }}
    >
      <Grid container spacing={3}>
        <div>
          <div style={{ marginLeft: "10%" }}>
            <br />
            <h6 style={{ fontSize: "19px", color: "#d7a423" }}>
              <p style={{ fontSize: "16px", color: "#d7a423" }}>News Update</p>
              NOW ENJOY A <br /> WONDERFUL NEWS UPDATE
            </h6>
          </div>
        </div>
        {cardData.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card
              sx={{
                maxWidth: 250,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                margin: "auto",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={card.image}
                alt={card.title}
                sx={{
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
                  filter: "brightness(0.8)",
                }}
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={Link} to={card.link}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MediaCard;
