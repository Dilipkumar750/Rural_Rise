import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from '../../components/HeaderComponent';
import { Link, useParams } from 'react-router-dom';

function GrantTypes() {
  const { title } = useParams();
  const [array, setarray] = useState([])


  const Grants = [
    {
      title: 'Goverment Grants',
      path: 'Goverment_Grants'
    },
    {
      title: 'NGO Grants',
      path: 'NGO_Grants'
    },
    {
      title: 'Corporate Social Responsibilty (CSR) Grants',
      path: 'CSR'
    },
    {
      title: 'Foundation Grants',
      path: 'Foundation_Grants'
    },
  ]
  const Loans = [
    {
      title: 'Student Education Loans',
      path: 'Student_Education_Loans'
    },
    {
      title: 'Skill Development Loans',
      path: 'Skill_Development_Loans'
    },
    {
      title: 'Educational Infrastructure Loans:',
      path: 'Educational_Infrastructure_Loans:'
    },
  ]
  const Incentives = [
    {
      title: 'Scholarships and Fellowships',
      path: 'Scholarships'
    },
    {
      title: 'Teacher Training and Development Programs',
      path: 'Teacher'
    },
    {
      title: 'Educational Infrastructure Grants',
      path: 'Infrastructure'
    },
    {
      title: 'Technology Access Programs',
      path: 'Technology'
    },
  ]
  const Jobs = [
    {
      title: '',
      path: ''
    },
  ]
  const Internships = [
    {
      title: '',
      path: ''
    },
  ]

  useEffect(() => {
    if (title === 'Grants') {
      setarray(Grants)
    }
    if (title === 'Loans') {
      setarray(Loans)
    }
    if (title === 'Incentives') {
      setarray(Incentives)
    }
    if (title === 'Jobs') {
      setarray(Jobs)
    }
    if (title === 'Internships') {
      setarray(Internships)
    }
  }, [])

  return (
    <>
      <HeaderComponent page="More Information" title={title ? title : ''} />

      <Container>
        <h6 className="mt-4">Types Of {title ? title : ''}:</h6>
        <Row>
          {array.map((info, index) => (
            <Col md={3} className="mb-4" key={index}>
              <Card className="h-100 position-relative">
                <Card.Body className="d-flex flex-column">
                  <p> {index + 1} {info.title}</p>
                  <Link to={`/InformationDetails/${info.path}`}>
                    <Button
                      className="mt-auto"
                      style={{
                        position: 'absolute',
                        right: '4%',
                        bottom: '5%',
                        height: '34%',
                        width: '20%',
                        fontSize: '50%',
                        color: 'black',
                        backgroundColor: '#DBDC31'
                      }}
                    >
                      VIEW
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}


export default GrantTypes;
