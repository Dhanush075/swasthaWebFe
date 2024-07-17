import React from "react";
import styles from "../HospStree.module.css";
import Image from "../../../assets/images/SS2.png";

const SS2 = () => {
    return (
        <section className={styles.container} id="about">
            <h3 className={styles.title}>Sanitary Pad Dispenser with Static</h3>
            <div className={styles.content}>
                <img
                    src={Image}
                    alt="SS2"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <p>
                                Model Swastha Stree : APJ F225/03</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <p>
                                One static display.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <p>
                                Three Bays of 75 boxes each of 2 pads.</p>
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

export default SS2;
