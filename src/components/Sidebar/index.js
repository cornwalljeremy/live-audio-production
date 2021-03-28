import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
} from "./SidebarElements";

const SideBar = () => {
  return (
    <SideBarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to='about'>About</SideBarLink>
          <SideBarLink to='services'>Services</SideBarLink>
          <SideBarLink to='pictures'>Pictures</SideBarLink>
          <SideBarLink to='contact'>Contact</SideBarLink>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
