
'use client';
import { useEffect, useRef } from 'react';
import { Clock, Heart, Zap, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap: { [key: string]: React.ElementType } = {
  Clock, Heart, Zap, Shield
};

function useAnimateOnScroll() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
        });

        const elements = document.querySelectorAll('.scroll-animate');
        elements.forEach(el => observer.observe(el));

        return () => elements.forEach(el => observer.unobserve(el));
    }, []);
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
      this.vx = Math.random() * 0.2 - 0.1;
      this.vy = Math.random() * 0.2 - 0.1;
      this.size = Math.random() * 1.5 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > this.width) this.vx *= -1;
      if (this.y < 0 || this.y > this.height) this.vy *= -1;
    }

    draw() {
      this.ctx.fillStyle = 'hsla(var(--primary), 0.3)';
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      this.ctx.fill();
    }
}

interface WhyChooseUsProps {
  whyChooseUsContent: {
    title: string;
    subtitle: string;
    items: { icon: string; title: string; description: string }[];
  }
}

export function WhyChooseUs({ whyChooseUsContent }: WhyChooseUsProps) {
  useAnimateOnScroll();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Particle[] = [];
    const particleCount = 50;

    const resizeCanvas = () => {
        const container = canvas.parentElement;
        if(container){
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;
            particles.length = 0; // Clear the array
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle(canvas.width, canvas.height, ctx));
            }
        }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
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

  return (
    <section id="why-choose-us" className="py-24 md:py-32 bg-secondary/30 scroll-animate relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0 opacity-50" />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight">{whyChooseUsContent.title}</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">{whyChooseUsContent.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {whyChooseUsContent.items.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={index} 
                   className="group relative p-8 rounded-2xl bg-background/50 backdrop-blur-xl transition-all duration-500 overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-scale-in"
                   style={{ transformStyle: 'preserve-3d', animationDelay: `${index * 0.2}s` }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-1 -right-1 w-24 h-24 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="relative mb-6">
                        <div className="absolute -inset-2 bg-primary/20 rounded-xl blur-md opacity-50 transition-all duration-300 group-hover:opacity-75"></div>
                        <div className="relative p-4 rounded-xl bg-background/70 ring-1 ring-border/20">{Icon && <Icon className="w-10 h-10 text-primary" />}</div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
