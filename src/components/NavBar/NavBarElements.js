import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
// import { Link as LinkS } from 'react-scroll';
// import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: #ffeb38;
  height: 80px;
  // margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  font-size: 1rem;
  top: 0;

  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: rgb(17, 99, 17);
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;
