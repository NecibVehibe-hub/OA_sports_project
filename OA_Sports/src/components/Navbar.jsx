import { Bars3Icon,XMarkIcon,ChevronDownIcon,ChevronUpIcon } from '@heroicons/react/24/outline'
import star from '../assets/star.png'
import { useImperativeHandle, useState } from 'react';
import ContactUsButton from './ContactUsButton';
// import x from '../../public/locales/en/en_translation.json'

// let y=0;

function Navbar(){
    const [menuIsOpen,setMenu]=useState(false);
    const toggleMenu=()=>{
        setMenu(!menuIsOpen);
    }
    const [stateDown,setState]=useState(true)
    const [isActive,setIsActive]=useState("Home")
    let menuItems=[ 
        "Home",
        "Services",
        "Partners",
        "News and Reviews",
        "Pricing",
        "About Us",
        "Contact Us",
    ]
    let languages = [
        "Türkçe",
        "English",
        "العربية",
        "Español",
        "Français",
        "Português",
        "Русский",
        "Deutsch",
        "Italiano",
        "日本語",
        "한국어",
        "中文"
];


    return(
        <div className='w-full flex justify-self-center flex-col'>
            <nav className={`w-full h-20 border-b  bg-blackBg flex flex-row items-center justify-self-center justify-between px-4`}>
                <img src={star} className='w-18 h-18' ></img>
                <span className='w-12 h-12 flex justify-center items-center'>{menuIsOpen ?  <XMarkIcon className="w-6 h-6 stroke-mainYellow" onClick={toggleMenu}  />:<Bars3Icon className="w-6 h-6 text-mainYellow" onClick={toggleMenu} />}</span>
            </nav>
            <hr className={`${menuIsOpen ? "border-borderColor":"hidden"} w-93.75 flex justify-self-center z-30`} />
            <nav className={`${menuIsOpen ? "":"hidden"} bg-blackBg h-screen flex items-center pb-3 flex-col pt-4`}>
                <ul id="menu" className='w-85.75 h-114.75 flex flex-col justify-between '>
                    {menuItems.map((item)=>(<li className={`font-bold leading-none ${isActive==item ? "text-mainYellow":"text-navFont"}`} onClick={()=>setIsActive(item)}>{item}</li>))}
                    <ContactUsButton text="Contact Us" variant="MenuButton" />
                </ul>
                <span className='w-85.75 mt-6 flex justify-between'><li className='font-bold list-none leading-none text-navFont'>Language</li><button onClick={()=>setState(!stateDown)} className='flex gap-1 text-navFont'><img src="" alt="" /><span className='text-mainYellow'>EG</span>{stateDown ? <ChevronUpIcon className='w-6 h-6 text-mainYellow'></ChevronUpIcon>:<ChevronDownIcon  className='w-6 h-6 text-mainYellow'></ChevronDownIcon>}</button></span>
                <hr className='h-4' />
                <div className={`${stateDown? "hidden":""} w-85.75 overflow-x-hidden  flex flex-col gap-3 h-43 overflow-y-auto`}>
                    {languages.map((language)=>(<li className='text-white'>{language}</li>))}
                </div>
            </nav>
        </div>
    )
}
export default Navbar;