import saha from '../assets/saha.jpg'
import BuyNowButton from './BuyNowButton';
import { useTranslation } from "react-i18next";
function InterestedCard(){
    const {t} = useTranslation();
    return(
        <div className="w-full flex gap-8 py-6 px-4">
            <div className="w-full relative h-full flex items-center  rounded-3xl">
                <img className='object-cover rounded-3xl' src={saha} alt="" />
                <div className='absolute flex justify-between items-end flex- min-w-80 min-h-13 md:flex-col md:items-start md:gap-10 my-6 mx-3 text-white'>
                    <div>
                        <h1 className='font-platypiItalic text-mainYellow text-3xl md:text-6xl'>{t("InterestedCard.title")}</h1>
                        <p className='font-semibold md:text-5xl md:font-platypiItalic'>{t("InterestedCard.text")}</p>
                    </div>
                    <BuyNowButton text={t("Buttons.BuyNowButton")} variant={"mediumButton"}/>
                </div>
                
            </div>
        </div>
    )
}
export default InterestedCard;