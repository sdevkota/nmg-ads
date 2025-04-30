import { PlayCircle } from 'lucide-react';

export default function TestimonialCard({ image, name, position, quote }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
      <div className="relative">
  
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-1">{name}</h3>
        <p className="text-purple-600 text-sm mb-4">{position}</p>
        <p className="text-gray-700">"{quote}"</p>
      </div>
    </div>
  );
}