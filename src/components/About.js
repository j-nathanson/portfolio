import React, { useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import profile from '../assets/images/profile.jpeg'
import { gsap } from "gsap";

export default function About() {

    
    useEffect(() => {
        gsap.fromTo('.about-header', { opacity: 0, y: "-100%" }, { duration: 3, opacity: 1, y: "0%" })
        gsap.fromTo('.about-img', { opacity: 0 }, { duration: 3, opacity: 1 })
        gsap.fromTo('.about-text', { opacity: 0, y: "100%" }, { duration: 3, opacity: 1, y: "0%" })
    }, [])
    return (
        <Container className='content-container d-flex flex-column justify-content-around p-3'>
            <Row className='about-header'>
                <h1 className='text-center'>Hey, I'm Jacob</h1>
            </Row>
            <Row className='justify-content-center text-center about-img'>
                <Col>
                    <img className='profile' src={profile} alt="profile" />
                </Col>
            </Row>
            <Row className='justify-content-center about-text'>
                <Col xs={10} lg={8}>
                    <p>A Full stack web and mobile app developer from Brooklyn, NY. I am a graduate of NuCamp's Full stack bootcamp and I love using React, Redux toolkit, and Scss to make my project come alive!</p>
                </Col>
            </Row>
        </Container>
    )
}
