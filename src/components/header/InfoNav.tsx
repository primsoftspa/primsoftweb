import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { mailTo, whatsAppTo } from "../../utils/utilsFormat";

export default () => {
  return (
    <Navbar bg="light" className="heroNav navFont text-dark">
      <Container>
        <Nav className="me-auto">
          <Navbar.Text className="me-3">
            <a
              href={whatsAppTo("56941290755", "Buenos días")}
              target="_blank"
              className="text-decoration-none"
            >
              <i className="fab fa-whatsapp text-success"></i>&nbsp;&nbsp;
              Teléfono +56 9 4129 0755
            </a>
          </Navbar.Text>
          <Navbar.Text className="me-3">
            <a
              href={mailTo('contacto@primsoft.cl', 'Cotizar servicios')}
              className="text-decoration-none"
            >
              <i className="fa-solid fa-envelope text-danger"></i>&nbsp;&nbsp;
              contacto@primsoft.cl
            </a>
          </Navbar.Text>
        </Nav>
      </Container>
    </Navbar>
  );
};
