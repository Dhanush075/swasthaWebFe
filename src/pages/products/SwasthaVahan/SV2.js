import React, { useState, useEffect } from "react";
import styles from "../MedVahan.module.css";
import Image from "../../../assets/images/SV1.png";

const SV2 = () => {
  const parameters = [
    "Height",
    "Weight",
    "BMI",
    "Nutritional Status",
    "Ideal Body Weight (kgs)",
    "Lean Body Mass (kgs)",
    "Fat Mass (kgs)",
    "Body Fat (%)",
    "Total Body Water (ltrs)",
    "Total Body Water (%)",
    "Basal Metabolic Rate",
    "Over Wt/Under Wt By (kgs)",
    "Fat Free Mass (kgs)",
    "Fat Free Mass Index (kgs/m2)",
    "Normalised Fat Free Mass Index (kgs/m2)",
    "Visceral Fat (%)",
    "Temperature",
    "Pulse Rate / Heart Beat",
    "Oxygen saturation",
    "Blood Pressure (Systolic)",
    "Blood Pressure (Diastolic)",
    "Random Blood Sugar",
    "Hemoglobin",
    "Blood Grouping",
    "ECG",
    "FVC",
    "FEV1",
    "FEV1/FVC",
    "FET",
    "Rapid Test- Typhoid",
    "Rapid Test- Malaria",
    "Rapid Test- Dengue",
    "Rapid Test - HIV",
    "Rapid Test - Pregnancy",
    "Rapid Test - Flu",
    "Rapid AntiBody test - Cholera",
    "Covid Antigen",
    "Pcv",
    "Rbc Count",
    "Mcv",
    "Mch",
    "Mchc",
    "Total Leucocyte Count (Tlc)",
    "Differential Leucocytic Count (Dlc)",
    "- Neutrophils",
    "- Lymphocytes",
    "- Eosinophils",
    "Absolute Leucocyte Count",
    "- Monocytes",
    "- Platelet Count",
    "Total Cholesterol",
    "LDL",
    "HDL",
    "Triglycerides ",
    "TC/HDL Ratio",
  ];

  const [shouldSplit, setShouldSplit] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShouldSplit(window.innerWidth > 738); 
    };
    handleResize();
    window.addEventListener("resize", handleResize); 
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const numColumns = shouldSplit ? 3 : 1;
  const numRows = Math.ceil(parameters.length / numColumns); 
  const chunkedParameters = []; 

  // Split parameters into chunks based on the number of columns
  for (let i = 0; i < parameters.length; i += numRows) {
    chunkedParameters.push(parameters.slice(i, i + numRows));
  }

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}> CBC RAIN </h2>
      <div className={styles.content}>
        <img
          src={Image}
          alt="CBC RAIN"
          className={styles.prodImage}
        />
        <div className={styles.tableContainer}>
          {chunkedParameters.map((chunk, index) => (
            <table key={index} className={styles.prodTable}>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Model APJ Vah 46/18: Test Parameters</th>
                </tr>
              </thead>
              <tbody>
                {chunk.map((parameter, idx) => (
                  <tr key={idx}>
                    <td></td>
                    <td>{parameter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SV2;