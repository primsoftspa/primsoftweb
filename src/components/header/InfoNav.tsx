import { Navbar, Nav, Container } from "react-bootstrap";
import { mailTo, whatsAppTo } from "../../utils/utilsFormat";
import data from "../../data/contacto.json"

export default () => {
  return (
    <Navbar style={{
      background: "linear-gradient(to right, #000 40%, #222 60%, #333 80%)"
      }} className="border-bottom border-info d-none d-lg-block">
      <Container>
        <Nav className="me-auto">
          <Navbar.Text className="me-3">
            <a
              href={whatsAppTo(data.contact.phone, "Buenos días")}
              target="_blank"
              className="text-decoration-none text-gray"
            >
              <i className="fab fa-whatsapp text-success fs-5"></i>&nbsp;&nbsp;
              + {data.contact.phone}
            </a>
          </Navbar.Text>
          <Navbar.Text className="me-3">
            <a
              href={mailTo(data.contact.email, 'Cotizar proyecto')}
              className="text-decoration-none text-gray"
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
