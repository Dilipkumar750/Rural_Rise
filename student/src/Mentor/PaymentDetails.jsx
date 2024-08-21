import HeaderComponent from "../components/HeaderComponent";
import tick from "../assets/tick.png";
import { Image } from "../components/Image";
import View from "../components/View";
import { Button } from "react-bootstrap";
import importImg from "../assets/import.png";
import { Link } from "react-router-dom";

function PaymentDetails() {
    return (
        <>
            <HeaderComponent page="Mentor Access" title="Book Your Mentor" />
            <View
                style={{
                    border: "1px solid black",
                    borderRadius: "10px",
                    padding: "1rem",
                    margin: "1rem",
                }}>
                <View style={{ display: 'grid', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <View>
                        <h3>Payment Details</h3>
                        <Image src={tick} style={{ width: '100px' }} />
                        <h4>Payment Total</h4>
                    </View>
                </View>
                <View
                    style={{
                        border: "1px solid black",
                    borderRadius: "10px",
                    padding: "1rem",
                    margin: "1rem",
                    display:'grid',
                    gap:'1rem'
                    }}
                >
                    <View style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>Date</span>
                        <span>31 Dec 2023</span>
                    </View>
                    <View style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>Details</span>
                        <span>Residential</span>
                    </View>
                    <View style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>Reference num</span>
                        <span>A06453826151</span>
                    </View>
                    <View style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>Account</span>
                        <span>Mounika</span>
                    </View>
                    <View style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>Total Payment</span>
                        <span> ₹500</span>
                    </View>
                    <View style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>Tax</span>
                        <span>₹7</span>
                    </View>
                    <View style={{ display: "flex", justifyContent: "space-between",borderTop:'2px solid black' }}>
                        <span>Total</span>
                        <span> ₹509</span>
                    </View>
                </View>
                <Button style={{width:'100%',borderRadius:"25px" , backgroundColor:'white',border:'1px solid black',color:'black'}}> <Image src={importImg}/> Get PDF Receipt</Button>
                <Link to='/MentorHome'><Button style={{width:'100%',borderRadius:"25px" , backgroundColor:'#DBDC31',border:'1px solid black',color:'black',marginTop:'1rem'}}>Back to Homepage</Button></Link>
            </View>
        </>
    );
}
export default PaymentDetails;
