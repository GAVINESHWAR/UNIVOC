import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';

import About from "./components/about/About";
import Benefits from "./components/benefit/Benefit.js";
import BenefitDetail from "./components/benefitDetail/BenefitDetail.js";
import Footer from "./components/footer/Footer.js";
import HomeSection from "./components/HomeSection.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Partners from "./components/partners/Partners";
import Testimonials from "./components/testimonials/Testimonials.js";
import Features from "./components/features/features.js";
import Banner from "./components/Banner.js";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";


function AppContent() {
  return (
    <Routes>
      {/* Default Route: Banner */}
      <Route path="/" element={<Banner />} />

      {/* Route for HomeSection and additional content */}
      <Route
        path="/home"
        element={
          <>
            <Navbar />
            <HomeSection />
            <Features/>
            <Benefits/>
            <Partners/>
            <Testimonials />
            <Footer />
          </>
        }
      />
      {/* Other Routes */}
      <Route path="/about" element={<About />} />
      <Route path="/benefit/:id" element={<BenefitDetail />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
