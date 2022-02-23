import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import profile from '../assets/images/profile.jpeg'

export default function About() {
    return (
        <Container className='text-center'>
            <Row className='mb-5'>
                <h1 className='display-1'>Hey, I'm Jacob</h1>
            </Row>
            <Row className='justify-content-center mb-5 '>
                <Col xs={8}>
                    <img className='profile' src={profile} alt="profile" />
                </Col>
            </Row>
            <Row className='justify-content-center '>
                <Col xs={10} lg={6}>
                    <p>A Full stack web and mobile app developer from Brooklyn, NY.I am a graduate of NuCamp's Full stack bootcamp and I love using React, Redux toolkit, and Sass to make my project come alive!</p>
                </Col>
            </Row>
        </Container>
    )
}
