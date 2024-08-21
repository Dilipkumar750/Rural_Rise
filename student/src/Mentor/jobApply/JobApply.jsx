import React from 'react'
import HeaderComponent from "../../components/HeaderComponent";
import Form from 'react-bootstrap/Form';
import tutorImg from "../../assets/tutor.png";
import javajobImg from "../../assets/javajob.png";
import View from '../../components/View';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const field =[
    'Maths',
    "Science",
    "Arts",
    "Computer Science",
    "Mechanical",
    "Electrical",
    "Civil",
    "Doctor",
    "Physiotheraphy"
]

const job = [
    {   
        id:'1',
        image:tutorImg,
        title:"Lecturer in Computer Science",
        address:'Vasan Institute of Ophthalmology Tamil Nadu'
    },
    {
        id:'2',
        image:javajobImg,
        title:"Java Software Engineer",
        address:'Hitachi Energy Chennai, Tamil Nad'
    },
]

function JobApply() {
  return (
    <>
        <HeaderComponent page="More Information" title="Apply For Jobs" />
        <View style={{padding:'1rem',display:'grid',gap:'1rem'}}>
            <h3>Choose A Field:</h3>
            <Form.Select>
            {field.map((item, index) => (
                <option key={index} >{item}</option>
                ))}
            </Form.Select>
            <h3>Apply For Jobs:</h3>
            <View style={{display:'grid',gap:'1rem'}}>
            {job.map((item, index) => (
                <View style={{display:'grid',gridTemplateColumns:'33% 67%',border:'1px solid black',borderRadius:'10px',padding:'1rem',gap:'1rem'}}>
                    <View><img src={item.image} alt="job" style={{ width: "100%",border:'1px solid black' }} /></View>
                    <View>
                        <p style={{fontSize:'14px'}}>{item.title}</p>
                        <p style={{fontSize:'14px'}}>{item.address}</p>
                        <Link to={`/JobDiscription/${item.id}`}><View style={{ margin: '0 auto', width: 'fit-content' }}><Button style={{ backgroundColor: '#DBDC31', border: '0', padding: "4px 20px", color: 'black' }}>Job Description</Button></View></Link>
                    </View>
                </View>
            ))}
            </View>
        </View>
    </>
  )
}

export default JobApply