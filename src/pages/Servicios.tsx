import { Container, Row, Col, ListGroup } from "react-bootstrap";
import BgHeroRb from "../components/background/BgSection";
import CardRb from "../components/body/Card";
import { useAppContext } from "../context/AppCtx";
import bgServicio from "../assets/images/banners/servicios.jpg";
import { Card, CardGroup, Button } from 'react-bootstrap';

export default () => {
  const { services, nameServices } = useAppContext();
  const phrases = [
    'Desarrollo de Software para Condominios',
    'Diseño y desarrollo web',
    'Asesorías y Consultoría',
  ];

  const colors = ['#7be8c4', 'cyan', 'white'];


  return (
    <>
      <BgHeroRb
        title="servicios"
        phrases={phrases}
        colors={colors}
        image={bgServicio}
      />
      <section className="animate__animated animate__fadeIn py-5" style={
        {
          background: "linear-gradient(to right, #111 40%, #111)"
        }
      }>

        <h3 className="text-uppercase fw-bold display-5 text-normal text-center mt-0">
          ¿Qué ofrecemos?
        </h3>
        <p className="p-1 p-lg-3 text-center text-light">En nuestra agencia, ofrecemos una amplia gama de servicios para satisfacer tus necesidades tecnológicas:</p>
        <Col xs={10} md={6} className="mx-auto">
          <ListGroup data-bs-theme="dark" className="">
            {nameServices.map((servicio) => {
              return <ListGroup.Item key={servicio}>{servicio}</ListGroup.Item>;
            })}
          </ListGroup>
        </Col>

        {/* <Container fluid="md" className="py-5">
          <Row>
            {services.map((service) => {
              return (
                <Col
                  xs={10}
                  md={6}
                  lg={3}
                  key={service.id}
                  className="mb-3 mx-auto"
                >
                  <CardRb
                    image={service.img}
                    image2={service.img2}
                    title={service.title}
                    description={service.desc}
                  />
                </Col>
              );
            })}
          </Row>
        </Container> */}
      </section></>
  );
};
