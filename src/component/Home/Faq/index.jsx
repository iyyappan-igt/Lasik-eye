import Title from "@/common/Title";
import styles from "./styles.module.css";
import SubBanner from "@/common/SubBanner";
import Image from "next/image";
import Button from "@/common/Button";

const FAQ = ({ faqlist }) => {
  return (
    <section className={styles.faqsec}>
      <div>
        <Title title={"Frequently Asked Questions"} />

        <div className="accordion commonshadow my-4" id="accordionExample">
          {faqlist.map((data, i) => (
            <div className="accordion-item">
              <h2 className={`accordion-header ${styles.question}`}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${i}`}
                  aria-expanded="true"
                  aria-controls="collapse"
                >
                  {data?.question}
                </button>
              </h2>
              <div
                id={`collapse${i}`}
                className="accordion-collapse collapse "
                data-bs-parent="#accordionExample"
              >
                <div className={`${styles.accordionbody} accordion-body`}>
                  {data?.answer}
                </div>
                <div
                  className={`${styles.accordionbodybtn} d-flex gap-2 align-items-center`}
                >
                  <Image
                    src={"/assets/whatsapp_blue.png"}
                    width={20}
                    height={20}
                    alt="logo"
                  />
                  <h6 className="m-0">Chat on whatsapp</h6>
                </div>
              </div>
            </div>
          ))}
        </div>

        <SubBanner
          title={"Find Out If"}
          spantitle={"LASIK is Right for You "}
          content={
            "Take our quick eligibility check to know which LASIK procedure suits your eyes best."
          }
          bgcolor={"#f4faff"}
          spancolor={"#5382b0"}
          bordercolor={"#2f74b1"}
          btn_bgcolor={"#2f74b1"}
          btn_name={" Check Eligibility Now"}
          btn_txtcolor={"#fff"}
          isicons={false}
          isimg={false}
        />

        <div
          className={`${styles.footercta} d-flex justify-content-center gap-3`}
        >
          <Button
            name={"Call 935553085 "}
            bgcolor={"#ff6f61"}
            txtcolor={"#ffff"}
            isicon={true}
            icon={"phone"}
            iconcolor={"#fff"}
          />
          <Button
            name={"Chat on Whatsapp "}
            bgcolor={"#21a179"}
            txtcolor={"#ffff"}
            isimg={true}
            imgicon={"/assets/whatsapp.png"}
          />
        </div>

        <div
          className={`${styles.footerctastable} d-flex  justify-content-center gap-3`}
        >
          <Button
            name={"Call 935553085 "}
            bgcolor={"#ff6f61"}
            txtcolor={"#ffff"}
            isicon={true}
            icon={"phone"}
            iconcolor={"#fff"}
          />
          <Button
            name={"Chat on Whatsapp "}
            bgcolor={"#21a179"}
            txtcolor={"#ffff"}
            isimg={true}
            imgicon={"/assets/whatsapp.png"}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
