import React from 'react';
import "./Introduction.css"
import { Container, Row, Col, List } from 'reactstrap';

const Introduction = () => {
    return <Container className="bg-light p-3 mt-3 mb-4">
        <Row className='intro-row' >
            <Col className='col-6 intro-col' >
                <h1>Welcome to the Stellar API</h1>
                <p className='text-start'>
                    A project meticulously crafted by yours truly,
                    using Node, Express, and PSQL.<br></br>
                    I am excited to demonstrate how it can empower your educational endeavors.
                </p>
            </Col>
            <Col className='col-6 intro-col' >
                <img alt='of me' src={`${process.env.PUBLIC_URL}/images/me.JPG`} className='intro-img' />
            </Col>
        </Row>

        <Row className='intro-row'>
            <Col className='col-6 intro-col' >
                {/* <img src={`${process.env.PUBLIC_URL}/images/me.JPG`} className='intro-img' /> */}
            </Col>
            <Col className='col-6 intro-col'>
                <h2>About the Stellar API</h2>
                <p className='text-start'>
                    At the heart of our project lies the Stellar API, designed with a singular purpose: to provide elementary-grade level exams. We understand the importance of accessible, effective, and engaging educational resources for learners of all backgrounds and ages. Whether you're an educator, a student, or a developer seeking to integrate educational content, Stellar is here to support your needs.
                </p>
            </Col>
        </Row>

        <Row className='intro-row'>
            <Col className='col-6 intro-col' >
                <h2>Key Features</h2>
                <List className='text-start'>
                    <li >
                        <strong >User-Friendly:</strong> Our API is designed to be intuitive and user-friendly, making it accessible to both educators and students.
                    </li>
                    <li>
                        <strong>Comprehensive Exams:</strong> Stellar offers a wide range of elementary-grade level exams, carefully crafted to enhance the learning experience.
                    </li>
                    <li>
                        <strong>Flexible Integration:</strong> Developers can seamlessly integrate Stellar's educational content into their applications, websites, or platforms.
                    </li>
                    <li>
                        <strong>Scalable:</strong> Our API is built with scalability in mind, ensuring consistent performance even as your educational needs grow.
                    </li>
                    <li>
                        <strong>Reliable and Secure:</strong> We prioritize data security and reliability, so you can trust Stellar with your educational content.
                    </li>
                </List>
            </Col>
            <Col className='col-6 intro-col' >
                {/* <img src={`${process.env.PUBLIC_URL}/images/me.JPG`} className='intro-img' /> */}
            </Col>
        </Row>

        <Row className='intro-row'>
            <Col className='intro-col'>
                <h2>Explore Stellar</h2>
                <p>
                    To get started with the Stellar API, navigate through the links above to explore its features, endpoints, and capabilities.</p>
                <p>
                    Thank you for stoping by!
                </p>
            </Col>
        </Row>
    </Container>

};

export default Introduction;
