import React from "react";
import styles from "./styles.module.css";
import SubBanner from "@/common/SubBanner";
import Title from "@/common/Title";
import DoctorCard from "@/common/DoctorCard";
const TopDoctor = ({ data, handleTogglecontactForm }) => {
  return (
    <section>
      <div className="mt-5 my-3">
        <Title name={data?.title} />
        <div className="w-100 d-flex gap-4 flex-column justify-content-start mt-3">
          {data?.doctorList?.map((item) => (
            <DoctorCard
              name={item?.name}
              img={item?.img}
              experience={item?.experience}
              reviews={item?.reviews}
              destination={item?.destination}
              data={data}
              handleTogglecontactForm={handleTogglecontactForm}
            />
          ))}
        </div>

        <SubBanner
          title={"Now"}
          spantitle={"Consult the doctor"}
          content={
            "Get a FREE consultation from our top doctors to know the best course of treatment."
          }
          btn_name={"WhatsApp To Consult Doctor"}
          btn_txtcolor={"#fff"}
          bgcolor="#E0FAF4"
          spancolor="#3C7C6F"
          bordercolor="#3C7C6F"
          btn_bgcolor="#3C7C6F"
          handleTogglecontactForm={handleTogglecontactForm}
        />
      </div>
    </section>
  );
};

export default TopDoctor;
