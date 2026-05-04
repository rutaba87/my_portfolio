import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    // Wrapper centres the portfolio and constrains max-width to 680px
    <div style={{ maxWidth: 880, margin: "0 auto", background: "var(--bg)" }}>
      <Navbar />
      {/* Spacer for fixed navbar */}
      <div style={{ height: 57 }} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
