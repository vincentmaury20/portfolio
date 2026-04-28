import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import ContactForm from "./components/ContactForm/ContactForm";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<ContactForm />} />
        <Route path="/About" element={<About />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
