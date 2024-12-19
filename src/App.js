import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MedicalLoginPage from "./components/Login/MedicalLoginPage";
import MedicalRegistrationPage from "./components/SignUp/MedicalRegistrationPage";
import ForgotPasswordPage from "./components/ForgotPassword/ForgotPasswordPage";
import ContactUsPage from "./components/contect/ContactUsPage";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<MedicalLoginPage />} />
        <Route path="/registration" element={<MedicalRegistrationPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
