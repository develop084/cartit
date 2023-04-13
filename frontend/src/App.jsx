import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import axios from "axios";
import { Button, ButtonGroup } from "@chakra-ui/react";
import Hero from "./components/hero/Hero";
import { SwiperSlide } from "swiper/react";
import SwiperHero from "./components/hero/SwiperHero";
import Section from "./components/hero/Section";
import Counter from "./components/Counter";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <SwiperHero />
      
      {/* <Section/> */}
    </div>
  );
}

export default App;
