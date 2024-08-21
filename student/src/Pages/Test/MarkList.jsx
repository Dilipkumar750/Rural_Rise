import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from '../../components/HeaderComponent';
import View from "../../components/View"; 

function MarkList() {
  const students = [
    { id: 1, name: 'Mounika', mark: '8/10' },
    { id: 2, name: 'Sam', mark: '7/10' },
    { id: 3, name: 'Arpita', mark: '6/10' },
    { id: 4, name: 'Yash', mark: '2/10' },
    { id: 5, name: 'Shruti', mark: '5/10' },
    { id: 6, name: 'Shailesh', mark: '9/10' },
    { id: 7, name: 'Archana', mark: '10/10' },
  ];

  return (
    <>
      <HeaderComponent page="check marks" title="Student marks record" />
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
          <View>marks</View>
        </View>
        
        {students.map((student) => (
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
            <View>{student.id}</View>
            <View style={{ flexGrow: 1, textAlign: 'center' }}>{student.name}</View>
            <View>{student.mark}</View>
            
          </View>
        ))}
      </View>
    </>
  );
}

export default MarkList;
