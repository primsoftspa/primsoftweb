import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"


import { Row } from "react-bootstrap";

// import required modules
import { Pagination, Navigation } from "swiper";

import logoEspacioUnotres from "../../assets/logos/clientes/espaciounotres.png";
import logoAsiducam from "../../assets/logos/clientes/asiducam.png";

export default function ReviewClientes() {
  const navigationPrevRef = React.useRef<HTMLInputElement>(null)
  const navigationNextRef = React.useRef<HTMLInputElement>(null)
  const clientes = [logoEspacioUnotres, logoAsiducam]
  return (

    <>
      <Row style={{
        padding: '40px 0',
      background: 'radial-gradient(circle, #111, #000)', // Degradado
      color: '#fff', // Color del texto
      textAlign: 'center', // Alinear texto al centro
      display: 'flex', // Flexbox para centrar contenido
      alignItems: 'center', // Centrar verticalmente
      justifyContent: 'center', // Centrar horizontalmente
      }}>
      <h4 className="text-uppercase text-center mt-5 fs-2 fw-bold"
        style={{ letterSpacing: "3px", color: "#fff" }}>nuestros clientes</h4>
      <h5 className="text-center text-uppercase fs-5 mb-5"
        style={{ color: "#ccc" }}>quienes confían en nosotros</h5>
        <Swiper
          style={{
            width: "97%"
          }}
          spaceBetween={10}
          breakpoints={{
            // when window width is >= 640 px
            365: {
              slidesPerView: 1,
            },
            // when window width is >= 728px
            720: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            // when window with is >= 1200px
            1200: {
              slidesPerView: 4,
              spaceBetween: 20
            }
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          autoplay={{ delay: 2000 }}
        >
          {
            clientes.map((cliente, index) => (
              <SwiperSlide key={index} style={{
                background: "transparent",
                height: "100px"
              }}>
                <img src={cliente} alt="" style={{
                  objectFit: "contain"
                }} className="logo"/>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </Row>
    </>
  );
}
