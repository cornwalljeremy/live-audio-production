import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
        <NavBtn>
          <NavBtnLink to="home">Live Audio Production</NavBtnLink>
        </NavBtn>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/photos" activeStyle>
            Photos
          </NavLink>
          <NavLink to="/services" activeStyle>
            Services
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Us
          </NavLink>
        </NavMenu>
        
      </Nav>
    </>
  );
};

export default NavBar;
