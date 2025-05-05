import TestimonialCard from '../components/TestimonialCard';
import { VideoTestimonial } from './VideoTestimonial';

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
      position: "Founder, Relentless Pressure Solutions",
      quote: "Truthfully, it was an honor to be invited to the NepalTalks Podcast Studio and to actually be featured on the podcast itself. I've had numerous clients that I've served as well as industry colleagues that actually saw the production. It Was a very rewarding experience to get the opportunity to share A little bit about this chapter of my life. Truthfully, The Pressure Washing business has completely transformed Me as a person and my life as a whole. I very much look forward to the next time with their team."
    },    
    {
      
      image: "/images/testimonial-1.jpg",
      name: "Fatima Iqbal",
      position: "Founder, Crabtree Health ",
      quote: `Being featured on the NepalTalks Podcast was such a rewarding experience. The environment was warm and professional, and Ananta made it so easy to share my story. Since the episode aired, I've seen a noticeable increase in engagement from the local community, especially those interested in wellness and intentional living—exactly the kind of people I hope to reach through Crabtree Health.The podcast gave me a platform to speak directly to those who value a personalized, holistic approach to health, and it's helped shape how I communicate my mission going forward. I'm grateful to Nepal Media Group for highlighting voices like mine and creating space for meaningful conversations.`
    },
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

    <div className="min-h-screen rounded-2xl bg-gradient-to-br from-slate-900 to-purple-900 p-4 md:p-8 flex items-center justify-center">
      <VideoTestimonial 
        videoUrl="https://storage.googleapis.com/nepaltalks_public/podcasts/SIDNEY%20JACKSON-TESTIMONIAL.mp4"
        clientName="Sidney Jackson"
        clientRole="Satisfied Client"
        testimonialQuote="Nepal Media Group Podcast Platform is a game changer for people that are looking for business opportunities. I have done many businesses and industries, but I will tell you that I have never had an opportunity to come to a podcast and share contents/information like this before. "
      />
    </div>
        <div className="grid grid-cols-1 mt-10 md:grid-cols-3 gap-8">
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