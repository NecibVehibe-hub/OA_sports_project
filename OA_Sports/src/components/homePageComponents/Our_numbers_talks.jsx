import Title from '../Titels'
import OurNumberTalksCard from "./OurNumbersTalk_Card";
import { useTranslation } from "react-i18next";
function OurNumbersTalks(){
    const {t} = useTranslation();
    return(
        <div className="h-86 w-full py-6 px-4 flex flex-col gap-4 bg-bg 3xl:w-360 3xl:py-12 3xl:px-24 3xl:h-133.5 3xl:gap-8">
            <Title start={t("OurNumbersTalks.Our")} center={t("OurNumbersTalks.numbers")} end={t("OurNumbersTalks.talks")}/>
            <div className="w-full min-h-64 no-scrollbar overflow-auto overflow-x-auto flex gap-5">
                <OurNumberTalksCard title={"150+"} underTitle={t("OurNumbersTalks.card1.Talents")} text={t("OurNumbersTalks.card1.text")}/>
                <OurNumberTalksCard title={"150+"} underTitle={t("OurNumbersTalks.card2.Talents")} text={t("OurNumbersTalks.card2.text")} />
                <OurNumberTalksCard title={"150+"} underTitle={t("OurNumbersTalks.card3.Talents")} text={t("OurNumbersTalks.card3.text")} />
            </div>
        </div>
    )
}
export default OurNumbersTalks;