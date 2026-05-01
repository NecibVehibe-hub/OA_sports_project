import Title from "../Titels";
import newStar from "../../assets/newStar.png"
import saglik from "../../assets/saglik.png"
import boss from "../../assets/boss.jpg"
import PricingPlansButton from "../Pricing_Plans_Button";
import { useTranslation } from "react-i18next";
function Imgs(){
    return(
        <>
            <img src={boss} className="rounded-3xl" alt="" />
        </>
    )
}


function OurPartnership({img1,img2}){
    const {t} = useTranslation();
    img1=newStar;
    img2=saglik;
    return(
        <div className="w-full h-270 py-6 px-4 flex flex-col gap-4">
            <Title start={t("OurPartnership.Our")} center={t("OurPartnership.Partnership")}/>
            <div className="w-full h-37.75 flex justify-center items-center flex-row-reverse gap-6">
                <img src={img1} className="object-cover w-36.25 h-34.25" alt="" />
                <img src={img2} className="w-30.25 h-30.25" alt="" />
            </div>
            <div className="h-93   no-scrollbar overflow-auto overflow-x-aut flex gap-4">
                <Imgs/>
                <Imgs/>
                <Imgs/>
                <Imgs/>
            </div>
            <div className="flex flex-col gap-3 w-full h-90">
                <Title start={t("OurPartnership.start")} center={t("OurPartnership.center")}/>
                <div className="flex flex-col gap-5">
                    <div className="text-whiteColor">
                        <p>{t("OurPartnership.text1")}</p>
                        <br />
                        <p>{t("OurPartnership.text2")}</p>
                    </div>
                    <PricingPlansButton variant={"HaveShadow"}/>
                </div>
            </div>
        </div>
    )
}
export default OurPartnership;