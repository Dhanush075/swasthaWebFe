import React, { useEffect, useState } from "react";
import { message } from "antd";
import axios from "axios";
import "../restrictedview.css";
import PricingList from "../../../assets/images/PricingList.png";

const Pricing = () => {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const files = [{ name: "Pricing List", image: PricingList }];

  useEffect(() => {
    // Fetch user object from local storage
    const userString = localStorage.getItem("user");
    if (userString) {
      const user = JSON.parse(userString);
      setSenderName(user.name);
      setSenderEmail(user.email);
    }
  }, []); // Empty dependency array to run only once on component mount

  // Function to handle sending email
  const sendEmail = async () => {
    try {
      const userString = localStorage.getItem("user");
      if (!userString) {
        alert("User information not found in local storage");
        return;
      }

      const response = await axios.post(
        "http://localhost:4000/api/registration/verify/user/sendEmail",
        {
          name: "Suhana", 
          email: "info@atmaparikshan.com", 
          senderName, // Sender's name retrieved from local storage
          senderEmail, // Sender's email retrieved from local storage
        }
      );
      if (response.data.success) {
        message.success(
          "Thank you! Your request has been sent via email. Our team will follow up with you soon",
          10
        );
      } else {
        alert("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email");
    }
  };

  return (
    <div className="file-list">
      {files.map((file, index) => (
        <div key={index} className="file-container">
          <div className="file-item">
            <img src={file.image} alt={file.name} className="file-image" />
            <p className="file-name">{file.name}</p>
            {/* Add onClick event to trigger sendEmail function */}
            <button className="request-button" onClick={sendEmail}>
              Request to View
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pricing;
