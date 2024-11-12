import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logos/primsoft.svg"

export default () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleSelect = () => {
    setExpanded(false);
  };

  return (
    <Navbar expand="lg" variant="dark" className='bg-night' expanded={expanded}>
      <Container>
        {/* Logo Brand */}
        <Navbar.Brand as={Link} to="/" className='py-4'>
          <img src={logo} alt="logo" height="50" style={{
          }} /> <span className='d-none d-lg-inline freeman-regular'>Prim<span className=''>Soft</span></span>
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleToggle} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-uppercase">
            <Nav.Link onClick={handleSelect} as={Link} to="/" className={location.pathname === "/" ? "active" : ""}>Inicio</Nav.Link>
            <Nav.Link onClick={handleSelect} as={Link} to="/servicios" className={location.pathname === "/servicios" ? "active" : ""}>Servicios</Nav.Link>
            <Nav.Link onClick={handleSelect} as={Link} to="/contacto" className={location.pathname === "/contacto" ? "active" : ""}>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}