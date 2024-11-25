import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';

import About from "./components/about/About";
import Benefits from "./components/benefit/Benefit.js";
import BenefitDetail from "./components/benefitDetail/BenefitDetail.js";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer.js";
import HomeSection from "./components/HomeSection.jsx";
import Login from "./components/login/Login.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Partners from "./components/partners/Partners";
import Register from "./components/register/Register.jsx";
import Experience from "./components/student-experience/Experience";
import Testimonials from "./components/testimonials/Testimonials.js";
import University from "./components/university/university";


function AppContent() {
  return (
    <Routes>
      {/* Route for HomeSection and additional content */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <HomeSection />
            <University/>
            <Experience />
            <Benefits />
            <Partners />
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
      <Route path="/contact" element={<Contact />} />
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
