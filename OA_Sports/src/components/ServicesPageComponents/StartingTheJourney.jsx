import Title from "../Titels"
import { useTranslation } from "react-i18next";
import Group3 from "../../assets/Group3.png"
import image6 from "../../assets/image6.png"
import image11 from "../../assets/image11.svg"


function Card({title,text,img}){
    return(
        <div className="w-full bg-blackBg flex flex-col gap-6 relative  rounded-2xl p-4">
            <div className="bg-mainYellow text-[26px] font-bold font-platypiItalic text-blackBg flex justify-center items-center rounded-tl-2xl rounded-tr-[14px] absolute w-12.25 h-16.5 rounded-br-4xl">
                01
            </div>
            <img src={img} className="w-[50%] mx-auto" alt="" />
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
        <div className="px-4 flex flex-col gap-6">
            <Title center={"Starting"} end={"the journey"} />
            <div className="flex flex-col gap-4">
                <Card title={"Choose your service"} text={"Choose the service that suits you."} img={Group3} />
                <Card title={"Consultant call"} text={"Our consultant will contact you."} img={image6} />
                <Card title={"Analysis"} text={"We will Conduct a detailed needs analysis."} img={image11} />
                
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