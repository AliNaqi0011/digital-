
'use client';
import { ArrowRight, Server, Network, Users, Cloud, GitCommit, Briefcase, Code, Globe, Brain, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const iconMap: { [key: string]: React.ElementType } = {
  Globe, ShoppingCart: () => <div className="w-10 h-10 bg-primary rounded"></div>, Tag: () => <div className="w-10 h-10 bg-primary rounded"></div>, Store: () => <div className="w-10 h-10 bg-primary rounded"></div>, Code, Truck: () => <div className="w-10 h-10 bg-primary rounded"></div>, Megaphone: () => <div className="w-10 h-10 bg-primary rounded"></div>, Smartphone, Search: () => <div className="w-10 h-10 bg-primary rounded"></div>, Palette: () => <div className="w-10 h-10 bg-primary rounded"></div>, Calculator: () => <div className="w-10 h-10 bg-primary rounded"></div>, Brain
};

interface ServicesProps {
  servicesContent: {
    title: string;
    subtitle: string;
    items: { id: string; icon: string; title: string; description: string }[];
  }
}

export function Services({ servicesContent }: ServicesProps) {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/30 scroll-animate">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight">{servicesContent.title}</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">{servicesContent.subtitle}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesContent.items.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <Card key={index} className="group flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 border hover:border-primary/30 bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden hover:-translate-y-2">
                <CardHeader className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                    {Icon && <Icon className="w-8 h-8 text-primary" />}
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 p-6 pt-0">
                  <CardDescription className="text-muted-foreground leading-relaxed">{service.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="ghost" asChild className="group/link text-primary hover:text-primary/80 p-0 h-auto font-medium">
                    <Link href={`/services/${service.id}`} className="flex items-center">
                      Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
        
        <div className="text-center mt-16">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/services">
              Explore More Services
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
