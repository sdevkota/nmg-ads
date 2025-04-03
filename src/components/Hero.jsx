export default function Hero({ onExploreClick }) {
    return (
      <div className="container mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 animate-fadeIn">
           We Will Come To You And Create Real Videos & Podcasts For Your Business?
            </h1>
            <h2 className="text-2xl font-bold py-5">AI videos feel impersonal—your customers want to connect with YOU and your vision.</h2>
            <p className="text-lg lg:text-xl opacity-90 mb-8">
              In today's digital world, content is king—and we help you wear the crown. 
              We specialize in high-quality video marketing, podcast production, and content 
              creation that elevates your brand and connects you with your audience.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <button 
                onClick={() => onExploreClick('contact')}
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-black hover:cursor-pointer focus:outline-none bg-black rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-black-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-200 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Free Consultation
              </button>
              <button 
                onClick={() => onExploreClick('portfolio')}
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-black hover:cursor-pointer focus:outline-none bg-black rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-black-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-200 dark:hover:text-white dark:hover:bg-gray-700"
              >
                View Our Work
              </button>
            </div>
            <div className="py-2">
            <small className="py-2">* We currently serve North Carolina and its neighboring states only.</small>

            </div>
          </div>
          <div className="md:w-1/2 relative animate-float">
            <div className="relative">
              <img 
                src="/images/hero.jpg" 
                alt="Video Production" 
                className="rounded-lg shadow-2xl mx-auto" 
              />
              <div className="absolute -top-4 -right-4 bg-purple-500 text-white p-2 rounded-full h-16 w-16 flex items-center justify-center shadow-lg animate-pulse">
                <span className="font-bold">Pro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }