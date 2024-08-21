import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import img1 from "../assets/IMG-20240819-WA0015.jpg";
import mentorImg from "../assets/mentor.jpg";
import studyImg from "../assets/IMG-20240819-WA0021.jpg";
import chartImg from "../assets/chart.jpg";
import AssessmentImg from "../assets/Assessment.png";
import infoImg from "../assets/IMG-20240819-WA0023.jpg";
import billImg from "../assets/IMG-20240819-WA0024.jpg";
import { Image } from "../components/Image";
import View from "../components/View";
import SmallBox from "../components/SmallBox";
import { Link } from "react-router-dom";


function MentorHome() {
  return (
    <>
      <HeaderComponent page="Rural Rise" title="Empowering Growth" />
      <View className="row align-items-start border border-1 m-2 py-3">
        <View className="col-4">
          <Image src={img1} className="img-fluid rounded-start" alt="..." />
        </View>
        <View className="col-8">
          <h5 style={{ fontSize: "16px", alignItems: "center" }}>
            Welcome To RuralRise!!!!
          </h5>
          <p style={{ fontSize: "14px", textAlign: "center" }}>
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
        <Link to='/MentorAccess'>
          <View>
            <SmallBox image={mentorImg} title="Mentor Access" />
          </View>
        </Link>
        <Link to="/StudyMaterialsList">
          <View>
            <SmallBox image={studyImg} title="Study Material" />
          </View>
        </Link>
        <Link to='/Progress'>
          <View>
            <SmallBox image={chartImg} title="Progress Chart" />
          </View>
        </Link>
        <Link to='/TestList'>
          <View>
            <SmallBox image={AssessmentImg} title="Assessment" />
          </View>
        </Link>
        <Link to='/Information'>
          <View>
            <SmallBox image={infoImg} title="More Information" />
          </View>
        </Link>
        <Link to='/PaymentDetails'>
          <View>
            <SmallBox image={billImg} title="Payment Status" />
          </View>
        </Link>
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

export default MentorHome;
