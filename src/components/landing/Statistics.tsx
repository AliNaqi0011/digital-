'use client';

import { useEffect, useState } from 'react';

const stats = [
  { number: 500, label: 'Projects Completed', suffix: '+' },
  { number: 99, label: 'Client Satisfaction', suffix: '%' },
  { number: 24, label: 'Support Available', suffix: '/7' },
  { number: 5, label: 'Years Experience', suffix: '+' }
];

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev < end) {
          return prev + Math.ceil(end / 50);
        }
        return end;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count}{suffix}</span>;
}

export function Statistics() {
  return (
    <section className="py-16 bg-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center tilt-3d group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-border/20 hover:border-primary/30 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    <Counter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}