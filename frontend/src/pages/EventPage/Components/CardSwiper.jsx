import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

export default function CardSwiper(props) {

  return (
    <>
      <Swiper
      style={{'height': '300px',}}
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={0}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
      >

        {/* Loops through the EventCards then adds them to carousel*/}
        {
          props.data.map((item,index)=>
          <SwiperSlide key={index}>
            {item}
          </SwiperSlide>
          )
        }
      </Swiper>
    </>
  );
}
