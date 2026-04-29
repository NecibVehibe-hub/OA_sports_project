import Title from "../Titels";
import newStar from "../../assets/newStar.png"
import saglik from "../../assets/saglik.png"
import boss from "../../assets/boss.jpg"
import PricingPlansButton from "../Pricing_Plans_Button";
function Imgs(){
    return(
        <>
            <img src={boss} className="rounded-3xl" alt="" />
        </>
    )
}


function OurPartnership({img1,img2}){
    img1=newStar;
    img2=saglik;
    return(
        <div className="w-full h-270 py-6 px-4 flex flex-col gap-4">
            <Title start={"Our"} center={"Partnership"}/>
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
                <Title start={'Partners with'} center={"SBU university !"}/>
                <div className="flex flex-col gap-5">
                    <div className="text-whiteColor">
                        <p>OA Sports is a multifaceted sports consulting and management company that brings together multidisciplinary expertise under one roof, OA Sports is a multifaceted sports consulting and management company that brings together multidisciplinary expertise under one roof.</p>
                        <br />
                        <p>OA Sports is a multifaceted sports consulting and management company that brings together multidisciplinary expertise.</p>
                    </div>
                    <PricingPlansButton/>
                </div>
            </div>
        </div>
    )
}
export default OurPartnership;