import { useState } from "react";
import { useTranslation } from "react-i18next";
import Title from "../components/Titels";
import { SparklesIcon } from "@heroicons/react/24/outline";
import Group from "../assets/Group.png"
import oyuncu from "../assets/oyuncu.png"
import PricingPlansButton from "../components/Pricing_Plans_Button";

function ServicesTopFirstContainerText({text}){
    return(
        <span className="w-full flex gap-2 flex-row">
            <SparklesIcon className="w-30 h-10 text-mainYellow" />
            <p>{text}</p>
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
        <div className="w-screen mt-20 py-6  sm:py-8">
            {/*-----------------first container---------- */}
                <div className="first-container px-4 flex flex-col gap-y-5 sm:px-6 md:px-12 lg:px-16 lx:px-24">
                    <div className="services-top bg-blackBg py-4 px-3 overflow-x-auto  no-scrollbar rounded-l-[48px]  flex gap-x-4">
                        {servicesList.map((item,index)=>(  <button key={index} className={` py-2 transition px-2 whitespace-nowrap rounded-[48px]  font-bold text-[20px] ${IsActive===index ? "bg-mainYellow text-blackBg":"text-white"}`} onClick={()=>SetIsActive(index)}>{t(item)}</button>  ))}
                    </div>
                    <div className="pt-6 flex flex-col gap-6">
                        <div className="flex flex-col gap-4.5">
                            <Title center={"Be the Architect of Your Career"}/>
                            <div className="w-full flex flex-col gap-4 text-white">
                                <ServicesTopFirstContainerText text={t("ServicesTopFirstContainerText.text1")}/>
                                <ServicesTopFirstContainerText text={t("ServicesTopFirstContainerText.text2")}/>
                                <ServicesTopFirstContainerText text={t("ServicesTopFirstContainerText.text3")}/>
                                <ServicesTopFirstContainerText text={t("ServicesTopFirstContainerText.text4")}/>
                            </div>
                        </div>
                        <div style={{backgroundImage:`url(${Group})`}} className="bg-contain bg-no-repeat bg-center w-full">
                            <img src={oyuncu} className="rotate-14" alt="player" />
                        </div> 
                        <PricingPlansButton variant={"ServicesButton"}/>
                    </div>
                </div>
            {/*------------------------------------------*/}
        </div>
    )
}
export default Services;