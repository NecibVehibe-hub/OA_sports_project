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
        <div className=' rounded-2xl border border-[##535862] bg-blackBg h-full flex flex-col gap-3 p-2 '>
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


function NewsAndReviews(){
    return(
        <div className="text-white w-screen mt-20">
            <div className='flex flex-col px-4 py-6  sm:py-8 lg:py-12 lg:px-24 lg:gap-10 gap-6'>
                <div className='flex items-center justify-between'>
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
                <Footer/>
            </div>
        </div>
    )
}
export default NewsAndReviews;