import ContactUsButton from "./ContactUsButton";
import { menuItems,languages } from './NavData';
import {ChevronDownIcon,ChevronUpIcon } from '@heroicons/react/24/outline'
import { useTranslation } from "react-i18next";
import { useState } from "react";
import en from "../assets/flags/en.png"
import stickyNote from "../assets/stickyNote.png"

function DesktopNavbar(){
    const { t, i18n } = useTranslation();
    const [flag,setFlag]=useState(en);
    const [language,setLanguage]=useState("en")
    const [stateDown,setState]=useState(true)
    const [isActive,setIsActive]=useState(t("navbar.Home")) 
    return(
        <nav className="fixed top-0 w-full z-50 h-20 hidden lg:flex  items-center text-whiteColor justify-between gap-4 3xl:w-360 lg:px-4 xl:px-24  bg-blackBg">
            <img src={stickyNote} className="rounded-sm lg:w-10 3xl:w-14" alt="" />
            <ul id="menu" className='lg:min-w-xl 2xl:w-3xl flex gap-3 3xl:gap-6 items-center justify-center flex-row h-3/5 flex-wrap'>
                {menuItems.map((item)=>(<li className={`font-bold cursor-pointer leading-none ${isActive==t(item)? "text-mainYellow":"text-navFont"}`} onClick={()=>setIsActive(t(item))}>{t(item)}</li>))}
            </ul>
            <div className="flex max-w-66.5  gap-3 3xl:gap-10 items-center justify-between">
                <div className="w-22 h-6">
                    <span className='flex justify-between '>
                        <span className="flex items-center justify-center gap-2">
                            <img src={flag} className="w-6 h-6" alt="" />
                            {language.toUpperCase()}
                        </span>
                        <button onClick={()=>setState(!stateDown)} className='flex gap-1 cursor-pointer text-navFont'>{stateDown ? <ChevronDownIcon  className='w-6 h-6 text-mainYellow'></ChevronDownIcon>:<ChevronUpIcon className='w-6 h-6 text-mainYellow'></ChevronUpIcon>}</button>
                    </span>
                    <div className={`${stateDown? "hidden":""} w-43 mt-5 py-2 px-3 list-none absolute z-50 flex flex-col gap-3 shadow-xs  shadow-openYellow bg-blackBg `}>
                        {languages.map((language)=>(<li onClick={()=>{setLanguage(language.name);i18n.changeLanguage(language.name);setFlag(language.img)}} className='text-white flex items-center gap-2 cursor-pointer hover:text-mainYellow'><img src={language.img} className="w-5 h-5" alt="" />{language.label}</li>))}
                    </div>
                </div>
                <ContactUsButton variant="DeskTopNavButton"/>
            </div>
            
        </nav>
    )
}

export default DesktopNavbar;
// bg-blackBg min-w-[80%] mx-auto gap-4 hidden lg:flex   items-center text-white justify-between px-24  h-20 xl:gap-40 