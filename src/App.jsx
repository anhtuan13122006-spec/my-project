import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Methodology from "./components/Methodology";
import IndustryReport from "./components/IndustryReport";
import CaseStudies from "./components/CaseStudies";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Methodology />
        <IndustryReport />
        <CaseStudies />
        <Dashboard />
        <About />
      </main>
      <Footer />
    </>
  );
}
