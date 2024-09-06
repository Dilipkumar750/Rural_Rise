import React, { useState } from 'react';
import { Form, Container, Row, Col, InputGroup, Button } from 'react-bootstrap';
import user from "../assets/user1.jpg";
import password from "../assets/password.png";
import classIcon from "../assets/class.png";
import department from "../assets/department.png";
import telephone from "../assets/telephone.png";
import email from "../assets/mail.png";
import View from "../components/View"
import { Image } from '../components/Image';
import axios from 'axios';
import { HOST } from '../App';
import {  NavLink, useNavigate } from 'react-router-dom';

function Register() {
  const [createuser, setCreateUser] = useState({
    name: '',
    email: '',
    role: '',
    contact_no: '',
    classes: '',
    department: '',
    password: '',
    confirmPassword: ''
  });

  const [valid, setValid] = useState('');
  const navigate = useNavigate();

  const resetForm = () => {
    setCreateUser({
      name: '',
      email: '',
      role: '',
      contact_number: '',
      classes: '',
      department: '',
      password: '',
      confirmPassword: ''
    });
  };

  const register = async () => {
    try {
      const res = await axios.post(`${HOST}/user/register`, createuser, { withCredentials: true });
      console.log(res.data);
      setValid(res.data.message);

      if (res.data.message === 'Success') {
        resetForm(); // Reset form fields after successful registration
        navigate('/login'); // Navigate to the login page
      }
    } catch (err) {
      console.error(err);
      // Handle error case, e.g., show error message
    }
  };

  const handleChange = (e) => {
    setCreateUser({
      ...createuser,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center flex-column" style={{ height: '100vh', paddingBottom: '0px' }}>
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }}>
          <View className="text-center mb-4">
            <h1>REGISTER</h1>
          </View>
          <Form>
            {/* Name Field */}
            <Form.Group controlId="formName" className="mb-3">
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  aria-label="Name"
                  name="name"
                  value={createuser.name}
                  onChange={handleChange}
                />
                <InputGroup.Text style={{ background: 'transparent', border: 'none' }}>
                  <Image src={user} alt="Name icon" style={{ width: '20px', height: '20px' }} />
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
                  name="email"
                  value={createuser.email}
                  onChange={handleChange}
                />
                <InputGroup.Text style={{ background: 'transparent', border: 'none' }}>
                  <Image src={email} alt="Email icon" style={{ width: '20px', height: '20px' }} />
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>

            {/* Role Field */}
            <Form.Group controlId="forrole" className="mb-3">
              <InputGroup>
                <Form.Select
                  aria-label="Role"
                  name="role"
                  value={createuser.role}
                  onChange={handleChange}
                >
                  <option value="" disabled>Select Role</option>
                  <option value="student">Student</option>
                  <option value="mentor">Mentor</option>
                  {/* <option value="admin">Admin</option> */}
                </Form.Select>
              </InputGroup>
            </Form.Group>

            {/* Contact Number Field */}
            <Form.Group controlId="formContactNumber" className="mb-3">
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Contact Number"
                  aria-label="Contact Number"
                  name="contact_no"
                  value={createuser.contact_no}
                  onChange={handleChange}
                />
                <InputGroup.Text style={{ background: 'transparent', border: 'none' }}>
                  <Image src={telephone} alt="Contact Number icon" style={{ width: '20px', height: '20px' }} />
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>

            {/* Class Field */}
            <Form.Group controlId="formClass" className="mb-3">
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Class"
                  aria-label="Class"
                  name="classes"
                  value={createuser.classes}
                  onChange={handleChange}
                />
                <InputGroup.Text style={{ background: 'transparent', border: 'none' }}>
                  <Image src={classIcon} alt="Class icon" style={{ width: '20px', height: '20px' }} />
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>

            {/* Department Field */}
            <Form.Group controlId="formDepartment" className="mb-3">
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Department"
                  aria-label="Department"
                  name="department"
                  value={createuser.department}
                  onChange={handleChange}
                />
                <InputGroup.Text style={{ background: 'transparent', border: 'none' }}>
                  <Image src={department} alt="Department icon" style={{ width: '20px', height: '20px' }} />
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
                  name="password"
                  value={createuser.password}
                  onChange={handleChange}
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
                  name="confirmPassword"
                  value={createuser.confirmPassword}
                  onChange={handleChange}
                />
                <InputGroup.Text style={{ background: 'transparent', border: 'none' }}>
                  <Image src={password} alt="Confirm Password icon" style={{ width: '20px', height: '20px' }} />
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>

            <View className="text-center mt-5">
              <p>Already Have An Account? <NavLink to="/login">Login</NavLink></p>
            </View>
          </Form>
        </Col>
      </Row>
      <Button
        variant="primary"
        className="mt-4"
        style={{ backgroundColor: '#DBDC31', borderColor: '#DBDC31', width: '90%' }}
        onClick={register}
      >
        REGISTER
      </Button>
    </Container>
  );
}

export default Register;
