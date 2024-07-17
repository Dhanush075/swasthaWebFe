import React from "react";
import styles from "../HospStree.module.css";
import Image from "../../../assets/images/SS3.png";

const SS3 = () => {
    return (
        <section className={styles.container} id="about">
            <h3 className={styles.title}>Sanitary Pad Dispenser with Digital Signange</h3>
            <div className={styles.content}>
                <img
                    src={Image}
                    alt="SS3"
                    width={230}
                    height={150}
                    style={{ marginLeft: '60px', marginRight: '60px' }}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <p>Model Swastha Stree : APJ  D225.03</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <p>Digital Signage for Advertisements, Information.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <p>Three Bays of 75 boxes each of 2 pads.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <p>Three different sizes, Storage is 225 boxes.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default SS3;
