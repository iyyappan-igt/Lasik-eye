"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Button from "@/common/Button";

const RightSticky = () => {
   const [formData, setFormData] = useState({
    PatientName: "",
    MobileNumber: "",
    Reason: "General Eye Check-up",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
    const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzc8qwuvrMntiluhmEX1TliwruyAElp5QTfj410ZrE3hBOfJVAYpTJQAXGEE0rmKKyS/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData).toString(),
        }
      );

      setStatus("✅ Form submitted successfully!");
    } catch (error) {
      setStatus("❌ Error submitting form");
      console.error(error);
    }
  };
  return (
    <div className="container-lg my-3 p-0">
      <div className={`card ${styles.card} shadow-lg border-0 p-4`}>
        <h4 className="fw-semibold mb-4" style={{ color: "#2A3B77" }}>
          Book <br className="d-none d-lg-bock" /> Consultation
        </h4>
        <form  onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
          name="PatientName"
            type="text"
            onChange={handleChange}
            className="form-control rounded-3 py-3"
            placeholder="Patient Name (Optional)"
          />
        </div>

        <div className="mb-1 input-group">
          <span className="input-group-text bg-light border-end-0 rounded-start-3 py-3">
            +91
          </span>
          <input
          name="MobileNumber"
            type="tel"
            onChange={handleChange}
            className="form-control border-start-0 rounded-end-3"
            placeholder="Mobile Number"
          />
        </div>
        {/* <small className="text-danger">
          Please Only Enter a Valid Mobile Number
        </small> */}

        {/* Button */}
        <div className="d-grid mt-4">
          <Button name={"Book Now"} bgcolor="#ff6f61" txtcolor="#fff" />
        </div>
      </form>
      </div>
    </div>
  );
};

export default RightSticky;
