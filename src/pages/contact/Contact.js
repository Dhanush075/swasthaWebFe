import React, { useState } from "react";
import { Checkbox, message } from "antd";
import "./contact.css";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    products: [],
    message: "",
  });

  const handleChange = (checkedValues) => {
    setFormData({ ...formData, products: checkedValues });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/contact/add",
        formData
      );
      console.log("Contact form submitted:", response.data);
      message.success("Thank you for reaching out to us");

      // Clear the form inputs after successful submission
      setFormData({
        name: "",
        email: "",
        products: [],
        message: "",
      });
    } catch (error) {
      console.error("Failed to submit contact form:", error);
      message.error("Failed to submit contact form. Please try again later.");
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact-us-section">
      <div className="contact-info">
        <h1 className="heading-contact">Contact Us</h1>
        <br />
        <p className="getintouch-contact">
          Get in touch with us
          <br />
          <br />
        </p>
        <p>
          <strong>ADDRESS:</strong> #25, 5th Block, <br /> Jayanagar 5th Main{" "}
          <br /> Bengaluru - 560041
          <br /> Karnataka, India
        </p>
        <p>
          <strong>PHONE:</strong> +91 9482661658 <br />
          &emsp;&emsp;&emsp;&nbsp; +91 8747893662
        </p>

        <p>
          <strong>E-MAIL:</strong> info@atmaparikshan.com
        </p>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />

          <label htmlFor="checkboxGroup">
            Which product are you interested in?{" "}
          </label>
          <Checkbox.Group onChange={handleChange} value={formData.products}>
            <Checkbox
              value="Swastha Medical"
              style={{
                fontFamily: "'Roboto Condensed', sans-serif",
                fontWeight: "normal",
                fontSize: "15px",
                marginRight: "10px",
              }}
            >
              Swastha Medical
            </Checkbox>
            <Checkbox
              value="Swastha Hospital"
              style={{
                fontFamily: "'Roboto Condensed', sans-serif",
                fontWeight: "normal",
                fontSize: "15px",
                marginRight: "10px",
              }}
            >
              Swastha Hospital
            </Checkbox>
            <Checkbox
              value="Swastha Stree"
              style={{
                fontFamily: "'Roboto Condensed', sans-serif",
                fontWeight: "normal",
                fontSize: "15px",
                marginRight: "10px",
              }}
            >
              Swastha Stree
            </Checkbox>
            <Checkbox
              value="Swastha Vahan"
              style={{
                fontFamily: "'Roboto Condensed', sans-serif",
                fontWeight: "normal",
                fontSize: "15px",
                marginRight: "10px",
              }}
            >
              Swastha Vahan
            </Checkbox>
          </Checkbox.Group>

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="3"
            required
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
