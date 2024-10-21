import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Container, Button } from "react-bootstrap";

// import required modules
import { Pagination, Navigation } from "swiper";


type Props = {
  children: React.ReactNode;
}



export default ({ children }: Props) => {

  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)

  return (
      <Swiper
        spaceBetween={10}
        breakpoints={{
          // when window width is >= 640 px
          320: {
            slidesPerView:1,
            spaceBetween: 30
          },
          // when window width is >= 768px
          480: {
            slidesPerView:2,
            spaceBetween: 30
          },
          // when window with is >= 1200px
          1200: {
            slidesPerView:2,
          }
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper:any) =>{
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
         }}
        modules={[Pagination, Navigation]}
      >
            {children}
      </Swiper>
  );
}