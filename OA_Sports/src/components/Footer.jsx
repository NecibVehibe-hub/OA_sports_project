import newStar from "../assets/newStar.png"
import { useState } from "react"
import { FaWhatsapp,FaPhone, FaEnvelope,FaLinkedin, FaCopyright, FaFacebook, FaVk, FaInstagram, FaTiktok, FaSnapchat} from "react-icons/fa";

function FooterTitles({title}){
    return(
        <span className="font-semibold text-mainYellow">{title}</span>
    )
}


function Footer(){
    const [isActive,setIsActive]=useState("Home")
    let menuItems=[ 
        "Home",
        "Services",
        "Latest News",
        "Articles",
        "Contact Us",
    ]
    return(
        <footer className="bg-blackBg text-white w-full h-150 p-4 flex flex-col gap-16">
            <div className="w-full h-full flex flex-col gap-14">
                <div className="w-full h-115 flex flex-col gap-8">
                    <div className="flex w-83 flex-col gap-2.5">
                        <img src={newStar} className="w-23  rounded-2xl h-22" alt="" />
                        <p className="text-whiteColor">
                            OA Sports is a multifaceted sports consulting and management company that brings together multidisciplinary expertise under one roof.
                        </p>
                    </div>
                    <div className="w-full h-full flex flex-col gap-3">
                        <div className="flex justify-between w-full h-45.5">
                            <div className="flex flex-col gap-2">
                                <FooterTitles title={"Fast Links"}/>
                                <ul className="flex flex-col gap-4">
                                    {menuItems.map((item)=>(<li className={`font-bold leading-none ${isActive==item ? "text-mainYellow":""}`} onClick={()=>setIsActive(item)}>{item}</li>))}
                                </ul>
                            </div>
                            <div className="w-45.75 flex flex-col items-start gap-3">
                                <FooterTitles title={"Contacts"}/>
                                <div className="flex flex-col gap-4">
                                    <span className="flex gap-3 items-center"><FaWhatsapp></FaWhatsapp><h1>055 991 3254</h1></span>
                                    <span className="flex gap-3 items-center"><FaPhone className="rotate-90"></FaPhone><h1>055 991 3254</h1></span>
                                    <span className="flex gap-3 items-center"><FaEnvelope></FaEnvelope><h1>drmarwa@gmail.com</h1></span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <FooterTitles title={"Stay Connected"}/>
                            <div className="flex gap-3">
                                <FaLinkedin size={25}></FaLinkedin>
                                <FaCopyright size={25}></FaCopyright>
                                <FaFacebook size={25}></FaFacebook>
                                <FaVk size={25}></FaVk>
                                <FaInstagram size={25}></FaInstagram>
                                <FaTiktok size={25}></FaTiktok>
                                <FaSnapchat size={25}></FaSnapchat>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-6 h-8 flex justify-between border-mainYellow border-t-2">
                    <small>©All Rights Reserved 2025</small>
                    <small>Privacy Policy <span className="ml-2">Terms</span></small>
                </div>
            </div>
        </footer>
    )
}
export default Footer;