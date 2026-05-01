import Title from "../Titels";
import ball from "../../assets/ball.jpg";
import { useTranslation } from "react-i18next";




function Card({title,text,paragraph,img}){
    img=ball;
    return(
        <div className="w-full h-75.75 bg-blackBg rounded-2xl p-2">
            <div style={{ backgroundImage: `url(${img})` }}  className="bg-cover  bg-position-[center_60%] flex items-end rounded-2xl w-full h-full p-2 ">
                <div className="w-78.75 h-35.5 ">
                    <span className="font-platypiItalic text-[26px] text-mainYellow">{title}</span>
                    <p className="text-whiteColor">{text}</p>
                </div>
            </div>  
        </div>
    )
}


function OurLatestNews(){
    const {t} = useTranslation();
    return(
        <div className="w-full py-6 px-4 flex flex-col gap-4">
            <Title start={t("OurLatestNews.Our")} center={t("OurLatestNews.latest")} end={t("OurLatestNews.news")} />
            <div className="flex flex-col gap-4">
                <Card title={t("OurLatestNews.title")} text={t("OurLatestNews.text")}/>
                <Card title={t("OurLatestNews.title")}  text={t("OurLatestNews.text")}/>
                <Card title={t("OurLatestNews.title")}  text={t("OurLatestNews.text")}/>
            </div>
        </div>
    )
}
export default OurLatestNews;