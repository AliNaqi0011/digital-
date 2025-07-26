
'use client';

import { useState, useEffect } from 'react';

export function CursorFollower() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[101] hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary animate-rotate-3d lg:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s ease-out',
      }}
    ></div>
  );
}

    