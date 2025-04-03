import TestimonialCard from '../components/TestimonialCard';

export default function TestimonialsSection() {
  const testimonials = [
 {
      image: "/images/testimonial-1.jpg",
      name: "James Fontana",
      position: "CEO, TechStartup Inc.",
      quote: "Working with Nepal Media Group transformed our online presence. Their podcast production quality is exceptional, and the video marketing strategies they implemented have doubled our engagement."
    },
    {
      image: "/images/testimonial-2.jpg",
      name: "Adrian Rodriguez",
      position: "Host, Business Growth Podcast",
      quote: "I can't recommend Nepal Media Group enough. Their onsite recording setup is professional and hassle-free. The quality of my podcast has improved significantly since working with them."
    },    {
      
      image: "/images/testimonial-1.jpg",
      name: "Fatima Iqbal",
      position: "CEO, TechStartup Inc.",
      quote: "Working with Nepal Media Group transformed our online presence. Their podcast production quality is exceptional, and the video marketing strategies they implemented have doubled our engagement."
    },
    {
      image: "/images/testimonial-2.jpg",
      name: "Anjana Budhathoki",
      position: "Host, Business Growth Podcast",
      quote: "I can't recommend Nepal Media Group enough. Their onsite recording setup is professional and hassle-free. The quality of my podcast has improved significantly since working with them."
    },  
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">See What Our Clients Say</h2>
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