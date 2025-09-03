import Button from "@/common/button";
import React from "react";
import styles from "./styles.module.css";

const Form = ({ handleTogglecontactForm }) => {
  return (
    <div className={`${styles.card}`}>
      <h4 className="fw-semibold mb-4" style={{ color: "#2A3B77" }}>
        Book Free <br className="d-none d-lg-bock" /> Consultation
      </h4>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control rounded-3 py-3"
            placeholder="Patient Name (Optional)"
          />
        </div>

        <div className="mb-1 input-group">
          <span className="input-group-text bg-light border-end-0 rounded-start-3 py-3">
            +91
          </span>
          <input
            type="tel"
            className="form-control border-start-0 rounded-end-3"
            placeholder="Mobile Number"
          />
        </div>

        <div className="d-grid mt-4">
          <Button name={"Book Now"} bgcolor="#ff6f61" txtcolor="#fff" />
        </div>
      </form>
    </div>
  );
};

export default Form;
