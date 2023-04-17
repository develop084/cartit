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

import { useSelector } from "react-redux";
import PaymentPage from "./pages/PaymentPage";


function App() {


  const clickHandler =()=>{
    axios.get('http://localhost:8000/api/v1/alpha/:name').then(res => console.log(res))    }
  return (
    <div className="App">
  
      <NavBar />
      <Hero />
      <SwiperHero />
   
      <Button onClick={clickHandler}>Click me</Button>
      {/* <Section/> */}
      <PaymentPage />
    </div>
  );
}

export default App;
