import { Row, Col, Stack } from 'react-bootstrap'
import { Link } from "react-router-dom";
import data from "../../data/contacto.json";

const borderStyles: React.CSSProperties = {
  borderLeft: "3px solid #49f",
  paddingLeft: "14px",
  color: "#fff"
};

export default () => {
    return (
        <Row className="info-footer">
            <Col xs={12} md={5} lg={4} className="text-light">
                <Stack>
                    <h3 style={borderStyles} className="">{data.name}</h3>
                    <div>
                       <Link to="/servicios" className='link'> 
                        <i className="fa-solid fa-link me-2"></i>
                        <small>Preguntas frecuentes</small>
                       </Link>
                    </div>
                    <div>
                       <Link to="/empresa" className='link'> 
                        <i className="fa-solid fa-link me-2"></i>
                        <small>Objetivo y Valores</small>
                       </Link>
                    </div>
                </Stack>
            </Col>
            <Col xs={12} md={7} lg={8} className="text-light my-4 my-lg-0">
                <Stack gap={2} className="text-gray">
                    <h3 style={borderStyles} className="">Contacto</h3>
                    <div>
                        <i className="fa-solid fa-location-dot me-2"></i>
                        <small>Chile</small>
                    </div>
                    <div>
                        <i className="fa-regular fa-envelope me-2"></i>
                        <small>{data.contact.email}</small>
                    </div>
                    <div>
                        <i className="fa-solid fa-phone me-2"></i>
                        <a href={"tel:+" + data.contact.phone} className='text-gray text-decoration-none'>+{data.contact.phone}</a>
                    </div>
                </Stack>
            </Col>
        </Row>
    )
}
