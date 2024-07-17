import React, { useState, useEffect } from "react";
import axios from "axios";
import "./profile.css";
import { message } from "antd";

const Profile = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);
  const [userData, setUserData] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    // Retrieving user details from local storage
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserData(user);
      setName(user.name);
      setPhone(user.mobile);
      setEmail(user.email);
    }
  }, []);

  const handleEditClick = () => {
    setShowEditForm(true);
  };

  const handleSave = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:4000/api/registration/update/profile/${userData._id}`,
        {
          name,
          mobile_number: phone,
        }
      );
      if (response.data.success) {
        const updatedUserData = { ...userData, name, mobile: phone };
        setUserData(updatedUserData);
        localStorage.setItem("user", JSON.stringify(updatedUserData));
        setShowEditForm(false);
        message.success("Profile updated successfully!");
      } else {
        console.error("User details update failed:", response.data.message);
        message.error("Failed to update profile. Please try again later.");
      }
    } catch (error) {
      console.error("User details update failed:", error.message);
      message.error("Failed to update profile. Please try again later.");
    }
  };

  const handlePasswordLinkClick = () => {
    setShowChangePasswordForm(true);
  };

  const handleChangePassword = async (event) => {
    event.preventDefault();
    try {
      // Check if new password is same as current password
      if (newPassword === currentPassword) {
        message.error("New password must be different from current password");
        return;
      }

      // Check if password and confirm_password are the same
      if (newPassword !== confirmPassword) {
        message.error("New password and confirm password do not match");
        return;
      }

      const response = await axios.put(
        `http://localhost:4000/api/registration/update/user/password/${userData._id}`,
        {
          current_password: currentPassword,
          password: newPassword,
          confirm_password: confirmPassword,
        }
      );

      if (response.data.success) {
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");

        setTimeout(() => {
          setShowChangePasswordForm(false);
        }, 2500);
        message.success("Password changed successfully!");
      } else {
        console.error("Password change failed:", response.data.message);
        message.error("Password change failed. Please try again.");
      }
    } catch (error) {
      console.error("Password change failed:", error.message);
      message.error("Password change failed. Please try again.");
    }
  };

  return (
    <div className="accountsettings">
      {!showEditForm && (
        <div className="userprofile-card">
          <div className="userprofile-card-content">
            <h1 className="mainhead1">Personal Information</h1>
            <div className="card">
              <p>Name: {userData ? userData.name : ""}</p>
              <p>Mobile Number: {userData ? userData.mobile : ""}</p>
              <p>Email: {userData ? userData.email : ""}</p>
              <div className="userprofile-card-buttons">
                <button onClick={handleEditClick}>Edit</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showEditForm && (
        <div className="userform">
          <h1 className="mainhead1">Edit Information</h1>
          <form onSubmit={handleSave}>
            <div className="userform-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="userform-group">
              <label htmlFor="phone">Mobile Number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="userform-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                readOnly // Prevents editing
              />
            </div>
            <button type="submit" className="mainbutton1">
              Save
            </button>
          </form>
        </div>
      )}

      {showChangePasswordForm && (
        <div className="userform">
          <h1 className="mainhead1">Change Password</h1>
          <form onSubmit={handleChangePassword}>
            <div className="userform-group">
              <label htmlFor="currentPassword">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                id="currentPassword"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              />
            </div>
            <div className="userform-group">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                name="newPassword"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div className="userform-group">
              <label htmlFor="confirmPassword">Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="mainbutton1">
              Change Password
            </button>
          </form>
        </div>
      )}

      {!showChangePasswordForm && (
        <div className="additional-box">
          <p>Do you want to change your password?</p>
          <button
            onClick={handlePasswordLinkClick}
            className="change-password-link"
          >
            Change Password
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
