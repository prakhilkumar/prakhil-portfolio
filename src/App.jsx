import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";

function App() {
  return (
    <div className="bg-[#0D1117] text-white min-h-screen">
      <Navbar />

      <main className="container">
        <Hero />
      </main>

      <Footer />
    </div>
  );
}

export default App;