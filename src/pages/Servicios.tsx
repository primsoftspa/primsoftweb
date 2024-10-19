import { Container, Row, Col, ListGroup } from "react-bootstrap";
import BgHeroRb from "../components/background/BgSection";
import CardRb from "../components/body/Card";
import { useAppContext } from "../context/AppCtx";
import bgServicio from "../assets/images/banners/servicios.jpg";

export default () => {
  const { services, nameServices } = useAppContext();

  return (
    <>
      <BgHeroRb
        title="servicios"
        subtitle="Soluciones integrales, asesoría y más"
        image={bgServicio}
      />
      <section className="bg-light bg-gradient animate__animated animate__fadeIn">

        <ListGroup>
          {nameServices.map((servicio) => {
            return <ListGroup.Item key={servicio}>{servicio}</ListGroup.Item>;
          })}
        </ListGroup>
        <h3 className="text-uppercase text-center bg-dark text-gray py-2">
          Nuestros servicios disponen de la siguiente flota
        </h3>
        <Container fluid="md" className="py-5">
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
        </Container>
      </section></>
  );
};
