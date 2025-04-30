import TestimonialCard from '../components/TestimonialCard';

export default function TestimonialsSection() {
  const testimonials = [
 {
      image: "/images/testimonial-1.jpg",
      name: "James Fontana",
      position: "CEO, Visual Velocity Media.",
      quote: "Nepal Media Group elevated our digital game in ways we never imagined. Their high-quality podcast production and sharp video strategies are commendable. Truly a game-changer."
    },
    {
      image: "/images/testimonial-2.jpg",
      name: "Adrian Rodriguez",
      position: "Founder, SnapPixFix",
      quote: "Their podcast studio setup in Cary was a breath of fresh air—completely stress-free and impressively professional. Thanks to Nepal Media Group, my podcast sounds better than ever and my listeners have definitely noticed."
    },    {
      
      image: "/images/testimonial-1.jpg",
      name: "Fatima Iqbal",
      position: "Founder, Crabtree Health ",
      quote: "Partnering with Nepal Media Group was the best decision we made for our content strategy. Their audio-visual expertise brought polish and consistency to our message during the launch of our practice, and the boost in visibility has been phenomenal."
    },
    {
      image: "/images/testimonial-2.jpg",
      name: "Anjana Budhathoki",
      position: "Founder, oNEST REAL ESTATE",
      quote: "Recording with Nepal Media Group is like having a full production team show up at your door. The process is seamless, and the final product is crisp and professional. My podcast has reached a whole new level."
    },  
    {
      
      image: "/images/testimonial-1.jpg",
      name: "Kushal Senanayake",
      position: "Founder, Terapy Tea",
      quote: "From concept to execution, Nepal Media Group nailed it. Their creative approach to video marketing and podcasting helped us build a stronger connection with our audience"
    },
    {
      image: "/images/testimonial-2.jpg",
      name: "Arlene Serrano",
      position: "Founder,38 Mortgage",
      quote: "Nepal Media Group brings studio-level quality straight to you. Their recording sessions are effortless, and the results speak for themselves—clean, engaging content that’s made a huge impact on our brand."
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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