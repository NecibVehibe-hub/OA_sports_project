import Title from "./Titels";
import { useState } from "react";
import ball from "../assets/ball.jpg";

const img=ball;


function Card({title,text,img,isOpen}){
    return(
        <div style={{ backgroundImage: `url(${img})` }} className={`w-full p-2.75 h-full rounded-2xl flex items-end bg-cover bg-position-[center_40%]`}>
        {isOpen && (
            <div id="textDiv" className="h-36 w-80 rounded-2xl flex flex-col p-3 backdrop-blur-md bg-white/1 border border-x-0  border-b-white/20 border-t-white/20">
            <span className="text-mainYellow font-platypiItalic text-2xl">{title}</span>
            <p className="text-openYellow">{text}</p>
            </div>
        )}
        </div>
    )
}

function WhatOASportsDo(){
    const cardsList = [
        {title:"Players Services", text:"Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img:img},
        {title:"Players Services", text:"Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img:img},
        {title:"Players Services", text:"Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img:img},
        {title:"Players Services", text:"Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img:img},
        {title:"Players Services", text:"Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img:img},
    ]

    const [IsOpen,setIsOpen] = useState(0)

    return(
        <div className="w-93.75 h-215 bg-black py-6 px-4 flex flex-col gap-3">
        <Title start={"What"} center={"OA sports"} end={"do"}/>
        <div className="w-85.75 h-189 flex flex-col gap-4">
            {cardsList.map((card,index)=>(
            <div key={index} className={`w-full ${IsOpen===index ? "h-80":"h-25"}`} onClick={()=>setIsOpen(index)} >
                <Card {...card} isOpen={IsOpen===index}/>
            </div>
            ))}
        </div>
        </div>
    )
}

export default WhatOASportsDo;