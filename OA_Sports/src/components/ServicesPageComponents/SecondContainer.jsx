import { useState } from "react";
import { useTranslation } from "react-i18next";
import DownArrow from "../../assets/Down.svg"
import Arrow from "../../assets/Arrow.svg"

function SecondContainer(){
    const {t}=useTranslation();
    const [isOpen,setIsOpen]=useState(1);


    let items=[
        {id:1,title:"01 Strategic Advantage",content:<Content_1/>},
        {id:2,title:"02 Performance Optimization",content:<Content_2/>},
        {id:3,title:"03 360° Multidisciplinary Professional Support",content:<Content_3/>},
        {id:4,title:"04 Professional Partnership",content:<Content_4/>}
    ]

    return(
        <div className="py-6 px-4 bg-gray-800">
            {items.map((item)=>(
                <div key={item.id} onClick={()=>setIsOpen(item.id)} className="w-full h-20 flex justify-between items-center py-4 border-x-0 border-t-0 border border-b-[#535862]">
                    <li className="list-none text-white">{item.title}</li>{isOpen===item.id ? (<img  src={Arrow} className="w-12" alt="" />):(<img className="w-12" src={DownArrow} alt="" />)}
                    <div className="bg-amber-700">
                        {isOpen === item.id && item.content}
                    </div>
                </div>
                
            ))}
        </div>
    )
}
export default SecondContainer;



function Content_1(){
    return(
        <div className="text-white">
            <h1>asfasdfasdf</h1>
            <h2>asdfasdf</h2>
        </div>
    )
}

function Content_2(){
    return(
        <div>

        </div>
    )
}

function Content_3(){
    return(
        <div>

        </div>
    )
}


function Content_4(){
    return(
        <div>

        </div>
    )
}