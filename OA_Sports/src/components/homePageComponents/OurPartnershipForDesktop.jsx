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


function OurPartnershipForDesktop({img1,img2}){
    img1=newStar;
    img2=saglik;
    const {t} = useTranslation();
    return(
        <div className="w-360 h-223.25 py-12 px-24 hidden flex-col gap-16 3xl:flex">
            <Title start={t("OurPartnership.Our")} center={t("OurPartnership.Partnership")}/>
            <div className="w-312 h-179.5 flex flex-col  justify-between">
                    <div className="w-full h-37.75 flex justify-center items-center flex-row-reverse gap-6">
                        <img src={img1} className="object-cover w-52.5 h-49" alt="" />
                        <img src={img2} className="w-40 h-40" alt="" />
                    </div>
                    <div className="w-full h-122.5 flex flex-row items-center bg-blackBg rounded-4xl gap-6 p-7">
                        <div className="w-206 h-98.5 flex flex-col justify-center gap-6">
                            <Title start={t("OurPartnership.start")} center={t("OurPartnership.center")}/>
                            <p className="text-white">{t("OurPartnership.text1")}</p>
                            <p className="text-white">{t("OurPartnership.text2")}</p>
                            <PricingPlansButton variant={"HaveShadow"}/>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default OurPartnershipForDesktop;