import React from "react";
import TerCon from "../../../assets/pdfs/Terms_Of_Use.pdf";

const PDFPage = () => {
  return (
    <div style={{ margin: "2rem auto", maxWidth: "xl" }}>
      <embed
        src={TerCon}
        type="application/pdf"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default PDFPage;
