import Title from "../Titels";
import { useTranslation } from "react-i18next";
import ball from "../../assets/ball.jpg";

function OurLatestNewsForDesktop(){
    const {t} = useTranslation();
    return(
        <div className="w-full h-340.25  flex-col hidden  py-12 px-24 gap-8 3xl:flex">
            <div className="w-full h-16.5 flex justify-between items-center">
                <Title start={t("OurLatestNews.Our")} center={t("OurLatestNews.latest")} end={t("OurLatestNews.news")} />
                <h1 className="text-mainYellow text-2xl font-platypiItalic">Show All</h1>
            </div>
            <div className="w-full h-full flex flex-col flex-wrap gap-6">
                <Card1 title={t("OurLatestNews.title")} text={t("OurLatestNews.text")} />
                <Card2  title={t("OurLatestNews.title")} text={t("OurLatestNews.text")} />
                <Card3 title={t("OurLatestNews.title")} text={t("OurLatestNews.text")} />
                <Card4 title={t("OurLatestNews.title")} text={t("OurLatestNews.text")} />
            </div>
        </div>
    )
}
export default OurLatestNewsForDesktop;


function Card1({title,text,img}){
    img=ball;
    return(
        <div className="w-180 h-78.75 gap-6  rounded-4xl p-3 flex flex-row-reverse  bg-blackBg">
            <div style={{ backgroundImage: `url(${img})` }}  className="bg-cover  bg-position-[center_60%] rounded-[20px] w-[307.71429443359375px] h-72.25"></div>
            <div className="w-[352.28570556640625px] h-69.75 flex gap-3 flex-col">
                <span className="font-platypiItalic text-[26px] text-mainYellow">{title}</span>
                <p className="text-whiteColor text-[24px]">{text}</p>
            </div>
        </div>
    )
}

function Card2({title,text,img}){
    img=ball;
    return(
        <div className="w-178.75 h-[836.0970458984375px] bg-blackBg rounded-4xl p-3 flex flex-col-reverse gap-6">
            <div style={{ backgroundImage: `url(${img})` }}  className="bg-cover  bg-position-[center_50%] rounded-[20px] w-172.25 h-[647.0970458984375px]"></div>
            <div className="w-full full flex gap-3 flex-col">
                <span className="font-platypiItalic text-[26px] text-mainYellow">{title}</span>
                <p className="text-whiteColor text-[24px]">{text}</p>
            </div>
        </div>
    )
}

function Card3({title,text,img}){
    img=ball;
    return(
        <div className="w-126.5 h-168 bg-blackBg p-3 mt-5 rounded-4xl flex flex-col-reverse gap-6 ">
            <div style={{ backgroundImage: `url(${img})` }}  className="bg-cover  bg-position-[center_50%] rounded-[20px] w-120.5 h-[647.0970458984375px]"></div>
            <div className="w-full full flex gap-3 flex-col">
                <span className="font-platypiItalic text-[26px] text-mainYellow">{title}</span>
                <p className="text-whiteColor text-[24px]">{text}</p>
            </div>
        </div>
    )
}

function Card4({title,text,img}){
    img=ball;
    return(
        <div className="bg-blackBg rounded-4xl p-3 flex flex-col-reverse gap-6 w-126.5 h-109.75">
            <div className="w-120.5 h-[218.82962036132812px] flex gap-4">
                <div style={{ backgroundImage: `url(${img})` }}  className="bg-cover  bg-position-[center_50%] rounded-[20px] w-full h-full "></div>
                <div style={{ backgroundImage: `url(${img})` }}  className="bg-cover  bg-position-[center_50%] rounded-[20px] w-full h-full "></div>
            </div>
            <div className="w-full full flex gap-3 flex-col">
                <span className="font-platypiItalic text-[26px] text-mainYellow">{title}</span>
                <p className="text-whiteColor text-[24px]">{text}</p>
            </div>
        </div>
    )
}