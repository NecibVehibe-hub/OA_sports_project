import { useTranslation } from "react-i18next";

function PricingPlansButton({variant}){
    const {t} = useTranslation();
    let baseStyle="w-33 h-11 bg-mainYellow rounded-lg font-bold"
    let variants={
        HaveShadow:"shadow-[0_2px_10px_#D2FF00]"
    }
    return(
        <button className={`${baseStyle} ${variants[variant]}`}>{t("Buttons.Pricing_Plans")}</button>
    )
}
export default PricingPlansButton;