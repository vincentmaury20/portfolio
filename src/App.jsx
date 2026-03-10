import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
