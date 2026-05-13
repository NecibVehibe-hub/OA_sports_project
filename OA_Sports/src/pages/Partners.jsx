import Title from '../components/Titels.jsx'
import yildiz14 from "../assets/yildiz14.svg"
import { SparklesIcon } from "@heroicons/react/24/outline";
import ContactUsButton from '../components/ContactUsButton.jsx'
import two2 from '../assets/two2.png'
import Group124 from '../assets/Group124.svg'
import SecondContainer from '../components/PartnersPageComponents/SecondContainer.jsx';
import Footer from "../components/Footer.jsx"

function PartnersTopFirstContainerText({text}){
    return(
        <span className="w-full flex items-start">
            <img src={yildiz14} alt="" />
            <p className="lg:w-full text-white" >{text}</p>
        </span>
    )
}




function Partners(){
    return(
        <div className="w-screen mt-20 px-4 py-6 sm:py-8 xl:py-12 xl:px-24">
            <div className='flex flex-col gap-2.5'>
                <Title start={"Our"} center={"Partners"} />
                <div className='flex flex-col gap-4'>
                    <Title center={"Let’s shape the future together"} />
                    <div className='w-full flex flex-col gap-4'>
                        <PartnersTopFirstContainerText text={"We build trust, draw a shared vision, and move with steady steps toward success."} />
                        <PartnersTopFirstContainerText text={"The value we bring to sports goes beyond short-term gains — it’s about securing your athletic legacy for the future."} />
                        <PartnersTopFirstContainerText text={"We’re not just a consulting company; we’re your strategic partner in your professional journey."} />
                        <PartnersTopFirstContainerText text={"We’re not just a consulting company; we’re your strategic partner in your professional journey."} />
                    </div>
                    <ContactUsButton variant={"DeskTopNavButton"} />
                    <div className='relative mt-10'>
                        <img src={two2} alt="" />
                        <div className="absolute bottom-0 left-0 w-full h-34  bg-[linear-gradient(180deg,rgba(18,18,18,0)_0%,#121212_87.81%)]"></div>
                        <img src={Group124} className='absolute bottom-0  right-0' alt="" />
                    </div> 
                </div>
            </div>
            <SecondContainer text={<PartnersTopFirstContainerText text={"OA Sports is a multifaceted sports consulting and management company that brings together multidisciplinary expertise under one roof."} />}/>
            <Footer/>
        </div>
    )
}

export default Partners;