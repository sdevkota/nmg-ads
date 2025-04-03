import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import TestimonialsSection from './sections/TestimonialsSection';
import PortfolioSection from './sections/PortfolioSection';
import WhyChooseUsSection from './sections/WhyChooseUsSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.pageYOffset > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ContactSection />
      <TestimonialsSection />
      <ServicesSection />
      <PortfolioSection />
      <WhyChooseUsSection />
      <Footer />
      {scrollTop && <ScrollToTop />}
    </div>
  );
}

export default App;