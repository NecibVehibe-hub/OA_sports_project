import Title from "../Titels";
import { useTranslation } from "react-i18next";
import image_19 from "../../assets/image_19.svg"
import image_20 from "../../assets/image_20.svg"
import Generated from "../../assets/Generated.svg"
import image_23 from "../../assets/image_23.svg"
function WhyOASportsServices(){
    const {t}=useTranslation();

    function Card({img,title,text}){
        return(
            <div className="w-full ">
                <img src={img} alt="" />
                <div className="bg-mainYellow py-3 px-3 rounded-xl">
                    <header className="text-blackBg text-2xl font-platypiItalic font-bold">{title}</header>
                    <p className="text-[20px] text-blackBg">{text}</p>
                </div>
            </div>
        )
    }




    return(
        <div className="flex flex-col gap-6 py-6 px-4">
            <Title start={t("WhyOASportsServices.Why")} center={t("WhyOASportsServices.OA_sports")}/>
            <div className="flex flex-col gap-6">
                <Card img={image_19} title={t("WhyOASportsServices.card1.title")} text={t("WhyOASportsServices.card1.text") }/>
                <Card img={image_20} title={t("WhyOASportsServices.card2.title")} text={t("WhyOASportsServices.card2.text") } />
                <Card img={Generated} title={t("WhyOASportsServices.card3.title")} text={t("WhyOASportsServices.card3.text") }/>
                <Card img={image_23} title={t("WhyOASportsServices.card4.title")} text={t("WhyOASportsServices.card4.text") }/>
            </div>
        </div>
    )
}

export default WhyOASportsServices;