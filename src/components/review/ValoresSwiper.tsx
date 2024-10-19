import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Container, Button, Card } from "react-bootstrap";
import {useAppContext} from '../../context/AppCtx'

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import { useNavigate } from "react-router-dom";
import data from '../../assets/data/valores.json'


export default function ReviewValores() {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  const { services } = useAppContext();
  const navigate = useNavigate();

  return (
    <Container fluid className="my-4 text-center w-100 py-5" style={{background: "#191919"}}>
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
            slidesPerView:3,
            spaceBetween: 30
          },
          // when window with is >= 1200px
          1200: {
            slidesPerView:4,
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
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 2000 }}
      >
        {
          data.map((item) => (
            <SwiperSlide key={item.id} className="p-0 border-0 bg-info">
                <Card className="my-2 rounded border-0 bg-dark shadow w-100">
                    <Card.Header className="mx-auto bg-dark rounded-bottom text-light bg-gradient shadow">
                        <i className={item.icon} />
                    </Card.Header>
                    <Card.Body>
                        <Card.Title className="my-3 fw-bold text-center text-uppercase text-light">
                        {item.name}
                        </Card.Title>
                    </Card.Body>
                </Card>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Container>
  );
}