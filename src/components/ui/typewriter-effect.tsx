
'use client';

import { cn } from '@/lib/utils';
import { HTMLAttributes, useEffect, useState } from 'react';

interface TypewriterEffectProps extends HTMLAttributes<HTMLHeadingElement> {
  text: string;
}

export function TypewriterEffect({ text, className, ...props }: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const delay = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % 1;
      const fullText = text;

      setDisplayedText(
        isDeleting
          ? fullText.substring(0, displayedText.length - 1)
          : fullText.substring(0, displayedText.length + 1)
      );

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, loopNum, text]);

  return (
    <h1 className={cn(className, 'typewriter')} {...props}>
      {displayedText}
      <span className="animate-blink">|</span>
    </h1>
  );
}
