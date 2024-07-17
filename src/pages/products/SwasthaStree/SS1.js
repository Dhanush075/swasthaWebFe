import React from "react";
import styles from "../HospStree.module.css";
import Image from "../../../assets/images/SS1.png";

const SS1 = () => {
  return (
    <section className={styles.container} id="about">
      <h3 className={styles.title}>Sanitary Pad Mini Dispenser</h3>
      <div className={styles.content}>
        <img
          src={Image}
          alt="SS1"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>Model Swastha Stree :APJ 75 /01</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>Wall mounted dispensing station.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>Single Bay, holds about 75 boxes each of 2 pads.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>Temperature Sensor.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SS1;
