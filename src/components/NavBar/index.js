import React from "react";

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Live Audio Production</h1>
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
        <NavBtn>
            <NavBtnLink to="home">Live Audio Production</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default NavBar;
