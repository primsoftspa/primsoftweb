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
      <section className="w-100" style={{
          background: "linear-gradient(to right, #111 40%, #222)"
      }}>
        <HeroHome />
        <h2
          className="display-4 fw-bold my-5 text-center text-info"
          style={{
            letterSpacing: "3px",
          }}
        >
          {data.name}
        </h2>
        <ReviewService />
        <Container fluid style={{
          // background: "linear-gradient(to top, #F5F5F5, #B2EBF2 1%, #f8f9fa)"
          // backgroundImage: `linear-gradient(to top, rgba(1, 1, 2, .6), rgba(0,  0, 0, 1))`
        }}>
          <Row className="justify-content-center py-5">
            <h2 className="display-5 fw-bold text-center text-info">Nuestros Desarrolladores</h2>
            <p className="text-center fs-4 mt-2 mb-5 text-gray">Un equipo apasionado y talentoso que da vida a tus ideas</p>
            <SwiperCarousel>
              {data.team.map(member => (
                <SwiperSlide className="pb-5 bg-transparent" key={member.id}>
                  <UserCard
                    name={member.name}
                    profesion={member.profession}
                    src={member.avatar}
                    linkedin={member.linkedin}
                    web={member.web}
                    email={member.email} />
              </SwiperSlide>

                ))}
            </SwiperCarousel>
          </Row>
        </Container>
      </section>
    </>
  );
};
