
'use client';
import { Rocket, Code, CheckCircle, Zap } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  Rocket, Code, CheckCircle, Zap
};

interface ProcessProps {
  processContent: {
    title: string;
    subtitle: string;
    steps: { icon: string; title: string; description: string }[];
  }
}

export function Process({ processContent }: ProcessProps) {
  return (
    <section id="process" className="py-24 md:py-32 scroll-animate">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl font-bold tracking-tight">{processContent.title}</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">{processContent.subtitle}</p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/20 -translate-y-1/2"></div>
          <div className="grid gap-16 lg:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processContent.steps.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <div key={index} className="relative flex flex-col items-center text-center">
                  <div className="absolute -top-12 flex items-center justify-center w-24 h-24 rounded-full bg-primary text-primary-foreground border-8 border-background">
                    {Icon && <Icon className="w-10 h-10" />}
                  </div>
                  <div className="pt-20 p-6 rounded-2xl bg-secondary/50 h-full">
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
