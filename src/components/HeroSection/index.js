import React from "react";
import Video from "../../video/video.mp4";
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP } from "./HeroElements";

const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
        <HeroH1>First section of Information </HeroH1>
        <HeroP>Another area for information </HeroP>
        </HeroContent>

      </HeroContainer>
    </>
  );
};

export default HeroSection;
