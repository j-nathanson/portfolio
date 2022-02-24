import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import profile from '../assets/images/profile.jpeg'

export default function About() {
    return (
        <Container className='content-container d-flex flex-column justify-content-around p-3'>
            <Row className=''>
                <h1 className='text-center'>Hey, I'm Jacob</h1>
            </Row>
            <Row className='justify-content-center text-center'>
                <Col>
                    <img className='profile' src={profile} alt="profile" />
                </Col>
            </Row>
            <Row className='justify-content-center '>
                <Col xs={10} lg={8}>
                    <p>A Full stack web and mobile app developer from Brooklyn, NY. I am a graduate of NuCamp's Full stack bootcamp and I love using React, Redux toolkit, and Scss to make my project come alive!</p>
                </Col>
            </Row>
        </Container>
    )
}
