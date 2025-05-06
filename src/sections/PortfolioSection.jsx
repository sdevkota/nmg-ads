import PortfolioItem from '../components/PortfolioItem';

export default function PortfolioSection() {
  const portfolioItems = [
    { 
      type: 'video',
      youtubeId: 'rV0DMcJOOKA',
      title: "Transforming Tea Culture: Kusal Senanayake's Journey " 
    },
    { 
      type: 'video',
      youtubeId: "BrlD4IT0TdQ", 
      title: "From Duke Medical to Transforming Weight Loss: Dr. Fatima Iqbal's Story" 
    },
    { 
      type: 'video',
      youtubeId: 'kUoYBekV97M',
      title: "Is It Time to Bring in a CPA? | Essential Insights from a CPA Heather Kizer" 
    },
    { 
      type: 'video',
      youtubeId: 'ZIsr9iWLlRg',
      title: "Elevating Your Brand in the Online Realm | James Fontana " 
    },
    { 
      type: 'video',
      youtubeId: "zr6DaiVj-M8", 
      title: `"Change Your Mind about Buying a House!"- with Arlene Serrano" `
    },
    { 
      type: 'video',
      youtubeId: 'ulV5O5WmJrQ',
      title: "The MIT Grad Revolutionizing Small Businesses with Human Tech Evolution" 
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold">Our Recent Work</h2>
          <div className="section-divider"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our portfolio of high-quality productions that have helped our clients grow their brands
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioItem 
              key={index}
              type={item.type}
              image={item.image}
              youtubeId={item.youtubeId}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
