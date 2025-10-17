
'use client';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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

export function TechStack({ techStackContent }: TechStackProps) {
  return (
    <section className="py-24 md:py-32 bg-secondary/30 scroll-animate">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight">{techStackContent.title}</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">{techStackContent.subtitle}</p>
        </div>
        
        <Tabs defaultValue={techStackContent.categories[0].id} className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto">
            {techStackContent.categories.map((category) => {
              const Icon = categoryIcons[category.title];
              return (
                <TabsTrigger key={category.id} value={category.id} className="text-lg py-3 flex gap-2 items-center">
                  {Icon && <Icon className="w-6 h-6" />}
                  {category.title}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {techStackContent.categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="p-8 mt-6 bg-background rounded-2xl shadow-lg">
                <div className="flex flex-wrap gap-x-12 gap-y-8 justify-center">
                  {category.technologies.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center justify-center gap-2 group transition-transform duration-300 hover:scale-110" title={tech.name}>
                      <div className="w-24 h-12 relative flex items-center justify-center">
                        <Image 
                          src={tech.src} 
                          alt={tech.name}
                          layout="fill"
                          objectFit="contain"
                          className="grayscale group-hover:grayscale-0 transition-all duration-300"
                          data-ai-hint={tech.hint} 
                        />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
