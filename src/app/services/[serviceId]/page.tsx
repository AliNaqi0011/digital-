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
import { ServiceHero } from '@/components/landing/ServiceHero';

// Web Development Technologies
const webDevTechnologies = [
  { name: 'React', src: '/images/react js.jpeg' },
  { name: 'Next.js', src: '/images/next js.jpeg' },
  { name: 'Vue.js', src: '/images/vue js.jpeg' },
  { name: 'Node.js', src: '/images/node js.jpeg' },
  { name: 'Django', src: '/images/django.jpeg' },
  { name: 'Flask', src: '/images/flask.jpeg' },
  { name: 'Laravel', src: '/images/laravel.jpeg' },
  { name: 'Express', src: '/images/express.jpeg' },
  { name: 'Python', src: '/images/python.jpeg' },
  { name: 'PHP', src: '/images/php.jpeg' },
  { name: 'TypeScript', src: '/images/type script.jpeg' },
  { name: 'JavaScript', src: '/images/js.jpeg' },
  { name: 'HTML', src: '/images/html.jpeg' },
  { name: 'CSS', src: '/images/css.jpeg' },
  { name: 'Bootstrap', src: '/images/bootstrap.jpeg' },
  { name: 'Tailwind CSS', src: '/images/tailwind css.jpeg' },
];

// AI & Machine Learning Technologies
const aiTechnologies = [
  { name: 'Python', src: '/images/python.jpeg' },
  { name: 'PyTorch', src: '/images/putourch.jpeg' },
  { name: 'OpenAI', src: '/images/open ai.jpeg' },
  { name: 'Machine Learning', src: '/images/machine learning.jpeg' },
  { name: 'Deep Learning', src: '/images/deep learning.jpeg' },
  { name: 'Data Analysis', src: '/images/data analytics.jpeg' },
  { name: 'Web Scraping', src: '/images/web scrapng.jpeg' },
  { name: 'Selenium', src: '/images/selenium.jpeg' },
  { name: 'AI Automation', src: '/images/automation.jpeg' },
];

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
        <ServiceHero title={service.title} />

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

        {/* Technology Stack Section - For Web Development and AI */}
        {(serviceId === 'web-application-development' || serviceId === 'ai-machine-learning') && (
          <section className="py-24 md:py-32">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Our Technology Stack</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {serviceId === 'web-application-development' 
                    ? 'We use modern, robust technologies to build scalable and maintainable web applications.'
                    : 'We leverage cutting-edge AI frameworks and tools to build intelligent solutions.'}
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {(serviceId === 'web-application-development' ? webDevTechnologies : aiTechnologies).map((tech, index) => (
                  <div key={tech.name} className="flex flex-col items-center justify-center gap-3 group tilt-3d transition-all duration-500" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="w-20 h-16 relative flex items-center justify-center bg-white rounded-lg group-hover:shadow-2xl group-hover:shadow-primary/30 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-2">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Image 
                        src={tech.src}
                        alt={tech.name}
                        width={60}
                        height={50}
                        className="object-contain rounded relative z-10 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300 transform group-hover:scale-105">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

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
