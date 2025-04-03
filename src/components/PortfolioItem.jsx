export default function PortfolioItem({ type, image, youtubeId, title }) {
  return (
    <div className="portfolio-item rounded-lg overflow-hidden shadow-lg">
      {type === 'video' ? (
        <div className="relative pb-[56.25%] h-0">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    </div>
  );
}
