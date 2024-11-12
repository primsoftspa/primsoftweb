import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Container, Col } from "react-bootstrap";
import Button from "../Button/Button";
import CardRb from "../body/Card";
import { useAppContext } from '../../context/AppCtx'

// import required modules
import { Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";
import SwiperControl from "../controls/SwiperControl";

export default function ReviewServiceAlt() {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  const { services } = useAppContext();
  const navigate = useNavigate();

  return (
    <Container fluid className="my-4 text-center w-100">
      <h4 className="text-center my-3 text-uppercase display-5 fw-bold text-normal"
        style={{ letterSpacing: "4px" }}>nuestros servicios</h4>
      <h5 className="fs-5 mb-5 text-uppercase"
        style={{ color: "#888" }}>la solución para cada requerimiento logístico</h5>
      <Swiper
        breakpoints={{
          // when window width is >= 640 px
          320: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          // when window width is >= 768px
          480: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          // when window with is >= 1200px
          1200: {
            slidesPerView: 4,
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
        onBeforeInit={(swiper: any) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        modules={[Pagination, Navigation]}
      >
        {
          services.map((service) => (
            <SwiperSlide key={service.id} style={{
              background: "transparent",
              padding: "0 20px"
            }}>
              <CardRb image={service.img}
                title={service.title}
                image2={service.img2}
                description={service.desc}
                light={true} />
            </SwiperSlide>
          ))
        }
        <SwiperControl navigationNextRef={navigationNextRef} navigationPrevRef={navigationPrevRef} />
      </Swiper>
      <Button variant="primary" label="Ver Más" onClick={() => navigate("servicios")} />
    </Container>
  );
}