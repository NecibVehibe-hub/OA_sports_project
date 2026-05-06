import { useState } from "react";
import { useTranslation } from "react-i18next";
import Title from "../components/Titels";
import { SparklesIcon } from "@heroicons/react/24/outline";
import Group from "../assets/Group.png"
import PricingPlansButton from "../components/Pricing_Plans_Button";
import Rectangle from "../assets/Rectangle.svg"
import BuyNowButton from "../components/BuyNowButton";
import SecondContainer from "../components/ServicesPageComponents/SecondContainer";




function ServicesTopFirstContainerText({text}){
    return(
        <span className="w-full flex gap-2 flex-row">
            <SparklesIcon className="w-30 lg:w-10 h-10 text-mainYellow" />
            <p className="lg:w-full" >{text}</p>
        </span>
    )
}


function Services(){
    const {t}=useTranslation();
    const [IsActive,SetIsActive]=useState(0);
    const servicesList = [
        t("servicesList.Players"),
        t("servicesList.Coaches"),
        t("servicesList.Referees"),
        t("servicesList.Squad_Planning"),
        t("servicesList.Scouting"),
        t("servicesList.Refereeing_Consultancy")
    ];
    return(
        <div className="w-screen mt-20 py-6 sm:py-8">
            {/*-----------------first container---------- */}
                <div className="first-container px-4 flex flex-col gap-y-5 sm:px-6 md:px-12 lg:px-16 lx:px-24">
                    <div className="services-top bg-blackBg py-4 px-3 overflow-x-auto  no-scrollbar rounded-l-[48px]  flex gap-x-4 lg:rounded-r-[48px]">
                        {servicesList.map((item,index)=>(  <button key={index} className={` py-2 cursor-pointer transition px-2 whitespace-nowrap rounded-[48px]  font-bold text-[20px] ${IsActive===index ? "bg-mainYellow text-blackBg":"text-white"}`} onClick={()=>SetIsActive(index)}>{t(item)}</button>  ))}
                    </div>
                    <div className="pt-6 flex flex-col items-center gap-6 lg:pt-0 lg:flex-row lg:items-center">
                        <div className="flex flex-col  gap-4.5 lg:w-[60%]">
                            <Title center={t("ServicesPage.title")}/>
                            <div className="w-full flex flex-col gap-4 lg:gap:8 text-white">
                                <ServicesTopFirstContainerText text={t("ServicesTopFirstContainerText.text1")}/>
                                <ServicesTopFirstContainerText text={t("ServicesTopFirstContainerText.text2")}/>
                                <ServicesTopFirstContainerText text={t("ServicesTopFirstContainerText.text3")}/>
                                <ServicesTopFirstContainerText text={t("ServicesTopFirstContainerText.text4")}/>
                            </div>
                            <BuyNowButton text={t("Buttons.BuyNowButton")} variant={"servicesPageButton"}/>
                        </div>
                        <div style={{backgroundImage:`url(${Group})`}} className="bg-contain bg-no-repeat bg-center lg:flex lg:justify-center lg:z-10">
                            <img src={Rectangle} className="lg:h-1/3" alt="player" />
                        </div> 
                        <PricingPlansButton variant={"ServicesButton"}/>
                    </div>
                </div>
            {/*------------------------------------------*/}
            <SecondContainer/>
        </div>
    )
}
export default Services;