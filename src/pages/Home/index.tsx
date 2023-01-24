import { useState } from "react";
import { Sidebar } from "../../components/sidebar";
import { Navbar } from "../../components/Navbar";
import { HeroSection } from "../../components/HeroSection";
import { InfoSection } from "../../components/InfoSection";
import { homeObjOne, homeObjTwo, homeObjThree } from "../../components/InfoSection/data";
import { Services } from "../../components/Services";
import { Footer } from "../../components/Footer";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggleOpen}/>
      <Navbar toggle={toggleOpen}/>
      <HeroSection />
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};