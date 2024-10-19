import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ReviewClientes from '../components/review/Clientes'
import sociosImg from '../assets/items/clientes.png'

export default () => {
  return (
    <React.Fragment>
      <section className="animate__animated animate__fadeIn">
      <Row className="align-items-center text-center flex-column" style={{
        background: `linear-gradient(96deg, rgba(3, 0, 0, .9),rgba(20, 21, 80, .4)), url(${sociosImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: "fixed",
        padding: '110px 0'
      }}>
        <Col xs={11} sm={10} md={6} lg={6} xl={6} xxl={4}>
          <h3 className="fs-2 fw-bold text-light">SOMOS SOCIOS ESTRATÉGICOS</h3>
        </Col>
        <Col xs={3} sm={10} md={1} lg={1} style={{ height: '3px' }} className="bg-primary rounded my-2">
        </Col>
        <Col xs={11} sm={10} md={6} lg={4} className="mt-5">
          <h4 className="text-uppercase fw-bold fs-2 mb-4" style={{ color: "#f8f8f8" }}>SEGURYGUARDIA</h4>
        </Col>
        <Col xs={11} sm={10} md={6} lg={8}>
          <p className="mt-2 fs-4" style={{ color: "#ccc" }}>Nuestro esfuerzo y objetivo están en función de la satisfacción de las necesidades de nuestros clientes, aportando soluciones de calidad para cada uno de sus requerimientos.</p>
        </Col>
      </Row>
      </section>
      <ReviewClientes />
    </React.Fragment>
  )
}