import React from "react";
import HeaderComponent from "../../components/HeaderComponent";
import List from "../../components/List";
import View from "../../components/View";
import { LuUserCog } from "react-icons/lu";
import { HiChevronRight } from "react-icons/hi";
import faqImg from "../../assets/faq.png";
import editImg from "../../assets/contentform.png";
import shieldImg from "../../assets/shield.png";
import onoffImg from "../../assets/onoff.png";
import userImg from "../../assets/user1.jpg";
import { Image } from "../../components/Image";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <HeaderComponent page="Profile" />
      <View style={{ padding: '1rem' }}>
        <List className='p-4'>
          <Image src={userImg} alt="open book" style={{ width: '80%' }} />
          <span>Mounika Lakshmi</span>
        </List>
      </View>
      <View style={{ padding: '1rem', display: 'grid', gap: '1rem' }}>
        <List>
          <LuUserCog style={{ height: "100%", width: "100%" }} />
          <span>Edit Profile</span>
          <Link to='/EditProfile'>
            <HiChevronRight style={{ height: "100%", width: "100%" }} />
          </Link>
        </List>
        <List>
          <Image src={faqImg} alt="open book" style={{ width: '80%' }} />
          <span>FAQs</span>
          <Link to='/FAQ'>
            <HiChevronRight style={{ height: "100%", width: "100%" }} />
          </Link>
        </List>
        <List>
          <Image src={editImg} alt="open book" style={{ width: '80%' }} />
          <span>Terms And Conditions</span>
          <Link to='/TermsAndConditions'>
            <HiChevronRight style={{ height: "100%", width: "100%" }} />
          </Link>
        </List>
        <List>
          <Image src={shieldImg} alt="open book" style={{ width: '80%' }} />
          <span>Privacy Policy</span>
          <Link to='/PrivacyPolicy'>
            <HiChevronRight style={{ height: "100%", width: "100%" }} />
          </Link>
        </List>
        <List>
          <Image src={onoffImg} alt="open book" style={{ width: '80%' }} />
          <span>Logout</span>
          <Link to='/login'><HiChevronRight style={{ height: '100%', width: '100%' }} /></Link>
        </List>
      </View >
    </>
  );
}

export default Profile;
