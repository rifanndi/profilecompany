import React from "react";
import Detailbaru1 from "../img/Detailbaru1.png";
import Detailbaru2 from "../img/Detailbaru2.png";
import Detailbaru3 from "../img/Detailbaru3.png";
import Detailbaru4 from "../img/Detailbaru4.png";
import gleriiii from "../img/gleriiii.png";
import box5 from "../img/box5.png";
//import Peking from "./peking";
import ShippingDetail from "./ShippingDetail";
const Gallery = () => {
  const isLaptop = window.innerWidth >= 1024;

  return (
    <div className="gallery-container">
      <style>{`
        .gallery-container {
          text-align: center;
        }
        
        .title {
          margin-bottom: 20px;
          color: #d7a423;
        }
        
        .image-grid {
          display: flex;
          flex-wrap: wrap;
        }
        
        .image-grid img {
          width: ${isLaptop ? "300px" : "100%"};
          height: auto;
          margin: 5px;
        
          }; /* Tambah margin kiri hanya untuk layar laptop */
        }
        
        .laptop {
         
          flex-direction: row;
        }
        
        .mobile {
          flex-direction: column;
        }
      `}</style>
      <h1 className="title"> Our Specification</h1>
      <div className={isLaptop ? "image-grid laptop" : "image-grid mobile"}>
        <img src={Detailbaru1} alt="Gambar 1" />
        <img src={Detailbaru2} alt="Gambar 2" />
        <img src={Detailbaru3} alt="Gambar 3" />
        <img src={Detailbaru4} alt="Gambar 4" />
      </div>
      <img src={box5} style={{ width: "80%", marginTop: "10px" }} />
      <img src={gleriiii} alt="Gambar 4" style={{ width: "100%" }} />

      <ShippingDetail />
    </div>
  );
};

export default Gallery;
