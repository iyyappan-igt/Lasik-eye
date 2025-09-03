import SubBanner from "@/common/SubBanner";
import styles from "./styles.module.css";
import { DynamicIcon } from "lucide-react/dynamic";
import Button from "@/common/Button";
import Title from "@/common/Title";
import Image from "next/image";

const TreatmentCost = ({ treatmentlist, handleTogglecontactForm }) => {
  return (
    <section className={styles.treatmentsec}>
    <div>
        <Title title={"Treatment Cost Depends On"} />

      <div className={`row commonshadow mt-4 mx-3 mx-md-0 ${styles.treat}`}>
        {treatmentlist?.map((data, i) => (
          <div
            className={` col-lg-3 col-md-6 text-center mb-2 ${styles.treatcard} `}
            key={i}
          >
            <div className={`d-flex justify-content-center`}>
              <div className={styles.treatimg}>
                <Image
                  src={data?.icon}
                  width={50}
                  height={50}
                  objectFit="cover"
                />
              </div>
            </div>
            <h4>{data.title}</h4>
          </div>
        ))}

        <Button
          name={"Chat With Experts"}
          txtcolor={"#fff"}
          bgcolor={"#21a179"}
          isimg={true}
          imgicon={"/assets/whatsapp.png"}
        />
      </div>

      <SubBanner
        title={"Check"}
        spantitle={"Insurance Coverage"}
        content={
          "Find out if this treatment is covered in your insurance policy or not"
        }
        bgcolor={"#fef8f1"}
        spancolor={"#d3863c"}
        bordercolor={"#eea35cff"}
        btn_bgcolor={"#cf873d"}
        btn_name={"Check Insurance Coverage"}
        btn_txtcolor={"#fff"}
        isicons={false}
        isimg={false}
        handleTogglecontactForm={handleTogglecontactForm}
      />

      <SubBanner
        title={"Talk To"}
        spantitle={"Health Advisor"}
        content={"Find the best hospitals and best doctors for treatment"}
        bgcolor={"#fef8f1"}
        spancolor={"#d3863c"}
        bordercolor={"#eea35cff"}
        btn_bgcolor={"#cf873d"}
        btn_name={"Call Advisor Now"}
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
export default TreatmentCost;
