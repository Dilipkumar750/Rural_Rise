import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { HiChevronRight } from 'react-icons/hi';
import HeaderComponent from '../../components/HeaderComponent';
import contentform from '../../assets/contentform.png';
import addtest from '../../assets/ADDCLASS.png'
import { Link } from 'react-router-dom';

function AddTest() {
  // Define an array for the class names
  const classNames = ['Hindi.form', 'Science.form', 'English.form'];

  return (
    <>
      <HeaderComponent page="Add Test" title="Adding Test Form" />
      <Container fluid style={{ marginTop: '1rem' }}>
        <Card>
          <Link to={`/MentorTest/student`}>
            <Card.Header className="d-flex align-items-center">
              <img src={addtest} alt="Add Class" style={{ width: '30px', marginRight: '1rem' }} />
              ADD TEST
            </Card.Header>
          </Link>
          <Card.Body>
            <Row className="g-3">
              {classNames.map((className, index) => (
                <Col xs={12} sm={6} md={4} key={index}>
                  <Card className="d-flex flex-row align-items-center p-2" style={{height: '80%'}}>
                    <Card.Body className="d-flex align-items-center">
                      <img src={contentform} alt="Open Book" style={{ width: '40px', marginRight: '1rem', height: '40px' }} />
                      <span className="flex-grow-1">{className}</span>
                      <HiChevronRight style={{ height: '24px', width: '24px' }} />
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default AddTest;
