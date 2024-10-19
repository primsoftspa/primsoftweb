import { Container, Row, Col, Card, Stack, Button } from "react-bootstrap";
import pic01 from "../assets/items/galeria/01.jpg";
import pic02 from "../assets/items/galeria/02.jpg";
import pic03 from "../assets/items/galeria/03.jpg";
import pic04 from "../assets/items/galeria/04.jpg";
import pic05 from "../assets/items/galeria/05.jpg";
import pic06 from "../assets/items/galeria/06.jpg";
import pic07 from "../assets/items/galeria/07.jpg";
import pic08 from "../assets/items/galeria/08.jpg";
import pic09 from "../assets/items/galeria/09.jpg";
import pic10 from "../assets/items/galeria/10.jpg";
import pic11 from "../assets/items/galeria/11.jpg";
import pic12 from "../assets/items/galeria/12.jpg";
import pic13 from "../assets/items/galeria/13.jpg";
import pic14 from "../assets/items/galeria/14.jpg";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import BgHeroRb from "../components/background/BgSection";
import HeroText from "../components/body/HeroText";

export default () => {
  const MySwal = withReactContent(Swal);

  const showModal = (img: string) => {
    MySwal.fire({
      imageUrl: img,
      grow: "fullscreen",
      showCloseButton: true,
      heightAuto: false,
      showConfirmButton: false,
      showClass: {
        popup: "animate__animated animate__zoomIn",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
      customClass: {
        container: "bg-dark m-0 p-0",
        popup: "p-0 rounded-0 w-100",
        closeButton: "position-absolute bg-dark start-50 mt-1 rounded-circle",
        image: "img-fluid h-100 w-100",
      },
    });
  };

  const photos = [
    pic01,
    pic02,
    pic03,
    pic04,
    pic05,
    pic06,
    pic07,
    pic08,
    pic09,
    pic10,
    pic11,
    pic12,
    pic13,
    pic14,
  ];
  return (
    <section className="bg-body bg-gradient animate__animated animate__fadeIn">
      <BgHeroRb
        title="galería"
        subtitle="IMAGENES DE NUESTRAS ACCIONES DE RSE Y REUNIONES"
        image=""
      />
      <h3
        className="text-center mt-3 fw-bold fs-1 text-dark"
        style={{
          letterSpacing: "3px",
        }}
      >
        ASIDUCAM
      </h3>
      <HeroText />
      <Container className="my-5">
        <Row className="g-3">
          {photos.map((pic) => {
            return (
              <Col
                key={pic}
                xs={11}
                sm={10}
                md={6}
                lg={4}
                xl={3}
                className="mx-auto text-center"
              >
                <Card
                  bg="dark"
                  className="border border-3 border-dark"
                  style={{
                    background: `url(${pic})`,
                    height: "290px",
                    backgroundSize: "cover",
                  }}
                ></Card>
                <Card.Footer className="bg-dark py-2">
                  <Button
                    variant="outline-warning"
                    className="rounded-0"
                    onClick={() => {
                      showModal(pic);
                    }}
                  >
                    Expandir
                  </Button>
                </Card.Footer>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
