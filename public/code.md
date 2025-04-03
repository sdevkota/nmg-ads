# Video & Podcast Production Agency - Complete Vite Project Structure

Below is the complete project structure with all the necessary files for your video and podcast production agency website using Vite, React, and Tailwind CSS.

## Project Structure

```
production-agency-website/
├── node_modules/
├── public/
│   ├── favicon.ico
│   ├── images/
│   │   ├── hero.jpg
│   │   ├── podcast-studio.jpg
│   │   ├── video-production.jpg
│   │   ├── social-campaign.jpg
│   │   ├── testimonial-1.jpg
│   │   └── testimonial-2.jpg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ContactForm.jsx
│   │   ├── FeatureCard.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── PortfolioItem.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── TestimonialCard.jsx
│   │   └── WhyChooseUs.jsx
│   ├── sections/
│   │   ├── ContactSection.jsx
│   │   ├── HeroSection.jsx
│   │   ├── PortfolioSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   └── WhyChooseUsSection.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

Let's create each of these files:

## 1. Project Setup Files

### package.json
```json
{
  "name": "production-agency-website",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.263.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@vitejs/plugin-react": "^4.0.3",
    "autoprefixer": "^10.4.14",
    "eslint": "^8.45.0",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    "postcss": "^8.4.27",
    "tailwindcss": "^3.3.3",
    "vite": "^4.4.5"
  }
}
```

### vite.config.js
```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  optimizeDeps: {
    include: ['lucide-react'],
  },
});
```

### index.html
```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nepal Media Group | Video & Podcast Production Agency</title>
    <meta name="description" content="Professional video marketing and podcast production services that elevate your brand and connect you with your audience." />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### .gitignore
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

### .eslintrc.cjs
```javascript
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': 'off',
  },
};
```

### tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fadeIn': 'fadeIn 1s ease-in',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
    },
  },
  plugins: [],
};
```

### postcss.config.js
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

## 2. Core React Files

### src/main.jsx
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

### src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  @apply font-sans;
}

@layer components {
  .nav-link {
    @apply relative px-3 py-2 text-sm font-medium text-white hover:text-purple-300 transition-colors duration-300;
  }
  
  .nav-link::after {
    content: '';
    @apply absolute w-0 h-0.5 bg-white left-0 -bottom-1 transition-all duration-300;
  }
  
  .nav-link:hover::after {
    @apply w-full;
  }
  
  .btn-primary {
    @apply bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300;
  }
  
  .btn-secondary {
    @apply px-8 py-3 rounded-full text-lg font-medium border-2 border-white hover:bg-white hover:text-purple-600 transition duration-300;
  }
  
  .section-title {
    @apply text-3xl lg:text-4xl font-bold text-gray-800 mb-4;
  }
  
  .section-divider {
    @apply h-1 w-24 bg-purple-500 mx-auto mb-6;
  }
  
  .feature-card {
    @apply bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transform hover:-translate-y-2 transition duration-300;
  }
}
```

### src/App.jsx
```javascript
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
      <ServicesSection />
      <TestimonialsSection />
      <PortfolioSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
      {scrollTop && <ScrollToTop />}
    </div>
  );
}

export default App;
```

## 3. Component Files

### src/components/Navbar.jsx
```javascript
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'Services', id: 'services' },
  { name: 'Testimonials', id: 'testimonials' },
  { name: 'Portfolio', id: 'portfolio' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900 shadow-md" : "bg-gray-900 bg-opacity-90"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-white">
              Media<span className="text-purple-400">Masters</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="nav-link"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 pb-3 px-2">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 rounded text-base font-medium text-white hover:bg-gray-700 transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
```

### src/components/Hero.jsx
```javascript
export default function Hero({ onExploreClick }) {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 animate-fadeIn">
           Are You Looking To Create Video Contents For Your Business?
          </h1>
          <p className="text-lg lg:text-xl opacity-90 mb-8">
            In today's digital world, content is king—and we help you wear the crown. 
            We specialize in high-quality video marketing, podcast production, and content 
            creation that elevates your brand and connects you with your audience.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button 
              onClick={() => onExploreClick('contact')}
              className="btn-primary"
            >
              Get Started
            </button>
            <button 
              onClick={() => onExploreClick('portfolio')}
              className="btn-secondary"
            >
              View Our Work
            </button>
          </div>
        </div>
        <div className="md:w-1/2 relative animate-float">
          <div className="relative">
            <img 
              src="/images/hero.jpg" 
              alt="Video Production" 
              className="rounded-lg shadow-2xl mx-auto" 
            />
            <div className="absolute -top-4 -right-4 bg-purple-500 text-white p-2 rounded-full h-16 w-16 flex items-center justify-center shadow-lg animate-pulse">
              <span className="font-bold">Pro</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### src/components/ServiceCard.jsx
```javascript
export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <div className="mb-5">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
```

### src/components/TestimonialCard.jsx
```javascript
import { PlayCircle } from 'lucide-react';

export default function TestimonialCard({ image, name, position, quote }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <button className="bg-purple-500 text-white rounded-full h-16 w-16 flex items-center justify-center hover:bg-purple-600 transition duration-300">
            <PlayCircle size={32} />
          </button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-1">{name}</h3>
        <p className="text-purple-600 text-sm mb-4">{position}</p>
        <p className="text-gray-700">"{quote}"</p>
      </div>
    </div>
  );
}
```

### src/components/PortfolioItem.jsx
```javascript
import { PlayCircle } from 'lucide-react';

