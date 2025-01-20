// Modal.js

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Modal = ({ isOpen, role, onClose }) => {
  // Styles (inside your components)
  const modalStyles = {
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    modalContent: {
      backgroundColor: "#fff",
      padding: "2rem",
      borderRadius: "10px",
      width: "80%",
      maxWidth: "600px",
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
      animation: "fadeIn 0.3s ease",
    },
    modalHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid #ddd",
      paddingBottom: "1rem",
      marginBottom: "1rem",
    },
    closeBtn: {
      background: "none",
      border: "none",
      fontSize: "1.5rem",
      color: "#FF5A5F",
      cursor: "pointer",
    },
    modalBody: {
      padding: "1rem 0",
      fontFamily: "Arial, sans-serif",
      color: "#333",
    },
    modalFooter: {
      textAlign: "right",
      paddingTop: "1rem",
    },
    btn: {
      padding: "12px 25px",
      backgroundColor: "#FF5A5F",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "16px",
      textDecoration: "none",
      transition: "background-color 0.3s",
    },
    btnHover: {
      backgroundColor: "#e1494f", // Slightly darker shade for hover
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "12px",
      border: "2px solid #ddd",
      borderRadius: "4px",
      fontSize: "14px",
      transition: "border-color 0.3s",
    },
    inputFocus: {
      borderColor: "#FF5A5F", // Highlight input on focus
    },
    label: {
      fontSize: "16px",
      fontWeight: "600",
      marginBottom: "8px",
      display: "block",
    },
    textarea: {
      width: "100%",
      padding: "10px",
      marginBottom: "12px",
      border: "2px solid #ddd",
      borderRadius: "4px",
      fontSize: "14px",
      minHeight: "100px",
      transition: "border-color 0.3s",
    },
    textareaFocus: {
      borderColor: "#FF5A5F",
    },
  };

  // Registration form content based on role
  const renderFormContent = () => {
    switch (role) {
      case "Exhibitor":
        return (
          <form>
            <div>
              <label style={modalStyles.label}>Company Name</label>
              <input
                type="text"
                style={modalStyles.input}
                required
                placeholder="Enter your company name"
              />
            </div>
            <div>
              <label style={modalStyles.label}>Contact Person</label>
              <input
                type="text"
                style={modalStyles.input}
                required
                placeholder="Enter contact person name"
              />
            </div>
            <div>
              <label style={modalStyles.label}>Company Address</label>
              <textarea
                style={modalStyles.textarea}
                required
                placeholder="Enter your company address"
              />
            </div>
            <div>
              <label style={modalStyles.label}>Product/Service Description</label>
              <textarea
                style={modalStyles.textarea}
                required
                placeholder="Enter product/service description"
              />
            </div>
            <div>
              <label style={modalStyles.label}>Booth Size Required</label>
              <select
                style={modalStyles.input}
                required
                defaultValue="small"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
          </form>
        );

      case "Vendor":
        return (
          <form>
            <div>
              <label style={modalStyles.label}>Business Name</label>
              <input
                type="text"
                style={modalStyles.input}
                required
                placeholder="Enter your business name"
              />
            </div>
            <div>
              <label style={modalStyles.label}>Product Category</label>
              <input
                type="text"
                style={modalStyles.input}
                required
                placeholder="Enter product category"
              />
            </div>
            <div>
              <label style={modalStyles.label}>Contact Person</label>
              <input
                type="text"
                style={modalStyles.input}
                required
                placeholder="Enter contact person name"
              />
            </div>
            <div>
              <label style={modalStyles.label}>Booth Requirements</label>
              <textarea
                style={modalStyles.textarea}
                required
                placeholder="Enter booth requirements"
              />
            </div>
            <div>
              <label style={modalStyles.label}>Price Range</label>
              <input
                type="text"
                style={modalStyles.input}
                required
                placeholder="Enter price range"
              />
            </div>
          </form>
        );

      case "Author":
        return (
          <form>
            <div>
              <label style={modalStyles.label}>Author Name</label>
              <input
                type="text"
                style={modalStyles.input}
                required
                placeholder="Enter author name"
              />
            </div>
            <div>
              <label style={modalStyles.label}>Book Title</label>
              <input
                type="text"
                style={modalStyles.input}
                required
                placeholder="Enter book title"
              />
            </div>
            <div>
              <label style={modalStyles.label}>Genre</label>
              <input
                type="text"
                style={modalStyles.input}
                required
                placeholder="Enter genre"
              />
            </div>
            <div>
              <label style={modalStyles.label}>Short Biography</label>
              <textarea
                style={modalStyles.textarea}
                required
                placeholder="Enter your biography"
              />
            </div>
          </form>
        );

      case "Speaker":
        return (
          <form>
            <div>
              <label style={modalStyles.label}>Full Name</label>
              <input
                type="text"
                style={modalStyles.input}
                required
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label style={modalStyles.label}>Topic of Discussion</label>
              <input
                type="text"
                style={modalStyles.input}
                required
                placeholder="Enter topic of discussion"
              />
            </div>
            <div>
              <label style={modalStyles.label}>Experience</label>
              <textarea
                style={modalStyles.textarea}
                required
                placeholder="Enter your experience"
              />
            </div>
          </form>
        );

      case "Sponsor":
        return (
          <form>
            <div>
              <label style={modalStyles.label}>Company Name</label>
              <input
                type="text"
                style={modalStyles.input}
                required
                placeholder="Enter company name"
              />
            </div>
            <div>
              <label style={modalStyles.label}>Contact Person</label>
              <input
                type="text"
                style={modalStyles.input}
                required
                placeholder="Enter contact person name"
              />
            </div>
            <div>
              <label style={modalStyles.label}>Sponsorship Type</label>
              <select
                style={modalStyles.input}
                required
                defaultValue="bronze"
              >
                <option value="bronze">Bronze</option>
                <option value="silver">Silver</option>
                <option value="gold">Gold</option>
              </select>
            </div>
            <div>
              <label style={modalStyles.label}>Amount</label>
              <input
                type="number"
                style={modalStyles.input}
                required
                placeholder="Enter amount"
              />
            </div>
          </form>
        );

      case "Visitor":
        return (
          <form>
            <div>
              <label style={modalStyles.label}>Full Name</label>
              <input
                type="text"
                style={modalStyles.input}
                required
                placeholder="Enter full name"
              />
            </div>
            <div>
              <label style={modalStyles.label}>Email Address</label>
              <input
                type="email"
                style={modalStyles.input}
                required
                placeholder="Enter email"
              />
            </div>
            <div>
              <label style={modalStyles.label}>Phone Number</label>
              <input
                type="tel"
                style={modalStyles.input}
                required
                placeholder="Enter phone number"
              />
            </div>
            <div>
              <label style={modalStyles.label}>Visit Date</label>
              <input
                type="date"
                style={modalStyles.input}
                required
              />
            </div>
          </form>
        );

      default:
        return <p>No registration form available for this role.</p>;
    }
  };

  return (
    isOpen && (
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={modalStyles.modalOverlay}
      >
        <motion.div
          className="modal-content"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          style={modalStyles.modalContent}
        >
          <div className="modal-header" style={modalStyles.modalHeader}>
            <h3>{role} Registration</h3>
            <button onClick={onClose} style={modalStyles.closeBtn}>
              &times;
            </button>
          </div>
          <div className="modal-body" style={modalStyles.modalBody}>
            {renderFormContent()}
          </div>
          <div className="modal-footer" style={modalStyles.modalFooter}>
            <Link to="#" style={modalStyles.btn} onClick={onClose}>
              Submit
            </Link>
          </div>
        </motion.div>
      </motion.div>
    )
  );
};

export default Modal;
