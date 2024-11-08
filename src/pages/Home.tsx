import React, { lazy } from "react";
const HeroHome = lazy(() => import("../components/hero/HeroHome"));
import ReviewClientes from "../components/review/Clientes";
import ReviewService from "../components/review/ServicesAlt";
import data from "../data/contacto.json";
import UserCard from "../components/Card/UserCard";
import { Container, Row, Col } from "react-bootstrap";
import SwiperCarousel from "../components/ui/Swiper/SwiperCarousel";
import { SwiperSlide } from "swiper/react";
import CardSmall from "../components/body/CardSmall";

export default () => {
  return (
    <>
      <section className="w-100" style={{
        background: "linear-gradient(to right, #111 40%, #222)"
      }}>
        <HeroHome />
        <h2
          className="display-4 fw-bold my-5 text-center text-normal"
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
            <h2 className="display-4 fw-bold text-normal text-center mb-4">TEAM DEVELOPER</h2>
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
            <Container className="my-5">
              <Row className="overflow-hidden flex-nowrap scroll-container">
                <CardSmall direction="left" title="html" subtitle="user interface" image="https://raw.githubusercontent.com/EniDev911/assets/refs/heads/main/images/svg/programming/html5.svg" />
                <CardSmall direction="left" title="css3" image="https://raw.githubusercontent.com/EniDev911/assets/refs/heads/main/images/svg/programming/css3.svg" />
                <CardSmall direction="left" title="js" subtitle="web programming" image="https://raw.githubusercontent.com/primsoftspa/activos/refs/heads/main/javascript.svg" />
                <CardSmall direction="left" title="react" subtitle="js lib UI" image="https://raw.githubusercontent.com/primsoftspa/activos/refs/heads/main/react.svg" />
                <CardSmall direction="left" title="vitejs" subtitle="build tool" image="https://raw.githubusercontent.com/EniDev911/assets/refs/heads/main/images/svg/programming/vitejs.svg" />
                <CardSmall direction="left" title="figma" subtitle="design" image="https://raw.githubusercontent.com/primsoftspa/activos/refs/heads/main/figma.svg" />
                <CardSmall direction="left" title="tailwindcss" subtitle="css framework" image="https://raw.githubusercontent.com/primsoftspa/activos/refs/heads/main/tailwindcss.svg" />
                <CardSmall direction="left" title="bootstrap" subtitle="css framework" image="https://raw.githubusercontent.com/EniDev911/assets/refs/heads/main/images/svg/programming/bootstrap.svg" />
              </Row>
              <h3 className="display-5 text flickering text-center" style={{ color: "#ccc2" }}>Programming Tools</h3>
              <Row className="overflow-hidden flex-nowrap scroll-container">
                <CardSmall direction="right" title="ruby" subtitle="programming" image="https://raw.githubusercontent.com/EniDev911/assets/refs/heads/main/svg/software/ruby.svg" />
                <CardSmall direction="right" title="rails" subtitle="framework web" image="https://raw.githubusercontent.com/EniDev911/assets/refs/heads/main/svg/software/ruby-on-rail.svg" />
                <CardSmall direction="right" title="nodejs" subtitle="js runtime" image="https://raw.githubusercontent.com/EniDev911/assets/refs/heads/main/svg/software/nodejs.svg" />
                <CardSmall direction="right" title="mongodb" subtitle="document db" image="https://raw.githubusercontent.com/EniDev911/assets/refs/heads/main/images/svg/programming/mongodb.svg" />
                <CardSmall direction="right" title="mysql" subtitle="dbms" image="https://raw.githubusercontent.com/EniDev911/assets/refs/heads/main/svg/software/mysql.svg" />
                {/* <CardSmall direction="right" title="git" subtitle="version control" image="https://raw.githubusercontent.com/EniDev911/assets/refs/heads/main/images/svg/programming/git.svg" /> */}
                <CardSmall direction="right" title="postgres" subtitle="dbms" image="https://raw.githubusercontent.com/EniDev911/assets/refs/heads/main/svg/software/postgresql.svg" />
                <CardSmall direction="right" title="python" subtitle="programming" image="https://raw.githubusercontent.com/EniDev911/assets/refs/heads/main/svg/software/python.svg" />
                <CardSmall direction="right" title="django" subtitle="framework web" image="https://static.djangoproject.com/img/logos/django-logo-negative.svg" />
              </Row>
            </Container>
          </Row>
        </Container>
      </section>
    </>
  );
};
