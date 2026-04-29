import saha from '../assets/saha.jpg'
import Title from './Titels';
import BuyNowButton from './BuyNowButton';
function InterestedCard(){
    return(
        <div className="w-full flex gap-8 py-6 px-4">
            <div className="w-full relative h-full flex items-center  rounded-3xl">
                <img className='object-cover rounded-3xl' src={saha} alt="" />
                <div className='absolute flex justify-between items-end flex- w-80 h-13 my-6 mx-3 text-white'>
                    <div>
                        <Title center={"Interested?"}/>
                        <p className='font-semibold'>That’s just the start.</p>
                    </div>
                    <BuyNowButton text={"Buy Now"} variant={"mediumButton"}/>
                </div>
                
            </div>
        </div>
    )
}
export default InterestedCard;