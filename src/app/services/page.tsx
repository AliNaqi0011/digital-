import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import content from '@/lib/content.json';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our comprehensive range of digital services including web development, mobile apps, and AI solutions.',
};

const iconMap: { [key: string]: React.ElementType } = {
  Globe: () => <div className="w-6 h-6 bg-primary rounded"></div>,
  ShoppingCart: () => <div className="w-6 h-6 bg-primary rounded"></div>,
  Tag: () => <div className="w-6 h-6 bg-primary rounded"></div>,
  Store: () => <div className="w-6 h-6 bg-primary rounded"></div>,
  Code: () => <div className="w-6 h-6 bg-primary rounded"></div>,
  Truck: () => <div className="w-6 h-6 bg-primary rounded"></div>,
  Megaphone: () => <div className="w-6 h-6 bg-primary rounded"></div>,
  Smartphone: () => <div className="w-6 h-6 bg-primary rounded"></div>,
  Search: () => <div className="w-6 h-6 bg-primary rounded"></div>,
  Palette: () => <div className="w-6 h-6 bg-primary rounded"></div>,
  Calculator: () => <div className="w-6 h-6 bg-primary rounded"></div>,
  Brain: () => <div className="w-6 h-6 bg-primary rounded"></div>,
};

export default function ServicesPage() {
  return (
    <>
      <Header 
        companyName={content.companyName}
        navigation={content.navigation}
        contact={content.contact}
        socials={content.socials}
        quoteDialog={content.quoteDialog}
      />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4 md:px-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              {content.services.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {content.services.subtitle}
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.services.items.map((service, index) => {
                const Icon = iconMap[service.icon];
                return (
                  <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        {Icon && <Icon />}
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-sm text-muted-foreground">
                              {feature.split(':')[0]}
                            </p>
                          </div>
                        ))}
                      </div>
                      <Button asChild variant="outline" className="w-full group">
                        <Link href={`/services/${service.id}`}>
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 md:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help bring your vision to life.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">
                Contact Us Today
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer 
        companyName={content.companyName}
        description={content.footer.description}
        copyright={content.footer.copyright}
        companyLinks={content.footer.companyLinks}
        contact={content.contact}
        socials={content.socials}
      />
    </>
  );
}