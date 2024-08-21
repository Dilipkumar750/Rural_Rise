import React from 'react'
import HeaderComponent from "../components/HeaderComponent";
import Button from 'react-bootstrap/Button';
import { Image } from '../components/Image';
import success from "../assets/SUCCESS.png";
import View from "../components/View";

function StudyMaterialSuccess() {
    return (
        <>
            <HeaderComponent page="Study Material" title="Access Your Material" />
            <View style={{height:'70vh',display:'grid',justifyItems:'center',alignItems:'center'}}>
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
                        <p style={{ textAlign: 'center', fontSize: '16px', marginTop: '1rem' }}>
                            Maths.mp4 video is successfully downloadedPlease check you’re downloadfolder
                        </p>
                    </View>
                </View>
            </View>
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
        </>
    )
}

export default StudyMaterialSuccess