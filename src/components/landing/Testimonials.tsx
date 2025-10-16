
'use client';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TestimonialsProps {
  testimonialsContent: {
    title: string;
    subtitle: string;
  }
  images: {
    name: string;
    role: string;
    text: string;
    src: string;
    hint: string;
  }[];
}

export function Testimonials({ testimonialsContent, images }: TestimonialsProps) {
  return (
    <section className="py-24 md:py-32 relative scroll-animate">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16 pt-16">
          <h2 className="text-4xl font-bold tracking-tight">{testimonialsContent.title}</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">{testimonialsContent.subtitle}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {images.map((testimonial, index) => (
            <Card key={index} className="flex flex-col bg-secondary/50 border-border/50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CardContent className="flex-1 pt-8">
                <p className="text-muted-foreground italic text-lg leading-relaxed">"{testimonial.text}"</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4 mt-6 p-6 bg-secondary/20">
                <Avatar className="w-14 h-14 border-2 border-primary">
                  <AvatarImage src={testimonial.src} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))
          }
        </div>
      </div>
    </section>
  );
}
