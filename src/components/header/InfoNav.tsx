import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { mailTo, whatsAppTo } from "../../utils/utilsFormat";
import data from "../../data/contacto.json"

export default () => {
  return (
    <Navbar bg="light" className="heroNav navFont text-dark">
      <Container>
        <Nav className="me-auto">
          <Navbar.Text className="me-3">
            <a
              href={whatsAppTo(data.contact.phone, "Buenos días")}
              target="_blank"
              className="text-decoration-none"
            >
              <i className="fab fa-whatsapp text-success"></i>&nbsp;&nbsp;
              Teléfono + {data.contact.phone}
            </a>
          </Navbar.Text>
          <Navbar.Text className="me-3">
            <a
              href={mailTo(data.contact.email, 'Cotizar proyecto')}
              className="text-decoration-none"
            >
              <i className="fa-solid fa-envelope text-danger"></i>&nbsp;&nbsp;
              {data.contact.email}
            </a>
          </Navbar.Text>
        </Nav>
      </Container>
    </Navbar>
  );
};
