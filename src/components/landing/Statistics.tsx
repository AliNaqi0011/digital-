'use client';

import { useEffect, useState } from 'react';

interface StatisticsProps {
  statistics: {
    title: string;
    subtitle: string;
    stats: { number: string; label: string }[];
  };
}

function AnimatedNumber({ target, duration = 2000 }: { target: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const numericTarget = parseInt(target.replace(/[^0-9]/g, '')) || 0;
  const suffix = target.replace(/[0-9]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`stat-${target}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [target]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * numericTarget));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, numericTarget, duration]);

  return (
    <span id={`stat-${target}`}>
      {count}{suffix}
    </span>
  );
}

export function Statistics({ statistics }: StatisticsProps) {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-black via-gray-900/50 to-black relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-16">
        <div className="text-center mb-20 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{statistics.title}</h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">{statistics.subtitle}</p>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto relative z-10">
          {statistics.stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-3">
                  <AnimatedNumber target={stat.number} />
                </div>
                <p className="text-muted-foreground font-semibold text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}