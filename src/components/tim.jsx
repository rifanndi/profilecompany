import React from "react";
import rifandi from "../img/rifandi.jpg";

function CompanyTeam() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2px",
          paddingBottom: "2px",
          boxSizing: "border-box",
          flexGrow: 1,
        }}
      >
        <div style={{ alignItems: "center" }}>
          <div style={{ alignItems: "center", textAlign: "center" }}>
            <h1 className="main-title">Our Teams</h1>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "100px",
              flexWrap: "wrap",
            }}
          >
            <div className="team-member">
              <h2 style={{ textAlign: "center" }}>Rifandi Annas S</h2>
              <p style={{ textAlign: "center" }}>Chief Executive Officer</p>
              <img
                src={rifandi}
                alt="CEO"
                style={{ width: "300px", height: "400px", borderRadius: "2%" }}
              />
              <p>
                <b>WE HIGHLY PROFESSIONAL</b>
                <br />
                “A satisfied customer is
                <br />
                the best business strategy
                <br />
                of all.” — Michael LeBoeuf
              </p>
            </div>
            <div className="team-member">
              <h2 style={{ textAlign: "center" }}>Rifandi Annas S</h2>
              <p style={{ textAlign: "center" }}>Chief Executive Officer</p>
              <img
                src={rifandi}
                alt="CEO"
                style={{ width: "300px", height: "400px", borderRadius: "2%" }}
              />
              <p>
                <b>WE HIGHLY PROFESSIONAL</b>
                <br />
                “A satisfied customer is
                <br />
                the best business strategy
                <br />
                of all.” — Michael LeBoeuf
              </p>
            </div>
            <div className="team-member">
              <h2 style={{ textAlign: "center" }}>Rifandi Annas S</h2>
              <p style={{ textAlign: "center" }}>Chief Executive Officer</p>
              <img
                src={rifandi}
                alt="CEO"
                style={{ width: "300px", height: "400px", borderRadius: "2%" }}
              />
              <p>
                <b>WE HIGHLY PROFESSIONAL</b>
                <br />
                “A satisfied customer is
                <br />
                the best business strategy
                <br />
                of all.” — Michael LeBoeuf
              </p>
            </div>
          </div>
        </div>
        <div
          className=""
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            width: "100%",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <div
            className="map-container"
            style={{
              display: "flex",
              width: "100%",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <div
              className="location-info"
              style={{
                flex: 1,
                height: "100%",
                gap: "10px",
              }}
            >
              <h2 className="main-title">OUR FACTORY</h2>
              <iframe
                title="Perusahaan Map"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0, minHeight: "300px" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.910323208167!2d110.3951549!3d-7.692773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5f7c04ed2f67%3A0xdc473e227a91ce1a!2sPabrik%20lor!5e0!3m2!1sid!2sid!4v1717659405989!5m2!1sid!2sid"
              ></iframe>
            </div>
            <div
              className="info-container"
              style={{
                flex: 1,
                display: "flex",

                justifyContent: "space-between",
                textAlign: "left",
                marginTop: "13%",
              }}
            >
              <div className="address-info" style={{ flex: 1 }}>
                <h3>Our Address</h3>
                <p>
                  894W+V3R, Wonosobo, Sardonoharjo, <br /> Kec. Ngaglik,
                  Kabupaten Sleman, <br /> Daerah Istimewa Yogyakarta
                </p>
                <h3>Working Hours</h3>
                <p>
                  Monday - Friday: 9:00 AM - 5:00 PM
                  <br />
                  Saturday: 10:00 AM - 4:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
              <div className="contact-info" style={{ flex: 1 }}>
                <h3>Contact Us</h3>
                <p>
                  Phone: (123) 456-7890
                  <br />
                  Email: info@company.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyTeam;
