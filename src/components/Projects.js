import React, { useEffect } from 'react';
import { Container, Row, Col, Card, CardImg, } from 'reactstrap';
import foodTruck from '../assets/images/food-truck.png';
import banhMi from '../assets/images/banh-mi.png';
import { gsap } from "gsap";
export default function Projects() {

    return (
        <Container className='content-container'>
            <Row className='mb-3 project-element'>
                <h1 className='text-center'> &lt; Check out my projects/&gt;</h1>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={8} sm={6} md={4} className='d-flex justify-content-center project-element'>
                    <Card >
                        <a href="https://github.com/j-nathanson/foodtrucks" target='_blank'>
                            <CardImg src={foodTruck} alt="Card image cap" />

                            <p>a food truck website using React and bootstrap.</p>
                        </a>
                    </Card >
                </Col >
                <Col xs={8} sm={6} md={4} className='d-flex justify-content-center project-element'>
                    <Card >
                        <a href="https://github.com/j-nathanson/banh-mi-mama" target='_blank'>
                            <CardImg src={banhMi} alt="Card image cap" />
                            <p>A food ordering app using React Native.</p>
                        </a>
                    </Card >
                </Col >


            </Row >
        </Container >
    )
}



