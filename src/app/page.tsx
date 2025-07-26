
'use client';
import { ArrowRight, Briefcase, CheckCircle, Clock, Cloud, GitCommit, Heart, Linkedin, Mail, MapPin, Network, Phone, Server, Shield, Twitter, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import Image from 'next/image';
import { ParticleBackground } from '@/components/ui/particle-background';
import { useEffect, useState } from 'react';
import { PageLoader } from '@/components/ui/page-loader';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 flex items-center justify-between h-16 px-4 md:px-6 bg-background/80 backdrop-blur-sm border-b border-border/50 shadow-lg">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Briefcase className="w-6 h-6 text-primary" />
          <h1 className="text-xl font-bold">Reflective</h1>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300" prefetch={false}>Home</Link>
          <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-300" prefetch={false}>Services</Link>
          <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300" prefetch={false}>About</Link>
          <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300" prefetch={false}>Contact</Link>
        </nav>
        <Button variant="default" className="transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-primary/50 hover:shadow-lg">Get Started</Button>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-40 text-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-background to-background/80"></div>
          <ParticleBackground />
          <div className="container relative z-10 px-4 md:px-6">
            <TypewriterEffect text="We Add Value To Your Business" className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400" />
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">We meet your brand’s IT infrastructure needs.</p>
          </div>
        </section>

        {/* Value Propositions Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 text-center">
              <div className="flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-105">
                <div className="p-4 rounded-full bg-primary/10 text-primary ring-4 ring-primary/20"><Clock className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold">Availability</h3>
                <p className="text-muted-foreground">Reliable, in-house solutions for critical services.</p>
              </div>
              <div className="flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-105">
                <div className="p-4 rounded-full bg-primary/10 text-primary ring-4 ring-primary/20"><Heart className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold">Loyalty</h3>
                <p className="text-muted-foreground">Long-term partnerships focused on your success.</p>
              </div>
              <div className="flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-105">
                <div className="p-4 rounded-full bg-primary/10 text-primary ring-4 ring-primary/20"><Zap className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold">Experience</h3>
                <p className="text-muted-foreground">Cutting-edge solutions backed by expertise.</p>
              </div>
              <div className="flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-105">
                <div className="p-4 rounded-full bg-primary/10 text-primary ring-4 ring-primary/20"><Shield className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold">Support</h3>
                <p className="text-muted-foreground">Transparent, guideline-driven support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Software Engineering Section */}
        <section id="about" className="py-20 md:py-28">
          <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <Image src="https://placehold.co/500x500.png" alt="Software Engineering" width={500} height={500} className="rounded-lg relative" data-ai-hint="software development" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Software Engineering</h2>
              <p className="text-muted-foreground text-lg">Custom solutions to power your business forward.</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Corporate Consulting</h4>
                    <p className="text-muted-foreground">Custom tech infrastructure.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">IT Service System</h4>
                    <p className="text-muted-foreground">Comprehensive support & maintenance.</p>
                  </div>
                </li>
              </ul>
              <Button size="lg" className="group">
                Get to Know us <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Services & Solutions Section */}
        <section id="services" className="py-20 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold">Our Services and Solutions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Your IT infrastructure is Enhanced to Us.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { icon: <Server className="w-8 h-8" />, title: 'Server & Storage Systems', description: 'Boost efficiency with technology.', link: '#' },
                  { icon: <Network className="w-8 h-8" />, title: 'Network Security', description: 'Professional data protection.', link: '#' },
                  { icon: <Users className="w-8 h-8" />, title: 'IT Support', description: 'Reliable task support.', link: '#' },
                  { icon: <Cloud className="w-8 h-8" />, title: 'Cloud Services', description: 'Cutting-edge cloud tech.', link: '#' },
                  { icon: <GitCommit className="w-8 h-8" />, title: 'Virtualization', description: 'Access data from any device.', link: '#' },
                  { icon: <Briefcase className="w-8 h-8" />, title: 'Tracing Solutions', description: 'Cloud monitoring for clients.', link: '#' }
                ].map((service, index) => (
                  <Card key={index} className="group transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 border-border/50 hover:border-primary/50">
                    <CardHeader className="items-center">
                      <div className="p-3 rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">{service.icon}</div>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardTitle className="mb-2 text-xl">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="justify-center">
                      <Button variant="link" asChild className="group/link">
                        <Link href={service.link}>Review <ArrowRight className="ml-2 transition-transform group-hover/link:translate-x-1" /></Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              }
            </div>
          </div>
        </section>

        {/* Customer Testimonials Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold">Our Customers Who Make Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">We work day and night to ensure our customers thrive.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: 'John Doe', role: 'CEO, TechCorp', text: 'Reflective has transformed our IT landscape. Their expertise and support are unmatched.', image: 'https://placehold.co/100x100.png' },
                  { name: 'Jane Smith', role: 'CTO, Innovate LLC', text: 'The availability and security of their solutions have given us peace of mind. A true partner.', image: 'https://placehold.co/100x100.png' },
                  { name: 'Samuel Green', role: 'IT Manager, Solutions Inc.', text: 'Working with Reflective feels like an extension of our own team. Highly recommended!', image: 'https://placehold.co/100x100.png' }
                ].map((testimonial, index) => (
                  <Card key={index} className="flex flex-col bg-secondary/50 border-border/50">
                    <CardContent className="flex-1 pt-6">
                      <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                    </CardContent>
                    <CardFooter className="flex items-center gap-4 mt-4">
                      <Avatar>
                        <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint="person" />
                        <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </CardFooter>
                  </Card>
                ))
              }
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-secondary/50 border-t border-border/50">
        <div className="container grid gap-8 px-4 py-16 md:px-6 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold">Reflective</h3>
            <p className="text-muted-foreground mt-2">Value-driven IT solutions for modern businesses.</p>
            <div className="flex items-center gap-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}><Twitter className="w-5 h-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}><Linkedin className="w-5 h-5" /></Link>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-1">
              <li><Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>Home</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-primary" prefetch={false}>Services</Link></li>
              <li><Link href="#about" className="text-muted-foreground hover:text-primary" prefetch={false}>About Us</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-primary" prefetch={false}>Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Contact Us</h4>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>contact@reflective.dev</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>123 Tech Avenue, Silicon Valley, CA</span>
            </div>
          </div>
        </div>
        <div className="border-t border-border/50 py-4">
          <div className="container px-4 text-sm text-center text-muted-foreground md:px-6">
            <p>&copy; 2024 Reflective. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

    