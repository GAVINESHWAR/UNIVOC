import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';

import Benefits from "./components/benefit/Benefit.js";
import BenefitDetail from "./components/benefitDetail/BenefitDetail.js";
import Navbar from "./components/navbar/Navbar.jsx";
import HomeSection from "./components/HomeSection.jsx";


function App() {
  
  return (
    <div className="App">
      {/* <HomeSection/> */}
      <Navbar/>
      <HomeSection/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Benefits />}></Route>
          <Route path="/benefit/:id" element={<BenefitDetail />} />
        </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
