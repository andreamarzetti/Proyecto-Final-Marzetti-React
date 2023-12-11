import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { CartWidget } from "./CartWidget";


export const NavBar = () => {
  return (
    <Navbar bg="light" data-bs-theme="ligth">
      <Container>
        <NavLink to="/">
          <Navbar.Brand >Piki Estilo</Navbar.Brand>
        </NavLink>
        <Nav className="me-auto">
        <Nav.Link as={NavLink} to={"/category/Remeras"}>
          Remeras
          </Nav.Link>
          <Nav.Link as={NavLink} to={"/category/Pantalones"}>
          Pantalones
          </Nav.Link>
          <Nav.Link as={NavLink} to={"/category/Camperas"}>
          Camperas
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>

  )
};