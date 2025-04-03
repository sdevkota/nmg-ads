import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button 
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-purple-500 text-white p-3 rounded-full shadow-lg hover:bg-purple-600 transition duration-300 z-50"
      aria-label="Scroll to top"
    >
      <ChevronUp size={24} />
    </button>
  );
}