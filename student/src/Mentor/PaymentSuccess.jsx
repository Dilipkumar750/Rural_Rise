import View from "../components/View";
import tick from "../assets/tick.png";
import { Image } from "../components/Image";
import HeaderComponent from "../components/HeaderComponent";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


function PaymentSuccess() {
    return (
        <>
            <HeaderComponent page="Mentor Access" title="Book Your Mentor" />
            <View style={{display:'grid',justifyContent:'center',alignItems:'center',height:'70vh'}}>
                <View>
                    <View style={{width:'50%',height:'fit-content',margin:'0 auto'}}>
                        <Image src={tick} style={{width:'100%'}}/>
                    </View>
                    <h3>Payment Successful</h3>
                </View>
            </View>
            <Link to='/MentorHome'><Button style={{width:'100%',backgroundColor:'#DBDC31',position:'absolute',bottom:0,color:'black'}}>OK</Button></Link>
        </>
    )
}
export default PaymentSuccess;
