import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import logo from "../assets/images/logo.png";
import "./navbar.css";

const Navbarmenu = () => {
  const [isMenuOpen, setisMenu] = useState(false);

  const toggleMenu = useCallback(() => {
    setisMenu((prevState) => !prevState);
  }, [setisMenu]);

  useEffect(() => {
    const menuIcons = document.querySelector(".menu-icons");
    const nav = document.querySelector("nav");

    const handleMenuClick = () => {
      toggleMenu();
      nav.classList.toggle("active");
    };

    menuIcons.addEventListener("click", handleMenuClick);

    return () => {
      menuIcons.removeEventListener("click", handleMenuClick);
    };
  }, [toggleMenu]);

  const boxClass = ["main-menu", "menu-right", "menuq1"];
  if (isMenuOpen) {
    boxClass.push("menuq2");
  }

  return (
    <div>
      <header>
        <div className={`container ${isMenuOpen ? "active" : ""}`}>
          <nav>
            {/* Responsive Menu Button */}
            <span className="menu-icons" onClick={toggleMenu}>
              {isMenuOpen ? <MdOutlineClose /> : <GiHamburgerMenu />}
            </span>

            <div className="img_logo">
              <Link exact activeClassName="is-active" to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>

            <ul className={`nav-list ${boxClass.join(" ")}`}>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/About">About</a>
              </li>
              <li>
                <a href="#">
                  Products <i className="fas fa-caret-down" />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="/SM">
                      Swastha Medical
                      <i className="fas fa-caret-down" />
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="/SM1">BMI Model</a>
                      </li>
                      <li>
                        <a href="/SM2">BP Model</a>
                      </li>
                      <li>
                        <a href="/SM3">Gluco Model</a>
                      </li>
                      <li>
                        <a href="/SM4">Cardio Model</a>
                      </li>
                      <li>
                        <a href="/SM5">Respiratory Model</a>
                      </li>
                      <li>
                        <a href="/SM6">RAIN Model</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/SH">
                      Swastha Hospital
                      <i className="fas fa-caret-down" />
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="/SH1">Hospital Station</a>
                      </li>
                      <li>
                        <a href="/SH2">
                          Hospital Station Advanced with Signage
                        </a>
                      </li>
                      <li>
                        <a href="/SH3">Hospital Station Advanced</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/SS">
                      Swastha Stree
                      <i className="fas fa-caret-down" />
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="/SS1">Sanitary Pad Dispenser</a>
                      </li>
                      <li>
                        <a href="/SS2">Sanitary Pad Dispenser with Static</a>
                      </li>
                      <li>
                        <a href="/SS3">
                          Sanitary Pad Dispenser with Digital Signage </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/SV">
                      Swastha Vahan
                      <i className="fas fa-caret-down" />
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="/SV1">Rapids All In One(RAIN)</a>
                      </li>
                      <li>
                        <a href="/SV2">CBC RAIN</a>
                      </li>
                      <li>
                        <a href="/SV2">BMD RAIN</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  News
                  <i className="fas fa-caret-down" />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="/press">Press</a>
                  </li>
                  <li>
                    <a href="/events">Events</a>
                  </li>
                  <li>
                    <a href="/testimonals">Testimonials</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/login" class="login-register-btn">
                  Register/Login
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbarmenu;