import Hero from '../components/Hero';

export default function HeroSection() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white pt-24 pb-20">
      <Hero onExploreClick={scrollToSection} />
    </section>
  );
}