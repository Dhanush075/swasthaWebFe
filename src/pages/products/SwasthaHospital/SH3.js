import React from "react";
import styles from "../HospStree.module.css";
import Image from "../../../assets/images/SH.png";

const SH3 = () => {
  return (
    <section className={styles.container} id="about">
      <h3 className={styles.title}>Hospital Station Advanced</h3>
      <div className={styles.content}>
        <img
          src={Image}
          alt="SH3"
          width={230}
          height={150}
          style={{ marginLeft: "60px", marginRight: "60px" }}
        />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>Model Swastha Hospital :APJ HOS ADV/09</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>Lab reports.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>Consultations.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>QR Code payment.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SH3;
