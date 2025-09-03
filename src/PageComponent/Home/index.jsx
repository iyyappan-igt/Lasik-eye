import Form from "@/common/Form";
import Header from "@/common/Header";
import { Popup } from "@/common/Popup";
import AfterSurgery from "@/component/Home/AfterSurgery";
import DelayRisk from "@/component/Home/DelayRisk";
import FAQ from "@/component/Home/Faq";
import HomeBanner from "@/component/Home/HomeBanner";
import PatientSay from "@/component/Home/PatientSay";
import RightSticky from "@/component/Home/RightSticky";
import StatsSection from "@/component/Home/StatsSection";
import TopDoctor from "@/component/Home/TopDoctor";
import TreatmentCost from "@/component/Home/TreatmentCost";
import WhyChoose from "@/component/Home/Whychoose";
import { HomeData } from "@/constant/Home";
import { useState } from "react";

const HomePageComponent = () => {
  const [open, setopen] = useState(false);

  const handleTogglecontactForm = () => {
    setopen(!open);
  };

  return (
    <>
      {/* <div className="container">
        <div className="col-lg-8">
          <TreatmentCost
            treatmentlist={HomeData?.treatmentData}
            handleTogglecontactForm={handleTogglecontactForm}
          />
          <WhyChoose
            chooselist={HomeData?.whychoose}
            handleTogglecontactForm={handleTogglecontactForm}
          />
          <PatientSay handleTogglecontactForm={handleTogglecontactForm} />
          <AfterSurgery
            surgerydata={HomeData?.after_surgery}
            handleTogglecontactForm={handleTogglecontactForm}
          />
          <FAQ faqlist={HomeData?.Faq} />
        </div>
        <div className="col-lg-5"></div>
      </div> */}

      <div className="p-0">
        <Header />
        <HomeBanner data={HomeData?.banner} />
        <div className="container">
          <div className="row">
            <div className="col-12 mx-auto col-lg-8 order-2 order-lg-1">
              <StatsSection
                data={HomeData?.stats}
                handleTogglecontactForm={handleTogglecontactForm}
              />
              <DelayRisk
                data={HomeData?.risks}
                handleTogglecontactForm={handleTogglecontactForm}
              />
              <TopDoctor
                data={HomeData?.topDoctor}
                handleTogglecontactForm={handleTogglecontactForm}
              />
              <TreatmentCost
                treatmentlist={HomeData?.treatmentData}
                handleTogglecontactForm={handleTogglecontactForm}
              />
              <WhyChoose
                chooselist={HomeData?.whychoose}
                handleTogglecontactForm={handleTogglecontactForm}
              />
              <PatientSay handleTogglecontactForm={handleTogglecontactForm} />
              <AfterSurgery
                surgerydata={HomeData?.after_surgery}
                handleTogglecontactForm={handleTogglecontactForm}
              />
              <FAQ faqlist={HomeData?.Faq} />
            </div>
            <div className="col-12 col-lg-4 order-1 order-lg-2">
              <div className="position-sticky" style={{ top: "20px" }}>
                <RightSticky />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Popup open={open} onClose={handleTogglecontactForm}>
        <Form handleTogglecontactForm={handleTogglecontactForm} />
      </Popup>
    </>
  );
};

export default HomePageComponent;
