import React, { useEffect, useState } from 'react'
import View from "../components/View";
import { Image } from "../components/Image";
import HeaderComponent from "../components/HeaderComponent";
import user from '../assets/user.jpg'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { HOST } from '../App';


function MentorAccess() {

  const [mentordata ,setMentorData] = useState([])
  const user = JSON.parse(localStorage.getItem("user"));

  const getMentor = () =>{
    const mentor = axios.get(`${HOST}/user/userData`).then((res)=>setMentorData(res.data))
  }
  useEffect(()=>{
   getMentor()
  },[])

 const mentorlist= mentordata.filter(item=> item.role==='mentor' && item.action==='yes')
console.log('ne',mentorlist)

  return (
    <>
      <HeaderComponent page="Mentor Access" title="Book Your Mentor" />
     {mentorlist.map((value,key)=>(<View style={{ padding: '1rem' }}>
        <h3>Already Registered Mentors: </h3>
        <View style={{
          border: "1px solid rgba(0, 0, 0, 0.16)",
          boxShadow: "rgba(0, 0, 0, 0.15) 4px 4px 2.6px",display:'grid',gridTemplateColumns:'40% 60%',columnGap:'1rem',padding:'1rem'
        }} key={key+1}>
          <View>
            <Image src={user} style={{width:'70%',borderRadius:'50%'}}/>
          </View>
          <View>
            <p style={{margin:0,fontSize:'12px',}}>Name : {value.name}</p>
            <p style={{margin:0,fontSize:'12px'}}>Email: {value.email}</p>
            <p style={{margin:0,fontSize:'12px'}}>Phone No: {value.contact_no}</p>
            <p style={{margin:0,fontSize:'12px'}}>Qualification: {value.classes}</p>
            <p style={{margin:0,fontSize:'12px'}}>Class: {value.department}</p>
            <p style={{margin:0,fontSize:'12px'}}>Fees: 500</p>
          </View>
          {user.mentorId !== value.id?<Link to={`/MentorRegistrationForm/${user.id}/${value.id}`}><Button style={{padding:'5px', width:'80%',fontSize:'12px',backgroundColor:'#DBDC31' }}>Register</Button>
          </Link>:false}
          <Link to='/home'> <Button style={{padding:'0', width:'60%',fontSize:'10px',backgroundColor:'#DBDC31' }}>Connect to Whatsapp</Button></Link>
        </View>
      </View>))}
      {/* <View style={{ padding: '1rem' }}>
        <h3>Available Mentors:  </h3>
        <View style={{
          border: "1px solid rgba(0, 0, 0, 0.16)",
          boxShadow: "rgba(0, 0, 0, 0.15) 4px 4px 2.6px",display:'grid',gridTemplateColumns:'40% 60%',columnGap:'1rem',padding:'1rem'
        }}>
          <View>
            <Image src={user} style={{width:'70%',borderRadius:'50%'}}/>
          </View>
          <View>
            <p style={{margin:0,fontSize:'12px',}}>Name : john</p>
            <p style={{margin:0,fontSize:'12px'}}>Email: john12@gmail.com</p>
            <p style={{margin:0,fontSize:'12px'}}>Phone No: 34578279799</p>
            <p style={{margin:0,fontSize:'12px'}}>Qualification: MSC Maths</p>
            <p style={{margin:0,fontSize:'12px'}}>Class: 1st to 5th</p>
            <p style={{margin:0,fontSize:'12px'}}>Fees: 500</p>
          </View>
            <Link to='/MentorRegistrationForm'><Button style={{padding:'5px', width:'80%',fontSize:'12px',backgroundColor:'#DBDC31' }}>Register</Button></Link>
            <Button style={{padding:'0', width:'60%',fontSize:'10px',backgroundColor:'#DBDC31' }}>Connect to Whatsapp</Button>
        </View>
      </View> */}
    </>
  )
}

export default MentorAccess
