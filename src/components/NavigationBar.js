import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/navigation.css';
import BlueMoon from '../assets/BlueMoon.jpg';

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  window.history.pushState(null, '', '#home'); 
}

function NavigationBar() {

    return (
        <Navbar bg="black" className="py-5" sticky="top" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="navbar-content" />
                <Navbar.Collapse id="navbar-content">
                    <Nav className="mx-auto">
                        <Nav.Link onClick={scrollToTop} className="text-white">Home</Nav.Link>                        
                        <Nav.Link href="#about" className="text-white">About</Nav.Link>
                        <Nav.Link href="#projects" className="text-white">Projects</Nav.Link>
                        <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <img src={BlueMoon} alt="BlueMoon" className="nav-image" />
            </Container>
        </Navbar>
    )
}

export default NavigationBar;