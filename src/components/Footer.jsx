export default function Footer() {
    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
    
    const navItems = [
      { name: 'Home', id: 'home' },
      { name: 'Services', id: 'services' },
      { name: 'Testimonials', id: 'testimonials' },
      { name: 'Portfolio', id: 'portfolio' },
      { name: 'Contact', id: 'contact' },
    ];
  
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold">NepalMedia<span className="text-purple-400">Group</span></div>
              <p className="mt-2 text-gray-400">Professional Video & Podcast Production & Marketing</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Nepal Media Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }