
'use client';
import { ArrowRight, Briefcase, CheckCircle, ChevronRight, Clock, Cloud, Code, GitCommit, Heart, Linkedin, Mail, MapPin, Menu, Moon, Network, Phone, Rocket, Server, Shield, Sun, Twitter, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import Image from 'next/image';
import { ParticleBackground } from '@/components/ui/particle-background';
import { useEffect, useState, useRef } from 'react';
import { PageLoader } from '@/components/ui/page-loader';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useTheme } from 'next-themes';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { CursorFollower } from '@/components/ui/cursor-follower';
import placeholderImages from '@/lib/placeholder-images.json';
import content from '@/lib/content.json';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import { useFirebase } from '@/firebase';
import { addDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import { collection } from 'firebase/firestore';

const quoteFormSchema = z.object({
  name: z.string().min(1, 'Full name is required.'),
  email: z.string().email('Please enter a valid email address.'),
});

const subscribeFormSchema = z.object({
  email: z.string().email('Please enter a valid email address.'),
});

function useAnimateOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
    });

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);
}

const iconMap: { [key: string]: React.ElementType } = {
  Clock, Heart, Zap, Shield, CheckCircle, Server, Network, Users, Cloud, GitCommit, Briefcase, Rocket, Code
};

function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Toggle theme">
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

