import React, { useEffect, useState } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import View from "../components/View"; 
import success from "../assets/SUCCESS.png";
import { Image } from '../components/Image';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

function MentorSuccess() {
  const { title } = useParams();
  const [content, setContent] = useState('')
  useEffect(() => {
    if(title==='success'){
      setContent('Request Got Approved Request status will automatically go to student email')
    }
    if(title==='reject'){
      setContent('The above student request is rejected successfully')
    }
    if(title==='book'){
      setContent('book is successfully downloaded Please check you’re download folder')
    }
    if(title==='video'){
      setContent('video is successfully downloaded Please check you’re download folder')
    }
    if(title==='admin'){
      setContent('Mentor added successfully Please check mentor record for confirmation')
    }
  }, [title,content])

  return (
    <>
      <HeaderComponent page="Add Mentor" title="Mentor Request" />
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
         {content}
          </p>
        </View>
      </View>
      <Link to={ title==='book' || title==='video'? '/MentorHome':'/AdminHome'}>
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

export default MentorSuccess;
