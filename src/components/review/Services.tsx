import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useAppContext } from '../../context/AppCtx'
import { Container } from "react-bootstrap";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function ReviewService() {
  const { services } = useAppContext();
  return (
    <Container className="my-4" fluid>
      <h4 className="text-center my-3 text-uppercase">Algunos de nuestros servicios</h4>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
          services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="service-img bg-dark text-light position-relative">
                <img src={service.img} alt="" />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Container>
  );
}



