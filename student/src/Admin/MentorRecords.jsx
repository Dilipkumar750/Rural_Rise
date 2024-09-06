import React, { useEffect, useState } from 'react';
import HeaderComponent from '../components/HeaderComponent';
// Import the right component if View is a custom component or replace with View
import View from "../components/View"; 
import axios from 'axios';
import { HOST } from '../App';

function MentorRecords() {
  const students = [
    { id: 1, name: 'John Das', contact: '7895858168' },
    { id: 2, name: 'Riya Das', contact: '3456789234' },
    { id: 3, name: 'Arpita', contact: '1234567890' },
    { id: 4, name: 'Yash', contact: '2345678905' },
    { id: 5, name: 'Shruti', contact: '1234567890' },
    { id: 6, name: 'Shailesh', contact: '2345678905' },
    { id: 7, name: 'Archana', contact: '3456789234' },
  ];
  const [mentordata ,setMentorData] = useState([])
  const getMentor = () =>{
    const mentor = axios.get(`${HOST}/user/userData`).then((res)=>setMentorData(res.data))
  }
  useEffect(()=>{
   getMentor()
  },[])

 const mentorlist= mentordata.filter(item=> item.role==='mentor' && item.action==='yes')
  return (
    <>
      <HeaderComponent page="Mentor Record" title="Listof mentors" />
      <View style={{ width: '95%', margin: '0 auto', marginTop: '10%', borderRadius: '10px', overflow: 'hidden' }}>
        <View style={{ 
          backgroundColor: '#DBDC31', 
          padding: '10px 20px',
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #ddd',
          // fontWeight: 'bold',
        }}>
          <View> No</View>
          <View style={{ flexGrow: 1, textAlign: 'center' }}>Mentor Name</View>
          <View style={{ textAlign: 'center' }}>Contact</View>
        </View>
        
        {mentorlist.map((student,key) => (
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
            <View>{student.contact_no}</View>
          </View>
        ))}
      </View>
    </>
  );
}

export default MentorRecords;
