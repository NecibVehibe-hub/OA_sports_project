import { useTranslation } from "react-i18next";

function PricingPlansButton({variant}){
    const {t} = useTranslation();
    let variants={
        HomePageButton:"w-33 h-11 bg-mainYellow rounded-lg font-bold",
        HaveShadow:"w-33 h-11 bg-mainYellow rounded-lg font-bold shadow-[0_2px_10px_#D2FF00] 3xl:w-[284px] 3xl:h-14p",
        ServicesButton:"w-[80%] py-4 px-6 bg-mainYellow rounded-lg font-bold text-[14px] lg:hidden shadow-[0_2px_10px_#D2FF00]"
    }
    return(
        <button className={`${variants[variant]}`}>{t("Buttons.Pricing_Plans")}</button>
    )
}
export default PricingPlansButton;