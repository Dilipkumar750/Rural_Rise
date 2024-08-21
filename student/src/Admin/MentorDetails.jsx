import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import mentorImage from '../assets/mentorImage.png';
import { Image } from '../components/Image';
import Button from 'react-bootstrap/Button';
import View from "../components/View"; 

function MentorDetails() {
  const students = [
    { id: 'Name', name: 'John Das' },
    { id: 'Email', name: 'john12@gmail.com' },
    { id: 'Phone_no', name: '7896541302' },
    { id: 'Qualification', name: 'M.sc Maths' },
    { id: 'Class', name: '1st to 5th' },
    { id: 'Fees', name: 'Rs. 500' },
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

      <Button
        variant="primary"
        className="mb-0"
        href='/Mentorsuccess'
        style={{ 
          backgroundColor: '#DBDC31', 
          borderColor: '#DBDC31', 
          position: 'fixed', 
          bottom: '1rem',
          left: '50%', 
          transform: 'translateX(-50%)',  // Center the button horizontally.
          width: '90%',
          textAlign: 'center' 
        }}
      >
        ADD
      </Button>
    </>
  );
}

export default MentorDetails;
