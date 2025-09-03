import Header from "@/common/header";
import HomeBanner from "@/common/homeBanner";
import CheckSurgery from "@/components/Home/CheckSurgery";
import RightSticky from "@/components/Home/RightSticky";
import StatsSection from "@/components/Home/StatsSection";
import DelayRisk from "@/components/Home/DelayRisk";
import TopDoctor from "@/components/Home/TopDoctor";
import ConsultDoctor from "@/components/Home/ConsultDoctor";
import { HomeData } from "@/constant/Home";
const HomePageComponent = () => {

    return (
        <div className="p-0">
            <Header />
            <HomeBanner data={HomeData?.banner} />
            <div className="row">
                <div className="col-12 mx-auto col-lg-8 order-2 order-lg-1">
                    <StatsSection data={HomeData?.stats} />
                    <CheckSurgery data={HomeData?.checkSurgery} />
                    <DelayRisk data={HomeData?.risks} />
                    <TopDoctor data={HomeData?.topDoctor
                    } />
                    <ConsultDoctor data={HomeData?.consultDoctor} />
                </div>
                <div className="col-12 col-lg-4 order-1 order-lg-2">
                    <div className="position-sticky" style={{ top: "20px" }}>
                        <RightSticky />
                    </div>
                </div>
            </div></div>
    )

}

export default HomePageComponent;