function QuoteForm({ setOpen }: { setOpen: (open: boolean) => void }) {
  const { toast } = useToast();
  const { firestore } = useFirebase();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof quoteFormSchema>>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: { name: "", email: "" },
  });

  const onSubmit = (data: z.infer<typeof quoteFormSchema>) => {
    if (!firestore) return;
    const leadsCollection = collection(firestore, 'leads');
    addDocumentNonBlocking(leadsCollection, {
      id: crypto.randomUUID(),
      ...data,
      type: 'quote',
      createdAt: new Date().toISOString(),
    });
    toast({
      title: 'Quote Requested!',
      description: "Thanks for your interest. We'll be in touch shortly.",
    });
    reset();
    setOpen(false);
  };

  return (
    <form className="grid gap-6 py-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" placeholder="John Doe" {...register('name')} className="bg-background/50 border-border" />
        {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" placeholder="john.doe@example.com" {...register('email')} className="bg-background/50 border-border" />
        {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
      </div>
      <Button type="submit" size="lg" className="w-full mt-4 rounded-full">Request a Quote</Button>
    </form>
  );
}

function SubscribeForm() {
  const { toast } = useToast();
  const { firestore } = useFirebase();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof subscribeFormSchema>>({
    resolver: zodResolver(subscribeFormSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = (data: z.infer<typeof subscribeFormSchema>) => {
    if (!firestore) return;
    const leadsCollection = collection(firestore, 'leads');
    addDocumentNonBlocking(leadsCollection, {
      id: crypto.randomUUID(),
      email: data.email,
      name: '',
      type: 'subscribe',
      createdAt: new Date().toISOString(),
    });
    toast({
      title: 'Subscribed!',
      description: "You're now on our mailing list.",
    });
    reset();
  };

  return (
    <form className="flex mt-2" onSubmit={handleSubmit(onSubmit)}>
      <Input type="email" placeholder="Enter your email" {...register('email')} className="rounded-r-none" aria-label="Email for subscription" />
      <Button type="submit" className="rounded-l-none">Subscribe</Button>
      {errors.email && <p className="text-sm text-destructive absolute mt-12">{errors.email.message}</p>}
    </form>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [openQuoteDialog, setOpenQuoteDialog] = useState(false);
  useAnimateOnScroll();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <CursorFollower />
       <div className="text-secondary-foreground py-2 px-4 md:px-8 text-sm bg-gradient-to-r from-white via-sky-200 to-blue-500 dark:from-black dark:via-sky-900 dark:to-blue-800">
          <div className="container mx-auto flex justify-between items-center">
              <div className="flex gap-4 items-center">
                  <span className="flex items-center gap-1.5"><Mail className="w-4 h-4" /> {content.contact.email}</span>
                  <span className="hidden md:flex items-center gap-1.5"><Phone className="w-4 h-4" /> {content.contact.phone}</span>
              </div>
              <div className="flex gap-4 items-center">
                  <Link href={content.socials.twitter} className="hover:text-primary transition-colors" aria-label="Twitter"><Twitter className="w-4 h-4" /></Link>
                  <Link href={content.socials.linkedin} className="hover:text-primary transition-colors" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></Link>
              </div>
          </div>
       </div>
      <header className="sticky top-0 z-50 flex items-center justify-between h-20 px-4 md:px-8 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-2xl shadow-primary/10">
        <Link href="#" className="flex items-center gap-3" prefetch={false}>
          <Briefcase className="w-8 h-8 text-primary animate-pulse" />
          <h1 className="text-xl font-bold tracking-wider">{content.companyName}</h1>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-lg font-semibold">
          {content.navigation.map(item => (
            <Link key={item.name} href={item.href} className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-0.5" prefetch={false}>
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
            <Dialog open={openQuoteDialog} onOpenChange={setOpenQuoteDialog}>
            <DialogTrigger asChild>
                <Button variant="default" size="lg" className="transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-primary/50 hover:shadow-lg rounded-full">Get Started</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-secondary border-primary/20">
                <DialogHeader>
                <DialogTitle className="text-2xl text-primary">{content.quoteDialog.title}</DialogTitle>
                <DialogDescription>
                    {content.quoteDialog.description}
                </DialogDescription>
                </DialogHeader>
                <QuoteForm setOpen={setOpenQuoteDialog} />
            </DialogContent>
            </Dialog>
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-6 mt-8 text-lg">
                  {content.navigation.map(item => (
                      <Link key={item.name} href={item.href} className="text-muted-foreground hover:text-primary" prefetch={false}>
                        {item.name}
                      </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
          <ParticleBackground />
          <div className="container relative z-10 px-4 md:px-6 animate-fade-in-up">
            <TypewriterEffect text={content.hero.title} className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-sky-400" />
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">{content.hero.subtitle}</p>
             <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="group rounded-full text-lg px-8 py-6 transition-all duration-300 ease-in-out hover:bg-primary/90 hover:shadow-lg">
                    <Link href="#services">
                      Explore Services <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full text-lg px-8 py-6 transition-all duration-300 ease-in-out hover:bg-accent hover:text-accent-foreground">
                    <Link href="#contact">
                      Contact Us
                    </Link>
                </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="about" className="py-24 md:py-32 bg-secondary/30 scroll-animate">
            <div className="container px-4 md:px-6">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl font-bold tracking-tight">{content.whyChooseUs.title}</h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto text-lg">{content.whyChooseUs.subtitle}</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                     {content.whyChooseUs.items.map((item, index) => {
                       const Icon = iconMap[item.icon];
                       return (
                        <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-background/50 transition-all duration-300 hover:bg-background hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-2">
                            <div className="p-5 rounded-full bg-primary/10 text-primary ring-4 ring-primary/20 mb-6">{Icon && <Icon className="w-10 h-10" />}</div>
                            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </div>
                     )})}
                </div>
            </div>
        </section>
        
        {/* Software Engineering Section */}
        <section className="py-24 md:py-32 scroll-animate">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold tracking-tight mb-4">{content.softwareEngineering.title}</h2>
                <p className="text-muted-foreground text-lg mb-8">{content.softwareEngineering.subtitle}</p>
                <ul className="space-y-6">
                  {content.softwareEngineering.points.map((point, index) => {
                    const Icon = iconMap[point.icon];
                    return (
                      <li key={index} className="flex items-start">
                        {Icon && <Icon className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />}
                        <div>
                          <h4 className="font-bold text-xl mb-1">{point.title}</h4>
                          <p className="text-muted-foreground">{point.description}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
                <Button asChild size="lg" className="mt-10 group rounded-full">
                  <Link href="#services">
                    Get to Know Us <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-96">
                <Image src={placeholderImages.softwareEngineering.src} alt={placeholderImages.softwareEngineering.alt} layout="fill" objectFit="cover" className="rounded-2xl shadow-2xl" data-ai-hint={placeholderImages.softwareEngineering.hint} />
              </div>
            </div>
          </div>
        </section>

        {/* Services & Solutions Section */}
        <section id="services" className="py-24 md:py-32 bg-secondary/30 scroll-animate">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold tracking-tight">{content.services.title}</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">{content.services.subtitle}</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {content.services.items.map((service, index) => {
                  const Icon = iconMap[service.icon];
                  return (
                  <Card key={index} className="group flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 border-border/50 hover:border-primary/50 bg-background overflow-hidden">
                    <CardHeader className="items-start p-6">
                      <div className="p-4 rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground mb-4">{Icon && <Icon className="w-10 h-10" />}</div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 p-6 pt-0">
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="p-6 pt-0 mt-auto">
                      <Button variant="ghost" asChild className="group/link text-primary text-base px-0">
                        <Link href={'#'}>Review <ArrowRight className="ml-2 transition-transform group-hover/link:translate-x-1" /></Link>
                      </Button>
                    </CardFooter>
                  </Card>
                )})}
            </div>
          </div>
        </section>
        
        {/* Our Process Section */}
        <section id="process" className="py-24 md:py-32 scroll-animate">
            <div className="container px-4 md:px-6">
                <div className="text-center space-y-4 mb-20">
                    <h2 className="text-4xl font-bold tracking-tight">{content.process.title}</h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto text-lg">{content.process.subtitle}</p>
                </div>
                <div className="relative">
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/20 -translate-y-1/2"></div>
                    <div className="grid gap-16 lg:gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {content.process.steps.map((step, index) => {
                            const Icon = iconMap[step.icon];
                            return (
                            <div key={index} className="relative flex flex-col items-center text-center">
                                <div className="absolute -top-12 flex items-center justify-center w-24 h-24 rounded-full bg-primary text-primary-foreground border-8 border-background">
                                    {Icon && <Icon className="w-10 h-10" />}
                                </div>
                                <div className="pt-20 p-6 rounded-2xl bg-secondary/50 h-full">
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </div>
                            </div>
                        )})}
                    </div>
                </div>
            </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-24 md:py-32 bg-secondary/30 scroll-animate">
            <div className="container px-4 md:px-6">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl font-bold tracking-tight">{content.techStack.title}</h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto text-lg">{content.techStack.subtitle}</p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                    {placeholderImages.techStack.map((tech) => (
                        <div key={tech.name} className="flex items-center gap-4 transition-transform duration-300 hover:scale-110" title={tech.name}>
                            <Image src={tech.src} alt={tech.name} width={120} height={40} className="grayscale hover:grayscale-0 transition-all duration-300" data-ai-hint={tech.hint}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Customer Testimonials Section */}
        <section className="py-24 md:py-32 relative scroll-animate">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16 pt-16">
              <h2 className="text-4xl font-bold tracking-tight">{content.testimonials.title}</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">{content.testimonials.subtitle}</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {placeholderImages.testimonials.map((testimonial, index) => (
                  <Card key={index} className="flex flex-col bg-secondary/50 border-border/50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <CardContent className="flex-1 pt-8">
                      <p className="text-muted-foreground italic text-lg leading-relaxed">"{testimonial.text}"</p>
                    </CardContent>
                    <CardFooter className="flex items-center gap-4 mt-6 p-6 bg-secondary/20">
                      <Avatar className="w-14 h-14 border-2 border-primary">
                        <AvatarImage src={testimonial.src} alt={testimonial.name} data-ai-hint={testimonial.hint} />
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
      <footer id="contact" className="border-t border-border/50 bg-gradient-to-r from-white via-sky-200 to-blue-500 dark:from-black dark:via-sky-900 dark:to-blue-800">
        <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold">{content.companyName}</h3>
                    <p className="text-muted-foreground mt-4 max-w-md">{content.footer.description}</p>
                    <div className="mt-6">
                        <h4 className="font-semibold text-lg">Stay Connected</h4>
                        <SubscribeForm />
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-lg">Services</h4>
                    <ul className="space-y-3 mt-4">
                        {content.services.items.map(service => (
                          <li key={service.title}><a className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">{service.title}</a></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-lg">Company</h4>
                    <ul className="space-y-3 mt-4">
                      {content.footer.companyLinks.map(link => (
                        <li key={link.name}><Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>{link.name}</Link></li>
                      ))}
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-lg">Contact Us</h4>
                    <div className="flex items-start gap-3 text-muted-foreground mt-4">
                        <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                        <span>{content.contact.email}</span>
                    </div>
                    <div className="flex items-start gap-3 text-muted-foreground mt-2">
                        <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                        <span>{content.contact.phone}</span>
                    </div>
                    <div className="flex items-start gap-3 text-muted-foreground mt-2">
                        <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                        <span>{content.contact.address}</span>
                    </div>
                </div>
            </div>
            <div className="mt-12 border-t border-border/50 pt-6 flex flex-col sm:flex-row justify-between items-center">
                <p className="text-sm text-muted-foreground">{content.footer.copyright}</p>
                <div className="flex items-center gap-4 mt-4 sm:mt-0">
                    <Link href={content.socials.twitter} className="text-muted-foreground hover:text-primary transition-colors" prefetch={false} aria-label="Twitter"><Twitter className="w-6 h-6" /></Link>
                    <Link href={content.socials.linkedin} className="text-muted-foreground hover:text-primary transition-colors" prefetch={false} aria-label="LinkedIn"><Linkedin className="w-6 h-6" /></Link>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
}
