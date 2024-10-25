import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";

function App() {

  return(
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Tours/>
    <Footer/>
    </>
  );

}

export default App;