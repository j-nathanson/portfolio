import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import profile from '../assets/images/profile.jpeg'

export default function About() {
    return (
        <Container className='text-center'>
            <Row>
                <h1>Hey, I'm Jacob</h1>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={8}>
                    <img className='profile' src={profile} alt="profile" />
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={10}>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus iste provident necessitatibus facere tempore sapiente atque quaerat itaque molestiae veniam?</p>
                </Col>

            </Row>
        </Container>
    )
}
