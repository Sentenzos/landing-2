import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import PersonalLawyer from "./components/PersonalLawyer/PersonalLawyer";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import How from "./components/How/How";
import Advantages from "./components/Advantages/Advantages";

function App() {
  return (
    <>
      <Header />
      <PersonalLawyer/>
      <Services/>
      <About/>
      <How/>
      <Advantages/>
    </>
  );
}

export default App;
