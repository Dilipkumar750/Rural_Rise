import React, { useEffect } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import mentorImage from '../assets/mentorImage.png';
import { Image } from '../components/Image';
import Button from 'react-bootstrap/Button';
import View from "../components/View";
import { Link, useParams ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import { HOST } from '../App';
import { useState } from 'react';


function MentorDetails() {
  const navigate= useNavigate()
  const students = [
    { id: 'Name', name: 'John Das' },
    { id: 'Email', name: 'john12@gmail.com' },
    { id: 'Phone_no', name: '7896541302' },
    { id: 'Qualification', name: 'M.sc Maths' },
    { id: 'Job Applied', name: 'Tutor Job' }
  ];
  const { id } = useParams();
  const [inddata, setinddata] = useState({})
  const getMentor = () => {
    const mentor = axios.get(`${HOST}/user/userData/${id}`).then((res) => setinddata(res.data))
  }
  useEffect(() => {
    getMentor()
  }, [id])

  const addMentor = () => {
    const data = { action: 'yes' }
    axios.put(`${HOST}/user/edit/${id}`, data)
      .then(res => console.log(res)).catch((err) => console.log(err))
      navigate('/Mentorsuccess/admin')

  }
  const rejectMentor = () => {
    axios.delete(`${HOST}/user/delete/${id}`)
    navigate('/Mentorsuccess/mentorReject')
  }

  return (
    <>
     <HeaderComponent page="Add Mentor" title="Mentor Request" />

      <View style={{
        border: "1px solid rgba(0, 0, 0, 0.16)",
        boxShadow: "rgba(0, 0, 0, 0.15) 4px 4px 2.6px",
        padding: '1rem',
        margin: "1rem",
        position: 'relative',
        minHeight: '200px',
        textAlign: 'center'
      }}>
        <View style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: '1rem',
        }}>
          <Image src={mentorImage} alt="Mentor" style={{ width: "100px", marginBottom: '1rem' }} />

          {/* {students.map((student, index) => ( */}
          <View style={{ margin: '0.5rem 0', fontSize: '16px' }}>
            <strong>Name </strong>: {inddata.name}: &nbsp;
            <p>
              <strong>Role</strong> : {inddata.role}

            </p>
          </View>
          {/* ))} */}
        </View>
      </View>

      {/* <Link to='/Mentorsuccess/admin'> */}
      <button
        variant="primary"
        className="mb-0"
        onClick={addMentor}
        style={{
          backgroundColor: '#DBDC31',
          borderColor: '#DBDC31',
          position: 'fixed',
          bottom: '4rem',
          left: '50%',
          transform: 'translateX(-50%)',  // Center the button horizontally.
          width: '90%',
          textAlign: 'center'
        }}
      >
        APPROVE
      </button>
      <button
        variant="primary"
        className="mb-0"
        onClick={rejectMentor}
        style={{
          backgroundColor: '#DBDC31',
          borderColor: '#DBDC31',
          position: 'fixed',
          bottom: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          textAlign: 'center'
        }}
      >
        REJECT
      </button>
      {/* </Link> */}
    </>
  );
}

export default MentorDetails;
