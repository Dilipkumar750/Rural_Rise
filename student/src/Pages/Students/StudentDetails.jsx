import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from '../../components/HeaderComponent';
import View from "../../components/View";
import axios from 'axios';
import { HOST } from '../../App';
import { useParams } from 'react-router-dom';
function StudentDetails() {
  const [email, setEmail] = useState('');
  const [idNo, setIdNo] = useState('');
  const [data2, setData2] = useState([])
  const { id } = useParams()
  const data1 = axios.get(`${HOST}/user/userData/${id}`).then((res) => setData2(res.data))
  const data3=[data2]
  // console.log('data1', data3)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nID No: ${idNo}`);
  };

  return (
    <>
      <HeaderComponent page="Request Form" title="Fill Your Form" />
      <Container className="mt-3">
        <h6 className="mb-3">Student Detail:</h6>

        {data3.map((value)=><Card className="mb-3 p-3 shadow-m">
          <Card.Body >
            <p><strong>Name:</strong> {value.name}</p>
            <p><strong>Email:</strong> {value.email}</p>
            <p><strong>Contact No:</strong> {value.contact_no}</p>
            <p><strong>Class:</strong> {value.classes}</p>
          </Card.Body>
        </Card>)}

        <Card className="p-3 shadow-sm">
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label>Enter Student Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formIdNo">
                <Form.Label>Enter Id No:</Form.Label>
                <Form.Control
                  type="text"
                  value={idNo}
                  onChange={(e) => setIdNo(e.target.value)}
                />
              </Form.Group>
              <View className="text-center mt-3">
                <Button
                  variant="primary"
                  type="submit"
                  style={{ backgroundColor: '#DBDC31', borderColor: '#DBDC31', width: '50%' }}
                  href='/studentSucess'
                >
                  SEND
                </Button>
              </View>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default StudentDetails;
