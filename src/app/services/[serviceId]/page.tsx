import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import content from '@/lib/content.json';

interface ServicePageProps {
  params: Promise<{
    serviceId: string;
  }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { serviceId } = await params;
  const service = content.services.items.find(s => s.id === serviceId);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return content.services.items.map((service) => ({
    serviceId: service.id,
  }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { serviceId } = await params;
  const service = content.services.items.find(s => s.id === serviceId);

  if (!service) {
    notFound();
  }

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
        {/* Breadcrumb */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4 md:px-16">
            <Button asChild variant="ghost" className="mb-4">
              <Link href="/services">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Services
              </Link>
            </Button>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4 md:px-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                  {service.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {service.description}
                </p>
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/contact">
                    Get Started Today
                  </Link>
                </Button>
              </div>
              
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none mb-12">
                <div className="whitespace-pre-line text-muted-foreground">
                  {service.detailedDescription}
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-8">What's Included</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {service.features.map((feature, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">
                            {feature.split(':')[0]}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {feature.split(':')[1]?.trim()}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
              Let's discuss your {service.title.toLowerCase()} needs and create a solution that works for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">
                  Contact Us Today
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/services">
                  View All Services
                </Link>
              </Button>
            </div>
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