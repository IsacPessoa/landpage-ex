import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Procedures from "./components/Procedures";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-800">
      <Hero />
      <Benefits />
      <Procedures />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}

export default App;
