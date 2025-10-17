
import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { Metadata } from 'next';
import content from '@/lib/content.json';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { CheckCircle } from 'lucide-react';
import placeholderImages from '@/lib/placeholder-images.json';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type ServicePageProps = {
  params: Promise<{
    serviceId: string;
  }>
}

const services = content.services.items;

// Generate metadata for SEO
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { serviceId } = await params;
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
    }
  }

  return {
    title: `${service.title} | ${content.companyName}`,
    description: service.detailedDescription.substring(0, 160), // Truncate for meta description
    openGraph: {
        title: `${service.title} | ${content.companyName}`,
        description: service.detailedDescription.substring(0, 160),
        images: [
            {
                url: service.image.src,
                width: 1200,
                height: 600,
                alt: service.image.alt,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `${service.title} | ${content.companyName}`,
        description: service.detailedDescription.substring(0, 160),
        images: [service.image.src],
    },
  }
}

// Statically generate routes for all services
export async function generateStaticParams() {
  return services.map((service) => ({
    serviceId: service.id,
  }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { serviceId } = await params;
  const service = services.find(s => s.id === serviceId);

  // If service is not found, show a 404 page
  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header 
        companyName={content.companyName}
        navigation={content.navigation}
        contact={content.contact}
        socials={content.socials}
        quoteDialog={content.quoteDialog}
      />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>
            <Image 
                src={service.image.src}
                alt={service.image.alt}
                fill
                style={{ objectFit: 'cover' }}
                className="z-0"
                data-ai-hint={service.image.hint}
                priority
            />
            <div className="container relative z-20 px-4 md:px-6 animate-fade-in-up">
                <p className="text-lg font-semibold text-primary mb-2">Our Services</p>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">{service.title}</h1>
            </div>
        </section>

        {/* Service Overview Section */}
        <section className="py-24 md:py-32">
            <div className="container px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-primary text-center">Service Overview</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">{service.detailedDescription}</p>
                </div>
            </div>
        </section>

        {/* Key Features Section */}
        <section className="py-24 md:py-32 bg-secondary/30">
            <div className="container px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Key Features & Benefits</h2>
                    <p className="text-lg text-muted-foreground">Discover what makes our {service.title} solution stand out.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {service.features.map((feature, index) => (
                        <Card key={index} className="bg-background/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
                            <CardHeader className="flex flex-row items-center gap-4 pb-4">
                                <CheckCircle className="w-8 h-8 text-primary flex-shrink-0" />
                                <CardTitle className="text-xl">{feature.split(':')[0]}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{feature.substring(feature.indexOf(':') + 2)}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32">
            <div className="container text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to elevate your business?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">Let's discuss how our {service.title} expertise can help you achieve your goals.</p>
                <Button asChild size="lg" className="group rounded-full text-lg px-8 py-6">
                    <Link href="#contact">Get a Free Quote</Link>
                </Button>
            </div>
        </section>

      </main>
      <Footer 
        companyName={content.companyName}
        footerContent={content.footer}
        services={content.services.items}
        contact={content.contact}
        socials={content.socials}
      />
    </div>
  );
}
