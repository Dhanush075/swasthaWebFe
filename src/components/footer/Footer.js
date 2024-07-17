import React from "react";
import PhoneIcon from "@mui/icons-material/PhoneAndroidSharp";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import logoSrc from "../../assets/images/logo.png";
import "./footer.css";
import Cert_logo from '../../assets/images/certified_logo.png';

const map_embed_link =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8228100543993!2d77.57601617620043!3d12.919107283542536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1575b73b1a01%3A0xe6fabde09dedd19a!2s25%2C%205th%20Main%20Rd%2C%206th%20Block%2C%205th%20Block%2C%20Jayanagar%2C%20Bengaluru%2C%20Karnataka%20560041%2C%20India!5e0!3m2!1sen!2sus!4v1704085374809!5m2!1sen!2sus";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer">
      <div className="footer-column">
        <div className="logo-container">
          <img src={logoSrc} alt="Logo" />
        </div>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            <PhoneIcon />
             +91 6360687153 <br />
            &emsp;&nbsp;&nbsp;+91 8747893662
          </p>
          <p>
            <EmailIcon />
            &nbsp;info@atmaparikshan.com
          </p>
          <p>
            25, 5th Main Rd, <br /> 5th Block, Jayanagar, <br /> Bengaluru - 560041,<br />
            Karnataka, India
          </p>
        </div>
      </div>
      <div className="footer-column">
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/faq" onClick={scrollToTop}>
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/terms" onClick={scrollToTop}>
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link to="/termsofuse" onClick={scrollToTop}>
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="/rules" onClick={scrollToTop}>
                Rules and Regulations
              </Link>
            </li>
            <li>
              <Link to="/privacy" onClick={scrollToTop}>
                Privacy
              </Link>
            </li>
          </ul>
        </div>
        <div><img src={Cert_logo} alt="Certlogo" /></div>
      </div>
      <div className="footer-column">
        <div className="map-container">
          <iframe
            className="map"
            src={map_embed_link}
            title="Google Maps"
          ></iframe>
        </div>
      </div>

      <hr></hr>

      <div className="footer-below">
        <div className="copyright">
          <p>
            {" "}
            &copy; {new Date().getFullYear()} Swastha Technovations Private
            Limited. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
