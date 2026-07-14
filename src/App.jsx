import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Certificates from "./components/Certificates";
import CodingProfiles from "./components/CodingProfiles";

function App() {
  return (
    <div className="bg-[#0D1117] text-white min-h-screen">
      <Navbar />

      <main className="container">
        <Hero />
        <Experience />
        <Projects/>
        <Certificates />
        <Skills /> 
        <CodingProfiles/>
        <Contact/>
      </main>

      <Footer />
    </div>
  );
}

export default App;