
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
        <div className="w-full h-full animate-[spin_8s_linear_infinite] rounded-full border-2 border-dashed border-primary">
        </div>
    </div>
  );
}
