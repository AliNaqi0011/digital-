
'use client';

import { cn } from '@/lib/utils';
import { HTMLAttributes, useEffect, useState } from 'react';

interface TypewriterEffectProps extends HTMLAttributes<HTMLHeadingElement> {
  text: string;
}

export function TypewriterEffect({ text, className, ...props }: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState('');
  
  // This effect will only type out the text once.
  useEffect(() => {
    setDisplayedText(''); // Reset on text change
    if (text) {
      let i = 0;
      const intervalId = setInterval(() => {
        setDisplayedText(text.substring(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(intervalId);
        }
      }, 100); // Adjust typing speed here

      return () => clearInterval(intervalId);
    }
    return undefined;
  }, [text]);

  return (
    <h1 className={cn(className, 'typewriter')} {...props}>
      {displayedText}
      <span className="animate-blink">|</span>
    </h1>
  );
}

    