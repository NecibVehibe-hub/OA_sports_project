import Title from '../components/Titels.jsx'
import yildiz14 from "../assets/yildiz14.svg"
import { SparklesIcon } from "@heroicons/react/24/outline";
import ContactUsButton from '../components/ContactUsButton.jsx'
import two2 from '../assets/two2.png'
import Group124 from '../assets/Group124.svg'
import SecondContainer from '../components/PartnersPageComponents/SecondContainer.jsx';
import Footer from "../components/Footer.jsx"
import { useTranslation } from "react-i18next";

function PartnersTopFirstContainerText({text}){
    return(
        <span className="w-full flex items-start">
            <img src={yildiz14} alt="" />
            <p className="lg:w-full text-white lg:text-2xl" >{text}</p>
        </span>
    )
}



function Partners(){
    const {t}=useTranslation();
    return(
        <>
        <div className="w-screen mt-20 px-4 py-6 sm:py-8 xl:py-12 xl:px-24 flex flex-col 3xl:gap-15">
            <div className='flex flex-col gap-2.5 3xl:flex-row xl:py-12 xl:px-24'>
                <div className='flex flex-col gap-4 3xl:w-[70%] 3xl:gap-8'>
                    <Title start={t("Partners.Our")} center={t("Partners.Partners")} />
                    <span className='text-mainYellow text-3xl'>{t("Partners.Title")}</span>
                    <div className='w-full flex flex-col gap-4 3xl:gap-8'>
                        <PartnersTopFirstContainerText text={t("Partners.paragraphs.text1")} />
                        <PartnersTopFirstContainerText text={t("Partners.paragraphs.text2")} />
                        <PartnersTopFirstContainerText text={t("Partners.paragraphs.text3")} />
                        <PartnersTopFirstContainerText text={t("Partners.paragraphs.text4")} />
                    </div>
                    <ContactUsButton variant={"DeskTopNavButton"} />
                </div>
                <div className='relative mt-10 3xl:mt-0  3xl:w-[80%]'>
                    <img src={two2}  alt="" />
                    <div className="absolute bottom-0 left-0 w-full h-34  bg-[linear-gradient(180deg,rgba(18,18,18,0)_0%,#121212_87.81%)]"></div>
                    <img src={Group124} className='absolute bottom-0  right-0 3xl:w-[30%] 3xl:h-full 3xl:bottom-25' alt="" />
                </div> 
            </div>
            <SecondContainer text={<PartnersTopFirstContainerText text={t("Partners.SecondContainer.text")} />}/>
        </div>
            <Footer/>
        </>
    )
}

export default Partners;