import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
} from "./SidebarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to='about' onClick={toggle}>
            About
          </SideBarLink>
          <SideBarLink to='services' onClick={toggle}>
            Services
          </SideBarLink>
          <SideBarLink to='pictures' onClick={toggle}>
            Pictures
          </SideBarLink>
          <SideBarLink to='contact' onClick={toggle}>
            Contact
          </SideBarLink>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
