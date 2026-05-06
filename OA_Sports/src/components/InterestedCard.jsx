import saha from '../assets/saha.jpg'
import BuyNowButton from './BuyNowButton';
import { useTranslation } from "react-i18next";
function InterestedCard(){
    const {t} = useTranslation();
    return(
        <div className="w-full 3xl:flex py-6 px-4 3xl:justify-center 3xl:h-122 3xl:py-12 3xl:px-24">
            <div className="w-full 3xl:w-312 relative h-full flex items-center  rounded-3xl 3xl:h-98">
                <img className='object-cover rounded-3xl 3xl:h-98 3xl:w-full 3xl:rounded-[48px]' src={saha} alt="" />
                <div className='absolute flex flex-col justify-between items-start  md:items-start md:gap-10 my-6 mx-3 3xl:my-4  3xl:mx-10 text-white'>
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