import TestimonialCard from '../components/TestimonialCard';

export default function TestimonialsSection() {
  const testimonials = [
 {
      image: "/images/testimonial-1.jpg",
      name: "James Fontana",
      position: "CEO, Visual Velocity Media.",
      quote: "Some of the kindest people I know.  I came into their business one afternoon and walked out with a partnership. When I sat down for an interview with Sudar, I was treated with respect and professionalism.  He was prepared and eager to learn more about my marketing business and how I was helping small businesses grow.  Through this podcast, I was given a voice and an opportunity to talk about business on a deeper level in the Raleigh Metro area.  I can promise you, it is well-worth your time."
    },
    {
      image: "/images/testimonial-2.jpg",
      name: "Griffin Roberts",
      position: "Founder, SnapPixFix",
      quote: "Truthfully, it was an honor to be invited to the NepalTalks Podcast Studio and to actually be featured on the podcast itself. I've had numerous clients that I've served as well as industry colleagues that actually saw the production. It Was a very rewarding experience to get the opportunity to share A little bit about this chapter of my life. Truthfully, The Pressure Washing business has completely transformed Me as a person and my life as a whole. I very much look forward to the next time with their team."
    },    
    //{
      
//       image: "/images/testimonial-1.jpg",
//       name: "Fatima Iqbal",
//       position: "Founder, Crabtree Health ",
//       quote: "Partnering with Nepal Media Group was the best decision we made for our content strategy. Their audio-visual expertise brought polish and consistency to our message during the launch of our practice, and the boost in visibility has been phenomenal."
//     },
//     {
//       image: "/images/testimonial-2.jpg",
//       name: "Anjana Budhathoki",
//       position: "Founder, oNEST REAL ESTATE",
//       quote: "Recording with Nepal Media Group is like having a full production team show up at your door. The process is seamless, and the final product is crisp and professional. My podcast has reached a whole new level."
//     },  
//     {
      
//       image: "/images/testimonial-1.jpg",
//       name: "Kushal Senanayake",
//       position: "Founder, Terapy Tea",
//       quote: "From concept to execution, Nepal Media Group nailed it. Their creative approach to video marketing and podcasting helped us build a stronger connection with our audience"
//     },
//     {
//       image: "/images/testimonial-2.jpg",
//       name: "Arlene Serrano",
//       position: "Founder,38 Mortgage",
//       quote: "Nepal Media Group brings studio-level quality straight to you. Their recording sessions are effortless, and the results speak for themselves—clean, engaging content that’s made a huge impact on our brand."
//     },  
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