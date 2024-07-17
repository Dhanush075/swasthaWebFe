import React, { useState, useEffect } from "react";
import Certificate from "./ProductCert/Cert";
import PDFViewer from "./Brochures/PDFViewer";
import Dist from "./Distributors/Dist";
import CompanyDocs from "./CompanyDocs/CompanyDocs";
import Profile from "./Profile/Profile";
import PricingList from "./PricingList/PricingList";
import { MdLogout } from "react-icons/md";
import "./sidebarPage.css";

function SidebarPage() {
  const [selectedItem, setSelectedItem] = useState("item5");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.name) {
      setUserName(user.name);
    }
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleLogout = () => {
    localStorage.removeItem("userName");
    window.location.href = "/login"; 
  };

  return (
    <div className="sidebar-page">
      <div className="sidebar">
        <div
          className={`sidebar-item ${selectedItem === "item1" ? "active" : ""}`}
          onClick={() => handleItemClick("item1")}
        >
          Company Documents
        </div>
        <div
          className={`sidebar-item ${selectedItem === "item2" ? "active" : ""}`}
          onClick={() => handleItemClick("item2")}
        >
          Distributors
        </div>
        <div
          className={`sidebar-item ${selectedItem === "item3" ? "active" : ""}`}
          onClick={() => handleItemClick("item3")}
        >
          Pricing List
        </div>
        <div
          className={`sidebar-item ${selectedItem === "item4" ? "active" : ""}`}
          onClick={() => handleItemClick("item4")}
        >
          Product Certifications
        </div>
        <div
          className={`sidebar-item ${selectedItem === "item5" ? "active" : ""}`}
          onClick={() => handleItemClick("item5")}
        >
          Brochures
        </div>
        <div
          className={`sidebar-item ${selectedItem === "item6" ? "active" : ""}`}
          onClick={() => handleItemClick("item6")}
        >
          Profile
        </div>
      </div>

      <div className="content">
        <div className="header">
          <div className="user-info">{userName}</div>
          <button className="logout-button" onClick={handleLogout}>
            {" "}
            Log Out
            <MdLogout className="logout-icon" />
          </button>
        </div>
        {selectedItem === "item1" && <CompanyDocs />}
        {selectedItem === "item2" && <Dist />}
        {selectedItem === "item3" && <PricingList />}
        {selectedItem === "item4" && <Certificate />}
        {selectedItem === "item5" && <PDFViewer />}
        {selectedItem === "item6" && <Profile />}
      </div>
    </div>
  );
}

export default SidebarPage;