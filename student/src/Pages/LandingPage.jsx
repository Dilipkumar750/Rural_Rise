import React from 'react';
import logo from '../assets/logo.jpg';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Image } from '../components/Image';
import {useNavigate } from 'react-router-dom'
function LandingPage() {
  const navigate = useNavigate();
  return (
    <Container fluid className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Row className="text-center">
        <Col>
          {/* <img src={logo} alt="logo"/> */}
        <Image src={logo} alt={'logo'} className="mb-4" />
          <p>
            Education without boundaries, learning<br/>
            without limits. Growing brighter futures<br/>
            in rural landscapes
          </p>
          <Button 
            style={{
              backgroundColor: '#DBDC31',
              padding: '10px',
              borderRadius: '5px',
              width: '150px', 
              color: 'black',
              border: 'none' 
            }}
            className="mt-3"
            onClick={()=>{navigate('/login')}}
          >
            Next
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default LandingPage;
