import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FormEmailjs from '../components/body/FormEmailjs'
import { mailTo } from "../utils/utilsFormat";
import data from "../data/contacto.json";

export default () => {

  return (
    <React.Fragment>
      {/* Contact Section */}
      <Container className="my-5 animate__animated animate__fadeIn" as="section">
        <Row>
          <Col xs={12} md={6}>
            <p>
              Realice todas sus consultas a través de nuestro formulario, o
              contactenos por medio de los siguientes medios:
            </p>
            <br />
            <div className="d-flex align-items-center p-1 m-0">
              <div className="px-3">
                <i className="fa-solid fa-envelope fs-3 text-info"></i>
              </div>
                <a
              href={mailTo(data.contact.email, 'Cotizar servicios')}
              className="text-decoration-none text-dark"
            >{data.contact.email}</a>
            </div>
            <div className="d-flex align-items-center p-1 m-0">
              <div className="px-3">
                <i className="fa-brands fa-whatsapp fs-3 text-success"></i>
              </div>
                  <a href={`tel: ${data.contact.phone}`} className="text-decoration-none text-dark">+{data.contact.phone}</a>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <FormEmailjs />
          </Col>
        </Row>
      </Container>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.7346584304837!2d-71.25478492530875!3d-29.90074532462604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9691ca70ae564c33%3A0xb10b0957a6a8ce3a!2sBrasil%20310%2C%201710056%20La%20Serena%2C%20Coquimbo!5e0!3m2!1ses!2scl!4v1695875590208!5m2!1ses!2scl"
        loading="lazy"
        className="w-100 mt-3"
        height="450"
      ></iframe>
    </React.Fragment>
  );
};