import React from "react";
import "./Footer.css";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Waller Construction</h4>
            <p>Glass StoreFront Systems</p>
            <p>Impact</p>
            <p>Non-Impact</p>
          </div>
          <div className="col">
            <h4>Harpo LLC</h4>
            <p>Glass StoreFront Systems</p>
            <p>Impact</p>
            <p>Non-Impact</p>
          </div>
          <div className="col">
            <h4>True Builders</h4>
            <p>Glass StoreFront Systems</p>
            <p>Impact</p>
            <p>Non-Impact</p>
          </div>
          <div className="col">
            <h4>Contact Us</h4>
            <p>Contact@VisionGlass.com</p>
            <p>PHONE: 863.663.8765</p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <button className="btn btn-primary">REQUEST A QUOTE</button>
          </div>
        </div>
        <div className="partners">
          <h4>Our Partners</h4>
          <div className="partner-logos">
            <img src="path/to/partner-logo-1.png" alt="Partner Logo 1" />
            <img src="path/to/partner-logo-2.png" alt="Partner Logo 2" />
            <img src="path/to/partner-logo-3.png" alt="Partner Logo 3" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
