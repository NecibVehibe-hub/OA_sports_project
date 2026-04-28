import ContactUsButton from "../components/ContactUsButton";
import WhoWeAre from "../components/Who_We_Are";
import OurNumbersTalks from "../components/Our_numbers_talks";
import WhatOASportsDo from "../components/What_OA_sports_do";
import video from "../assets/video.mp4";
import WhyOASports from "../components/WhyOASports";

function Home(){
    return(
        <>
            <div className="relative h-203 w-93.75 flex items-center">
                <video autoPlay loop muted  playsInline className="absolute inset-0 w-full h-full object-cover"><source src={video} type="video/mp4" /></video>
                <div className="absolute bottom-0 left-0 w-full h-42  bg-[linear-gradient(180deg,rgba(18,18,18,0)_0%,#121212_87.81%)]"></div>
                <div className="h-42.75 w-full relative z-10 flex flex-col items-center gap-8">
                    <div className="flex flex-col gap-3">
                        <span className="text-center text-mainYellow font-platypiItalic text-[26px]">The power that shapes <br /> the game.</span>
                        <span className="text-whiteColor">Every move matters. Every second counts.</span>
                    </div>
                    <div className="w-66 h-11 flex justify-between ">
                        <button className="w-33 h-11 bg-mainYellow rounded-lg font-bold">Pricing Plans</button>
                        <ContactUsButton text="Contact Us" variant="HomePageButton"/>
                    </div>
                </div>
            </div>
            <WhoWeAre/>
            <OurNumbersTalks/>
            <WhatOASportsDo/>
            <WhyOASports/>
        </>
    )
}
export default Home;