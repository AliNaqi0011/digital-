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
    <section className="py-16 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <Counter end={stat.number} suffix={stat.suffix} />
              </div>
              <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}