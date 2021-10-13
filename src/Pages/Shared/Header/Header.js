import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
  const {user,logOut}=useAuth()
    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark"  collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home">Ginius</Navbar.Brand>

    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
     <Nav.Link   as={HashLink}to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink}to="/home#service">service</Nav.Link>
      <Nav.Link as={HashLink}to="/home#exparts">exparts</Nav.Link>

      {user?.email ? 
        <Button variant="light"  onClick={logOut}>log out</Button> :
      <Nav.Link as={Link}to="/login" >sign in</Nav.Link>
      }
      <Navbar.Text>
        Signed in as: <a href="#login">{user.displayName &&  user.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>

  
    </Container>
  </Navbar>  
        </>
    );
};

export default Header;