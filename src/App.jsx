import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import LeetCode from "./components/LeetCode/LeetCode.jsx";
import Achievements from "./components/Achievements/Achievements.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <LeetCode />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
