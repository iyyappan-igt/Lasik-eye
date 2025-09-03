import React from "react";
import styles from "./styles.module.css"
import SubBanner from "@/common/SubBanner";
import Title from "@/common/Title";
import DoctorCard from "@/common/DoctorCard";
const TopDoctor = ({ data }) => {
    return (
        <div className="container-lg mt-5 my-3">
            <Title name={data?.title} />
            <div className="w-100 d-flex gap-4 flex-column justify-content-start mt-3">
                {data?.doctorList?.map((item) => (
                    <DoctorCard name={item?.name} img={item?.img} experience={item?.experience} reviews={item?.reviews} destination={item?.destination} data={data} />
                ))
                }
            </div>
        </div>
    );
};

export default TopDoctor;
