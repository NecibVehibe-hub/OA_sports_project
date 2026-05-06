import { useTranslation } from "react-i18next";
import Cards from "./Who_we_are_Cards";
import Title from "../Titels";
function WhoWeAre(){
    const {t}=useTranslation();
    return(
        <>
            <div className="bg-bg w-full lg:py-12 lg:px-24 3xl:gap-8  3xl:h-205.5 py-6 px-4 flex flex-col gap-4 ">
                <Title start={t("WhoWeAre.Who")} center={t("WhoWeAre.We")} end={t("WhoWeAre.Are")}/>
                <div className="w-full no-scrollbar overflow-auto h-70.75 3xl:h-162.5 overflow-x-auto flex gap-4 ">
                    <Cards text={t("WhoWeAre.card1")}/>
                    <Cards text={t("WhoWeAre.card2")}/>
                    <Cards text={t("WhoWeAre.card3")}/>
                </div>
            </div>
        </>
        
    )
}
export default WhoWeAre;