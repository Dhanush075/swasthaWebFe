import React from "react";
import Swaseva_Hospital from "../../../assets/pdfs/SwaSeva_Hospital_1.pdf"; 
import Swaseva_Health from "../../../assets/pdfs/Swastha_Health_Station_1.pdf";
import Swastha_Stree from "../../../assets/pdfs/SwasthaStree1.pdf";
import "./pdf.css";

const PDFPage = () => {
  const pdfFiles = [
    { pdf: Swaseva_Hospital, heading: "SwaSeva Hospital Brochure" },
    { pdf: Swaseva_Health, heading: "Swastha Health Brochure" },
    { pdf: Swastha_Stree, heading: "Swastha Stree Brochure" }
  ];
  
  return (
    <div className="pdf-grid-container">
      {pdfFiles.map((item, index) => (
        <div key={index} className="pdf-thumbnail">
          <iframe
            className="pdf-viewer"
            src={item.pdf + "#toolbar=0&navpanes=0"}
            title={`PDF Viewer ${index + 1}`}
          ></iframe>
          <div className="pdf-options">
            <a href={item.pdf} download className="download-button">
              <i className="fas fa-download"></i> Download
            </a>
            <h2>{item.heading}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PDFPage;