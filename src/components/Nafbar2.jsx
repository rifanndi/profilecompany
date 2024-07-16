import React from "react";
import { Link } from "react-router-dom";

function Navbar2() {
  const styles = {
    navbar: {
      transition: "background-color 0.4s",
      backgroundColor: "black", // Set background color to black
      position: "fixed",
      top: 0,
      fontFamily: "'Permanent Marker', cursive",
      width: "100%",
      padding: "0.5rem",
      zIndex: 2,
      backdropFilter: "blur(2px)",
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 20px",
    },
    row: {
      display: "flex",
      alignItems: "center",
    },
    left: {
      display: "flex",
      alignItems: "center",
    },
    logo: {
      fontSize: "24px",
      color: "#d7a423",
      textDecoration: "none",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <div style={styles.row}>
          <div style={styles.left}>
            <h3 style={styles.logo}>
              <Link to="/" style={styles.logo}>
                ← learn more
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
