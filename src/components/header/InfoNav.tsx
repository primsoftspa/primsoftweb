import { Navbar, Nav, Container } from "react-bootstrap";
import { mailTo, whatsAppTo } from "../../utils/utilsFormat";
import data from "../../data/contacto.json"

export default () => {
  return (
    <Navbar style={{
      background: "linear-gradient(to right, #111 40%, #222)",
    }} className="d-none d-lg-block border-gradient border-gradient-esmeral p-0">
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
        <Nav>
          <Navbar.Text className="px-3 social-instagram">
            <a
              href={data.social.instagram.link}
              className="text-decoration-none text-gray"
            >
              <i className="fa-brands fa-instagram text-danger"></i>&nbsp;&nbsp;
              {data.social.instagram.user}
            </a>
          </Navbar.Text>
        </Nav>
      </Container>
    </Navbar>
  );
};
