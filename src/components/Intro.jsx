import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <Container className='intro-container'>
        <Row className='h-100'>
            <Col xs md="8" className='d-flex flex-column justify-content-center text-start px-4'>
                <div className='mx-4'>
                    <h1>Pictures of Monk</h1>
                    <p>The leopard gecko named after the titular character from the hit tv show Monk</p>
                </div>
            </Col>
        </Row>

    </Container>
  )
}

export default Intro
