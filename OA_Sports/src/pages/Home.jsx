import ContactUsButton from "../components/ContactUsButton";
import WhoWeAre from "../components/homePageComponents/Who_We_Are";
import OurNumbersTalks from "../components/homePageComponents/Our_numbers_talks";
import WhatOASportsDo from "../components/homePageComponents/What_OA_sports_do";
import video from "../assets/video.mp4";
import WhyOASports from "../components/homePageComponents/WhyOASports";
import InterestedCard from "../components/InterestedCard";
import PricingPlansButton from "../components/Pricing_Plans_Button";
import OurLatestNews from "../components/homePageComponents/OurLatestNews";
import OurPartnership from "../components/homePageComponents/Our_Partnership";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

function Home(){
    const {t} = useTranslation();
    return(
        <div className="max-w-106.75 bg-bg md:min-w-3xl">
            <div className="relative h-203 w-full flex items-center">
                <video autoPlay loop muted  playsInline className="absolute inset-0 w-full h-full object-cover"><source src={video} type="video/mp4" /></video>
                <div className="absolute bottom-0 left-0 w-full h-42  bg-[linear-gradient(180deg,rgba(18,18,18,0)_0%,#121212_87.81%)]"></div>
                <div className="h-42.75 w-full relative z-10 flex flex-col items-center gap-8">
                    <div className="flex flex-col gap-3">
                        <span className="text-center text-mainYellow font-platypiItalic text-[26px]">{t("HomePage.The_power_that_shapes")} <br />{t("HomePage.the_game")}</span>
                        <span className="text-whiteColor">{t("HomePage.Every_move_matters_Every_second_counts")}</span>
                    </div>
                    <div className="w-66 h-11 flex justify-between ">
                        <PricingPlansButton/>
                        <ContactUsButton variant="HomePageButton"/>
                    </div>
                </div>
            </div>
            <WhoWeAre/>
            <OurNumbersTalks/>
            <WhatOASportsDo/>
            <WhyOASports/>
            <InterestedCard/>
            <OurLatestNews/>
            <OurPartnership/>
            <Footer/>
        </div>
    )
}
export default Home;