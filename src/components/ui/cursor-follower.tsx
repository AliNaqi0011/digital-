
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
      className="pointer-events-none fixed z-[101] hidden h-24 w-24 -translate-x-1/2 -translate-y-1/2 lg:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: 'left 0.1s ease-out, top 0.1s ease-out',
      }}
    >
        <div className="w-full h-full animate-[spin_8s_linear_infinite]">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="hsl(var(--primary))" 
                strokeWidth="1" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-8 h-8 absolute top-0 left-1/2 -translate-x-1/2"
            >
                <path d="M10.5 19.5 2 22l1.5-7.5L2 13l4 1 2-5 4 1-2 3h4l2-3 2 1-1 4-1 3-3-1-1 4zM2 22s5-4 7-9" />
                <path d="m14 6 3-1 2 2-1 3-2-2-3 1" />
            </svg>
        </div>
    </div>
  );
}
