import Title from "../Titels";
import ContactUsButton from '../ContactUsButton.jsx'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import boss from "../../assets/boss.jpg"
import { useTranslation } from "react-i18next";
import saglik from '../../assets/saglik.png'
import ensonyildiz from "../../assets/ensonyildiz.svg"


function Imgs(){
    return(
        <>
            <img src={boss} className="h-full object-cover  overflow-hidden rounded-3xl" alt="" />
        </>
    )
}





function SecondContainer({text}){
    const {t}=useTranslation();
    return(
        <>
            <div className="w-full px-6 py-6 flex flex-col gap-6 sm:py-8 xl:py-12 xl:px-24 3xl:hidden">
                <div className="flex flex-col gap-4">
                    <Title start={t("Partners.SecondContainer.Partners_with")} center={t("Partners.SecondContainer.SBU_university")} />
                    {text}
                </div>
                <ContactUsButton variant={"DeskTopNavButton"} />
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
            </div>
            <div className="w-full px-8 gap-6 bg-blackBg rounded-[40px] py-12 flex-col hidden 3xl:flex">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-8 w-[50%]">
                        <Title start={t("Partners.SecondContainer.Partners_with")} center={t("Partners.SecondContainer.SBU_university")} />
                        {text}
                        <ContactUsButton variant={"DeskTopNavButton"} />
                    </div>
                    <div className="flex items-center gap-6">
                        <img src={saglik}  className="w-40 h-40" alt="" />
                        <img src={ensonyildiz} className="w-50" alt="" />
                    </div>
                </div>
                    <Swiper
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView="auto"
                        loop={true}
                        initialSlide={3} 
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
                            rotate:0,
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
            </div>
        </>
    )
}

export default SecondContainer;