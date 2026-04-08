import Hero from "../components/Hero";
import FeaturedProject from "../components/FeaturedProject";
import SecondaryProject from "../components/SecondaryProject";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProject />
      <SecondaryProject />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}
