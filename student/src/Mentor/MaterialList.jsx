import React from 'react'
import HeaderComponent from "../components/HeaderComponent";
import List from '../components/List';
import { Image } from '../components/Image';
import { HiDownload } from "react-icons/hi";
import openBookImg from "../assets/openBook.png";
import videoImg from "../assets/videos.png";
import View from "../components/View"; 
import { Link, useParams } from "react-router-dom";

export default function MaterialList() {
    const { title } = useParams();

    return (
        <>
            <HeaderComponent page="Study Material" title="Access Your Material" />
            {
                title==='book'?
            <View style={{ padding: '1rem', display: 'grid', gap: '1rem' }}>
                <h1>Books:</h1>
                <List>
                    <Image src={openBookImg} alt="open book" style={{ width: '80%' }} />
                    <span>Class-1st</span>
                    <Link to='/MentorSuccess/book'><HiDownload style={{ height: '100%', width: '100%' }} /></Link>
                </List>
                <List>
                    <Image src={openBookImg} alt="open book" style={{ width: '80%' }} />
                    <span>Class-2st</span>
                    <Link to='/MentorSuccess/book'><HiDownload style={{ height: '100%', width: '100%' }} /></Link>
                </List>
                <List>
                    <Image src={openBookImg} alt="open book" style={{ width: '80%' }} />
                    <span>Class-3st</span>
                    <Link to='/MentorSuccess/book'><HiDownload style={{ height: '100%', width: '100%' }} /></Link>
                </List>
                <List>
                    <Image src={openBookImg} alt="open book" style={{ width: '80%' }} />
                    <span>Class-4st</span>
                    <Link to='/MentorSuccess/book'><HiDownload style={{ height: '100%', width: '100%' }} /></Link>
                </List>
            </View>
            :
            <View style={{ padding: '1rem', display: 'grid', gap: '1rem' }}>
                <h1>Videos:</h1>
                <List>
                    <Image src={videoImg} alt="open book" style={{ width: '80%' }} />
                    <span>Maths.mp4</span>
                    <Link to='/MentorSuccess/video'><HiDownload style={{ height: '100%', width: '100%' }} /></Link>
                </List>
                <List>
                    <Image src={videoImg} alt="open book" style={{ width: '80%' }} />
                    <span>Science.mp4</span>
                    <Link to='/MentorSuccess/video'><HiDownload style={{ height: '100%', width: '100%' }} /></Link>
                </List>
                <List>
                    <Image src={videoImg} alt="open book" style={{ width: '80%' }} />
                    <span>English.mp4</span>
                    <Link to='/MentorSuccess/video'><HiDownload style={{ height: '100%', width: '100%' }} /></Link>
                </List>
                <List>
                    <Image src={videoImg} alt="open book" style={{ width: '80%' }} />
                    <span>Hindi.mp4</span>
                    <Link to='/MentorSuccess/video'><HiDownload style={{ height: '100%', width: '100%' }} /></Link>
                </List>
                <List>
                    <Image src={videoImg} alt="open book" style={{ width: '80%' }} />
                    <span>Telugu.mp4</span>
                    <Link to='/MentorSuccess/video'><HiDownload style={{ height: '100%', width: '100%' }} /></Link>
                </List>
            </View>
            }
        </>
    )
}
