import { ArrowRight, Briefcase, CheckCircle, Clock, Cloud, GitCommit, Heart, Linkedin, Mail, MapPin, Network, Phone, Server, Shield, Twitter, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 flex items-center justify-between h-16 px-4 md:px-6 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="flex items-center gap-2">
          <Briefcase className="w-6 h-6 text-primary" />
          <h1 className="text-xl font-bold">Reflective</h1>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#" className="hover:text-primary transition-colors" prefetch={false}>Home</Link>
          <Link href="#services" className="hover:text-primary transition-colors" prefetch={false}>Services</Link>
          <Link href="#" className="hover:text-primary transition-colors" prefetch={false}>About</Link>
          <Link href="#contact" className="hover:text-primary transition-colors" prefetch={false}>Contact</Link>
        </nav>
        <Button variant="default">Get Started</Button>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-background text-center">
          <div className="container px-4 md:px-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-primary">We Add Value To Your Business</h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">We meet your brand’s IT infrastructure needs.</p>
          </div>
        </section>

        {/* Value Propositions Section */}
        <section className="py-16 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 rounded-full bg-primary/10 text-primary"><Clock className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold">Availability</h3>
                <p className="text-muted-foreground">Reliable, in-house solutions for critical services.</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 rounded-full bg-primary/10 text-primary"><Heart className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold">Loyalty</h3>
                <p className="text-muted-foreground">Long-term partnerships focused on your success.</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 rounded-full bg-primary/10 text-primary"><Zap className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold">Experience</h3>
                <p className="text-muted-foreground">Cutting-edge solutions backed by expertise.</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 rounded-full bg-primary/10 text-primary"><Shield className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold">Support</h3>
                <p className="text-muted-foreground">Transparent, guideline-driven support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Software Engineering Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Software Engineering</h2>
              <p className="text-muted-foreground">Custom solutions to power your business forward.</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Corporate Consulting</h4>
                    <p className="text-muted-foreground">Custom tech infrastructure.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">IT Service System</h4>
                    <p className="text-muted-foreground">Comprehensive support & maintenance.</p>
                  </div>
                </li>
              </ul>
              <Button>Get to Know us <ArrowRight className="ml-2" /></Button>
            </div>
            <div className="flex justify-center">
                <Image src="https://placehold.co/500x500.png" alt="Software Engineering" width={500} height={500} className="rounded-lg" data-ai-hint="software development" />
            </div>
          </div>
        </section>

        {/* Services & Solutions Section */}
        <section id="services" className="py-16 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">Our Services and Solutions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Your IT infrastructure is Enhanced to Us.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: <Server className="w-8 h-8" />, title: 'Server & Storage Systems', description: 'Boost efficiency with technology.', link: '#' },
                { icon: <Network className="w-8 h-8" />, title: 'Network Security', description: 'Professional data protection.', link: '#' },
                { icon: <Users className="w-8 h-8" />, title: 'IT Support', description: 'Reliable task support.', link: '#' },
                { icon: <Cloud className="w-8 h-8" />, title: 'Cloud Services', description: 'Cutting-edge cloud tech.', link: '#' },
                { icon: <GitCommit className="w-8 h-8" />, title: 'Virtualization', description: 'Access data from any device.', link: '#' },
                { icon: <Briefcase className="w-8 h-8" />, title: 'Tracing Solutions', description: 'Cloud monitoring for clients.', link: '#' }
              ].map((service, index) => (
                <Card key={index}>
                  <CardHeader className="items-center">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">{service.icon}</div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardTitle className="mb-2 text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <Button variant="link" asChild>
                      <Link href={service.link}>Review <ArrowRight className="ml-2" /></Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Testimonials Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">Our Customers Who Make Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">We work day and night to ensure our customers thrive.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: 'John Doe', role: 'CEO, TechCorp', text: 'Reflective has transformed our IT landscape. Their expertise and support are unmatched.', image: 'https://placehold.co/100x100.png' },
                { name: 'Jane Smith', role: 'CTO, Innovate LLC', text: 'The availability and security of their solutions have given us peace of mind. A true partner.', image: 'https://placehold.co/100x100.png' },
                { name: 'Samuel Green', role: 'IT Manager, Solutions Inc.', text: 'Working with Reflective feels like an extension of our own team. Highly recommended!', image: 'https://placehold.co/100x100.png' }
              ].map((testimonial, index) => (
                <Card key={index} className="flex flex-col">
                  <CardContent className="flex-1 pt-6">
                    <p className="text-muted-foreground">"{testimonial.text}"</p>
                  </CardContent>
                  <CardFooter className="flex items-center gap-4">
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
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-secondary border-t border-border">
        <div className="container grid gap-8 px-4 py-12 md:px-6 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold">Reflective</h3>
            <p className="text-muted-foreground mt-2">Value-driven IT solutions for modern businesses.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-1">
              <li><Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>Home</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-primary" prefetch={false}>Services</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>About Us</Link></li>
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
        <div className="border-t border-border py-4">
          <div className="container flex items-center justify-between px-4 text-sm text-muted-foreground md:px-6">
            <p>&copy; 2024 Reflective. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-primary" prefetch={false}><Twitter className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-primary" prefetch={false}><Linkedin className="w-5 h-5" /></Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
