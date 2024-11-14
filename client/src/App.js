// App.js

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import './index.css';

import About from "./components/about/About";
import Benefits from "./components/benefit/Benefit.js";
import BenefitDetail from "./components/benefitDetail/BenefitDetail.js";
import Footer from "./components/footer/Footer.js";
import HomeSection from "./components/HomeSection.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Partners from "./components/partners/Partners";
import Testimonials from "./components/testimonials/Testimonials.js";

function AppContent() {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  const isBenefitDetailPage = location.pathname.startsWith("/benefit/");

  return (
    <>
      {!isBenefitDetailPage && <Navbar />}
      {!isAboutPage && !isBenefitDetailPage && <HomeSection />}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Benefits />} />
        <Route path="/benefit/:id" element={<BenefitDetail />} />
      </Routes>
      {!isBenefitDetailPage && <Partners />}
      {!isBenefitDetailPage && <Testimonials />}
      {!isBenefitDetailPage && <Footer />}
    </>
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
