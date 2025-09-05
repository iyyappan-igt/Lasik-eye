import Button from "@/common/Button";
import React from "react";
import styles from "./styles.module.css";

const Form = ({ handleTogglecontactForm, title }) => {
  console.log(title);
  const getFormContent = (title) => {
    if (title.title === "Check" && title.subtitle === "Surgery Cost") {
      return {
        heading: "Check Surgery Cost",
        fields: { nameField: true, numberField: true },
      };
    }
    if (title.title === "Check" && title.subtitle === "Insurance Coverage") {
      return {
        heading: "Check Insurance Coverage",
        fields: { nameField: true, numberField: true },
      };
    }
       if (title.title === "Your Health," && title.subtitle === "Simplified By AI") {
      return {
        heading: "Book Consultation",
        fields: { nameField: true, numberField: true },
      };
    }
    if (title.title === "Find Out If" && title.subtitle === "LASIK is Right for You") {
      return {
        heading: "Check Eligibility",
        fields: { nameField: false, numberField: true },
      };
    }
    switch (title.name) {
      case "Our Top Doctor":
        return {
          heading: "Book Consultation",
          fields: { nameField: true, numberField: true },
        };
      case "Your Health":
        return {
          heading: "Book Consultation",
          fields: { nameField: true, numberField: true },
        };
      case "Find Out If":
        return {
          heading: "Check Your Eligibility",
          fields: { nameField: false, numberField: true },
        };
      default:
        return {
          heading: "Book Consultation",
          fields: { nameField: true, numberField: true },
        };
    }
  };

  const { heading, fields } = getFormContent(title);

  return (
    <div className={`${styles.card} bg-white p-6 rounded-xl shadow-lg mx-auto`}>
      <h4 className="fw-semibold mb-4 text-2xl" style={{ color: "#2A3B77" }}>
        {heading}
      </h4>
      <form>
        {fields.nameField && (
          <div className="mb-3">
            <input
              type="text"
              className="form-control rounded-3 py-3"
              placeholder="Patient Name (Optional)"
              aria-label="Patient Name"
            />
          </div>
        )}

        {fields.numberField && (
          <div className="mb-1 input-group">
            <span className="input-group-text bg-light border-end-0 rounded-start-3 py-3">
              +91
            </span>
            <input
              type="tel"
              className="form-control border-start-0 rounded-end-3"
              placeholder="Mobile Number"
              aria-label="Mobile Number"
            />
          </div>
        )}

        <div className="d-grid mt-4">
          <Button
            name="Book Now"
            bgcolor="#ff6f61"
            txtcolor="#fff"
            onClick={() => handleTogglecontactForm()} // Close form on submit
          />
        </div>
      </form>
    </div>
  );
};

export default Form;