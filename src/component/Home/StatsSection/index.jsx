import React from "react";
import styles from "./styles.module.css";
import SubBanner from "@/common/SubBanner";
const StatsSection = ({ data , handleTogglecontactForm }) => {
  return (
    <section>
      <div className="my-5 my-md-3">
        <div className={`card ${styles.card} border-0 mx-auto p-3`} onClick={handleTogglecontactForm}>
          <div className="d-flex flex-column flex-lg-row text-center w-100">
            {data?.map((item, index) => (
              <div
                key={index}
                className={`mb-4 d-flex flex-column gap-1 my-lg-3 px-3 flex-fill ${styles.statItem}`}
              >
                <h2 className="fw-bold fs-2" style={{ color: "#3c7c6f" }}>
                  {item?.value}
                </h2>
                <h2 className="fw-bold fs-6" style={{ color: "#3c7c6f" }}>
                  {item?.title}
                </h2>
                {/* <p className="mb-0">{item?.description}</p> */}
              </div>
            ))}
          </div>
        </div>

        <SubBanner
          title={"Check"}
          spantitle={"Surgery Cost"}
          content={"Find the total cost of Surgery at the best hospitals in your city"}
          bgcolor={"#fef8f1"}
          spancolor={"#d3863c"}
          bordercolor={"#eea35cff"}
          btn_bgcolor={"#cf873d"}
          btn_name={"Calculate Surgery Cost"}
          btn_txtcolor={"#fff"}
          isicons={false}
          isimg={true}
          btn_img={"/assets/whatsapp.png"}
          handleTogglecontactForm={handleTogglecontactForm}
        />
      </div>
    </section>
  );
};

export default StatsSection;
