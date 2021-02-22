
import React, { useContext, useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText,Button
  } from 'reactstrap';
  import {NavLink} from 'react-router-dom'
import { CartContext } from "../../CartContext";
const NavbarComponent = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const {value,setValue} =useContext(CartContext)
  
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand to="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/" className="nav-link">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" className="nav-link">Ahout</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/mahasiswa" className="nav-link">Mahasiswa</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/kelas" className="nav-link">Kelas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/hooks" className="nav-link">Hooks</NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/hookUseEffect" className="nav-link">Hook Use Effect</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/produk" className="nav-link">Produk</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/reducer" className="nav-link">Reducer</NavLink>
            </NavItem>
            
          </Nav>
          <NavbarText>
            <Button>{value}</Button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
