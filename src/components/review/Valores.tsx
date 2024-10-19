import React from 'react'
import { Container, Col, Row, Card, Stack } from 'react-bootstrap'
import data from '../../assets/data/valores.json'

const Valores = () => {
  return (
    <Container fluid className="p-5 my-4" style={{background: "#191919"}}>
      <h4 className="fw-bold text-center display-5 text-light mb-5">NUESTROS VALORES</h4>
      <Row className="justify-content-center">
        {
          data.map(val => {
            return (
              <Col key={val.id} xs={10} md={6} lg={4} xl={3} xxl={2}>
                <Card className="my-2 rounded border-0 bg-dark shadow">
                  <Card.Header className="mx-auto bg-dark rounded-bottom text-light bg-gradient shadow">
                    <i className={val.icon} />
                  </Card.Header>
                  <Card.Body>
                    <Card.Title className="my-3 fw-bold text-center text-uppercase text-light">
                      {val.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            )
          })
        }
      </Row>
    </Container>
  )
}

export default Valores;