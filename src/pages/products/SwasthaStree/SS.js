import React from "react";
import MG_Road from "../../../assets/videos/MG_Road.mp4";
import "../productsVideo.css";

const SS = () => {
  return (
    <div className="product-container">
      <div className="product-text-section">
        <h3 className="product-heading">Swastha Stree</h3>
        <p className="product-paragraph">
          <ul>
            <li>
              Swastha Stree Sanitary pad station is a unique, first of its kind,
              classy, attractive, automatic Sanitary Pad dispensing Kiosk.
            </li>
            <li>
              Digitally operated, the Swastha Stree station offers a choice with
              3 types pads. Users can simply press a button to dispense a pad of
              their choice. Options such as RFID based Smart card, QR code based
              payment are available.
            </li>
            <li>
              Another unique feature of Swastha Stree sanitary pad station is
              its large holding capacity of 800 to 1000 pads.
              <li>
                Triggers a built-in automatic alert system when pads reach a
                minimum capacity level, thereby ensuring availability of
                sanitary pads to dispense.
              </li>
            </li>
            <li>
              Sharing and communicating educational health tips, hygiene care is
              important. Swastha Stree sanitary pad station is fitted with a
              large digital signage display for sharing health tips, plus
              provides an opportunity for revenue generation through targeted
              advertisement and promotion options.
            </li>
            <li>
              Ideally suited for hospitals, offices, organisations, schools and
              colleges. Women employees, girls studying in these institutions
              can benefit from the easy to use Swastha Stree sanitary dispensing
              kiosks at affordable costs.
            </li>
            <li>
              Swastha Stree models can also be installed and commissioned in key
              public places such as malls, bus terminals, rail stations, metro
              stations, health centres, community centres, et al.
            </li>
          </ul>
        </p>
      </div>

      <div className="product-video-section">
        <video width="300" controls autoPlay>
          <source src={MG_Road} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default SS;
