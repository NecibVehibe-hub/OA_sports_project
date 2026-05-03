import Title from "../Titels";
import { useState } from "react";
import ball from "../../assets/ball.jpg";
import { useTranslation } from "react-i18next";
const img=ball;


function Card({title,text,img,isOpen}){
    return(
        <div style={{ backgroundImage: `url(${img})` }} className={`w-full p-2.75 h-full rounded-2xl flex items-end bg-cover bg-position-[center_40%]`}>
        {isOpen && (
            <div id="textDiv" className="h-36 w-80  rounded-2xl flex flex-col p-3 backdrop-blur-md bg-white/1 border border-x-0  border-b-white/20 border-t-white/20">
            <span className="text-mainYellow font-platypiItalic text-2xl">{title}</span>
            <p className="text-openYellow">{text}</p>
            </div>
        )}
        </div>
    )
}

function WhatOASportsDo(){
    const {t} = useTranslation();
    const cardsList = [
        {title:t("WhatOASportsDo.card1.title"), text:t("WhatOASportsDo.card1.text"), img:img},
        {title:t("WhatOASportsDo.card2.title"), text:t("WhatOASportsDo.card2.text"), img:img},
        {title:t("WhatOASportsDo.card3.title"), text:t("WhatOASportsDo.card3.text"), img:img},
        {title:t("WhatOASportsDo.card4.title"), text:t("WhatOASportsDo.card4.text"), img:img},
        {title:t("WhatOASportsDo.card5.title"), text:t("WhatOASportsDo.card5.text"), img:img},
        {title:t("WhatOASportsDo.card5.title"), text:t("WhatOASportsDo.card5.text"), img:img},
        {title:t("WhatOASportsDo.card5.title"), text:t("WhatOASportsDo.card5.text"), img:img},
        {title:t("WhatOASportsDo.card5.title"), text:t("WhatOASportsDo.card5.text"), img:img},
    ]

    const [IsOpen,setIsOpen] = useState(0)

    return(
        <div className="w-full h-215 md:h-100 bg-bg py-6 px-4 flex flex-col gap-3 3xl:w-360 3xl:py-12 3xl:px-24 3xl:h-148.5 3xl:gap-8">
            <Title start={t("WhatOASportsDo.What")} center={t("WhatOASportsDo.OA_sports")} end={t("WhatOASportsDo.do")}/>
            <div className="w-85.75 h-189 flex flex-col md:w-full md:flex-row gap-4 3xl:gap-3.5">
                {cardsList.map((card,index)=>(
                <div key={index} className={`w-full 3xl:h-100  ${IsOpen!==index ?"md:h-full":""}  ${IsOpen===index ? ("h-80"):"h-25"}`} onClick={()=>setIsOpen(index)} >
                    <Card {...card} isOpen={IsOpen===index}/>
                </div>
                ))}
            </div>
        </div>
    )
}

export default WhatOASportsDo;