export default function PortfolioItem({ image, title }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg group relative">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
        <div className="text-white text-center p-4">
          <h3 className="font-bold text-xl mb-4">{title}</h3>
          <button className="bg-purple-500 text-white rounded-full h-12 w-12 mx-auto flex items-center justify-center hover:bg-purple-600 transition duration-300">
            <PlayCircle size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
```

### src/components/FeatureCard.jsx
```javascript
import { CheckCircle } from 'lucide-react';

export default function FeatureCard({ title, description }) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-4">
        <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center text-white">
          <CheckCircle size={20} />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
}
```

### src/components/ContactForm.jsx
```javascript
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill out all fields'
      });
      return;
    }
    
    // Form submission logic would go here
    // This is a placeholder for the API call
    
    // Simulate success
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thanks for your message! We\'ll be in touch soon.'
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    
    // Reset status after 5 seconds
    setTimeout(() => {
      setFormStatus({ submitted: false, error: false, message: '' });
    }, 5000);
  };

  return (
    <form onSubmit={handleSubmit}>
      {formStatus.message && (
        <div className={`mb-4 p-3 rounded ${formStatus.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {formStatus.message}
        </div>
      )}
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input 
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-purple-200"
          id="name" 
          type="text" 
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input 
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-purple-200"
          id="email" 
          type="email" 
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea 
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-purple-200"
          id="message" 
          rows="4"
          placeholder="Tell us about your project"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      
      <div className="flex items-center justify-center">
        <button 
          className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 w-full"
          type="submit"
        >
          Submit Request
        </button>
      </div>
    </form>
  );
}
```

### src/components/Footer.jsx
```javascript
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
            <div className="text-2xl font-bold">Media<span className="text-purple-400">Masters</span></div>
            <p className="mt-2 text-gray-400">Professional Video & Podcast Production</p>
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
          <p>&copy; {new Date().getFullYear()} Nepal Media Group.com All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
```

### src/components/ScrollToTop.jsx
```javascript
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
```

## 4. Section Files

### src/sections/HeroSection.jsx
```javascript
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
```

### src/sections/ServicesSection.jsx
```javascript
import ServiceCard from '../components/ServiceCard';
import { Mic, MapPin, Film } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: <Mic size={48} className="text-purple-500" />,
      title: "Your Podcast. Our Expertise.",
      description: "You bring the voice; we bring the visuals and sound. With our state-of-the-art cameras, professional sound systems, and expert production team, we take your podcast to the next level."
    },
    {
      icon: <MapPin size={48} className="text-purple-500" />,
      title: "Onsite Recording",
      description: "We come to you! No need to worry about setting up equipment or finding a professional studio—we bring our mobile production team directly to your location."
    },
    {
      icon: <Film size={48} className="text-purple-500" />,
      title: "Stunning Visuals",
      description: "Video marketing is the most powerful tool for capturing attention and driving engagement. Our team creates compelling video content that showcases your business in the best light."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Turn Your Followers Into Customers</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional content creation services tailored to your unique business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

### src/sections/TestimonialsSection.jsx
```javascript
import TestimonialCard from '../components/TestimonialCard';

export default function TestimonialsSection() {
  const testimonials = [
    {
      image: "/images/testimonial-1.jpg",
      name: "Fatima Iqbal",
      position: "CEO, TechStartup Inc.",
      quote: "Working with Nepal Media Group transformed our online presence. Their podcast production quality is exceptional, and the video marketing strategies they implemented have doubled our engagement."
    },
    {
      image: "/images/testimonial-2.jpg",
      name: "Mark Williams",
      position: "Host, Business Growth Podcast",
      quote: "I can't recommend Nepal Media Group enough. Their onsite recording setup is professional and hassle-free. The quality of my podcast has improved significantly since working with them."
    },   {
      image: "/images/testimonial-1.jpg",
      name: "Fatima Iqbal",
      position: "CEO, TechStartup Inc.",
      quote: "Working with Nepal Media Group transformed our online presence. Their podcast production quality is exceptional, and the video marketing strategies they implemented have doubled our engagement."
    },
    {
      image: "/images/testimonial-2.jpg",
      name: "Mark Williams",
      position: "Host, Business Growth Podcast",
      quote: "I can't recommend Nepal Media Group enough. Their onsite recording setup is professional and hassle-free. The quality of my podcast has improved significantly since working with them."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">See What Our Clients Say</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from satisfied clients who have elevated their brand with our expert production services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              position={testimonial.position}
              quote={testimonial.quote}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

### src/sections/PortfolioSection.jsx
```javascript
import PortfolioItem from '../components/PortfolioItem';

export default function PortfolioSection() {
  const portfolioItems = [
    { 
      image: "/images/video-production.jpg", 
      title: "Corporate Brand Video" 
    },
    { 
      image: "/images/podcast-studio.jpg", 
      title: "Podcast Studio Setup" 
    },
    { 
      image: "/images/social-campaign.jpg", 
      title: "Social Media Campaign" 
    }
  ];

  return (
    <section id="portfolio"></section>