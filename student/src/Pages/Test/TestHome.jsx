import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link for navigation
import HeaderComponent from "../../components/HeaderComponent";
import SmallBox from "../../components/SmallBox";
import AddTest from "../../assets/ADDCLASS.png";
import checkmarks from "../../assets/checkmarks.png";


function TestHome() {
  return (
    <>
      <HeaderComponent page="Add Test" title="Adding Test Form" />

      <Container fluid style={{ height: '80vh', display: 'flex', alignItems: 'center' }}>
        <Row className="justify-content-center w-100">
            <Col xs={8} md={6} lg={4} className="text-center mb-5">
          <Link to='/AddTest'>
              <SmallBox image={AddTest} />
              <h4 className="mt-3" style={{ fontSize: '1rem' }}>Add Test</h4>
          </Link>
            </Col>
          <Col xs={8} md={6} lg={4} className="text-center mb-5">
            <Link to="/MarkList" style={{ textDecoration: 'none', color: 'inherit' }}>
              <SmallBox image={checkmarks} />
              <h4 className="mt-3" style={{ fontSize: '1rem' }}>Check Marks</h4>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TestHome;
