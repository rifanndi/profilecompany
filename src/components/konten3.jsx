import React from "react";
import Nafbar2 from "./Nafbar2";

const Lizard3 = () => {
  const styles = {
    container: {
      width: "100%",
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
        <h1 style={styles.title}>Lump Charcoal VS Charcoal Briquette</h1>
        <h2 style={styles.subtitle}>Lump Charcoal</h2>
        <p style={styles.paragraph}>
          Charcoal is made by burning wood in the absence of oxygen, and lump
          charcoal is the product of that. Since lump is charcoal in its most
          natural form, it’s no wonder purists will almost always prefer it.
          Beyond that, lump charcoal has a lot of attractive qualities; it
          lights faster, burns hotter, and leaves very little ash compared to
          briquettes. Lump charcoal is also more responsive to oxygen, making it
          easier to control the fire’s temperature if your grill has adjustable
          air vents.
        </p>
        <p style={styles.paragraph}>
          <strong>Pros:</strong> Lights quickly, burns hotter, little ash
          production, easier temperature adjustment, all natural
        </p>
        <p style={styles.paragraph}>
          <strong>Cons:</strong> Burns faster, more expensive, less consistent
          (bags can contain unusably small pieces of charcoal)
        </p>
        <h2 style={styles.subtitle}>Briquettes</h2>
        <p style={styles.paragraph}>
          Briquettes are kind of like the fast food of charcoal; they’re cheap,
          reliable, can be found on almost every corner, but you really don’t
          want to know what’s in them. Unlike the pure lump charcoal, briquettes
          are manufactured wood by-products compressed with additives that help
          them light and burn consistently. These additives do give off a
          chemical smell when lit, but allowing them to burn until covered with
          white ash before starting to cook should avoid any off-putting smells
          transferring to your food. Although they may not sound attractive,
          there are some good advantages to briquettes. They provide a more
          stable burn, maintaining a steady temperature for a longer period of
          time with less hand holding than lump charcoal.
        </p>
        <p style={styles.paragraph}>
          <strong>Pros:</strong> Burns longer, easier to maintain consistent
          temperature, cheaper
        </p>
        <p style={styles.paragraph}>
          <strong>Cons:</strong> Longer to light, chemical smell, large ash
          production
        </p>
      </div>
    </div>
  );
};

export default Lizard3;
