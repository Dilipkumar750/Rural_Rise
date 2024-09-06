import React from "react";
import View from "../components/View";
import { Image } from "../components/Image";
import HeaderComponent from "../components/HeaderComponent";
import user from "../assets/user.jpg";
import { Button } from "react-bootstrap";
import { TextInput } from "../components/TextInput";
import { Link, useParams } from "react-router-dom";


function RegistrationForm() {
    const{id,id1}= useParams();
    return (
        <>
            <HeaderComponent page="Mentor Access" title="Book Your Mentor" />
            <View style={{
                border: "1px solid rgba(0, 0, 0, 0.16)",
                boxShadow: "rgba(0, 0, 0, 0.15) 4px 4px 2.6px", padding: '0.4rem',margin:"1rem"
            }}>
                <h6 style={{ textAlign: 'center' }}>REGISTERATION FORM</h6>
                <View style={{ display: "grid", gridTemplateColumns: "40% 60%", gap: '1rem', padding: '0 1rem' }}>
                    <p style={{ fontSize: '10px' }}>Name</p>
                    <TextInput type="text" />
                    <p style={{ fontSize: '10px' }}>Email</p>
                    <TextInput type="text" />
                    <p style={{ fontSize: '10px' }}>Contanct No</p>
                    <TextInput type="text" />
                    <p style={{ fontSize: '10px' }}>Qualification</p>
                    <TextInput type="text" />
                </View>
                <View style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}><Link to={`/Payment/${id}/${id1}`}><Button style={{ backgroundColor: '#DBDC31' }}>PAY</Button></Link></View>
            </View>
        </>
    );
}

export default RegistrationForm;
