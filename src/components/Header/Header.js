import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../images/logo.png'
import { NavLink } from "react-router-dom";
const Header = (props) => {
  
    return (
       
              <Navbar collapseOnSelect expand="lg" className='menu fixed-top' >
      <Container className='navmenu'>
        <Navbar.Brand href="#home">

            <img src={logo} className="img-logo" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="header-link" to="/home" >Home</NavLink>
            <NavLink className="header-link" to="/discount">Discount</NavLink>
            
            
          </Nav>
          <Nav>
            <NavLink className="header-link" to="/Service">Service</NavLink>
            <NavLink >
            {
                  props.user.email ? <button onClick={props.handleSignout} style={{borderRadius:"25px",backgroundColor:"#e9496e",border:"2px solid white",width:'120px',color:"white"}}>Sign Out</button>:<button onClick={props.handlegoogleSignin} style={{borderRadius:"25px",backgroundColor:"#e9496e",border:"2px solid white",width:'120px',color:"white"}}>Sign In</button>
                }
            </NavLink>
            <Navbar.Brand >
                {
                  props.user.email? 
                  <img src={props.user.photoURL} style={{width:"50px",height:"50px",borderRadius:"50px"}} className="img-user" alt="" />
                  
                  :
                  <small>&nbsp;</small>
                  
                }
                
               
            </Navbar.Brand>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    );
};

export default Header;