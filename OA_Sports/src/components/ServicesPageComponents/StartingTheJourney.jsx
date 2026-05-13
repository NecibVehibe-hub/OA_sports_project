import Title from "../Titels"
import { useTranslation } from "react-i18next";
import Group3 from "../../assets/Group3.png"
import image6 from "../../assets/image6.png"
import image11 from "../../assets/image11.svg"
import saha12 from "../../assets/saha12.png"
import card from "../../assets/card.svg"
import PricingPlansButton from "../Pricing_Plans_Button";
function Card({title,text,img,num}){
    return(
        <div className="w-full bg-blackBg flex flex-col gap-6 relative rounded-2xl p-4 lg:justify-between">
            <div className="bg-mainYellow text-[26px] font-bold font-platypiItalic text-blackBg flex justify-center items-center rounded-tl-2xl rounded-tr-[14px] absolute w-12.25 h-16.5 rounded-br-4xl">
                {num}
            </div>
            <img src={img} className="w-[60%] mx-auto" alt="" />
            <div className="bg-[#2B2B2B] p-3 rounded-xl flex gap-2.5 flex-col">
                <Title center={title} />
                <p className="text-white">{text}</p>
            </div>
        </div>
    )
}



function StartingTheJOurney(){
    const {t}=useTranslation();
    return(
        <div className="px-4 flex flex-col gap-6 mb-10">
            <Title center={t("StartingTheJOurney.Starting")} end={t("StartingTheJOurney.the_journey")} />
            <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
                <Card num={"01"} title={t("StartingTheJOurney.card1.title")} text={t("StartingTheJOurney.card1.text")} img={Group3} />
                <Card num={"02"} title={t("StartingTheJOurney.card2.title")} text={t("StartingTheJOurney.card2.text")} img={image6} />
                <Card num={"03"} title={t("StartingTheJOurney.card3.title")} text={t("StartingTheJOurney.card3.text")} img={image11} />
                <Card num={"04"} title={t("StartingTheJOurney.card4.title")} text={t("StartingTheJOurney.card4.text")} img={saha12} />
                <Card num={"05"} title={t("StartingTheJOurney.card5.title")} text={t("StartingTheJOurney.card5.text")} img={card} />
                <div className="w-full flex flex-col gap-4">
                <Title center={t("StartingTheJOurney.bigTitle")} />
                    <div className="w-full flex flex-col gap-2 text-whiteColor">
                        <p>{t("StartingTheJOurney.paragraph1")}</p>
                        <p>{t("StartingTheJOurney.paragraph2")}</p>
                    </div>
                    <PricingPlansButton variant={"ServicesButton"}/>
                    
                </div>
            </div>
        </div>
    )
}

export default StartingTheJOurney;



{/* <div className="w-full h-64 relative">
    <div className="bg-mainYellow w-46 absolute rounded-lg p-4 rotate-7">
        Choose your service
    </div>
    <div className="bg-whiteColor left-0 rotate-17 p-4 rounded-lg w-29 ">
        Buy Now
    </div>
    <div className="bg-whiteColor right-0 rotate-[-20deg] w-36 p-4 rounded-lg">
        Players service
    </div>
</div> */}