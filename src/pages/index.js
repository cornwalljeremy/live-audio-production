import React, {useState} from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/Sidebar";
import HeroSection from '../components/HeroSection'
import AboutSection from "../components/About";
// import {Button} from '../components/ButtonElement'

const Home = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
      <AboutSection />
    </>
  );
};

export default Home;
