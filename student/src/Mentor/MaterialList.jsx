import React, { useEffect, useState } from 'react'
import HeaderComponent from "../components/HeaderComponent";
import List from '../components/List';
import { Image } from '../components/Image';
import { HiDownload } from "react-icons/hi";
import openBookImg from "../assets/openBook.png";
import videoImg from "../assets/videos.png";
import View from "../components/View";
import { Link, useParams } from "react-router-dom";
import { HOST } from '../App';
import axios from 'axios';

export default function MaterialList() {
    const { title } = useParams();

    const [data1, setData1] = useState([]);
    useEffect(() => {
        const data = axios.get(`${HOST}/download/document`).then((res) => { setData1(res.data) })
    }, [])

    const downloadFile = (id) => {
        axios.get(`${HOST}/download/document/${id}`, {
            responseType: 'blob', // Ensure binary data is received as a blob
        })
            .then((response) => {
                // Create a URL for the blob response
                const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
                const link = document.createElement('a');
                link.href = url;

                // Extract the filename from the content-disposition header
                const contentDisposition = response.headers['content-disposition'];
                const filename = contentDisposition
                    ? contentDisposition.split('filename=')[1].replace(/"/g, '')
                    : 'download.pdf';  // Default filename if header is missing

                // Set the download attribute with the filename
                link.setAttribute('download', filename);

                // Trigger the download by programmatically clicking the link
                document.body.appendChild(link);
                link.click();

                // Cleanup
                document.body.removeChild(link);
            })
            .catch((error) => {
                console.error('Error downloading file:', error);
            });
    };
    return (
        <>
            <HeaderComponent page="Study Material" title="Access Your Material" />
            {
                title === 'book' ?
                    <View style={{ padding: '1rem', display: 'grid', gap: '1rem' }}>
                        <h1>Books:</h1>
                        {data1 && data1.length > 0 && data1 // Filter the data
                            .map((value, key) => (
                                <List>
                                    <Image src={openBookImg} alt="open book" style={{ width: '80%' }} />
                                    <span>{value.filename}</span>
                                    <HiDownload style={{ height: '100%', width: '100%' }} onClick={() => { const id = value._id; downloadFile(id) }} />
                                </List>
                            ))}
                        {/* <List>
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
                </List> */}
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
