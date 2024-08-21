import React, { useState } from 'react';
import { Form, Container, Row, Col, InputGroup, Button } from 'react-bootstrap';
import Cookies from 'js-cookie';
import user from "../assets/user1.jpg";
import View from "../components/View";
import password from "../assets/password.png";
import { Image } from "../components/Image";
import axios from 'axios'
import { HOST } from '../App';
import { Link, NavLink, useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  const [getData, setGetData] = useState({});
  const [valid, getValid] = useState({});
  const [err, seterr] = useState(false);
  // const [getData1, setGetData1]= useState({});
  const postData = async () => {
    try {
      const response = await axios.post(`${HOST}/user/login`, getData, {
        withCredentials: true,
      });
  
      if (response.data.message === 'Success') {
        const role = response.data.role;
  
        if (role === 'student') {
          navigate('/home');
        } else if (role === 'mentor') {
          navigate('/MentorHome');
        } else if (role === 'admin') {
          navigate('/AdminHome');
        } else {
          seterr(true);
        }
      } else {
        seterr(true);
      }
    } catch (err) {
      console.log(err);
      seterr(true);
    }
  };
  
  
  return (
    <Container className="d-flex justify-content-center align-items-center flex-column" style={{ height: '100vh', paddingBottom: '0px' }}>
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }}>
          <View className="text-center mb-6">
            <h1 className="text-center" style={{ marginBottom: '20%' }}>LOGIN</h1>
            <br />
            {err ? <small className='text-danger text-center' ><b style={{ alignItems: 'center', justifyContent: 'center' }}>UserName or Password is Incorrect</b></small> : null}
            <br />
          </View>
          <br /><br />
          <Form>
            <Form.Group controlId="formUsername" className="mb-3">
              <InputGroup>
                <Form.Control
                  type="email"
                  placeholder="Username"
                  name='email'
                  onChange={(e) => {
                    const name = e.target.name;
                    setGetData({
                      ...getData,
                      [name]: e.target.value
                    })
                  }}
                />
                <InputGroup.Text style={{ background: 'transparent', border: 'none' }}>
                  <Image src={user} alt="email icon" style={{ width: '20px', height: '20px' }} />
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <InputGroup>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name='password'
                  style={{ paddingRight: '40px' }}
                  onChange={(e) => { setGetData({ ...getData, [e.target.name]: e.target.value }) }}
                />
                <InputGroup.Text style={{ background: 'transparent', border: 'none' }}>
                  <Image src={password} alt="password icon" style={{ width: '20px', height: '20px' }} />
                </InputGroup.Text>
              </InputGroup>
              <View className="mt-2">
                <a href="#">Forgot password?</a>
              </View>
            </Form.Group>



            <div className="text-center mt-5">
              <p>Don’t Have An Account? <NavLink to="/register">Register</NavLink></p>
            </div>
          </Form>
        </Col>
      </Row>
      <Button
        variant="primary"
        className=" mb-0"
        style={{ backgroundColor: '#DBDC31', borderColor: '#DBDC31', position: 'absolute', bottom: 20, width: '90%' }}
        onClick={() => postData()}      >
        LOGIN
      </Button>
    </Container>
  );
}

export default Login;
