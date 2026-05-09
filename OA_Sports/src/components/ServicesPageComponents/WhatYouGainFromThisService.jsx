import Title from "../Titels";
import foto123 from "../../assets/foto123.png"
import { useTranslation } from "react-i18next";

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
        <div className="bg-gray-800 w-full py-6 px-4 flex flex-col gap-6">
            <div className="flex flex-col gap-4.5">
                <Title start={t("WhatYouGainFromThisService.What_you")} center={t("WhatYouGainFromThisService.Gain")} end={t("WhatYouGainFromThisService.from_this_service")}/>
                <div className="w-full flex gap-4 no-scrollbar overflow-auto">
                    <Card text={t("WhatYouGainFromThisService.Cards.card1")}/>
                    <Card text={t("WhatYouGainFromThisService.Cards.card2")}/>
                    <Card text={t("WhatYouGainFromThisService.Cards.card3")}/>
                </div>
                <div className="w-full bg-gray-900 ">

                </div>
            </div>
        </div>
    )
}
export default WhatYouGainFromThisService;