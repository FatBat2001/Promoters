import { useState } from "react";

import shakira from "../assets/home-carousel-imgs/shakira-03-min.jpg"
import amrDiab from "../assets/home-carousel-imgs/amr-diab.jpg"
import majidaElroumy from "../assets/home-carousel-imgs/majida-elroumy.jpg"
import omarKhairat from "../assets/home-carousel-imgs/omar-khairat.jpg"
import rickyMartin from "../assets/home-carousel-imgs/ricky-martin.jpg"
import tamerHosny from "../assets/home-carousel-imgs/tamer-hosny.jpg"
import yanni from "../assets/home-carousel-imgs/yanni.jpg"

import { Navigation, Pagination, Autoplay, Keyboard } from 'swiper/modules';
import SwiperNavBtns from "./SwiperNavBtns";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = () => {

    let [shouldTransition, setShouldTransition] = useState(true);

    const imgs = [

        {
            name: "shakira",
            imageUrl: shakira
        },
        {
            name: "rickyMartin",
            imageUrl: rickyMartin
        },
        {
            name: "yanni",
            imageUrl: yanni
        },
        {
            name: "amrDiab",
            imageUrl: amrDiab
        },
        {
            name: "tamerHosny",
            imageUrl: tamerHosny
        },
        {
            name: "omarKhairat",
            imageUrl: omarKhairat
        },
        {
            name: "majidaElroumy",
            imageUrl: majidaElroumy
        },
        
        
    ]

    function handleClick() {
        setShouldTransition(false);
    }




    return (
        <div className="bg-home">
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                speed={1600}
                onActiveIndexChange={handleClick}
                className="relative swiperHome"
                modules={[Keyboard, Pagination, Navigation, Autoplay]}
            >
                {
                    imgs.map((img,index) => 
                            (
                                <SwiperSlide  key={index} className=" bg-home-inner" style={{
                                    backgroundImage: `url(${img.imageUrl})`,
                                }}>
                                </SwiperSlide>
                            ))
                }
                <SwiperNavBtns />
            </Swiper>
        </div>
    )
}

export default Carousel
