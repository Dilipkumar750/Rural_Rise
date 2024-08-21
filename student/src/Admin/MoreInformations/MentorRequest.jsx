import React from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import mentorImage from '../../assets/mentorImage.png';
import { Image } from '../../components/Image';
import Button from 'react-bootstrap/Button';
import View from "../../components/View"; 
import { Link } from 'react-router-dom';


function MentorRequest() {
  const students = [
    { id: 'Name', name: 'John Das' },
    { id: 'Email', name: 'john12@gmail.com' },
    { id: 'Phone_no', name: '7896541302' },
    { id: 'Qualification', name: 'M.Sc Maths' },
    { id: 'Job Applied', name: 'Tutor Job' },
  ];

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
          
          {students.map((student, index) => (
            <View key={index} style={{ margin: '0.5rem 0', fontSize: '16px' }}>
              <strong>{student.id}:</strong> {student.name}
            </View>
          ))}
        </View>
      </View>

      <View
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          position: 'fixed', 
          bottom: '1rem', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          width: '90%',
        }}
      >
        <Link to='/MentorSuccess/reject'>
          <Button
            variant="primary"
            
            style={{ 
              backgroundColor: '#DBDC31', 
              borderColor: '#DBDC31', 
              width: '', 
              textAlign: 'center' 
            }}
          >
            Discard
          </Button>
        </Link>
        <Link to='/MentorSuccess/success'>
          <Button
            variant="primary"
            
            style={{ 
              backgroundColor: '#DBDC31', 
              borderColor: '#DBDC31', 
              textAlign: 'center' 
            }}
          >
            Approve
          </Button>
        </Link>
      </View>
    </>
  );
}

export default MentorRequest;
