
'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Layers, Megaphone, BrainCircuit } from 'lucide-react';
import { cn } from '@/lib/utils';

const categoryIcons: { [key: string]: React.ElementType } = {
  'Full Stack Development': Layers,
  'Social Media Marketing': Megaphone,
  'Artificial Intelligence': BrainCircuit,
};

interface TechStackProps {
  techStackContent: {
    title: string;
    subtitle: string;
    categories: {
      id: string;
      title: string;
      technologies: {
        name: string;
        src: string;
        hint: string;
      }[];
    }[];
  }
}

class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    width: number;
    height: number;
    ctx: CanvasRenderingContext2D;

    constructor(width: number, height: number, ctx: CanvasRenderingContext2D) {
      this.width = width;
      this.height = height;
      this.ctx = ctx;
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = Math.random() * 0.4 - 0.2;
      this.vy = Math.random() * 0.4 - 0.2;
      this.size = Math.random() * 1.5 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > this.width) this.vx *= -1;
      if (this.y < 0 || this.y > this.height) this.vy *= -1;
    }

    draw() {
      this.ctx.fillStyle = 'hsla(var(--primary), 0.5)';
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      this.ctx.fill();
    }
}

export function TechStack({ techStackContent }: TechStackProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeCategory, setActiveCategory] = useState(techStackContent.categories[0].id);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 70;

    const resizeCanvas = () => {
        const container = canvas.parentElement;
        if(container){
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle(canvas.width, canvas.height, ctx));
            }
        }
    };
    
    const connect = () => {
        let opacityValue = 1;
        for (let a = 0; a < particles.length; a++) {
            for (let b = a; b < particles.length; b++) {
                const distance = Math.sqrt(
                    (particles[a].x - particles[b].x) ** 2 +
                    (particles[a].y - particles[b].y) ** 2
                );

                if (distance < (canvas.width / 7)) {
                    opacityValue = 1 - (distance / (canvas.width / 7));
                    ctx.strokeStyle = `hsla(var(--primary), ${opacityValue * 0.5})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();
    
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const currentCategory = techStackContent.categories.find(c => c.id === activeCategory);

  return (
    <section className="py-24 md:py-32 scroll-animate relative bg-secondary/30 overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight">{techStackContent.title}</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">{techStackContent.subtitle}</p>
        </div>

        <div className="flex justify-center items-center gap-2 md:gap-4 mb-12 flex-wrap">
          {techStackContent.categories.map((category) => {
            const Icon = categoryIcons[category.title];
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                size="lg"
                onClick={() => setActiveCategory(category.id)}
                className="transition-all duration-300 ease-in-out transform hover:scale-105 rounded-full px-6 py-3 text-base"
              >
                {Icon && <Icon className="w-5 h-5 mr-2" />}
                {category.title}
              </Button>
            );
          })}
        </div>
        
        <div className="p-8 mt-6 bg-background/80 backdrop-blur-sm rounded-2xl shadow-2xl shadow-primary/10 min-h-[300px] flex items-center justify-center">
            {currentCategory && (
                <div key={activeCategory} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-10 justify-center animate-fade-in-up">
                    {currentCategory.technologies.map((tech) => (
                        <div key={tech.name} className="flex flex-col items-center justify-center gap-3 group transition-transform duration-300 hover:scale-110" title={tech.name}>
                        <div className="w-20 h-16 relative flex items-center justify-center">
                            <Image 
                            src={tech.src} 
                            alt={tech.name}
                            layout="fill"
                            objectFit="contain"
                            className="grayscale group-hover:grayscale-0 transition-all duration-300"
                            data-ai-hint={tech.hint} 
                            />
                        </div>
                        <span className="text-sm font-medium text-muted-foreground group-hover:text-primary">{tech.name}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
      </div>
    </section>
  );
}
