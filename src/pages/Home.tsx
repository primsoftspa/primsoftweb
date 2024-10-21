import React, { lazy } from "react";
const HeroHome = lazy(() => import("../components/hero/HeroHome"));
import ReviewClientes from "../components/review/Clientes";
import ReviewService from "../components/review/ServicesAlt";
import data from "../data/contacto.json";
import UserCard from "../components/Card/UserCard";
import { Container, Row, Col } from "react-bootstrap";
import SwiperCarousel from "../components/ui/Swiper/SwiperCarousel";
import { SwiperSlide } from "swiper/react";

export default () => {
  return (
    <>
      <section className="bg-light w-100">
        <HeroHome />
        <h2
          className="display-4 fw-bold my-5 text-center"
          style={{
            letterSpacing: "3px",
          }}
        >
          {data.name}
        </h2>
        <ReviewService />
        <Container fluid style={{
          background: "linear-gradient(to top, #222, #111, #000)"
        }}>
          <Row className="justify-content-center py-5">
            <h2 className="display-4 text-light text-center">Nuestros Desarrolladores</h2>
            <p className="text-gray text-center fs-4 mt-2">Un equipo apasionado y talentoso que da vida a tus ideas.</p>
            <SwiperCarousel>
            <SwiperSlide className="pb-5 bg-transparent mt-3">
              <UserCard
                name="Marco"
                profesion="Developer"
                src="https://mcherrera.dev/assets/img/perfil.png"
                linkedin={data.mch.linkedin}
                web={data.mch.web}
                email={data.mch.email} />
              </SwiperSlide>
            <SwiperSlide className="pb-5 bg-transparent">
              <UserCard 
                name="Cristobal"
                profesion="Developer"
                src="https://robohash.org/31"
                linkedin={data.mch.linkedin}
                web={data.mch.web}
                email={data.mch.email} />
              </SwiperSlide>
            </SwiperCarousel>
          </Row>
        </Container>
      </section>
    </>
  );
};
