import React from "react";
import HeaderComponent from "../../components/HeaderComponent";
import View from "../../components/View";
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link } from "react-router-dom";

function Progress() {
    return (
        <>
            <HeaderComponent page="Progress Chart" title="Check Progress" />
            <View style={{display:'grid',justifyContent:"space-around",height:'80vh',padding:'1rem'}}>
                    <Table responsive style={{border:'1px solid black'}}>
                        <thead>
                            <tr>
                                <th style={{border:'1px solid black'}}>Total Questions</th>
                                <th style={{border:'1px solid black'}}>Wrong Answers</th>
                                <th style={{border:'1px solid black'}}>Correct Answers</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{padding:'1rem',border:'1px solid black'}}>10</td>
                                <td style={{padding:'1rem',border:'1px solid black'}}>3</td>
                                <td style={{padding:'1rem',border:'1px solid black'}}>7</td>
                            </tr>
                        </tbody>
                    </Table>
                <View>
                    <h3>Progress Bar:</h3>
                    <ProgressBar now={60} label={`60%`} />
                </View>
                <View style={{border:'1px solid black',padding:'1rem',height:'fit-content'}}>
                    <p>As per the above result, your progress is 70%. Kindly study well for next test.</p>
                </View>
            </View>
                <Link to='/MentorHome'><Button style={{width:'100%',backgroundColor:'#DBDC31',position:'absolute',bottom:0,color:'black'}}>OK</Button></Link>

        </>
    )
}

export default Progress