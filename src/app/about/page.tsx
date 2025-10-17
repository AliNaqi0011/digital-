
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import content from '@/lib/content.json';
import placeholderImages from '@/lib/placeholder-images.json';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: `About | ${content.companyName}`,
  description: content.aboutPage.description,
  openGraph: {
      title: `About | ${content.companyName}`,
      description: content.aboutPage.description,
  },
  twitter: {
      title: `About | ${content.companyName}`,
      description: content.aboutPage.description,
  },
}

export default function AboutPage() {
  const { aboutPage } = content;
  const teamImages = placeholderImages.about;

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
        <section className="relative h-[40vh] flex items-center justify-center text-center bg-secondary/30">
            <div className="container relative z-10 px-4 md:px-6 animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-primary">{aboutPage.title}</h1>
                <p className="max-w-2xl mx-auto mt-4 text-lg md:text-xl text-muted-foreground">{aboutPage.description}</p>
            </div>
        </section>

        {/* Company Details Section */}
        <section className="py-24 md:py-32">
            <div className="container px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-primary">Who We Are</h2>
                    <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                        {aboutPage.companyDetails}
                    </p>
                </div>
            </div>
        </section>
        
        {/* Core Competencies Section */}
        <section className="py-24 md:py-32 bg-secondary/30">
            <div className="container px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{aboutPage.offerings.title}</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {aboutPage.offerings.categories.map((category) => (
                        <Card key={category.title} className="bg-background/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
                            <CardHeader>
                                <CardTitle className="text-2xl text-primary">{category.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-wrap gap-2">
                                {category.items.map((item) => (
                                    <Badge key={item} variant="secondary" className="text-sm font-medium">{item}</Badge>
                                ))}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Meet the Team Section */}
        <section className="py-24 md:py-32">
            <div className="container px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{aboutPage.team.title}</h2>
                    <p className="text-lg text-muted-foreground">{aboutPage.team.subtitle}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {aboutPage.team.members.map((member) => {
                        const image = teamImages[member.image as keyof typeof teamImages];
                        return (
                        <Card key={member.name} className="overflow-hidden border-2 border-transparent hover:border-primary transition-all duration-300 group">
                            <CardContent className="p-0">
                                <div className="relative h-64 bg-gradient-to-br from-primary/20 to-secondary/20">
                                    <Image 
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="mix-blend-luminosity grayscale group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-300"
                                        data-ai-hint={image.hint}
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold">{member.name}</h3>
                                    <p className="text-primary font-semibold text-md mb-4">{member.role}</p>
                                    <p className="text-muted-foreground mb-6">{member.bio}</p>
                                    <div className="flex gap-4">
                                        <Button variant="ghost" size="icon" asChild>
                                            <Link href={member.socials.linkedin} target="_blank" aria-label="LinkedIn">
                                                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                            </Link>
                                        </Button>
                                        <Button variant="ghost" size="icon" asChild>
                                            <Link href={member.socials.twitter} target="_blank" aria-label="Twitter">
                                                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                            </Link>
                                        </Button>
                                        <Button variant="ghost" size="icon" asChild>
                                            <Link href={member.socials.github} target="_blank" aria-label="GitHub">
                                                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )})}
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
