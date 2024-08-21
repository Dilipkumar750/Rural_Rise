import React from 'react'
import HeaderComponent from "../components/HeaderComponent";
import { TextInput } from '../components/TextInput';
import { Button } from 'react-bootstrap';
import List from '../components/List';
import openBookImg from "../assets/openBook.png";
import { HiChevronRight } from "react-icons/hi";
import View from '../components/View';
import { Image } from '../components/Image';
import { Link } from 'react-router-dom';


function StudyMaterialsList() {
  return (
    <>
      <HeaderComponent page="Study Material" title="Access Your Material" />
      <View style={{margin:'1rem',border:'1px solid black',padding:'1rem'}}>
        <p>Enter Id No.:</p>
        <input type="text" style={{display:'block',width:'100%',border:'1px solid black'}} />
        <br />
        <View style={{margin:'0 auto',width:'fit-content'}}><Button style={{backgroundColor:'#DBDC31',border:'0',padding:"4px 20px",color:'black'}}>Procced</Button></View>
      </View>
      <View style={{margin:'1rem',border:'1px solid black'}}>
        <View style={{borderBottom:'1px solid black',padding:'1rem'}}>STUDY MATERIAL</View>
        <Link to='/mentorMaterials'>
          <View style={{padding:'1rem',display:'grid',gap:'1rem'}}>
            <List>
              <Image src={openBookImg} alt="open book" style={{width:'80%'}} />
              <span>Class-1st</span>
              <HiChevronRight style={{height:'100%',width:'100%'}} />
            </List>
            <List>
              <Image src={openBookImg} alt="open book" style={{width:'80%'}} />
              <span>Class-2nd</span>
              <HiChevronRight style={{height:'100%',width:'100%'}} />
            </List>
            <List>
              <Image src={openBookImg} alt="open book" style={{width:'80%'}} />
              <span>Class-3rd</span>
              <HiChevronRight style={{height:'100%',width:'100%'}} />
            </List>
            <List>
              <Image src={openBookImg} alt="open book" style={{width:'80%'}} />
              <span>Class-4th</span>
              <HiChevronRight style={{height:'100%',width:'100%'}} />
            </List>
          </View>
        </Link>
      </View>
    </>
  )
}

export default StudyMaterialsList
