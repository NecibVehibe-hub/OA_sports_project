import Title from "../Titels";
import { useTranslation } from "react-i18next";

function Card({title,paragraph}){
    return(
        <div className="w-full h-39.5">
            <span className="text-whiteColor font-platypiItalic text-2xl">{title}</span>
            <div className="w-full h-full bg-blackBg rounded-2xl py-6 px-4">
                <p className="text-borderColor ">{paragraph}</p>
            </div>
        </div>
    )
}

function WhyOASports(){
    const {t} = useTranslation();
    return(
        <div className="w-full h-175 py-6 px-4 flex flex-col gap-4 bg-bg">
            <Title start={t("WhyOASports.Why")} center={t("WhyOASports.OA_sports")}  />
            <div className="h-253 w-full flex flex-col gap-14">
                <Card title={t("WhyOASports.card1.title")} paragraph={t("WhyOASports.card1.text")}/>
                <Card title={t("WhyOASports.card2.title")} paragraph={t("WhyOASports.card2.text")}/>
                <Card title={t("WhyOASports.card3.title")} paragraph={t("WhyOASports.card3.text")}/>            
            </div>
        </div>
    )
}
export default WhyOASports;