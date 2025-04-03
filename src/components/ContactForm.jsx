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
        Schedule a Call
      </a>
    </div>
  );
}
