// src/components/ButtonLink.jsx

const ButtonLink = ({ label, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button
        style={{
          padding: "10px 20px",
          margin: "10px",
          backgroundColor: "#4CAF50", // You can change this color to match your theme
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {label}
      </button>
    </a>
  );
};

export default ButtonLink;
