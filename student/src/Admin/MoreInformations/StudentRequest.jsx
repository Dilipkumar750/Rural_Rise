import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from '../../components/HeaderComponent';
import View from "../../components/View";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { HOST } from '../../App';


function StudentRequest() {
  const students = [
    { id: 1, name: 'Mounika' },
    { id: 2, name: 'Sam' },
    { id: 3, name: 'Arpita' },
    { id: 4, name: 'Yash' },
    { id: 5, name: 'Shruti' },
    { id: 6, name: 'Shailesh' },
    { id: 7, name: 'Archana' },
  ];
  const [studentdata, setStudentData] = useState([])

  const getMentor = () => {
    const mentor = axios.get(`${HOST}/user/userData`).then((res) => setStudentData(res.data))
  }
  useEffect(() => {
    getMentor()
  }, [])
  const studentlist = studentdata.filter(item => item.role === 'student' && item.action === 'yes');
  
  return (
    <>
      <HeaderComponent page="Request List" title="Mentor" />
      <View style={{ width: '95%', margin: '0 auto', marginTop: '10%', borderRadius: '10px', overflow: 'hidden' }}>
        <View style={{
          backgroundColor: '#DBDC31',
          padding: '10px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #ddd',
          fontWeight: 'bold',
        }}>
          <View>S. No</View>
          <View style={{ flexGrow: 1, textAlign: 'center' }}>Student Name</View>
          <View>Details</View>
        </View>

        {studentlist.map((student,key) => (
          <View
            key={student.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px 10px',
              borderBottom: '1px solid #ddd'
            }}
          >
            <View>{key+1}</View>
            <View style={{ flexGrow: 1, textAlign: 'center' }}>{student.name}</View>
            <Link to={`/MentorRequest/${student.id}`}>
              <Button
                variant="primary"
                style={{
                  marginLeft: 'auto',
                  backgroundColor: '#DBDC31',
                  height: '30px',
                  width: '100%',
                  color: 'black',
                  fontSize: '10px'
                }}
              >
                VIEW
              </Button>
            </Link>
          </View>
        ))}
      </View>
    </>
  );
}

export default StudentRequest;
