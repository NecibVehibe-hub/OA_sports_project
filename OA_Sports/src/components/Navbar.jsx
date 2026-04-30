import { Bars3Icon,XMarkIcon,ChevronDownIcon,ChevronUpIcon } from '@heroicons/react/24/outline'
import star from '../assets/star.png'
import alt from '../assets/alt.png'
import { useImperativeHandle, useState } from 'react';
import ContactUsButton from './ContactUsButton';
import { useTranslation } from "react-i18next";

function Navbar(){
    const { t, i18n } = useTranslation();
    const [menuIsOpen,setMenu]=useState(false);

    const [stateDown,setState]=useState(true)
    const [isActive,setIsActive]=useState(t("navbar.Home"))
    const [language,setLanguage]=useState("en")
    const toggleMenu=()=>{
        setMenu(!menuIsOpen);
    }
    let menuItems = [
        t("navbar.Home"),
        t("navbar.Services"),
        t("navbar.Partners"),
        t("navbar.NewsAndReviews"),
        t("navbar.Pricing"),
        t("navbar.AboutUs"),
        t("navbar.ContactUs"),
    ];
    let languages = [
    { name: "tr", label: "Türkçe" },
    { name: "en", label: "English" },
    { name: "ar", label: "العربية" },
    { name: "es", label: "Español" },
    { name: "fr", label: "Français" },
    { name: "pt", label: "Português" },
    { name: "ru", label: "Русский" },
    { name: "de", label: "Deutsch" },
    { name: "it", label: "Italiano" },
    { name: "ja", label: "日本語" },
    { name: "ko", label: "한국어" },
    { name: "zh", label: "中文" }
    ];



    return(
        <div className='w-full flex justify-self-center flex-col'>
            <nav className={`w-full h-20 border-b  bg-blackBg flex flex-row items-center justify-self-center justify-between px-4`}>
                <img src={alt} className='w-18 h-18' ></img>
                <span className='w-12 h-12 flex justify-center items-center'>{menuIsOpen ?  <XMarkIcon className="w-6 h-6 stroke-mainYellow" onClick={toggleMenu}  />:<Bars3Icon className="w-6 h-6 text-mainYellow" onClick={toggleMenu} />}</span>
            </nav>
            <hr className={`${menuIsOpen ? "border-borderColor":"hidden"} w-93.75 flex justify-self-center z-30`} />
            <nav className={`${menuIsOpen ? "":"hidden"} bg-blackBg h-screen flex items-center pb-3 flex-col pt-4`}>
                <ul id="menu" className='w-85.75 h-114.75 flex flex-col justify-between '>
                    {menuItems.map((item)=>(<li className={`font-bold leading-none ${isActive==item ? "text-mainYellow":"text-navFont"}`} onClick={()=>setIsActive(item)}>{item}</li>))}
                    <ContactUsButton text={t("navbar.ContactUs")} variant="MenuButton" />
                </ul>
                <span className='w-85.75 mt-6 flex justify-between'><li className='font-bold list-none leading-none text-navFont'>{t("navbar.Language")}</li><button onClick={()=>setState(!stateDown)} className='flex gap-1 text-navFont'><img src="" alt="" /><span className='text-mainYellow'>{language}</span>{stateDown ? <ChevronUpIcon className='w-6 h-6 text-mainYellow'></ChevronUpIcon>:<ChevronDownIcon  className='w-6 h-6 text-mainYellow'></ChevronDownIcon>}</button></span>
                <hr className='h-4' />
                <div className={`${stateDown? "hidden":""} w-85.75 overflow-x-hidden  flex flex-col gap-3 h-43 overflow-y-auto`}>
                    {languages.map((language)=>(<li onClick={()=>setLanguage(language.name),()=>i18n.changeLanguage(language.name)} className='text-white'>{language.label}</li>))}
                </div>
            </nav>
        </div>
    )
}
export default Navbar;

