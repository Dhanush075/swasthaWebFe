import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";

const HomeBenefits = () => {
  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      className="text-black"
    >
      <section
        style={{
          padding: "1rem",
          margin: "0 auto",
          maxWidth: "48rem",
          fontSize: "1.125rem",
          background: "linear-gradient(to right, #68D080, #3490B4)",
        }}
      >
        <div>
          <AccordionComponentPlaceholder />
        </div>
      </section>
      <h3
        style={{
          fontSize: "1.5rem",
          marginBottom: "1rem",
          marginTop: "1rem",
          textAlign: "center",
        }}
      >
        {" "}
        Why choose us?
      </h3>
      <p
        style={{
          margin: "0 5% 0 5%",
          marginTop: "0.5rem",
          textAlign: "justify",
        }}
      >
        <span style={{ color: "#dd2b1c", fontStyle: "italic" }}>atma</span>
        <span style={{ color: "#7cab2c" }}> Parikshan</span>
        <sup style={{ color: "#dd2b1c" }}>+</sup> technology solutions specialises in the area of Primary
        and Preventive Care. Swastha Technovations have designed solutions to
        cater to varying and customise needs of the segment. The range of health
        products and technology solutions under <span style={{ color: "#dd2b1c", fontStyle: "italic" }}>atma</span>
        <span style={{ color: "#7cab2c" }}> Parikshan</span>
        <sup style={{ color: "#dd2b1c" }}>+</sup> include:
      </p>
    </div>
  );
};

const AccordionComponentPlaceholder = () => (
  <Accordion>
    <AccordionSummary
      expandIcon={<AddIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
      className={``}
    >
      Benefits
    </AccordionSummary>
    <AccordionDetails>
      <li> Instant results on all test carried out with no wait times</li>
      <li>Reduction of cost in screening health vitals & diagnostics</li>
      <li>Improved access to quick health screening at affordable cost</li>
      <li>Improved access to Doctors via eConsultations</li>
      <li>No human intervention, self serving, saves time, saves money</li>
      <li>
        User Friendly - no training required - video based & local language
        support
      </li>
      <li>Learn health tips through digital health information</li>
      <li>Available round-the-clock (24x7)</li>
      <li>Easy Patient Registration through Self Service</li>
    </AccordionDetails>
  </Accordion>
);

export default HomeBenefits;
