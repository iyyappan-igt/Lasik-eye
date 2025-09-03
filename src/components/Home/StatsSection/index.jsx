import React from "react";
import styles from "./styles.module.css"
const StatsSection = ({ data }) => {
  return (
    <div className="container-lg my-5 my-md-3">
      <div className={`card ${styles.card} border-0 mx-auto p-3`}>
        <div className="d-flex flex-column flex-lg-row text-center w-100">
          {data?.map((item, index) => (
            <div
              key={index}
              className={`mb-4 d-flex flex-column gap-1 my-lg-3 px-3 flex-fill ${styles.statItem}`}
            > 
              <h2 className="fw-bold fs-2" style={{color:"#3c7c6f"}}>{item?.value}</h2>
              <h2 className="fw-bold fs-6" style={{color:"#3c7c6f"}}>{item?.title}</h2>
              {/* <p className="mb-0">{item?.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;