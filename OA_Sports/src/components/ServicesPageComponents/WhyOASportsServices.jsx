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
            <Title start={"Why"} center={"OA sports"}/>
            <div className="flex flex-col gap-6">
                <Card img={image_19} title={"Experience"} text={"You work with licensed professionals with real on-field expertise."}/>
                <Card img={image_20} title={"Fully personalized"} text={"Every service is designed according to your profile, needs, and goals."} />
                <Card img={Generated} title={"Trust & transparency"} text={"All your analyses and reports are accessible via a private digital dashboard. Full confidentiality guaranteed."}/>
                <Card img={image_23} title={"Proven results"} text={"We see measurable improvement and clear progress in the players we serve"}/>
            </div>
        </div>
    )
}

export default WhyOASportsServices;