import React, { useState } from 'react';
import { Form, Container, Row, Col, InputGroup, Button } from 'react-bootstrap'; 
import View from '../../components/View';
import { useNavigate } from 'react-router-dom';



export const Loan = () => {
const navigate= useNavigate()
    return (
        <Container className="d-flex justify-content-center align-items-center flex-column" style={{ height: '100vh', paddingBottom: '0px' }}>
            <Row className="w-100">
                <Col md={{ span: 6, offset: 3 }}>
                    <View className="text-center mb-6">
                        <h1 className="text-center" style={{ marginBottom: '0%' }}>Loan Request Form</h1>
                    </View>
                    <Form>
                        <Form.Group controlId="formUsername" className="mb-3">
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    name='name'
                                    // onChange={(e) => {
                                    //     const name = e.target.name;
                                    //     setGetData({
                                    //         ...getData,
                                    //         [name]: e.target.value
                                    //     })
                                    // }}
                                    id='formUsername'
                                />
                                {/* <InputGroup.Text style={{ background: 'transparent', border: 'none' }}>
                                    <Image src={user} alt="email icon" style={{ width: '20px', height: '20px' }} />
                                </InputGroup.Text> */}
                            </InputGroup>
                        </Form.Group>

                        <Form.Group controlId="formContactno" className="mb-3">
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    placeholder="mobile no"
                                    name='contact_no'
                                // style={{ paddingRight: '40px' }}
                                // onChange={(e) => { setGetData({ ...getData, [e.target.name]: e.target.value }) }}
                                />
                                {/* <InputGroup.Text style={{ background: 'transparent', border: 'none' }}>
                                    <Image src={password} alt="password icon" style={{ width: '20px', height: '20px' }} />
                                </InputGroup.Text> */}
                            </InputGroup>
                            {/* <View className="mt-2">
                                <a href="#">Forgot password?</a>
                            </View> */}
                        </Form.Group>
                        <Form.Group controlId="formAmmound" className="mb-3">
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    placeholder="Requested Ammound"
                                    name='ammound'
                                // style={{ paddingRight: '40px' }}
                                // onChange={(e) => { setGetData({ ...getData, [e.target.name]: e.target.value }) }}
                                />
                                {/* <InputGroup.Text style={{ background: 'transparent', border: 'none' }}>
                                    <Image src={password} alt="password icon" style={{ width: '20px', height: '20px' }} />
                                </InputGroup.Text> */}
                            </InputGroup>
                            {/* <View className="mt-2">
                                <a href="#">Forgot password?</a>
                            </View> */}
                        </Form.Group>



                        {/* <div className="text-center mt-5">
                            <p>Don’t Have An Account? <NavLink to="/register">Register</NavLink></p>
                        </div> */}
                    </Form>
                </Col>

            </Row>
            <Button
                variant="primary"
                className=" mb-0"
                style={{ backgroundColor: '#DBDC31', borderColor: '#DBDC31', position: 'absolute', bottom: 20, width: '90%' }}
            onClick={() =>navigate('/MoreInfoHomes')} 
            >
              Submit  Resquest 
            </Button>
        </Container>
    )
}