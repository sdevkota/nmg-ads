export default function ServiceCard({ icon, title, description }) {
    return (
      <div className="feature-card">
        <div className="mb-5">{icon}</div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }