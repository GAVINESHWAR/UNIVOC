import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Benefits from "./components/benefit/Benefit.js";
import BenefitDetail from "./components/benefitDetail/BenefitDetail.js";
import './index.css'; // or import './path-to-your-css-file.css';


function App() {
  
  return (
    <div className="App">
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
