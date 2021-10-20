import React from 'react';
// import { HashLink } from 'react-router-hash-link';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
  const {user,logOut}=useAuth()
    return (
        <>
            <Navbar sticky="top" bg="light" variant="dark"  collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home" className="text-primary">Heath-Care</Navbar.Brand>

    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
     <Nav.Link   as={Link}to="/home">Home</Nav.Link>
      <Nav.Link as={Link}to="/services">service</Nav.Link>
      <Nav.Link   as={Link}to="/contact">conatct</Nav.Link>

      {user?.email ? 
        <Button variant="light"  onClick={logOut}>log out</Button> :
      <Nav.Link as={Link}to="/login" >sign in</Nav.Link>
      }
      <Navbar.Text>
        <a href="#login"  className="text-dark">{user.displayName &&  user.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>

  
    </Container>
  </Navbar>  
        </>
    );
};

export default Header;