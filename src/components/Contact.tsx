import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import contactoImg from '../assets/items/contacto.jpg';
import { useNavigate } from 'react-router-dom'

function Contacto() {

    const navigate = useNavigate();
    return (
        <>
            <Row className="align-items-center flex-column text-center text-light" style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, 1)), url(${contactoImg})`,
                backgroundPosition: 'top center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding: '200px 0'
            }}>
                <Col>
                    <h3 className='display-4 fw-bold text-normal' style={{
                        background: "rgba(0, 0, 0, .2)",
                        backdropFilter: "blur(5px)"
                    }}>HABLEMOS</h3>
                </Col>
                <Col>
                    <p className="fs-3 text-primary">Envíenos sus requerimientos</p>
                </Col>
                <Col>
                    <Button variant="outline-primary"
                        className="rounded-2"
                        size="lg"
                        onClick={() => navigate('contacto')}>CONTÁCTENOS</Button>
                </Col>
            </Row>
        </>
    )
}

export default Contacto;