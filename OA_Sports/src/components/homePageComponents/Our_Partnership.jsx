import Title from "../Titels";
import newStar from "../../assets/newStar.png"
import saglik from "../../assets/saglik.png"
import boss from "../../assets/boss.jpg"
import PricingPlansButton from "../Pricing_Plans_Button";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

function Imgs(){
    return(
        <>
            <img src={boss} className="h-full object-cover  overflow-hidden rounded-3xl" alt="" />
        </>
    )
}




function OurPartnership({img1,img2}){
    const {t} = useTranslation();
    img1=newStar;
    img2=saglik;
    return(
        <div className="w-full  py-6 px-4 flex flex-col gap-4 3xl:hidden">
            <Title start={t("OurPartnership.Our")} center={t("OurPartnership.Partnership")}/>
            <div className="w-full flex justify-center items-center flex-row-reverse gap-6">
                <img src={img1} className="object-cover max-w-36.25 max-h-34.25" alt="" />
                <img src={img2} className="max-w-30.25 max-h-30.25" alt="" />
            </div>
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                loop={true}
                initialSlide={2} 
                spaceBetween={-70}
                breakpoints={{
                0: {
                slidesPerView: 1,
                spaceBetween:-20,
                },
                768: {
                slidesPerView: 3, 
                spaceBetween: 20, 
                },
                450:{
                    slidesPerView:2,
                    spaceBetween:20,
                }
            }}
                coverflowEffect={{
                    rotate:30,
                    stretch:0,
                    depth: 250,
                    modifier: 1,
                    slideShadows:true,
                }}
                modules={[EffectCoverflow]}
                className="w-full h-93 my-6"
            >
            <SwiperSlide>
                <Imgs />
            </SwiperSlide>
            <SwiperSlide>
                <Imgs />
            </SwiperSlide>
            <SwiperSlide>
                <Imgs />
            </SwiperSlide>
            <SwiperSlide>
                <Imgs />
            </SwiperSlide>
            <SwiperSlide>
                <Imgs />
            </SwiperSlide>
            </Swiper>
            <div className="flex flex-col gap-3 w-full">
                <Title start={t("OurPartnership.start")} center={t("OurPartnership.center")}/>
                <div className="flex flex-col gap-5">
                    <div className="text-whiteColor">
                        <p>{t("OurPartnership.text1")}</p>
                        <br />
                        <p>{t("OurPartnership.text2")}</p>
                    </div>
                    <PricingPlansButton variant={"HaveShadow"}/>
                </div>
            </div>
        </div>
    )
}
export default OurPartnership;