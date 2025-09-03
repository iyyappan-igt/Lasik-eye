import React from "react";
import styles from "./styles.module.css"
import SubBanner from "@/common/SubBanner";
const ConsultDoctor = () => {
    return (
        <div className="my-3">
            <SubBanner title={"Now"} 
            spantitle={"Consult the doctor"}
            content={"Get a FREE consultation from our top doctors to know the best course of treatment."}
             btn_name={"WhatsApp To Consult Doctor"}
             btn_txtcolor={"#fff"}
            bgcolor="#E0FAF4"
            spancolor="#3C7C6F"
            bordercolor="#3C7C6F"
            btn_bgcolor="#3C7C6F"
  title2="true" imgwidth={300} imgheight={300} btn_img={"/assets/whatsapp.png"}  isicons isimg={true} isicons={true} />
        </div>
    );
};

export default ConsultDoctor;
