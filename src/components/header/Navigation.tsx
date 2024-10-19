import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from "react-router-dom";

export default () => {
  const location = useLocation();

  return (
    <Navbar expand="lg" variant="dark" style={{
      background: "linear-gradient(to right, #000 40%, #222 60%, #333 80%)"
    }}>
      <Container>
        {/* Logo Brand */}
        <Navbar.Brand as={Link} to="/" className='py-4'>
          PrimSoft
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-uppercase">
            <Nav.Link as={Link} to="/" className={location.pathname === "/" ? "active" : ""}>Inicio</Nav.Link>
            <Nav.Link as={Link} to="/empresa" className={location.pathname === "/empresa" ? "active" : ""}>Empresa</Nav.Link>
            <Nav.Link as={Link} to="/servicios" className={location.pathname === "/servicios" ? "active" : ""}>Servicios</Nav.Link>
            <Nav.Link as={Link} to="/clientes" className={location.pathname === "/clientes" ? "active" : ""}>Clientes</Nav.Link>
            <Nav.Link as={Link} to="/contacto" className={location.pathname === "/contacto" ? "active" : ""}>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}