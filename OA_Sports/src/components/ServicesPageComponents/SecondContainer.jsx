import { useState } from "react";
import { useTranslation } from "react-i18next";
import DownArrow from "../../assets/Down.svg"
import Arrow from "../../assets/Arrow.svg"
import foto123 from "../../assets/foto123.png"
import yeni from "../../assets/yeni.png"

function SecondContainer(){
    const {t}=useTranslation();
    const [isOpen,setIsOpen]=useState(1);


    let items=[
        {id:1,title:t("SecondContainer.title1"),content:<Content_1/>},
        {id:2,title:t("SecondContainer.title2"),content:<Content_2/>},
        {id:3,title:t("SecondContainer.title3"),content:<Content_3/>},
        {id:4,title:t("SecondContainer.title4"),content:<Content_4/>}
    ]

    return(
        <div className="py-6 px-4">
            {items.map((item)=>(
                <div key={item.id} onClick={()=>setIsOpen(item.id)} className="w-full  flex flex-col py-4 border-x-0 border-t-0 border border-b-[#535862]">
                    <li className={`list-none flex items-center justify-between w-full ${isOpen === item.id ? "text-mainYellow":"text-white"}`}>{item.title}{isOpen===item.id ? (<img  src={Arrow} className="w-12" alt="" />):(<img className="w-12" src={DownArrow} alt="" />)}</li>
                    <div className="">
                        {isOpen === item.id && item.content}
                    </div>
                </div>
                
            ))}
        </div>
    )
}
export default SecondContainer;



function Content_1(){
    const {t}=useTranslation();
    function Card({text}){
        return(
            <div className="rounded-2xl border border-[#535862] text-white text-2xl overflow-y-auto no-scrollbar bg-blackBg py-6 px-4 flex gap-x-2.5 h-full min-w-80">
                <img src={yeni} className=" h-12" alt="" />
                <p>{text}</p>
            </div>
        )
    }


    return(
        <div className="text-blackBg text-2xl  flex flex-col gap-4">
            <div className="bg-mainYellow p-4 rounded-2xl">
                <p>{t("Content_1.paragraph2")}</p>
            </div>
            <img className="rounded-2xl" src={foto123} alt="" />
            <div className="bg-mainYellow p-4 rounded-2xl">
                <p>{t("Content_1.paragraph3")}</p>
            </div>
            <div className="w-full no-scrollbar h-50.75 overflow-auto pb-2 overflow-x-auto flex gap-2">
                <Card text={t("Content_1.paragraph1")}/>
                <Card text={t("Content_1.paragraph2")}/>
                <Card text={t("Content_1.paragraph3")}/>
            </div>  
        </div>
    )
}

function Content_2(){
    return(
        <div></div>
    )
}

function Content_3(){
    return(
        <div></div>
    )
}


function Content_4(){
    return(
        <div></div>
    )
}


