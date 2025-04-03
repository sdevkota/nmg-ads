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
          <h2 className="text-5xl font-bold">Turn Your Followers Into Customers</h2>
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