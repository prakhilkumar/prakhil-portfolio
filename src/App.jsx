import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";

function App() {
  return (
    <div className="bg-[#0D1117] text-white min-h-screen">
      <Navbar />

      <main className="container">
        <Hero />
        <Experience />
        <Skills />
      </main>

      <Footer />
    </div>
  );
}

export default App;