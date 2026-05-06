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
import OurLatestNewsForDesktop from "../components/homePageComponents/OurLatestNewsForDesktop";
import OurPartnershipForDesktop from "../components/homePageComponents/OurPartnershipForDesktop";

function Home(){
    const {t} = useTranslation();
    return(
        <div className="mt-20 md:mt-0 lg:mt-0 w-screen  bg-bg   3xl:flex 3xl:flex-col 3xl:items-center">
            <div className="relative h-screen w-full flex items-center">
                <video autoPlay loop muted  playsInline className="absolute inset-0 w-full h-full object-cover"><source src={video} type="video/mp4" /></video>
                <div className="absolute bottom-0 left-0 w-full h-42  bg-[linear-gradient(180deg,rgba(18,18,18,0)_0%,#121212_87.81%)]"></div>
                <div className="h-42.75 w-full relative z-10 flex flex-col items-center md:bottom-18 3xl:bottom-32 gap-8">
                    <div className="flex flex-col 3xl:items-center gap-3">
                        <span className="text-center text-mainYellow font-platypiItalic text-[26px] md:text-[40px] 3xl:text-6xl">{t("HomePage.The_power_that_shapes")} <br className="3xl:hidden" />{t("HomePage.the_game")}</span>
                        <span className="text-whiteColor md:text-2xl 3xl:text-4xl 3xl:font-platypiItalic">{t("HomePage.Every_move_matters_Every_second_counts")}</span>
                    </div>
                    <div className="w-66 h-11 flex justify-between ">
                        <PricingPlansButton variant={"HomePageButton"} />
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
            <OurLatestNewsForDesktop/>
            <OurPartnershipForDesktop/>
            <OurPartnership/>
            <Footer/>
        </div>
    )
}
export default Home;
