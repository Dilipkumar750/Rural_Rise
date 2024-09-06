import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import img1 from "../assets/IMG-20240819-WA0015.jpg";
import AddMentor from "../assets/addmentor.png";
import MoreInfo from "../assets/moreinformations.png";
import MentorRecords from "../assets/MentorRecords.png";
import RequestList from "../assets/RequestList.png";
import { Image } from "../components/Image";
import SmallBox from "../components/SmallBox";
import View from "../components/View"; 
import { Link } from "react-router-dom";


function AdminHome() {
  return (
    <>
      <HeaderComponent page="Rural Rise" title="Empowering Growth" />
      <View className="row align-items-start border border-1 m-2 py-3">
        <View className="col-4">
          <Image src={img1} className="img-fluid rounded-start" alt="Welcome image" />
        </View>
        <View className="col-8">
          <h5 style={{ fontSize: "1.25rem", textAlign: "center" }}>
            Welcome To RuralRise!!!!
          </h5>
          <p style={{ fontSize: "0.65rem", textAlign: "center" }}>
            Explore, Learn, Thrive: Access curated study materials tailored to
            rural curriculum needs.
          </p>
        </View>
      </View>
      <View
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "1rem",
          padding: "0 0.6rem",
        }}
      >
        <Link to='/MentorList'>
          <View style={{height: '100%'}}>
            <SmallBox image={AddMentor} title="Add Mentor" />
          </View>
        </Link>
        <Link to='/MoreInfoHomes'>
          <View style={{height: '100%'}}>
            <SmallBox image={MoreInfo} title="More Information" />
          </View>
        </Link>
        <Link to='/MentorRecords'>
          <View style={{height: '100%'}}>
            <SmallBox image={MentorRecords} title="Mentor Records" />
          </View>
        </Link>
        <Link to='/Approvedmentors'>
          <View style={{height: '100%',}}>
            <SmallBox image={RequestList} title="Approved Mentors List" />
          </View>
        </Link>
      </View>
      <View style={{
        border: "1px solid rgba(0, 0, 0, 0.16)",
        boxShadow: "rgba(0, 0, 0, 0.15) 4px 4px 2.6px",
        textAlign: 'center',
        margin: '1rem',
        height: '150px'
      }}>
        <View style={{ width: '60%', borderBottom: '2px solid rgba(0, 0, 0, 0.16)', margin: '0 auto' }}>
          <h5>Latest Updates</h5>
        </View>
        <View>
          {/* Content for Latest Updates */}
        </View>
      </View>
    </>
  );
}

export default AdminHome;
