import Title from "./Titels";

function Card({title,paragraph}){
    return(
        <div className="w-full h-39.5 bg-black ">
            <span className="text-whiteColor font-platypiItalic text-2xl">{title}</span>
            <div className="w-full h-full bg-blackBg rounded-2xl py-6 px-4">
                <p className="text-borderColor ">{paragraph}</p>
            </div>
        </div>
    )
}

function WhyOASports(){
    return(
        <div className="w-93.75 h-340 py-6 px-4 flex flex-col gap-4 bg-black">
            <Title start={"Why"} center={"OA sports"}  />
            <div className="h-253 w-full flex flex-col gap-14">
                <Card title={"A 360° perspective"} paragraph={"OA Sports is a multifaceted sports consulting and management company that brings together multidisciplinary expertise under one roof."}/>
                <Card title={"Real Experience"} paragraph={"OA Sports is a multifaceted sports consulting and management company that brings together multidisciplinary expertise under one roof."}/>
                <Card title={"Reports"} paragraph={"OA Sports is a multifaceted sports consulting and management company that brings together multidisciplinary expertise under one roof."}/>
                <Card title={"A 360° perspective"} paragraph={"OA Sports is a multifaceted sports consulting and management company that brings together multidisciplinary expertise under one roof."}/>
                <Card title={"Real Experience"} paragraph={"OA Sports is a multifaceted sports consulting and management company that brings together multidisciplinary expertise under one roof."}/>
                <Card title={"Reports"} paragraph={"OA Sports is a multifaceted sports consulting and management company that brings together multidisciplinary expertise under one roof."}/>                
            </div>
        </div>
    )
}
export default WhyOASports;