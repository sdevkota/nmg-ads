import { CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: "Quality Guaranteed",
      description: "We use industry-leading equipment and processes to ensure your content looks and sounds professional every time."
    },
    {
      title: "Fast Turnaround",
      description: "Our streamlined production process means you'll receive your finished content quickly without sacrificing quality."
    },
    {
      title: "End-to-End Service",
      description: "From ideation to distribution, we handle every aspect of production so you can focus on what you do best."
    },
    {
      title: "Expert Team",
      description: "Our team brings years of experience in video and audio production, marketing, and brand storytelling."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
          <div className="flex items-center mb-4">
            <CheckCircle className="text-purple-600 mr-3" size={24} />
            <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
          </div>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}