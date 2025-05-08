import { useState, useEffect } from 'react';

export default function ContactForm() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://meetings.brevo.com/assets/libs/popup.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='flex flex-col md:flex-row items-center lg:flex-row gap-2'>

      <div>
      <link href="https://meetings.brevo.com/assets/styles/popup.css" rel="stylesheet" />
      <a 
        href="#" 
        onClick={() => {
          BrevoBookingPage.initStaticButton({ 
            url: 'https://meet.brevo.com/nepal-media-group/schedule-a-podcast-with-nepaltalks'
          });
          return false;
        }}
        style={{
          cursor: 'pointer',
          fontFamily: 'Inter',
          fontWeight: 500,
          backgroundColor: 'rgb(173 70 255)',
          color: 'white',
          padding: '0.5rem 1rem',
          border: 0,
          boxShadow: 'rgba(0, 0, 0, 0.15) 0px -2px 0px inset',
          borderRadius: '16px',
          textDecoration: 'none',
          display: 'inline-block'
        }}
      >
        Schedule a Podcast
      </a>
      </div>
      <div>
      <link href="https://meetings.brevo.com/assets/styles/popup.css" rel="stylesheet" />
      <a 
        href="#" 
        onClick={() => {
          BrevoBookingPage.initStaticButton({ 
            url: 'https://meet.brevo.com/nepal-media-group/nmg-ads-page'
          });
          return false;
        }}
        style={{
          cursor: 'pointer',
          fontFamily: 'Inter',
          fontWeight: 500,
          backgroundColor: '#1B1B1B',
          color: 'white',
          padding: '0.5rem 1rem',
          border: 0,
          boxShadow: 'rgba(0, 0, 0, 0.15) 0px -2px 0px inset',
          borderRadius: '16px',
          textDecoration: 'none',
          display: 'inline-block'
        }}
      >
        Schedule a Strategy Call
      </a>
      </div>
    </div>
  );
}
