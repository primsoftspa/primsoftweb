import { Container, Row, Col } from "react-bootstrap";
import BgHeroRb from "../components/background/BgSection";
import ReviewCliente from "../components/review/Clientes";
import Valores from "../components/review/Valores";
import HeroText from "../components/body/HeroText";
import empresaData from "../assets/data/empresa.json";
import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>¿Quienes Somos?</Accordion.Header>
        <Accordion.Body>
Es una compañía de desarrollo de software dedicada a crear soluciones innovadoras y personalizadas para empresas de todos los tamaños. Creemos que la tecnología debe ser accesible y útil para todos. Nos enfocamos en entender las necesidades específicas de cada cliente y ofrecer soluciones que no solo resuelvan problemas, sino que también mejoren la experiencia del usuario.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

const Empresa = () => {
  return (
    <section className="animate__animated animate__fadeIn my-5">
      {/* <BgHeroRb title="empresa" subtitle="Quienes Somos?" image=""/> */}

      <Container className="">
        <Row>
          <Col xs="12" md="8" lg="8" className="mx-auto">
        {empresaData.empresa.map((item) => {
          return (
            <details key={item.id}>
              
              <summary
                className="mt-5 fw-bold fs-2 mb-3 text-secondary"
              >
                {item.title}
              </summary>
              <div className="d-flex align-items-center justify-content-center flex-column flex-lg-row">
              <p
                dangerouslySetInnerHTML={{ __html: item.content }}></p>
                <img src="//robohash.org/1" alt="" height="220" />
              </div>
            </details>
          );
        })}
        </Col>
        </Row>
      </Container>
      <Valores />
      <ReviewCliente />
    </section>
  );
};

export default Empresa;
