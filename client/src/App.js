import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';

import Benefits from "./components/benefit/Benefit.js";
import BenefitDetail from "./components/benefitDetail/BenefitDetail.js";
import Navbar from "./components/navbar/Navbar.jsx";
import HomeSection from "./components/HomeSection.jsx";
import Testimonials from "./components/testimonials/Testimonials.js";
import Footer from "./components/footer/Footer.js";


function App() {
  
  return (
    <div className="App">
      
      <Navbar/>
      <HomeSection/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Benefits />}></Route>
          <Route path="/benefit/:id" element={<BenefitDetail />} />
          <Route path="/" element={<Testimonials />} />
        </Routes>
      </BrowserRouter>
      <Testimonials/>
      <Footer/>

    </div>
  );
}

export default App;
