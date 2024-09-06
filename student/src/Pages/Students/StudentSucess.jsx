import React from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import View from "../../components/View";
import success from "../../assets/SUCCESS.png";
import { Image } from '../../components/Image';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function StudentSuccess() {
  return (
    <>
      <HeaderComponent page="Student Request" title="Paid student list" />
      <View style={{
        border: "1px solid rgba(0, 0, 0, 0.16)",
        boxShadow: "rgba(0, 0, 0, 0.15) 4px 4px 2.6px",
        padding: '0.4rem',
        margin: "1rem",
        position: 'relative',
        minHeight: '200px'
      }}>
        <View style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: '1rem',
          minHeight: '200px'
        }}>
          <Image src={success} alt="Success" style={{ width: "50px", margin: "0 auto" }} />
          <p style={{ textAlign: 'center', fontSize: '16px', color: '#28a745', marginTop: '1rem' }}>
            Code successfully sent to the <br />given mail id.
          </p>
        </View>
      </View>
      <Link to='/MentorHome'>
        <Button
          variant="primary"
          className="mb-0"
          style={{
            backgroundColor: '#DBDC31',
            borderColor: '#DBDC31',
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',  // Center the button horizontally.
            width: '90%'
          }}
          
        >
          OK
        </Button>
      </Link>
    </>
  );
}

export default StudentSuccess;
