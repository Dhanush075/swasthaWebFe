import React from "react";
import Lab_Reports from "../../../assets/videos/Lab_Reports.mp4";
import "../productsVideo.css";

const SH = () => {
  return (
    <div className="product-container">
      <div className="product-text-section">
        <h3 className="product-heading">Swastha Hospital</h3>
        <p className="product-paragraph">
          <ul>
            <li>
            <span style={{ color: "#dd2b1c", fontStyle: "italic" }}>atma</span>
        <span style={{ color: "#7cab2c" }}> Parikshan</span>
        <sup style={{ color: "#dd2b1c" }}>+</sup> SwaSeva Hospital kiosk is a creative self-serving
              solution that reduces wait times for patients, reduces the burden
              on the front office, and saves costs for hospitals.
            </li>
            <li>
              Leading hospitals are faced with increasing patient footfalls. At
              times, the increase in footfalls tends to be non-linear and
              transient in nature, as experienced recently with Covid and
              similar events.
            </li>
            <li>
              Managing increased footfalls leads to challenges for the front
              desk and pre-consultation screening staff. Hospitals encounter
              difficult situations with Patients complaining about errors in
              registration data, the need to visit different units for basic
              tests of vitals and the delivery/receipt of lab reports prior to
              doctor consultation.
            </li>
            <li>
              In addition, many patients are not yet technology-savvy and do not
              have access to emails where reports are sent, and hence the need
              to print paper, deployment of resources remains.
            </li>
            <li>
              The need to address data errors, the ire of patients, increased
              footfalls, coupled with an increase in the cost of support is a
              challenge faced by many leading hospitals.
            </li>
            <li>
            <span style={{ color: "#dd2b1c", fontStyle: "italic" }}>atma</span>
        <span style={{ color: "#7cab2c" }}> Parikshan</span>
        <sup style={{ color: "#dd2b1c" }}>+</sup> SwaSeva Hospital kiosk is designed to address the
              above challenges and minimize the pain to both hospital staff,
              patients, and hospital management.
            </li>
            <li>
              Benefits accrued through higher operational efficiencies,
              redeployment of resources, improved customer experiences, and cost
              savings.
            </li>
          </ul>
        </p>
      </div>

      <div className="product-video-section">
        <video width="300" controls autoPlay>
          <source src={Lab_Reports} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default SH;
