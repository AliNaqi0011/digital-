
import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { Metadata } from 'next';
import content from '@/lib/content.json';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { CheckCircle } from 'lucide-react';
import placeholderImages from '@/lib/placeholder-images.json';

type ServicePageProps = {
  params: {
    serviceId: string;
  }
}

const services = content.services.items;

// Generate metadata for SEO
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services.find(s => s.id === params.serviceId);

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

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find(s => s.id === params.serviceId);

  // If service is not found, show a 404 page
  if (!service) {
    notFound();
  }

  const techStackContent = {
    ...content.techStack,
    categories: content.techStack.categories.map(category => ({
      ...category,
      technologies: placeholderImages.techStack[category.id as keyof typeof placeholderImages.techStack]
    }))
  };

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
            <div className="absolute inset-0 z-10 bg-black/50"></div>
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
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">{service.title}</h1>
            </div>
        </section>

        {/* Service Details Section */}
        <section className="py-24 md:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-bold tracking-tight mb-4 text-primary">Service Overview</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">{service.detailedDescription}</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight mb-4">Key Features</h3>
                        <ul className="space-y-4">
                            {service.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-muted-foreground">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
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
