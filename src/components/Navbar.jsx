import React, { useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const gotop = document.querySelector(".gotop");
      const nav = document.querySelector(".navbar");
      if (window.screen.width < 768 && window.scrollY > 690) {
        gotop.classList.add("display");
        nav.classList.add("navopened");
      } else if (window.screen.width > 768 && window.scrollY > 220) {
        gotop.classList.add("display");
        nav.classList.add("navopened");
      } else {
        gotop.classList.remove("display");
        nav.classList.remove("navopened");
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openBar = () => {
    const bar = document.querySelector(".bar");
    bar.classList.toggle("opened");
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="row">
          <h1 className="logo">
            <Link spy={true} smooth={true} duration={1000} to="headerbg">
              <b> Abadi Charcoal</b>
            </Link>
          </h1>

          <ul className="bar">
            <li>
              <Link
                onClick={openBar}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                to="headerbg"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                to="about-scroll"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                About
              </Link>
            </li>
            <li>
              <a
                href="https://wa.me/message/UMI6N67AOAQIJ1"
                target="_blank" // Open link in a new tab
                rel="noopener noreferrer" // Security best practice for target="_blank" links
              >
                Contact us
              </a>
            </li>
          </ul>
          <div className="button" onClick={openBar}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
