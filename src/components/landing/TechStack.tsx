
'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BrainCircuit,
  Megaphone,
  Layers,
} from 'lucide-react';

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
      title: string;
      technologies: {
        name: string;
        src: string;
        hint: string;
      }[];
    }[];
  }
}

export function TechStack({ techStackContent }: TechStackProps) {
  return (
    <section className="py-24 md:py-32 bg-secondary/30 scroll-animate">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight">{techStackContent.title}</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">{techStackContent.subtitle}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {techStackContent.categories.map((category) => {
                const Icon = categoryIcons[category.title];
                return (
                    <Card key={category.title} className="group flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 border-border/50 hover:border-primary/50 bg-background overflow-hidden">
                        <CardHeader className="flex flex-row items-center gap-4 p-6">
                            {Icon && <div className="p-3 rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"><Icon className="w-8 h-8" /></div>}
                            <CardTitle className="text-2xl">{category.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 p-6 pt-0">
                           <div className="flex flex-wrap gap-4 justify-center">
                                {category.technologies.map((tech) => (
                                    <div key={tech.name} className="flex items-center justify-center p-2 rounded-lg bg-secondary/50 transition-transform duration-300 hover:scale-110" title={tech.name}>
                                        <Image src={tech.src} alt={tech.name} width={80} height={30} className="grayscale hover:grayscale-0 transition-all duration-300 object-contain" data-ai-hint={tech.hint} />
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
      </div>
    </section>
  );
}
