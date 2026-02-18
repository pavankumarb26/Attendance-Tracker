import React, { useEffect, useRef } from 'react';

export default function AdUnit() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Set ad options
    window.atOptions = {
      key: '9b279b5dd8f20092a79db1a298178521',
      format: 'iframe',
      height: 50,
      width: 320,
      params: {}
    };

    // Create invoke script
    const script = document.createElement('script');
    script.src = 'https://www.highperformanceformat.com/9b279b5dd8f20092a79db1a298178521/invoke.js';
    script.async = true;

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
      delete window.atOptions;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: '320px', height: '50px' }}
      className="my-4 mx-auto"
    />
  );
}
