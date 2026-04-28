import Title from "./Titels";
import OurNumberTalksCard from "./OurNumbersTalk_Card";
function OurNumbersTalks(){
    return(
        <div className="h-86 w-93.75 py-6 px-4 flex flex-col gap-4 bg-black">
            <Title start={"Our"} center={"numbers"} end={"talks"}/>
            <div className="w-full min-h-64 no-scrollbar overflow-auto overflow-x-auto flex gap-5">
                <OurNumberTalksCard title={"150+"} underTitle={"Talents "} text={"OA Sports is a multifaceted sports consulting and management company that brings together multidisciplinary expertise under one roof."}/>
                <OurNumberTalksCard title={"150+"} underTitle={"Talents "} text={"OA Sports is a multifaceted sports consulting and management company that brings together multidisciplinary expertise under one roof."}/>
                <OurNumberTalksCard title={"150+"} underTitle={"Talents "} text={"OA Sports is a multifaceted sports consulting and management company that brings together multidisciplinary expertise under one roof."}/>
            </div>
        </div>
    )
}
export default OurNumbersTalks;