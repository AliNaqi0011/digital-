
'use client';
import { ArrowRight, Server, Network, Users, Cloud, GitCommit, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const iconMap: { [key: string]: React.ElementType } = {
  Server, Network, Users, Cloud, GitCommit, Briefcase
};

interface ServicesProps {
  servicesContent: {
    title: string;
    subtitle: string;
    items: { icon: string; title: string; description: string }[];
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
              <Card key={index} className="group flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 border-border/50 hover:border-primary/50 bg-background overflow-hidden">
                <CardHeader className="items-start p-6">
                  <div className="p-4 rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground mb-4">{Icon && <Icon className="w-10 h-10" />}</div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 p-6 pt-0">
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0 mt-auto">
                  <Button variant="ghost" asChild className="group/link text-primary text-base px-0">
                    <Link href={'#contact'}>Review <ArrowRight className="ml-2 transition-transform group-hover/link:translate-x-1" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}
