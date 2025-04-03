import WhyChooseUs from '../components/WhyChooseUs';

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold">Why Choose Us</h2>
          <div className="section-divider"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to delivering exceptional content that moves the needle for your business
          </p>
        </div>

        <WhyChooseUs />
        
        <div className="mt-16 text-center">
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary border border-primary text-white px-8 py-3 rounded-full hover:bg-primary hover:border-primary hover:text-white transition duration-300"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
}