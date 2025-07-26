
'use client';
import { ArrowRight, Briefcase, CheckCircle, ChevronRight, Clock, Cloud, Code, GitCommit, Heart, Linkedin, Mail, MapPin, Moon, Network, Phone, Rocket, Server, Shield, Sun, Twitter, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import Image from 'next/image';
import { ParticleBackground } from '@/components/ui/particle-background';
import { useEffect, useState } from 'react';
import { PageLoader } from '@/components/ui/page-loader';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useTheme } from 'next-themes';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


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
       <div className="bg-secondary/30 text-secondary-foreground py-2 px-4 md:px-8 text-xs">
          <div className="container mx-auto flex justify-between items-center">
              <div className="flex gap-4 items-center">
                  <span className="flex items-center gap-1.5"><Mail className="w-4 h-4" /> contact@reflective.dev</span>
                  <span className="flex items-center gap-1.5"><Phone className="w-4 h-4" /> (123) 456-7890</span>
              </div>
              <div className="flex gap-4 items-center">
                  <Link href="#" className="hover:text-primary transition-colors"><Twitter className="w-4 h-4" /></Link>
                  <Link href="#" className="hover:text-primary transition-colors"><Linkedin className="w-4 h-4" /></Link>
              </div>
          </div>
       </div>
      <header className="sticky top-0 z-50 flex items-center justify-between h-20 px-4 md:px-8 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-2xl shadow-primary/10">
        <Link href="#" className="flex items-center gap-3" prefetch={false}>
          <Briefcase className="w-8 h-8 text-primary animate-pulse" />
          <h1 className="text-2xl font-bold tracking-wider">Reflective</h1>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-base font-medium">
          <Link href="#services" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-0.5" prefetch={false}>Services</Link>
          <Link href="#about" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-0.5" prefetch={false}>About</Link>
          <Link href="#process" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-0.5" prefetch={false}>Process</Link>
          <Link href="#contact" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-0.5" prefetch={false}>Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
            <Dialog>
            <DialogTrigger asChild>
                <Button variant="default" size="lg" className="transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-primary/50 hover:shadow-lg rounded-full">Get Started</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-secondary border-primary/20">
                <DialogHeader>
                <DialogTitle className="text-2xl text-primary">Let's Build Something Amazing</DialogTitle>
                <DialogDescription>
                    Share your project idea, and our experts will be in touch.
                </DialogDescription>
                </DialogHeader>
                <form className="grid gap-6 py-4">
                <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" className="bg-background/50 border-border" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" className="bg-background/50 border-border" />
                </div>
                <Button type="submit" size="lg" className="w-full mt-4 rounded-full">Request a Quote</Button>
                </form>
            </DialogContent>
            </Dialog>
            <ThemeToggle />
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
          <ParticleBackground />
          <div className="container relative z-10 px-4 md:px-6 animate-fade-in-up">
            <TypewriterEffect text="We Add Value To Your Business" className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-red-400" />
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">We meet your brand’s IT infrastructure needs.</p>
             <div className="mt-10 flex justify-center gap-4">
                <Button size="lg" className="group rounded-full text-lg px-8 py-6">
                    Explore Services <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full text-lg px-8 py-6">
                    Contact Us
                </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="about" className="py-24 md:py-32 bg-secondary/30">
            <div className="container px-4 md:px-6">
                <div className="text-center space-y-4 mb-16 animate-fade-in-up">
                    <h2 className="text-4xl font-bold tracking-tight">Why Partner With Reflective?</h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto text-lg">We're not just a service provider; we're your dedicated technology partner.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                     {[
                        { icon: <Clock className="w-10 h-10" />, title: 'Availability', description: 'Reliable, in-house solutions for critical services with 99.9% uptime.' },
                        { icon: <Heart className="w-10 h-10" />, title: 'Loyalty', description: 'Long-term partnerships focused on mutual success and growth.' },
                        { icon: <Zap className="w-10 h-10" />, title: 'Experience', description: 'Decades of combined expertise in cutting-edge enterprise solutions.' },
                        { icon: <Shield className="w-10 h-10" />, title: 'Support', description: 'Transparent, 24/7 guideline-driven support from our expert team.' }
                     ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-background/50 transition-all duration-300 hover:bg-background hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-2">
                            <div className="p-5 rounded-full bg-primary/10 text-primary ring-4 ring-primary/20 mb-6">{item.icon}</div>
                            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </div>
                     ))}
                </div>
            </div>
        </section>
        
        {/* Software Engineering Section */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold tracking-tight mb-4">Software Engineering</h2>
                <p className="text-muted-foreground text-lg mb-8">Custom solutions to drive your business forward.</p>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-xl mb-1">Corporate Consulting</h4>
                      <p className="text-muted-foreground">Tailored technology roadmaps and infrastructure design to align with your strategic goals.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-xl mb-1">IT Service System</h4>
                      <p className="text-muted-foreground">Comprehensive support, maintenance, and system optimization for seamless operations.</p>
                    </div>
                  </li>
                </ul>
                <Button asChild size="lg" className="mt-10 group">
                  <Link href="#services">
                    Get to Know Us <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-96">
                <Image src="https://placehold.co/600x400.png" alt="Software Engineering" layout="fill" objectFit="cover" className="rounded-2xl shadow-2xl" data-ai-hint="abstract code" />
              </div>
            </div>
          </div>
        </section>

        {/* Services & Solutions Section */}
        <section id="services" className="py-24 md:py-32 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold tracking-tight">Our Services and Solutions</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">Your IT infrastructure is Enhanced to Us.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { icon: <Server className="w-10 h-10" />, title: 'Server & Storage Systems', description: 'Boost efficiency with technology.' },
                  { icon: <Network className="w-10 h-10" />, title: 'Network Security', description: 'Professional data protection.' },
                  { icon: <Users className="w-10 h-10" />, title: 'Managed IT Support', description: 'Reliable task support.' },
                  { icon: <Cloud className="w-10 h-10" />, title: 'Cloud Services', description: 'Cutting-edge cloud tech.' },
                  { icon: <GitCommit className="w-10 h-10" />, title: 'Virtualization', description: 'Access data from any device.' },
                  { icon: <Briefcase className="w-10 h-10" />, title: 'Tracing & Observability', description: 'Cloud monitoring for clients.' }
                ].map((service, index) => (
                  <Card key={index} className="group flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 border-border/50 hover:border-primary/50 bg-background overflow-hidden">
                    <CardHeader className="items-start p-6">
                      <div className="p-4 rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground mb-4">{service.icon}</div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 p-6 pt-0">
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="p-6 pt-0 mt-auto">
                      <Button variant="ghost" asChild className="group/link text-primary text-base">
                        <Link href={'#'}>Review →<ArrowRight className="ml-2 transition-transform group-hover/link:translate-x-1" /></Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              }
            </div>
          </div>
        </section>
        
        {/* Our Process Section */}
        <section id="process" className="py-24 md:py-32">
            <div className="container px-4 md:px-6">
                <div className="text-center space-y-4 mb-20">
                    <h2 className="text-4xl font-bold tracking-tight">Our Proven Process</h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto text-lg">We follow a structured, agile methodology to ensure project success and client satisfaction.</p>
                </div>
                <div className="relative">
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/20 -translate-y-1/2"></div>
                    <div className="grid gap-16 lg:gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            { icon: <Rocket className="w-10 h-10" />, title: "1. Discovery & Strategy", description: "We start by understanding your goals, challenges, and requirements to create a tailored project roadmap." },
                            { icon: <Code className="w-10 h-10" />, title: "2. Design & Development", description: "Our team designs and develops robust solutions using best practices and cutting-edge technology." },
                            { icon: <CheckCircle className="w-10 h-10" />, title: "3. Testing & QA", description: "Rigorous testing at every stage ensures a bug-free, high-performance, and secure final product." },
                            { icon: <Zap className="w-10 h-10" />, title: "4. Deployment & Support", description: "We handle a seamless deployment and provide ongoing support to ensure your system runs smoothly." }
                        ].map((step, index) => (
                            <div key={index} className="relative flex flex-col items-center text-center">
                                <div className="absolute -top-12 flex items-center justify-center w-24 h-24 rounded-full bg-primary text-primary-foreground border-8 border-background">
                                    {step.icon}
                                </div>
                                <div className="pt-20 p-6 rounded-2xl bg-secondary/50 h-full">
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-24 md:py-32 bg-secondary/30">
            <div className="container px-4 md:px-6">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl font-bold tracking-tight">Our Technology Stack</h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto text-lg">We use a modern, robust stack to build scalable and maintainable solutions.</p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                    {[
                        { name: "Next.js", image: "https://placehold.co/120x40.png", hint: "nextjs logo" },
                        { name: "React", image: "https://placehold.co/120x40.png", hint: "react logo" },
                        { name: "TypeScript", image: "https://placehold.co/120x40.png", hint: "typescript logo" },
                        { name: "Node.js", image: "https://placehold.co/120x40.png", hint: "nodejs logo" },
                        { name: "Docker", image: "https://placehold.co/120x40.png", hint: "docker logo" },
                        { name: "Kubernetes", image: "https://placehold.co/120x40.png", hint: "kubernetes logo" },
                        { name: "Google Cloud", image: "https://placehold.co/120x40.png", hint: "google cloud" },
                    ].map((tech) => (
                        <div key={tech.name} className="flex items-center gap-4 transition-transform duration-300 hover:scale-110" title={tech.name}>
                            <Image src={tech.image} alt={tech.name} width={120} height={40} className="grayscale hover:grayscale-0 transition-all duration-300" data-ai-hint={tech.hint}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Customer Testimonials Section */}
        <section className="py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold tracking-tight">Our Customers Who Make Us</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">We work day and night to ensure our customers thrive.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: 'John Doe', role: 'CEO, TechCorp', text: 'Reflective has transformed our IT landscape. Their expertise and dedication are simply unmatched. A true partner in every sense of the word.', image: 'https://placehold.co/100x100.png' },
                  { name: 'Jane Smith', role: 'CTO, Innovate LLC', text: 'The availability and security of their solutions have given us complete peace of mind. Their proactive support is second to none.', image: 'https://placehold.co/100x100.png' },
                  { name: 'Samuel Green', role: 'IT Manager, Solutions Inc.', text: 'Working with Reflective feels like an extension of our own team. Their technical skill and strategic insight are highly recommended!', image: 'https://placehold.co/100x100.png' }
                ].map((testimonial, index) => (
                  <Card key={index} className="flex flex-col bg-secondary/50 border-border/50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <CardContent className="flex-1 pt-8">
                      <p className="text-muted-foreground italic text-lg leading-relaxed">"{testimonial.text}"</p>
                    </CardContent>
                    <CardFooter className="flex items-center gap-4 mt-6 p-6 bg-secondary/20">
                      <Avatar className="w-14 h-14 border-2 border-primary">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint="person portrait" />
                        <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-lg">{testimonial.name}</p>
                        <p className="text-sm text-primary">{testimonial.role}</p>
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
      <footer id="contact" className="bg-secondary/30 border-t border-border/50">
        <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold">Reflective</h3>
                    <p className="text-muted-foreground mt-4 max-w-md">Engineering the future of your business with value-driven IT solutions.</p>
                    <div className="mt-6">
                        <h4 className="font-semibold text-lg">Stay Connected</h4>
                        <form className="flex mt-2">
                            <Input type="email" placeholder="Enter your email" className="rounded-r-none" />
                            <Button type="submit" className="rounded-l-none">Subscribe</Button>
                        </form>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-lg">Services</h4>
                    <ul className="space-y-3 mt-4">
                        <li><a className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Server & Storage</a></li>
                        <li><a className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Network Security</a></li>
                        <li><a className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Cloud Services</a></li>
                        <li><a className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Managed IT</a></li>
                        <li><a className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Virtualization</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-lg">Company</h4>
                    <ul className="space-y-3 mt-4">
                        <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>About Us</Link></li>
                        <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Careers</Link></li>
                        <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Press</Link></li>
                        <li><Link href="#process" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Our Process</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-lg">Contact Us</h4>
                    <div className="flex items-start gap-3 text-muted-foreground mt-4">
                        <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                        <span>contact@reflective.dev</span>
                    </div>
                    <div className="flex items-start gap-3 text-muted-foreground mt-2">
                        <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                        <span>(123) 456-7890</span>
                    </div>
                    <div className="flex items-start gap-3 text-muted-foreground mt-2">
                        <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                        <span>123 Tech Avenue, Silicon Valley, CA</span>
                    </div>
                </div>
            </div>
            <div className="mt-12 border-t border-border/50 pt-6 flex flex-col sm:flex-row justify-between items-center">
                <p className="text-sm text-muted-foreground">&copy; 2024 Reflective. All rights reserved. Built with passion and code.</p>
                <div className="flex items-center gap-4 mt-4 sm:mt-0">
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}><Twitter className="w-6 h-6" /></Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}><Linkedin className="w-6 h-6" /></Link>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
}
