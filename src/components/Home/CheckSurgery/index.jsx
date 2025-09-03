import React from "react";
import styles from "./styles.module.css"
import SubBanner from "@/common/SubBanner";
const CheckSurgery = ({data}) => {
    return (
        <div className="my-3">
            <SubBanner title={data?.title} 
            spantitle={data?.spantitle}
            content={data?.description}
             btn_name={data?.buttontxt}
             btn_txtcolor={"#fff"}
            bgcolor="#FFF8EC"
            spancolor="#CD7E2A"
            bordercolor="#CD7E2A"
            btn_bgcolor="#CD7E2A"
  isiconsimgwidth={300} imgheight={200}/>
        </div>
    );
};

export default CheckSurgery;
