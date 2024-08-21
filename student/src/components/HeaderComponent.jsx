import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { HiChevronLeft } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import logo from '../assets/navLogo.png'
import { useNavigate, useLocation, Link } from 'react-router-dom';

function HeaderComponent({page,title}) {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    // Check if there is a history to go back to
    if (location.key) {
      navigate(-1);
    } else {
      // Redirect to a default page, e.g., home page
      navigate('/');
    }
  };

  return (
    <Navbar className="" style={{backgroundColor:'#DBDC31'}}>
      <Container>
        <Navbar.Brand onClick={goBack}>
          <HiChevronLeft />
        </Navbar.Brand>
        <Navbar.Brand href="#home">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <h4>{page}</h4>
            <h6>{title}</h6>
          </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Link to="/Profile"><AiOutlineHome /></Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent;
