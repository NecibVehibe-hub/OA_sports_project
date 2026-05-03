import Title from "../Titels";
import { useTranslation } from "react-i18next";

function Card({title,paragraph}){
    return(
        <div className="w-full  3xl:mb-20 h-39.5">
            <span className="text-whiteColor font-platypiItalic text-2xl 3xl:text-3xl">{title}</span>
            <div className="w-full h-full bg-blackBg rounded-2xl py-6 px-4 3xl:pt-8.5 3xl:px-5 3xl:pb-6 3xl:w-100 3xl:h-53">
                <p className="text-borderColor 3xl:text-2xl">{paragraph}</p>
            </div>
        </div>
    )
}

function WhyOASports(){
    const {t} = useTranslation();
    return(
        <div className="3xl:flex 3xl:justify-center 3xl:w-342">
            <div className="w-full  md:max-h-120.5 py-6 px-4  flex flex-col gap-4 bg-bg 3xl:py-12 3xl:px-12 3xl:gap-10  3xl:max-h-188.5">
                    <Title start={t("WhyOASports.Why")} center={t("WhyOASports.OA_sports")}/> 
                    <div className="3xl:w-312 flex flex-col md:grid md:grid-cols-2   gap-14 3xl:grid-cols-3 overflow-auto">
                        <Card title={t("WhyOASports.card1.title")} paragraph={t("WhyOASports.card1.text")}/>
                        <Card title={t("WhyOASports.card2.title")} paragraph={t("WhyOASports.card2.text")}/>
                        <Card title={t("WhyOASports.card3.title")} paragraph={t("WhyOASports.card3.text")}/> 
                        <Card title={t("WhyOASports.card3.title")} paragraph={t("WhyOASports.card3.text")}/>             
                        <Card title={t("WhyOASports.card3.title")} paragraph={t("WhyOASports.card3.text")}/>  
                        <Card title={t("WhyOASports.card3.title")} paragraph={t("WhyOASports.card3.text")}/>  
                    </div>
            </div>
        </div>
    )
}
export default WhyOASports;