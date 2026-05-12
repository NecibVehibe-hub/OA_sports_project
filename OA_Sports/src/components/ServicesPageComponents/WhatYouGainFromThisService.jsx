import Title from "../Titels";
import foto123 from "../../assets/foto123.png"
import { useTranslation } from "react-i18next";
import messi from "../../assets/messi.svg"
import Group_5 from "../../assets/Group_5.svg"
import PricingPlansButton from "../Pricing_Plans_Button";

function WhatYouGainFromThisService(){
    const {t}=useTranslation()
    function Card({text}){
        return(
            <div className={`flex flex-col justify-between gap-4 border-2 rounded-2xl min-w-63.25 border-mainYellow p-2 `}>
                <img src={foto123} className="rounded-xl h-full" alt="" />
                <div className="text-white p-1.5 bg-blackBg">
                    <p>{text}</p>
                </div>
            </div>
        )
    }


    return(
        <div className="w-full py-6 px-4 flex flex-col  gap-6">
            <div className="flex flex-col gap-4.5">
                <Title start={t("WhatYouGainFromThisService.What_you")} center={t("WhatYouGainFromThisService.Gain")} end={t("WhatYouGainFromThisService.from_this_service")}/>
                <div className="w-full flex gap-4 no-scrollbar overflow-auto">
                    <Card text={t("WhatYouGainFromThisService.Cards.card1")}/>
                    <Card text={t("WhatYouGainFromThisService.Cards.card2")}/>
                    <Card text={t("WhatYouGainFromThisService.Cards.card3")}/>
                </div>
                <div style={{backgroundImage:`url(${Group_5})`}} className="bg-cover flex items-center justify-center bg-no-repeat w-full ">
                    <img src={messi} className="lg:hidden" alt="" />
                </div>
                <PricingPlansButton variant={"ServicesButton"}/>
            </div>
        </div>
    )
}
export default WhatYouGainFromThisService;