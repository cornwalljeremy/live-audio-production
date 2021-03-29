import React from "react";
import { FaBars } from 'react-icons/fa'
// import Logo from "../Logo";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavBarElements";

const NavBar = ({ isOpen, toggle }) => {
  return (
    <>
      <Nav>
        <NavBarContainer isOpen={isOpen} onClick={toggle}>
          <NavLogo to='/'>Live Audio Production </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon >
          <NavMenu>
            <NavItem>
              <NavLinks to='about' onClick={toggle}>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services' onClick={toggle}>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='pictures' onClick={toggle}>Pictures</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact' onClick={toggle}>Contact</NavLinks>
            </NavItem>
          </NavMenu>
          
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
