
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const iconMap: { [key: string]: React.ElementType } = {
  CheckCircle
};

interface SoftwareEngineeringProps {
  softwareEngineeringContent: {
    title: string;
    subtitle: string;
    points: { icon: string; title: string; description: string }[];
  }
  image: {
    src: string;
    alt: string;
    hint: string;
  }
}

export function SoftwareEngineering({ softwareEngineeringContent, image }: SoftwareEngineeringProps) {
  return (
    <section className="py-24 md:py-32 scroll-animate">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">{softwareEngineeringContent.title}</h2>
            <p className="text-muted-foreground text-lg mb-8">{softwareEngineeringContent.subtitle}</p>
            <ul className="space-y-6">
              {softwareEngineeringContent.points.map((point, index) => {
                const Icon = iconMap[point.icon];
                return (
                  <li key={index} className="flex items-start">
                    {Icon && <Icon className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />}
                    <div>
                      <h4 className="font-bold text-xl mb-1">{point.title}</h4>
                      <p className="text-muted-foreground">{point.description}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
            <Button asChild size="lg" className="mt-10 group rounded-full">
              <Link href="/about">
                Get to Know Us <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div className="relative h-96">
            <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" className="rounded-2xl shadow-2xl" data-ai-hint={image.hint} />
          </div>
        </div>
      </div>
    </section>
  );
}
