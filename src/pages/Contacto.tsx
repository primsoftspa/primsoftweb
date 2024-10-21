import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FormEmailjs from '../components/body/FormEmailjs'
import { mailTo } from "../utils/utilsFormat";
import data from "../data/contacto.json";

export default () => {

  return (
    <>
      {/* Contact Section */}
      <Container fluid className="animate__animated animate__fadeIn" as="section" style={{
        background: "linear-gradient(to right, #111 40%, #222)"
      }}>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="py-5">
            <p className="text-gray">
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
              className="text-decoration-none text-light"
            >{data.contact.email}</a>
            </div>
            <div className="d-flex align-items-center p-1 m-0">
              <div className="px-3">
                <i className="fa-solid fa-phone fs-3 text-info"></i>
              </div>
                  <a href={`tel: ${data.contact.phone}`} className="text-decoration-none text-light">+{data.contact.phone}</a>
            </div>
                        <div className="box-canvas">
              <div className="wing left"></div>
              <div className="wing right"></div>
              <div className="rocket">
                <div className="main">
                  <div className="window"></div>
                </div>
              </div>
              <div className="flame-outer">
                <div className="flame-inner"></div>
              </div>
              <div className="wing-center"></div>
            </div>
          </Col>
          <Col xs={12} md={6} className="py-5 py-lg-0">
            <p className="text-gray">Déjanos tus datos. Un ejecutivo de PrimSoft te contactará en unos momentos.</p>
            <FormEmailjs />
          </Col>
        </Row>
      </Container>
    </>
  );
};