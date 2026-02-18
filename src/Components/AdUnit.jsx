import React, { useEffect, useRef } from 'react';

export default function AdUnit() {
  const containerRef = useRef(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || !containerRef.current) return;
    initialized.current = true;

    const s = document.createElement("script");
    s.src = "//rapid-university.com/b.X/VzsVdWGild0yY/W/cL/meums9/uAZnUBl/kUPtTtYF4DMsTmEx2wOxDOE/tXN_jQgTxJMZTWY_4/NfQH";
    s.async = true;
    s.referrerPolicy = "no-referrer-when-downgrade";
    containerRef.current.appendChild(s);
  }, []);

  return <div ref={containerRef} />;
}
