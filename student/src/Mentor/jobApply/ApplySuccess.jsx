import React from 'react'
import HeaderComponent from '../../components/HeaderComponent'
import List from '../../components/List'
import test from "../../assets/test.png";
import { Image } from '../../components/Image';
import View from '../../components/View';
import success from "../../assets/SUCCESS.png";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function ApplySuccess() {
    return (
        <>
            <HeaderComponent page="Progress Chart" title="Check Progress" />

            <View style={{ height: '70vh', display: 'grid', justifyItems: 'center', alignItems: 'center' }}>
                <View>
                    <View style={{
                        border: "1px solid rgba(0, 0, 0, 0.16)",
                        boxShadow: "rgba(0, 0, 0, 0.15) 4px 4px 2.6px",
                        padding: '0.4rem',
                        margin: "1rem",
                        position: 'relative',
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
                            Thank You For Applying for the job We will let you know the application status through email in some days
                            </p>
                        </View>
                    </View>
                </View>
            </View>
            <Link to='/MentorHome'><Button style={{width:'100%',backgroundColor:'#DBDC31',position:'absolute',bottom:0,color:'black'}}>OK</Button></Link>

        </>
    )
}

export default ApplySuccess