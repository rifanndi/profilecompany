import { Link, animateScroll as scroll } from "react-scroll";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Abadi Charcoal</p>
                <p className="footer-text">
                  Abadi Charcoal is a leading exporter specializing in premium
                  Coconut Charcoal Briquettes, BBQ Charcoal Briquettes, and
                  Sawdust Charcoal Briquettes.
                </p>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                  <li>
                    <Link to="#">info@abadicharcoal.com</Link>
                  </li>
                  <li>
                    <Link to="#"></Link>
                  </li>
                  <li>
                    <Link to="#">0852-1377-1747</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Social Media</p>
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.instagram.com/abadicharcoal/"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.facebook.com/abadicharcoal/"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://x.com/abadi_charcoal"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/company/abadi-charcoal/"
                    >
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.tiktok.com/@abadi.charcoal"
                    >
                      Tik-Tok
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/message/UMI6N67AOAQIJ1"
        target="_blank" // Open link in a new tab
        rel="noopener noreferrer" // Security best practice for target="_blank" links
      >
        <button to="" className="gotop">
          <FaWhatsapp style={{ width: "50px", height: "100%" }} />
        </button>
      </a>
    </footer>
  );
}

export default Footer;
