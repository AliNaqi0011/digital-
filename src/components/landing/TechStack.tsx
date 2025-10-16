
'use client';
import Image from 'next/image';

interface TechStackProps {
  techStackContent: {
    title: string;
    subtitle: string;
  }
  images: {
    name: string;
    src: string;
    hint: string;
  }[];
}

export function TechStack({ techStackContent, images }: TechStackProps) {
  return (
    <section className="py-24 md:py-32 bg-secondary/30 scroll-animate">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight">{techStackContent.title}</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">{techStackContent.subtitle}</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {images.map((tech) => (
            <div key={tech.name} className="flex items-center gap-4 transition-transform duration-300 hover:scale-110" title={tech.name}>
              <Image src={tech.src} alt={tech.name} width={120} height={40} className="grayscale hover:grayscale-0 transition-all duration-300" data-ai-hint={tech.hint} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
