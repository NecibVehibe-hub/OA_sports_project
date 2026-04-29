import Title from "../Titels";
import ball from "../../assets/ball.jpg";



function Card({title,text,paragraph,img}){
    img=ball;
    return(
        <div className="w-full h-75.75 bg-blackBg rounded-2xl p-2">
            <div style={{ backgroundImage: `url(${img})` }}  className="bg-cover  bg-position-[center_60%] flex items-end rounded-2xl w-full h-full p-2 ">
                <div className="w-78.75 h-35.5 ">
                    <span className="font-platypiItalic text-[26px] text-mainYellow">{title}</span>
                    <p className="text-whiteColor">{text}</p>
                </div>
            </div>  
        </div>
    )
}


function OurLatestNews(){
    return(
        <div className="w-full py-6 px-4 flex flex-col gap-4">
            <Title start={"Our"} center={"latest"} end={"news"} />
            <div className="flex flex-col gap-4">
                <Card title={"A New talent has joined"} text={"OA Sports is a multifaceted sports consulting and management company that brings together multidisciplinary expertise under one roof."}/>
                <Card title={"A New talent has joined"} text={"OA Sports is a multifaceted sports consulting and management company that brings together multidisciplinary expertise under one roof."}/>
                <Card title={"A New talent has joined"} text={"OA Sports is a multifaceted sports consulting and management company that brings together multidisciplinary expertise under one roof."}/>
            </div>
        </div>
    )
}
export default OurLatestNews;