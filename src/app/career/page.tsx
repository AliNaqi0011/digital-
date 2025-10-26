import { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, MapPin, Clock, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import content from '@/lib/content.json';

export const metadata: Metadata = {
  title: 'Career Opportunities',
  description: 'Join our team and build your career with us. Explore available positions and apply today.',
};

export default function CareerPage() {
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
              {content.career.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {content.career.subtitle}
            </p>
          </div>
        </section>

        {/* Jobs Section */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Open Positions</h2>
              
              <div className="space-y-6">
                {content.career.jobs.map((job) => (
                  <Card key={job.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                          <CardDescription className="text-base">
                            {job.description}
                          </CardDescription>
                        </div>
                        <Button asChild className="md:flex-shrink-0">
                          <Link href={job.formUrl} target="_blank" rel="noopener noreferrer">
                            Apply Now
                            <ExternalLink className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {content.career.jobs.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-semibold mb-4">No Open Positions</h3>
                  <p className="text-muted-foreground mb-6">
                    We don't have any open positions at the moment, but we're always looking for talented individuals.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/contact">
                      Send Us Your Resume
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-24 md:py-32 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 md:px-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Work With Us?
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Join a team that values innovation, growth, and work-life balance.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-primary rounded"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Remote Flexibility</h3>
                  <p className="text-muted-foreground">Work from anywhere with flexible hours and remote-first culture.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-primary rounded"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
                  <p className="text-muted-foreground">Continuous learning and career advancement opportunities.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-primary rounded"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Innovative Projects</h3>
                  <p className="text-muted-foreground">Work on cutting-edge technologies and exciting projects.</p>
                </div>
              </div>
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