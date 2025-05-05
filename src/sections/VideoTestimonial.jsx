import { useState, useEffect, useRef } from 'react';

export const VideoTestimonial = ({ videoUrl, clientName = "Test", clientRole = "Satisfied Client", testimonialQuote = "Working with this team has been an incredible experience. Their professionalism, expertise, and dedication to results has helped transform our business. I couldn't recommend them highly enough to anyone looking for exceptional service." }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  
  const rewindVideo = () => {
    videoRef.current.currentTime = Math.max(videoRef.current.currentTime - 10, 0);
  };
  
  const forwardVideo = () => {
    videoRef.current.currentTime = Math.min(videoRef.current.currentTime + 10, videoRef.current.duration);
  };
  
  useEffect(() => {
    const handlePlayEvent = () => setIsPlaying(true);
    const handlePauseEvent = () => setIsPlaying(false);
    
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('play', handlePlayEvent);
      videoElement.addEventListener('pause', handlePauseEvent);
    }
    
    return () => {
      if (videoElement) {
        videoElement.removeEventListener('play', handlePlayEvent);
        videoElement.removeEventListener('pause', handlePauseEvent);
      }
    };
  }, []);
  
  return (
    <div className="relative w-full mx-auto my-8 bg-opacity-70 bg-slate-800 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md">
      <div className="absolute w-72 h-72 bg-purple-600 rounded-full -top-24 -right-24 filter blur-3xl opacity-50"></div>
      <div className="absolute w-64 h-64 bg-fuchsia-500 rounded-full -bottom-12 -left-24 filter blur-3xl opacity-50"></div>
      
      <div className="relative px-8 py-10 text-center">
        <h1 className="text-2xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-violet-600 bg-clip-text text-transparent tracking-tight">
          Client Testimonial
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Hear directly from our clients about their experiences and the results they've achieved working with us.
        </p>
      </div>
      <div className="relative">
        <div className="aspect-video w-full rounded-lg overflow-hidden shadow-xl">
          <video 
            ref={videoRef}
            className="w-full h-full object-cover"
            controls
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="flex items-center justify-center mt-6 gap-6">
          <button 
            onClick={rewindVideo}
            className="bg-transparent hover:bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 17l-5-5 5-5"></path>
              <path d="M18 17l-5-5 5-5"></path>
            </svg>
          </button>
          
          <button 
            onClick={togglePlayPause}
            className="bg-purple-600 hover:bg-purple-700 pl-1 text-white w-20 h-20 rounded-full flex items-center justify-center transition-all transform hover:scale-105"
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            )}
          </button>
          
          <button 
            onClick={forwardVideo}
            className="bg-transparent hover:bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 17l5-5-5-5"></path>
              <path d="M6 17l5-5-5-5"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="px-8 py-8 text-center">
        <h2 className="text-4xl text-white font-semibold mb-2">{clientName}</h2>
        <p className="text-white/70 mb-6">{clientRole}</p>
        <div className="relative max-w-3xl mx-auto hidden md:block">
          <p className="text-lg text-white italic leading-relaxed">
            {testimonialQuote}
          </p>
          <span className="absolute text-6xl text-white/30 -left-6 -top-4">"</span>
          <span className="absolute text-6xl text-white/30 -right-6 -bottom-8">"</span>
        </div>
      </div>
    </div>
  );
};

// Usage Example component
