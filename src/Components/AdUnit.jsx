import React, { useEffect, useRef } from 'react';

export default function AdUnit() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const d = document;
    const s = d.createElement("script");
    const l = d.scripts[d.scripts.length - 1];
    s.src =
      "//rapid-university.com/b.X/VzsVdWGild0yY/W/cL/meums9/uAZnUBl/kUPtTtYF4DMsTmEx2wOxDOE/tXN_jQgTxJMZTWY_4/NfQH";
    s.async = true;
    s.referrerPolicy = "no-referrer-when-downgrade";
    l.parentNode.insertBefore(s, l);

    return () => {
      // Optional cleanup if the script adds global state
    };
  }, []);

  return null;
}
