
'use client';
import { useEffect } from 'react';
import { Clock, Heart, Zap, Shield } from 'lucide-react';

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

interface WhyChooseUsProps {
  whyChooseUsContent: {
    items: { icon: string; title: string; description: string }[];
  }
}

export function WhyChooseUs({ whyChooseUsContent }: WhyChooseUsProps) {
  useAnimateOnScroll();

  return (
    <section id="why-choose-us" className="py-24 md:py-32 bg-secondary/30 scroll-animate">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight">Why Partner With Creative Experts Solution?</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">We're not just a service provider; we're your dedicated technology partner.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUsContent.items.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-background/50 transition-all duration-300 hover:bg-background hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-2">
                <div className="p-5 rounded-full bg-primary/10 text-primary ring-4 ring-primary/20 mb-6">{Icon && <Icon className="w-10 h-10" />}</div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
