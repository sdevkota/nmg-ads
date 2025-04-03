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