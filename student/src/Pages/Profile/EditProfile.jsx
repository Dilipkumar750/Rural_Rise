import React from 'react';
import { Form, Container, Row, Col, InputGroup, Button } from 'react-bootstrap';
import HeaderComponent from '../../components/HeaderComponent';
import user from "../../assets/user1.jpg";
import password from "../../assets/password.png";
import college from "../../assets/college.png";
import username from "../../assets/profile.png";
import telephone from "../../assets/telephone.png";
import email from "../../assets/mail.png";
import age from "../../assets/age.png";
import gender from "../../assets/gender.png";


// Adjust this import based on your actual `Image` component or use <img>
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

function EditProfile() {
  return (
    <>
      <HeaderComponent page='Edit Profile' />
      <Container className="d-flex justify-content-center align-items-center flex-column" style={{ height: '95vh', paddingBottom: '0px' }}>
        <Row className="w-100">
          <Col md={{ span: 8, offset: 2 }}>
            <Form>
              {/* Name Field */}
              <Form.Group controlId="formName" className="mb-3">
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    aria-label="Name"
                  />
                  <InputGroup.Text style={{ background: 'transparent', border: 'none' }}>
                    <Image src={user} alt="Name icon" style={{ width: '20px', height: '20px' }} />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              {/* Age Field */}
              <Form.Group controlId="formAge" className="mb-3">
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Age"
                    aria-label="Age"
                  />
                  <InputGroup.Text style={{ background: 'transparent', border: 'none' }}>
                    <Image src={age} alt="Age icon" style={{ width: '20px', height: '20px' }} />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              {/* Gender Field */}
              <Form.Group controlId="formGender" className="mb-3">
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Gender"
                    aria-label="Gender"
                  />
                  <InputGroup.Text style={{ background: 'transparent', border: 'none' }}>
                    <Image src={gender} alt="Gender icon" style={{ width: '20px', height: '20px' }} />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              {/* Email Field */}
              <Form.Group controlId="formEmail" className="mb-3">
                <InputGroup>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    aria-label="Email"
                  />
                  <InputGroup.Text style={{ background: 'transparent', border: 'none' }}>
                    <Image src={email} alt="Email icon" style={{ width: '20px', height: '20px' }} />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              {/* Contact Number Field */}
              <Form.Group controlId="formContactNumber" className="mb-3">
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Contact Number"
                    aria-label="Contact Number"
                  />
                  <InputGroup.Text style={{ background: 'transparent', border: 'none' }}>
                    <Image src={telephone} alt="Contact Number icon" style={{ width: '20px', height: '20px' }} />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              {/* College Field */}
              <Form.Group controlId="formCollege" className="mb-3">
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="College"
                    aria-label="College"
                  />
                  <InputGroup.Text style={{ background: 'transparent', border: 'none' }}>
                    <Image src={college} alt="College icon" style={{ width: '20px', height: '20px' }} />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              {/* Username Field */}
              <Form.Group controlId="formUsername" className="mb-3">
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-label="Username"
                  />
                  <InputGroup.Text style={{ background: 'transparent', border: 'none' }}>
                    <Image src={username} alt="Username icon" style={{ width: '20px', height: '20px' }} />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              {/* Password Field */}
              <Form.Group controlId="formPassword" className="mb-3">
                <InputGroup>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    style={{ paddingRight: '40px' }}
                    aria-label="Password"
                  />
                  <InputGroup.Text style={{ background: 'transparent', border: 'none' }}>
                    <Image src={password} alt="Password icon" style={{ width: '20px', height: '20px' }} />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              {/* Confirm Password Field */}
              <Form.Group controlId="formConfirmPassword" className="mb-3">
                <InputGroup>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    style={{ paddingRight: '40px' }}
                    aria-label="Confirm Password"
                  />
                  <InputGroup.Text style={{ background: 'transparent', border: 'none' }}>
                    <Image src={password} alt="Confirm Password icon" style={{ width: '20px', height: '20px' }} />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              {/* Save Button */}
              <Link to='/Profile'>
                <Button
                  variant="primary"
                  className="mt-2"
                  style={{ backgroundColor: '#DBDC31', borderColor: '#DBDC31', width: '100%', color: 'black' }}
                >
                  OK
                </Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default EditProfile;
