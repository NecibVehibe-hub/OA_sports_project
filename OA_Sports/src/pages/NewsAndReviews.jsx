import Title from '../components/Titels.jsx'
import ada from '../assets/ada.jpg'
import avatar from '../assets/avatar.jpg'
import arrow1 from '../assets/arrow1.svg'
import star1 from '../assets/star_1.svg'
import star3 from '../assets/star_3.svg'
import InterestedCard from '../components/InterestedCard.jsx'
import saha from '../assets/saha.jpg'
import Footer  from '../components/Footer.jsx'
import VoiceSearch from '../components/SearchInput.jsx'
import Group151 from '../assets/Group151.svg'
import image121 from '../assets/image121.jpg'
import video2 from '../assets/video2.mp4'
import Group235 from '../assets/Group_235.svg'
import Group_623 from '../assets/Group_623.svg'


function Card({name,profile,text,title}){
    function Tag(){
        return(
            <div className='border border-mainYellow rounded-2xl py-1 px-3 flex items-center gap-1 text-mainYellow  '>
                <div className='bg-mainYellow w-1.5 h-1.5 rounded-[50%]'></div>
                <span className='text-mainYellow '>Tag</span>
            </div>
        )
    }

    return(
        <div className=' rounded-2xl border border-[#535862] bg-blackBg h-full flex flex-col gap-3 p-2 '>
            <img src={ada} className='rounded-[14px]' alt="" />
            <div className='flex flex-col gap-4 p-2'>
                <div className='flex flex-col gap-1.5'>
                    <span className='text-[#D5D7DA] text-[12px]'>25 Oct 2025</span>
                    <header className='text-mainYellow font-bold font-platypiItalic text-[26px]'>Night Games</header>
                    <p>We manage the planning behind the scenes with expertise, while helping you excel on the field.</p>
                </div>
                <div className='flex gap-4.5'>
                    <Tag/>
                    <Tag/>
                    <Tag/>
                </div>
                <div className='flex items-center justify-between w-full'>
                    <img src={avatar} className='rounded-[200px] w-8' alt="" />
                    <span className='text-[#D5D7DA] w-20'>Ahmed Ali</span>
                    <span className='text-mainYellow flex items-center font-semibold'>Read more <img src={arrow1} alt="" /></span>
                </div>
            </div>
        </div>
    )
}


