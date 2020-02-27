import React, {useState, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import PersonalLawyer from "./components/PersonalLawyer/PersonalLawyer";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import How from "./components/How/How";
import Advantages from "./components/Advantages/Advantages";
import Consultation from "./components/Consultation/Consultation";
import Reviews from "./components/Reviews/Reviews";

function App() {

  const mainHeader = useRef(null);

  return (
    <>
      <Header forRef={mainHeader} />
      <PersonalLawyer/>
      <Services/>
      <About/>
      <How/>
      <Advantages/>
      <Consultation/>
      <Reviews/>
    </>
  );
}

export default App;
