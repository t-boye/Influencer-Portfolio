import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

import Navbar from "./components/NavBar";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import GalleryPage from "./components/GalleryPage";
import TermsAndConditionsPage from "./components/TermsAndConditionsPage";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound"; // Import the custom 404 page component
import StripePayment from "./components/StripePayment";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Routes for the different pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/terms" element={<TermsAndConditionsPage />} />
          <Route path="/payment" element={<StripePayment />} />
          <Route path="*" element={<PageNotFound />} /> {/* Custom 404 page */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
