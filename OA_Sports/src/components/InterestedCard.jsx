import saha from '../assets/saha.jpg'
import Title from './Titels';
import BuyNowButton from './BuyNowButton';
import { useTranslation } from "react-i18next";
function InterestedCard(){
    const {t} = useTranslation();
    return(
        <div className="w-full flex gap-8 py-6 px-4">
            <div className="w-full relative h-full flex items-center  rounded-3xl">
                <img className='object-cover rounded-3xl' src={saha} alt="" />
                <div className='absolute flex justify-between items-end flex- w-80 h-13 my-6 mx-3 text-white'>
                    <div>
                        <Title center={t("InterestedCard.title")}/>
                        <p className='font-semibold'>{t("InterestedCard.text")}</p>
                    </div>
                    <BuyNowButton text={t("Buttons.BuyNowButton")} variant={"mediumButton"}/>
                </div>
                
            </div>
        </div>
    )
}
export default InterestedCard;