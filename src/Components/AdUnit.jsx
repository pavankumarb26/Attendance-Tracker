import React, { useEffect, useRef } from 'react';

export default function AdUnit() {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://pl28735180.effectivegatecpm.com/9655042b83c3e89d71ab71635098f4f4/invoke.js';
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    
    // Append script INSIDE the container div
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      id="container-9655042b83c3e89d71ab71635098f4f4"
      className="w-full my-4"
    >
    </div>
  );
}
