
'use client';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';


interface HeroProps {
    heroContent: {
        title: string;
        subtitle: string;
        buttons?: { text: string; href: string; variant: string }[];
    }
}

export function Hero({ heroContent }: HeroProps) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-orange-500/10 via-amber-500/10 to-orange-500/10 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
            </div>
            
            <div className="container mx-auto px-4 md:px-16 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
                    {/* Text Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full border border-orange-500/30 backdrop-blur-sm">
                                <span className="text-sm font-medium text-orange-300">🚀 5+ Years of Excellence</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                <span className="bg-gradient-to-r from-white via-orange-200 to-amber-200 bg-clip-text text-transparent">
                                    Transform Your
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                                    Digital Dreams
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-white via-orange-200 to-amber-200 bg-clip-text text-transparent">
                                    Into Reality
                                </span>
                            </h1>
                        </div>
                        
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                            From <span className="text-orange-400 font-semibold">Amazon FBA mastery</span> to <span className="text-amber-400 font-semibold">AI-powered solutions</span>, we deliver end-to-end digital excellence that scales your business to new heights.
                        </p>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 py-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-1">500+</div>
                                <div className="text-sm text-gray-400">Projects Delivered</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-1">99%</div>
                                <div className="text-sm text-gray-400">Client Satisfaction</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                                <div className="text-sm text-gray-400">Expert Support</div>
                            </div>
                        </div>
                        
                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button 
                                asChild 
                                size="lg" 
                                className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white border-0 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
                            >
                                <Link href="/services">
                                    🚀 Explore Our Services <ArrowRight className="ml-2" />
                                </Link>
                            </Button>
                            <Button 
                                asChild 
                                size="lg" 
                                variant="outline"
                                className="border-2 border-orange-500/50 text-white hover:bg-orange-500/10 rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                            >
                                <Link href="/contact">
                                    💬 Get Free Consultation
                                </Link>
                            </Button>
                        </div>
                    </div>
                    
                    {/* 3D Image Section */}
                    <div className="relative">
                        <div className="relative group">
                            {/* 3D Container */}
                            <div className="relative transform-gpu perspective-1000">
                                {/* Main Image with 3D Effects */}
                                <div className="relative h-[500px] lg:h-[600px] transform transition-all duration-700 group-hover:rotateY-12 group-hover:rotateX-6 group-hover:scale-105" style={{transformStyle: 'preserve-3d'}}>
                                    {/* Shadow/Depth Layer */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-600/30 to-amber-600/30 rounded-3xl blur-xl transform translate-x-8 translate-y-8 -z-10"></div>
                                    
                                    {/* Main Image */}
                                    <div className="relative h-full rounded-3xl overflow-hidden border-2 border-orange-500/30 shadow-2xl">
                                        <Image 
                                            src="/images/hero.jpeg" 
                                            alt="Digital Excellence" 
                                            fill 
                                            priority
                                            style={{objectFit: 'cover'}} 
                                            className="transition-all duration-700 group-hover:scale-110" 
                                        />
                                        
                                        {/* Overlay Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-transparent to-amber-900/40"></div>
                                        
                                        {/* Floating Elements */}
                                        <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 transform transition-all duration-500 group-hover:translate-y-2 group-hover:rotate-3">
                                            <div className="text-2xl mb-2">🎯</div>
                                            <div className="text-white font-semibold text-sm">AI Powered</div>
                                        </div>
                                        
                                        <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 transform transition-all duration-500 delay-100 group-hover:translate-y-2 group-hover:-rotate-3">
                                            <div className="text-2xl mb-2">⚡</div>
                                            <div className="text-white font-semibold text-sm">Lightning Fast</div>
                                        </div>
                                        
                                        <div className="absolute top-1/2 -right-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-4 border border-white/20 transform -translate-y-1/2 transition-all duration-500 delay-200 group-hover:translate-x-2 group-hover:scale-110">
                                            <div className="text-white font-bold text-lg">5+</div>
                                            <div className="text-white text-xs">Years</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Floating Particles */}
                            <div className="absolute -top-10 -left-10 w-20 h-20 bg-orange-500/20 rounded-full blur-xl animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
                            <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-amber-500/20 rounded-full blur-xl animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
                            <div className="absolute top-1/4 -left-6 w-12 h-12 bg-yellow-500/20 rounded-full blur-xl animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
