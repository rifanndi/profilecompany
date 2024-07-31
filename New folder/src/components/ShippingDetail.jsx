import uu from "../img/uu.jpg";

const ShippingDetail = () => {
  return (
    <>
      <div className="container" style={{ marginTop: "0" }}>
        <div className="row">
          <div className="col-md-6">
            <p className="main-title">
              <br />
              <b>Shipping Detail</b>
            </p>
            <p>
              <b>
                Production capacity: 250 MT / month
                <br />
                Payment Term: TT 50% Down Payment & 50% After Stuffing
                <br />
                Port of Loading: Jakarta
                <br />
                Minimum order quantity: 18 MT / 20″FCL
                <br />
                Shipping document: Bill of lading, commercial invoice, packing
                list, certificate of origin, report of analysis, self heating
                test.
              </b>
            </p>
            <a
              href="https://wa.me/message/DDFS53IPYRVRE1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn" style={{ cursor: "pointer" }}>
                Get a Quote Now!
              </button>
            </a>
          </div>

          <div className="col-md-6 text-center">
            <img
              alt="about"
              src={uu}
              className="img-fluid"
              style={{
                width: "100%",
                marginTop: "6%",
                marginBottom: "0",
                filter: "brightness(1)",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingDetail;
