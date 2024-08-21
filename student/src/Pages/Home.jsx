import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import img1 from "../assets/IMG-20240819-WA0015.jpg";
import RequestImg from "../assets/application.png";
import studyImg from "../assets/IMG-20240819-WA0021.jpg";
import StudentImg from "../assets/record.png";
import StudentReqImg from "../assets/studentReq.png";
import Addtest from "../assets/addtest.png";
import PerformanceImg from "../assets/performance.png";
import { Image } from "../components/Image";
import View from "../components/View";
import SmallBox from "../components/SmallBox";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate=useNavigate();
  return (
    <>
      <HeaderComponent page="Rural Rise" title="Empowering Growth" />
      <View className="row align-items-start border border-1 m-2 py-3">
        <View className="col-4">
          <Image src={img1} className="img-fluid rounded-start" alt="..." />
        </View>
        <View className="col-8">
          <h5 style={{ fontSize: "12px", alignItems: "center" }}>
            Welcome To RuralRise!!!!
          </h5>
          <p style={{ fontSize: "10px", textAlign: "center" }}>
            Explore, Learn, Thrive: Access curated study materials tailored to
            rural curriculum needs.
          </p>
        </View>
      </View>
      <View
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          padding: "0 0.6rem",
        }}
      >
        <View style={{height: '150px'}}>
          <SmallBox image={RequestImg} title="Request Form" onPress={()=>navigate('/registrationForm')}/>
        </View>
        <View style={{height: '150px'}}>
          <SmallBox image={studyImg} title="Add Study Material" onPress={()=>navigate('/addClass')} />
        </View>
        {/* <View style={{height: '150px'}}>
          <SmallBox image={StudentImg} title="Student Record" />
        </View> */}
        <View style={{height: '150px'}}>
          <SmallBox image={StudentReqImg} title="Student Request" onPress={()=>navigate('/studentTables')} />
        </View>
        <View style={{height: '150px'}}>
          <SmallBox image={Addtest} title="Add Test" onPress={()=>navigate('/TestHome')} />
        </View>
        {/* <View style={{height: '150px'}}>
          <SmallBox image={PerformanceImg} title="Student Performance" />
        </View> */}
      </View>
      <View style={{
        border: "1px solid rgba(0, 0, 0, 0.16)",
        boxShadow: "rgba(0, 0, 0, 0.15) 4px 4px 2.6px", textAlign: 'center', margin: '1rem', height: '150px'
      }}>
        <View style={{ width: '60% ', borderBottom: '2px solid rgba(0, 0, 0, 0.16)', margin: '0 auto' }}>
          <h5>Latest Updates</h5>
        </View>
        <View>

        </View>
      </View>
    </>
  );
}

export default Home;
