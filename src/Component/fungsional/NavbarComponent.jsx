
import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';
const NavbarComponent = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">Ahout</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/mahasiswa">Mahasiswa</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/kelas">Kelas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/hooks">Hooks</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/hookUseEffect">Hook Use Effect</NavLink>
            </NavItem>
            
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
