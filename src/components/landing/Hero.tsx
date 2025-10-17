
'use client';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';
import { ParticleBackground } from '@/components/ui/particle-background';

interface HeroProps {
    heroContent: {
        title: string;
        subtitle: string;
    }
}

export function Hero({ heroContent }: HeroProps) {
    return (
        <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
            <ParticleBackground />
            <div className="container relative z-10 px-4 md:px-6 animate-fade-in-up">
                <TypewriterEffect text={heroContent.title} className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-sky-400" />
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">{heroContent.subtitle}</p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <Button asChild size="lg" className="group rounded-full text-lg px-8 py-6 transition-all duration-300 ease-in-out hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/50 hover:scale-105">
                        <Link href="#services">
                            Explore Services <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="rounded-full text-lg px-8 py-6 transition-all duration-300 ease-in-out hover:bg-accent hover:text-accent-foreground hover:scale-105 hover:shadow-lg">
                        <Link href="#contact">
                            Contact Us
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
