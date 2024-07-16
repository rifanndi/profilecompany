import boxabadi from "../img/boxabadi.png";
//import ShippingDetail from "./ShippingDetail";

const Peking = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "0%",
          marginTop: "",
        }}
        className=""
      >
        <div>
          <div className="row">
            <div className="col-md-6 " style={{}}>
              <p className="main-title text-center  ">
                <br />
                <b style={{ marginLeft: "%" }}>Packaging Details</b>
              </p>
              <p className="main-p" style={{ marginLeft: "10%" }}>
                {" "}
                Inner box / Brand box: 1, 2, 5 kg, inner plastic + Carton/brand
                box, full color printing + Master box 10kg Master box only: 10
                kg, inner plastic, b/w printing or full color printing
              </p>
              <a
                href="https://wa.me/message/DDFS53IPYRVRE1"
                target="_blank" // Open link in a new tab
                rel="noopener noreferrer" // Security best practice for target="_blank" links
              >
                <button
                  className="btn"
                  style={{ cursor: "pointer", marginLeft: "10%" }}
                >
                  Get Now For Details!!
                </button>
              </a>
            </div>
            <div
              style={{ marginTop: "", marginBottom: "" }}
              className="col-md-6 "
            >
              <img
                alt="nuwbox"
                src={boxabadi}
                className=""
                style={{ width: "90%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Peking;
