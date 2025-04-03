import { CheckCircle } from 'lucide-react';

export default function FeatureCard({ title, description }) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-4">
        <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center text-white">
          <CheckCircle size={20} />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
}