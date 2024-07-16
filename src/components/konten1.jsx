import React from "react";
import { Typography } from "@mui/material";
import Nafbar2 from "./Nafbar2";

const Lizard2 = () => {
  const styles = {
    container: {
      width: "100vh",
      maxWidth: "800px",
      margin: "80px auto 0", // Menambahkan margin atas untuk memisahkan dari navbar
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.6",
      color: "#333",
    },
    title: {
      textAlign: "center",
      marginBottom: "20px",
      fontSize: "2em",
    },
    subtitle: {
      marginTop: "20px",
      marginBottom: "10px",
      fontSize: "1.5em",
    },
    paragraph: {
      marginBottom: "15px",
    },
  };

  return (
    <div>
      <Nafbar2 />
      <div style={styles.container}>
        <Typography variant="h4" style={styles.heading} gutterBottom>
          Indonesia Coconut Charcoal Briquette
        </Typography>
        <Typography variant="body1" style={styles.paragraph} paragraph>
          Located on the equatorial line, Indonesia is blessed with abundant
          resources for coconut products. For years, Indonesia has been the
          world’s largest exporter of coconut products, including shell
          charcoal/briquettes. According to the Indonesian Central Bureau of
          Statistics, the Indonesian export of wood charcoal from coconut shells
          (HS 4402) increased by 4.69% from USD 145.1 million in 2019 to USD
          151.9 million in 2020. As of today, they have been exported to Turkey,
          Brazil, and several countries in Latin America and the Middle East.
        </Typography>
        <Typography variant="body1" style={styles.paragraph} paragraph>
          Coconut charcoal briquettes are an eco-friendly alternative to
          traditional charcoal, made from the waste of coconut shells. This not
          only helps in reducing waste but also provides a renewable source of
          energy. The process involves heating the coconut shells in a
          low-oxygen environment to remove moisture and volatile substances,
          resulting in a high-density, clean-burning fuel.
        </Typography>
        <Typography variant="body1" style={styles.paragraph} paragraph>
          One of the key advantages of coconut charcoal briquettes is their
          efficiency. They burn hotter and longer than traditional charcoal,
          making them ideal for both domestic and industrial use. Their
          consistent size and shape also ensure even burning, providing a stable
          and reliable heat source.
        </Typography>
        <Typography variant="body1" style={styles.paragraph} paragraph>
          In addition to their superior burning properties, coconut charcoal
          briquettes produce very little smoke and ash. This makes them an
          excellent choice for indoor grilling and barbecuing, as well as for
          use in areas with strict emission regulations. Their smokeless nature
          also means that they do not impart any unwanted flavors to the food,
          ensuring a clean and natural taste.
        </Typography>
        <Typography variant="body1" style={styles.paragraph} paragraph>
          The production of coconut charcoal briquettes also supports local
          economies, particularly in rural areas where coconut farming is a
          major livelihood. By creating a market for coconut shell waste, it
          provides an additional income stream for farmers and helps to reduce
          environmental pollution.
        </Typography>
        <Typography variant="body1" style={styles.paragraph} paragraph>
          Furthermore, the export of coconut charcoal briquettes from Indonesia
          has been growing steadily. With increasing global awareness of
          environmental sustainability, more countries are seeking eco-friendly
          fuel alternatives. Indonesia, with its vast coconut plantations and
          advanced production techniques, is well-positioned to meet this
          growing demand.
        </Typography>
        <Typography variant="body1" style={styles.paragraph} paragraph>
          In conclusion, Indonesia's coconut charcoal briquettes represent a
          perfect blend of sustainability, efficiency, and economic benefit.
          They offer a renewable and cleaner-burning alternative to traditional
          charcoal, support local economies, and help reduce environmental
          pollution. As global demand for sustainable energy sources continues
          to rise, Indonesia's coconut charcoal briquette industry is set to
          play a crucial role in the future of eco-friendly fuel.
        </Typography>
      </div>
    </div>
  );
};

export default Lizard2;
