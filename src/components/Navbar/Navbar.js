import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'

export default function NavBar() {
  return (
    <Navbar id='navBarMain' collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Navbar.Brand>
        <NavLink to='/home'>
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' id='dropdownToggle' />
      <Navbar.Collapse id='responsive-navbar-nav nav-link'>
          <Nav className='mr-auto'>
            <Navbar.Text>Signed in as: <a href='/profile'></a>
            </Navbar.Text>
          </Nav>
        <Nav>
          <Navbar.Text>
            <NavLink to='/home'>Home</NavLink>
          </Navbar.Text>
          <NavDropdown title='My Account' id='collapsible-nav-dropdown'>
            <NavDropdown.Item as={NavLink} to='/help'>Help</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/profile'>Account Details</NavDropdown.Item>
            <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/logout' onClick>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
