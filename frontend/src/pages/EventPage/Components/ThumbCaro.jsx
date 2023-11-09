import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import VideoPlayer from '../../../componenets/VideoPlayer';

export default function ThumbCaro(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const allowedVideoExts = ["mp4", "mpeg"];

  
  let isVideo = false; 
  props.data.forEach((item) => {
    if (allowedVideoExts.includes(item.split('.')[3]))
      isVideo=true
  }); 
  console.log(isVideo);

  return (
    <>
      <div className='event-inner-container'>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          loop={true}
          spaceBetween={0}
          navigation={!isVideo}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiperr1"
        >

          {/* Loops through the images then adds them to carousel*/}
          {
            isVideo && props.data.map((item, index) =>
              <SwiperSlide key={index}>
                {
                  allowedVideoExts.includes(item.split('.')[3]) && (
                    <video controls className='video'>
                      <source src={item} type="video/mp4" />
                    </video>
                  )

                }
              </SwiperSlide>
            )
          }

          {
            !isVideo && props.data.map((item, index) =>
                <SwiperSlide key={index}>
                {
                  !allowedVideoExts.includes(item.split('.')[3]) && (
                    <img src={item} alt='carousl-img' />
                  )
                }
              </SwiperSlide>
            )
          }

        </Swiper>
      </div>
      {
        !isVideo && (
            <div >
              <Swiper style={{ "height": "15vw" }}
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={5}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiperr2"
              >

                {/* Loops through the images then adds them to BookMark Carousel*/}
                {
                  props.data.map((item, index) =>
                    <SwiperSlide key={index} style={{ marginRight: "20px" }} >
                      {
                        allowedVideoExts.includes(item.split('.')[3]) && (
                          <VideoPlayer url={item} />
                        )

                      }
                      {
                        !allowedVideoExts.includes(item.split('.')[3]) && (
                          <img src={item} alt='carousl-img' />

                        )
                      }
                    </SwiperSlide>
                  )
                }


              </Swiper>
            </div>
          )
      }
    </>
  );
}
