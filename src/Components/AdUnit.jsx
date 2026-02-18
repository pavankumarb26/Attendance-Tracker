import React, { useEffect } from 'react';

export default function AdUnit() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://pl28735180.effectivegatecpm.com/9655042b83c3e89d71ab71635098f4f4/invoke.js';
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="container-9655042b83c3e89d71ab71635098f4f4"></div>;
}
