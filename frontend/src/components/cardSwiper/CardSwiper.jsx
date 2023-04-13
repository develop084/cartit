import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./stylesCardSwiper.css"

// import required modules
import { EffectCards } from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper";
export default function CardSwiper() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        effect={"cards"}
        grabCursor={true}
        className="mySwiper"
        modules={[EffectCards, Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide className="image-card" >
        
         <img src="https://res.cloudinary.com/dts8hnbex/image/upload/v1681376890/grocery-canada-1dd95cf140499958e2c4c7aee38e45e523b0b5a4be5354f9b7fbbb7628024ce2_lqqeqp.png"
         width={'100%'}
         />
       
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://res.cloudinary.com/dts8hnbex/image/upload/v1681376889/convenience_2x-8c9a879c4d8cd3b23b2112625ada4c6f3f4ea204ce2bbeee0e02eb4591f52183_pkmz0q.png"
         width={'100%'}
         />
         </SwiperSlide>
         <SwiperSlide>
        <img src="https://res.cloudinary.com/dts8hnbex/image/upload/v1681376889/ebt_2x-bd3261c02c017db1aa1849eca6a550272ebbc45683c30bbb2380062488ee4531_rf0smp.png"
         width={'100%'}
         />
         </SwiperSlide>
         <SwiperSlide>
        <img src="https://res.cloudinary.com/dts8hnbex/image/upload/v1681376889/alcohol_2x-112064848726c28a693e90130aad60cadab60486ef9e199fcf8592cb7a878716_g3ifue.png"
         width={'100%'}
         />
         </SwiperSlide>
      </Swiper>
    </>
  );
}
