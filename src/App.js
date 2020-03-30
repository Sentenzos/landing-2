import React, {useState, useRef} from 'react';
import logo from './logo.svg';
import Header from "./components/Header/Header";
import PersonalLawyer from "./components/PersonalLawyer/PersonalLawyer";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import How from "./components/How/How";
import Advantages from "./components/Advantages/Advantages";
import Consultation from "./components/Consultation/Consultation";
import Reviews from "./components/Reviews/Reviews";
import Partners from "./components/Partners/Partners";
import Tariff from "./components/Tariff/Tariff";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import './App.scss';


function App() {

  const mainHeader = useRef(null);

  return (
    <>
      <Header forRef={mainHeader} />
      <PersonalLawyer/>
      <Services/>
      <About/>
      <How/>
      {/*<Advantages/>*/}
      {/*<Consultation/>*/}
      {/*<Reviews/>*/}
      {/*<Partners/>*/}
      {/*<Tariff/>*/}
      {/*<Contacts/>*/}
      {/*<Footer/>*/}
    </>
  );
}

export default App;
