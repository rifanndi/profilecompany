// src/App.jsx
import {} from "react";
import ButtonLink from "./components/ButtonLink.jsx";

function Catalog() {
  return (
    <div style={{ textAlign: "center", padding: "50px", height: "100vh" }}>
      <h1>Welcome to Abadi Charcoal Resources</h1>
      <p>Access our catalogs below:</p>

      <ButtonLink
        label="View Abadi Charcoal Catalog (English)"
        link="/pdfs/Abadi_Charcoal_Catalog_English.pdf"
      />

      <ButtonLink
        label="View Abadi Charcoal Catalog (Arabic)"
        link="/pdfs/Abadi_Charcoal_Catalog_Arabic.pdf"
      />
    </div>
  );
}

export default Catalog;
