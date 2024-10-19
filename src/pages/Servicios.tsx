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

  
        <h3 className="text-uppercase text-center bg-dark text-gray py-2">
          ¿Qué ofrecemos?
        </h3>
        <p className="p-1 p-lg-3 text-center">En nuestra agencia, ofrecemos una amplia gama de servicios para satisfacer tus necesidades tecnológicas.</p>
        <ListGroup>
          {nameServices.map((servicio) => {
            return <ListGroup.Item key={servicio}>{servicio}</ListGroup.Item>;
          })}
        </ListGroup>
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
