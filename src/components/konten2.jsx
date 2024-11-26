import React from "react";
import { Helmet } from "react-helmet-async"; // Untuk metadata SEO
import Navbar2 from "./Nafbar2";

const Lizard1 = () => {
  return (
    <div>
      {/* Metadata untuk SEO */}
      <Helmet>
        <title>Why Coconut Charcoal Briquette? | Abadi Charcoal</title>
        <meta
          name="description"
          content="Discover why coconut charcoal briquettes are efficient, smokeless, sustainable, and cost-effective. Abadi Charcoal provides high-quality briquettes for grilling and cooking."
        />
        <meta
          name="keywords"
          content="Coconut charcoal briquette, smokeless charcoal, sustainable energy, Abadi Charcoal, efficient grilling fuel"
        />
        <link
          rel="canonical"
          href="https://www.abadicharcoal.com/abadicharcoal-Charcoal-Briquette"
        />
      </Helmet>

      <Navbar2 />

      <div style={styles.container}>
        <h1 style={styles.title}>Why Coconut Charcoal Briquette?</h1>
        <ol style={styles.list}>
          <li style={styles.listItem}>
            <strong>Efficiency:</strong> Coconut Charcoal Briquettes are more
            efficient than their loose counterparts. Since briquettes are
            compacted blocks, they are denser and more concentrated fuel sources
            compared to charcoal and firewood. They are hotter, slow-burning,
            and long-lasting, with 40% more efficiency than firewood due to
            their lower moisture content.
          </li>
          <li style={styles.listItem}>
            <strong>Smokeless and Ashless:</strong> Coconut Charcoal Briquettes
            generate no smoke and virtually no carbon deposits, sparing us from
            the smoky smell that sticks to clothes. They have 0 to 10% ash
            content, making them a clean option for grilling.
          </li>
          <li style={styles.listItem}>
            <strong>Accessibility:</strong> Made from biomass materials, Coconut
            Charcoal Briquettes are available anytime and anywhere. While making
            them at home requires tedious processes and heavy-duty equipment,
            commercially-sold briquettes are easily accessible.
          </li>
          <li style={styles.listItem}>
            <strong>Cost-Effective:</strong> Briquettes are cheaper to make as
            they use leftover biomass materials like plant and animal wastes.
            Consequently, they are sold at lower prices, making them an
            affordable option.
          </li>
          <li style={styles.listItem}>
            <strong>Sustainable:</strong> Made from organic and renewable
            materials, Coconut Charcoal Briquettes are a sustainable energy
            source. This innovation utilizes coconut tree by-products, offering
            a creative way to use waste and biomass.
          </li>
        </ol>
        <p style={styles.paragraph}>
          Coconut Charcoal Briquette is a remarkable innovation that addresses
          grilling and basic cooking problems. It is smokeless, virtually
          ashless, and efficient, making the cooking process hassle-free. Most
          importantly, it is environment-friendly.
        </p>
      </div>
    </div>
  );
};

// Gaya ditingkatkan untuk responsivitas dan aksesibilitas
const styles = {
  container: {
    width: "90%", // Menjadikan lebih responsif
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
    color: "#2c3e50",
  },
  list: {
    listStyleType: "decimal",
    paddingLeft: "20px",
  },
  listItem: {
    marginBottom: "15px",
    fontSize: "1.1em",
  },
  paragraph: {
    marginTop: "20px",
    textAlign: "justify",
  },
};

export default Lizard1;
