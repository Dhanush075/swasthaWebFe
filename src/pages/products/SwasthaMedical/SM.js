import React from "react";
import Medical from "../../../assets/videos/Medical.mp4";
import "../productsVideo.css";

const SM = () => {
  return (
    <div className="product-container">
      <div className="product-text-section">
        <h3 className="product-heading">Swastha Medical</h3>
        <p className="product-paragraph">
          <ul>
            <li>
              <span style={{ color: "#dd2b1c", fontStyle: "italic" }}>
                atma
              </span>
              <span style={{ color: "#7cab2c" }}> Parikshan</span>
              <sup style={{ color: "#dd2b1c" }}>+</sup>'s Swastha Health Station
              is an innovative, non-invasive, advanced all-in-one health station
              for automatic screening of patient vitals.
            </li>
            <li>
              Patient health vitals can be tested without the support of
              professional health providers / paramedics, thereby reducing the
              gap/burden arising due to shortage of health resources.
            </li>
            <li>
              <span style={{ color: "#dd2b1c", fontStyle: "italic" }}>
                atma
              </span>
              <span style={{ color: "#7cab2c" }}> Parikshan</span>
              <sup style={{ color: "#dd2b1c" }}>+</sup>, the all-in-one health
              check station is available round-the-clock (24x7).
            </li>
            <li>
              Importantly, the patient gets instant results of his vitals such
              as height, weight, BMI, Temperature, Blood Pressure, Blood Sugar,
              SPO2 and more.
            </li>
            <li>
              Test results that fall out of range are highlighted with
              recommendations including the ability to connect with a Doctor
              remotely using <span style={{ color: "#dd2b1c", fontStyle: "italic" }}>atma</span>
        <span style={{ color: "#7cab2c" }}> Parikshan</span>
        <sup style={{ color: "#dd2b1c" }}>+</sup>'s e-Consultation facility.
            </li>
            <li>
              <span style={{ color: "#dd2b1c", fontStyle: "italic" }}>
                atma
              </span>
              <span style={{ color: "#7cab2c" }}> Parikshan</span>
              <sup style={{ color: "#dd2b1c" }}>+</sup> is Made in India and
              incorporates medical grade/certified devices for quality and
              accuracy of tests.
            </li>
            <li>
              Swastha Health station comes in convenient models to suit each
              customer namely Swastha Essential and Swastha Advanced.
            </li>
          </ul>
        </p>
      </div>

      <div className="product-video-section">
        <video width="300" controls autoPlay>
          <source src={Medical} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default SM;
