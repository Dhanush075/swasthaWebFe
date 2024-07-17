import React from "react";

const AboutInfo = () => {
  return (
    <div style={styles.contentContainer}>
      <h3
        style={{
          fontSize: "1.5rem",
          marginBottom: "1.5rem",
          textAlign: "center",
        }}
      >
        <span style={{ color: "#dd2b1c", fontStyle: "italic" }}>atma</span>
        <span style={{ color: "#7cab2c" }}> Parikshan</span>
        <sup style={{ color: "#dd2b1c" }}>+</sup>design helps reach basic health
        care services
      </h3>
      <p>
      <span style={{ color: "#dd2b1c", fontStyle: "italic" }}>atma</span>
        <span style={{ color: "#7cab2c" }}> Parikshan</span>
        <sup style={{ color: "#dd2b1c" }}>+</sup> is designed, developed and engineered by Swastha
        Technovations Pvt Ltd, a Bangalore based startup, deploying FDA
        certified components, IOT and AI based advanced technologies. 
        <span style={{ color: "#dd2b1c", fontStyle: "italic" }}> atma</span>
        <span style={{ color: "#7cab2c" }}> Parikshan</span>
        <sup style={{ color: "#dd2b1c" }}>+</sup> is an all-in-one health vitals check station with instant
        reporting thereby avoiding patients running to different units for basic
        vital tests. <br />
        <span style={{ color: "#dd2b1c", fontStyle: "italic" }}>atma</span>
        <span style={{ color: "#7cab2c" }}> Parikshan</span>
        <sup style={{ color: "#dd2b1c" }}>+</sup> non-invasive, self serving approach plus round-the-clock
        (24x7) availability - helps reduce the burden on medical staff who can
        be deployed for more important tasks, reduces wait times and improves a
        patient's experience - thereby saves time and money for hospitals and
        health care centres. <br />
        <span style={{ color: "#dd2b1c", fontStyle: "italic" }}>atma</span>
        <span style={{ color: "#7cab2c" }}> Parikshan</span>
        <sup style={{ color: "#dd2b1c" }}>+</sup> design helps reach basic health care services to
        underserved urban and rural areas, ensuring access to health services to
        the common man. Hospitals and Health centres can now offer preventive
        care services at reduced costs across wider areas. <br />
        <span style={{ color: "#dd2b1c", fontStyle: "italic" }}>atma</span>
        <span style={{ color: "#7cab2c" }}> Parikshan</span>
        <sup style={{ color: "#dd2b1c" }}>+</sup> technology solutions specialising in the area of Primary
        and Preventive Care have designed solutions to cater to varying and
        customise needs of the segment. <br />
      </p>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h3 style={{ color: "#dd2b1c" }}>OUR VISION</h3>
        <p>
          "To bring a fresh change in common man and woman's health and hygiene
          care and enable Universal Health Coverage."
        </p>
        <h3 style={{ color: "#dd2b1c" }}>OUR MISSION</h3>
        <p>
          "To provide affordable primary and preventive care for everyone at every
          corner round-the-clock, and, To facilitate early detection of diseases."
        </p>
      </div>
    </div>
  );
};
const styles = {
  contentContainer: {
    padding: "2rem",
    textAlign: "justify",
  },
};

export default AboutInfo;
