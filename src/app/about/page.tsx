
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import content from '@/lib/content.json';
import placeholderImages from '@/lib/placeholder-images.json';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Code, BrainCircuit, Database } from 'lucide-react';
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

const iconMap: { [key: string]: React.ElementType } = {
  Development: Code,
  'Artificial Intelligence': BrainCircuit,
  'Data Science': Database
};

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
        <section className="relative h-[60vh] flex items-center justify-center text-center bg-gradient-to-br from-primary/10 via-secondary/20 to-background overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="container relative z-10 px-4 md:px-6 animate-fade-in-up">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    Trusted by 100+ Businesses Worldwide
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-primary mb-6">
                    Crafting Digital
                    <span className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                        Excellence
                    </span>
                </h1>
                <p className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed px-4">
                    We transform ambitious ideas into powerful digital solutions that drive growth, 
                    innovation, and lasting success in the modern business landscape.
                </p>
            </div>
        </section>

        {/* Company Details Section */}
        <section className="py-24 md:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-8">Who We Are</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            {aboutPage.companyDetails}
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary">5+</div>
                                <div className="text-sm text-muted-foreground">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary">100+</div>
                                <div className="text-sm text-muted-foreground">Projects Delivered</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary">50+</div>
                                <div className="text-sm text-muted-foreground">Happy Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary">24/7</div>
                                <div className="text-sm text-muted-foreground">Support Available</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8">
                            <Image 
                                src="https://picsum.photos/seed/office-team/600/600"
                                alt="Creative Experts Solution team workspace"
                                width={600}
                                height={600}
                                className="rounded-xl object-cover w-full h-full"
                                data-ai-hint="modern office workspace with developers"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Technology Stack Section */}
        <section className="py-24 md:py-32 bg-secondary/30">
            <div className="container px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Technology Arsenal</h2>
                    <p className="text-xl text-muted-foreground">Cutting-edge tools and frameworks that power exceptional digital experiences</p>
                </div>
                
                {/* Frontend Technologies */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center mb-8 text-primary">Frontend Excellence</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[
                            { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                            { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
                            { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
                            { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
                            { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
                            { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' }
                        ].map((tech) => (
                            <Card key={tech.name} className="p-6 text-center hover:scale-105 transition-transform duration-300 bg-background/80 backdrop-blur-sm">
                                <Image src={tech.logo} alt={tech.name} width={48} height={48} className="mx-auto mb-3" />
                                <p className="font-medium text-sm">{tech.name}</p>
                            </Card>
                        ))}
                    </div>
                </div>
                
                {/* Backend Technologies */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center mb-8 text-primary">Backend Power</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[
                            { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                            { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                            { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
                            { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
                            { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
                            { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' }
                        ].map((tech) => (
                            <Card key={tech.name} className="p-6 text-center hover:scale-105 transition-transform duration-300 bg-background/80 backdrop-blur-sm">
                                <Image src={tech.logo} alt={tech.name} width={48} height={48} className="mx-auto mb-3" />
                                <p className="font-medium text-sm">{tech.name}</p>
                            </Card>
                        ))}
                    </div>
                </div>
                
                {/* AI & Cloud Technologies */}
                <div>
                    <h3 className="text-2xl font-bold text-center mb-8 text-primary">AI & Cloud Infrastructure</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[
                            { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
                            { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
                            { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
                            { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
                            { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
                            { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' }
                        ].map((tech) => (
                            <Card key={tech.name} className="p-6 text-center hover:scale-105 transition-transform duration-300 bg-background/80 backdrop-blur-sm">
                                <Image src={tech.logo} alt={tech.name} width={48} height={48} className="mx-auto mb-3" />
                                <p className="font-medium text-sm">{tech.name}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Meet the Team Section */}
        <section className="py-24 md:py-32">
            <div className="container px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{aboutPage.team.title}</h2>
                    <p className="text-xl text-muted-foreground">{aboutPage.team.subtitle}</p>
                </div>
                <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                    {aboutPage.team.members.map((member) => {
                        const image = teamImages[member.image as keyof typeof teamImages];
                        return (
                        <Card key={member.name} className="overflow-hidden border-2 border-transparent hover:border-primary transition-all duration-500 group bg-gradient-to-br from-background to-secondary/20">
                            <CardContent className="p-0">
                                <div className="relative h-80 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                                    <Image 
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        style={{ objectFit: 'cover', objectPosition: member.name === 'Ali Naqi' ? 'center 20%' : 'center center' }}
                                        className="group-hover:scale-110 transition-transform duration-500"
                                        data-ai-hint={image.hint}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                                    <p className="text-primary font-semibold text-lg mb-4">{member.role}</p>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">{member.bio}</p>

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
