import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="text-white-600" size={24} />,
      title: "CMS Website",
      info: "www.nepaltalks.us",
      link: "https://nepaltalks.us"
    },
    {
      icon: <Mail className="text-white-600" size={24} />,
      title: "Email Us",
      info: "admin@nepaltalks.us",
      link: "mailto:iadmin@nepaltalks.us"
    },
    {
      icon: <Phone className="text-white-600" size={24} />,
      title: "Call Us",
      info: "(919) 906-6225",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="text-white-600" size={24} />,
      title: "Podcast Studio",
      info: " 964 High House Rd, Cary, NC 27513",
      link: "https://maps.google.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">


        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-12">
          <h2 className="text-5xl font-bold">See It For Yourself</h2>
          <div className="section-divider"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to elevate your content? Get in touch with our team to discuss your project needs.
          </p>
        </div>
              <h2 className='text-xl font-bold'>100% Satisfaction Guaranteed.</h2>
              <p className="text-gray-600 mb-8">Get a Free Consulation Today!</p>
              <ContactForm />

<div className="mt-8 border-t pt-8">
  <h3 className="text-xl font-bold mb-4">Our Core Services</h3>
  <div className="space-y-4">
    <div className="flex items-start">
      <div className="text-purple-600 mr-2">•</div>
      <div>
        <h4 className="font-semibold">Podcast Production</h4>
        <p className="text-gray-600">
          We provide professional audio and video production to enhance your podcast, ensuring it looks and sounds exceptional. From recording to post-production, we've got you covered.
        </p>
      </div>
    </div>
    <div className="flex items-start">
      <div className="text-purple-600 mr-2">•</div>
      <div>
        <h4 className="font-semibold">Onsite Video Recording</h4>
        <p className="text-gray-600">
          No need to travel—we bring our top-tier production equipment to your location, capturing high-quality footage in the environment that best represents your brand.
        </p>
      </div>
    </div>
    <div className="flex items-start">
      <div className="text-purple-600 mr-2">•</div>
      <div>
        <h4 className="font-semibold">Video Marketing & Branding</h4>
        <p className="text-gray-600">
          We create stunning promotional videos, social media clips, and brand-focused content that engage your audience and drive business growth.
        </p>
      </div>
    </div>
  </div>
</div>

              
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-purple-600 text-white rounded-xl shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold">{item.title}</h4>
                      <a 
                        href={item.link} 
                        className="text-purple-200 hover:text-white transition-colors duration-300"
                      >
                        {item.info}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold mb-3">Business Hours</h4>
                <p className="text-purple-200">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-purple-200">Saturday: 10:00 AM - 3:00 PM</p>
                <p className="text-purple-200">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}