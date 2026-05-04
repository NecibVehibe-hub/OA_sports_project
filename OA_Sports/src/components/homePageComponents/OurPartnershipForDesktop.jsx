import Title from "../Titels";
import newStar from "../../assets/newStar.png"
import saglik from "../../assets/saglik.png"
import boss from "../../assets/boss.jpg"
import PricingPlansButton from "../Pricing_Plans_Button";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination"; 


function Imgs(){
    return(
        <img src={boss} className="h-full w-80 object-cover overflow-hidden rounded-3xl" alt="" />
    )
}

function OurPartnershipForDesktop({img1, img2}){
    img1 = newStar;
    img2 = saglik;
    const {t,i18n} = useTranslation();
    const isRtl = i18n.language === 'ar';
    
    return(
        <>
        <style>{`
            .swiper {
                position: relative;
            }
            .swiper-pagination {
                bottom: 15px !important; 
                z-index: 20 !important;
                position:absolute;
                left:0;
                width:50%;
                gap:7px;
            }
            .swiper-pagination-bullet {
                width: 8px;
                height: 8px;
                background: #ffffff !important;
                opacity: 0.6;
                transition: all 0.3s ease;
                box-shadow: 0 0 4px rgba(0,0,0,0.5);
            }
            .swiper-pagination-bullet-active {
                background: #D2FF00 !important;
                opacity: 1;
                transform: scale(1.2);
            }
            /* Arapça (RTL) için özel ayarlar */
            [dir="rtl"] .swiper-pagination {
                right: auto !important;
                left: 50% !important;
                transform: translateX(-50%); /* Ortalamayı garanti eder */
            }

            /* Yazıların hizalanması için */
            [dir="rtl"] p, [dir="rtl"] h1 {
                text-align: right;
            }   
        `}</style>

        <div className="w-360 h-223.25 py-12 px-24 hidden flex-col gap-16 3xl:flex">
            <Title start={t("OurPartnership.Our")} center={t("OurPartnership.Partnership")}/>
            <div className="w-312 h-179.5 flex flex-col justify-between">
                <div className="w-full h-37.75 flex justify-center items-center flex-row-reverse gap-6">
                    <img src={img1} className="object-cover w-52.5 h-49" alt="" />
                    <img src={img2} className="w-40 h-40" alt="" />
                </div>
                <div className="w-full relative h-122.5 flex flex-row items-center bg-blackBg rounded-4xl gap-6 p-7">
                    <div className="w-206 h-98.5 flex flex-col justify-center gap-6">
                        <Title start={t("OurPartnership.start")} center={t("OurPartnership.center")}/>
                        <p className="text-white">{t("OurPartnership.text1")}</p>
                        <p className="text-white">{t("OurPartnership.text2")}</p>
                        <PricingPlansButton variant={"HaveShadow"}/>
                    </div>
                    <div className={`absolute h-108.5 w-95 ${isRtl ? 'left-0' : 'right-0'}`}>
                        <Swiper 
                            key={isRtl ? 'rtl' : 'ltr'} 
                            dir={isRtl ? 'rtl' : 'ltr'}
                            effect="coverflow"
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={"auto"}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            coverflowEffect={{
                                rotate:0,
                                stretch:25,
                                depth: 250,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            modules={[EffectCoverflow, Pagination]} 
                            className="w-full h-93 my-6"
                        >
                            <SwiperSlide className="rounded-3xl"> 
                                <Imgs />
                            </SwiperSlide>
                            <SwiperSlide className="rounded-3xl">
                                <Imgs />
                            </SwiperSlide>
                            <SwiperSlide className="rounded-3xl">
                                <Imgs />
                            </SwiperSlide>
                            <SwiperSlide className="rounded-3xl">
                                <Imgs />
                            </SwiperSlide>
                            <SwiperSlide className="rounded-3xl">
                                <Imgs />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default OurPartnershipForDesktop;