function What_our_clients_say_about_us(){

    function Card(){
        return(
            <div className='w-70.25 flex flex-col gap-3.5 rounded-2xl p-4 bg-blackBg shrink-0'>
                <div className='flex items-center gap-3 relative'>
                    <img src={avatar} className='rounded-[200px] w-8 border border-mainYellow' alt="" />
                    <div className='flex flex-col'>
                        <span className='text-mainYellow font-bold'>Ahmed Ali</span>
                        <span className='text-[12px]'>Football Player</span>
                        <img src={star3} className='absolute left-40' alt="" />
                    </div>
                    <img src={star1} className='absolute top-35 left-40' alt="" />
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                </p>
            </div>
        )
    }

    return(
        <div className='flex flex-col py-6 gap-6'>
            <Title start={"What our"} center={"clients"} end={"say about us"} />
            <div className='flex gap-x-4 overflow-x-auto no-scrollbar'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}



function NewsContent(){

    const Spans=({text})=>{
        return(
            <span className='font-platypiItalic text-white font-bold text-xl'>{text}</span>
        )
    }
    const Paragraph=({text})=>{
        return(
            <p>{text}</p>
        )
    }    
    return(
        <div className='text-white flex flex-col gap-6'>
            <div className='flex flex-col'>
                <span className='text-mainYellow'>25 October 2025</span>
                <Title start={"Academy latest"} center={"news and updates"} />
            </div>
            <img src={image121} className='rounded-2xl h-38.5 w-full' alt="" />
            <div className='relative overflow-hidden'>
                    <Paragraph text={" From first look to final player conversion, design impacts every step of a game's journey.In the video game industry, graphic design isn’t just about aesthetics. It’s how studios communicate with publishers, players, and the wider gaming community. Whether it’s presenting a new project, preparing a crowdfunding campaign, or crafting a store page, design is what makes your message clear, appealing, and memorable."}/>
                    <br/>
                    
                    <img src={Group235} className='-right-2 absolute' alt="" />

                    <Paragraph text={"Here are five essential reasons why graphic design is a critical tool for any game developer or studio."} />
                    <br/>
                    
                    <Spans text={"First Impressions define Perception"}/>
                    <br/>
                    
                    <Paragraph text={"The first visual contact someone has with your game will heavily influence how they perceive its quality and relevance.This first impression might come from a Steam capsule, a pitch deck cover, a Kickstarter banner, or a social media teaser. If these visuals fail to quickly communicate what your game is about, or look unpolished, the opportunity for engagement is lost.Even before gameplay videos or text descriptions, these images tell players or publishers whether the game feels premium, amateur, unique, or forgettable.➡ Example: A survival-horror game using bright, cartoonish visuals on its landing page sends a confusing signal. The design must match the tone of the experience you’re offering."} />
                    <img src={Group_623} className='absolute -right-34 w-50 top-210 ' alt="" />
                    <br/>
                    <Spans text={"Consistency builds Professional Credibility"}/>
                    <Paragraph text={"Consistent design across all communication channels reflects a studio’s reliability and attention to detail. It shows that you’re serious about your project.This involves using the same color palettes, fonts, icon styles, and logo applications across materials such as Steam pages, press kits, pitch decks, websites, and social media.Inconsistent or chaotic design makes it harder for players or publishers to trust your project, even if the game itself is promising.➡ Example: If your Twitter visuals look completely different from your press releases, it weakens the sense of a unified brand and damages recognition."}  />
                    <br/>
                    <div className='w-full h-30 rounded-2xl overflow-hidden isolation-isolate'>
                        <video autoPlay loop muted  playsInline className='w-full h-full object-cover' ><source src={video2} type="video/mp4" /></video>
                    </div>
                    <br/>
                    <Spans text={"Design Simplifies Complex ideas"}  />
                    <br/>
                    <Paragraph text={"Games are intricate products, and explaining unique gameplay mechanics, monetization models, or narrative systems in plain text is often ineffective.Visual aids — like infographics, diagrams, wireframes, and UI mockups — are essential for making complex ideas easy to grasp at a glance.➡ Example: A roguelike with procedural map design can be far better explained with a simple diagram showing how levels evolve, rather than a lengthy paragraph of text.Whether you’re preparing a pitch presentation for publishers or an onboarding tutorial for players, clear visuals enhance comprehension and retention."} />
                    <br/>
                    <br/>
                    <img src={Group_623} className='absolute -right-34 w-50 bottom-90 ' alt="" />
                    <Spans text={"Good Design differentiates you in a Saturated Market"}  />
                    <br/>
                    <Paragraph text={"The gaming landscape is extremely competitive. High-quality design is one of the few reliable ways to stand out when players or stakeholders are quickly scrolling through endless options.Polished design can elevate even small indie projects by making them look production-ready and professional.➡ Example: A Kickstarter campaign with consistent branding, custom visuals for reward tiers, and high-quality concept art is more likely to attract attention than a campaign relying on generic templates.Design becomes a key differentiator that can either open doors or keep them firmly shut."}  />
            </div>
        </div>
    )
}


function Related_topics(){
    return(
        <div className='flex flex-col gap-6'>
            <Title center={"Related"} end={"topics"} />
            <div className='flex gap-x-4 overflow-x-auto no-scrollbar'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}



function NewsAndReviews(){
    return(
        <div className="text-white w-screen mt-20">
            <div className='flex flex-col px-4 py-6  sm:py-8 lg:py-12 relative lg:px-24 lg:gap-10 gap-6'>
                <img src={Group151} className="absolute right-0 hidden lg:block -top-20  z-10" alt="" />
                <div className='flex items-center justify-between '>
                    <Title start={"Our"} center={"News"} />
                    <span className='text-mainYellow text-[16px] font-bold lg:text-[28px] cursor-pointer'>View all</span>
                </div>
                <VoiceSearch/>
                <div className='flex gap-4 overflow-x-auto no-scrollbar'>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <What_our_clients_say_about_us/>
                <InterestedCard img={saha} />
                <NewsContent/>
                <Related_topics/>
            </div>
            <Footer/>
        </div>
    )
}
export default NewsAndReviews;