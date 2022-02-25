import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import foodTruck from '../assets/images/food-truck.png';
import banhMi from '../assets/images/banh-mi.png';

export default function Projects() {
    return (
        <Container className='content-container'>
            <Row>
                <h1 className='text-center'>Check out my projects</h1>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={8} sm={6} md={4} className='d-flex justify-content-center '>
                    <Card >
                        <CardImg src={foodTruck} alt="Card image cap" />
                        <p>a food truck website using React and bootstrap.</p>      
                    </Card >
                </Col >
                <Col xs={8} sm={6} md={4} className='d-flex justify-content-center '>
                    <Card >
                        <CardImg src={banhMi} alt="Card image cap" />
                        <p>A food ordering app using React Native.</p>  
                    </Card >
                </Col >


            </Row >
        </Container >
    )
}



