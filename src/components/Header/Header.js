import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../images/logo.png'
const Header = () => {
    return (
       
              <Navbar collapseOnSelect expand="lg" className='menu fixed-top' >
      <Container className='navmenu'>
        <Navbar.Brand href="#home">

            <img src={logo} className="img-logo" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" >Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Service</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    );
};

export default Header;