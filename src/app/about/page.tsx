
'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import content from '@/lib/content.json';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, Award, Zap, Users, TrendingUp, Shield, Clock, Star, ArrowRight, Sparkles } from 'lucide-react';

export default function AboutPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <Header 
        companyName={content.companyName}
        navigation={content.navigation}
        contact={content.contact}
        socials={content.socials}
        quoteDialog={content.quoteDialog}
      />
      
      <main className="min-h-screen bg-black relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div 
            className="absolute w-96 h-96 bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl transition-all duration-300"
            style={{
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
            }}
          ></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-primary/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Hero Section */}
        <section className="relative z-20 min-h-screen flex items-center py-24">
          <div className="container mx-auto px-4 md:px-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Content */}
              <div className="space-y-12">
                <div className="space-y-8">
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/20 to-orange-500/20 rounded-full border border-primary/30 backdrop-blur-xl">
                    <Sparkles className="w-5 h-5 text-primary mr-2" />
                    <span className="text-primary font-semibold">🏆 5+ Years of Digital Excellence</span>
                  </div>
                  
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none">
                    <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent block">
                      About
                    </span>
                    <span className="bg-gradient-to-r from-primary via-orange-400 to-amber-400 bg-clip-text text-transparent block">
                      YOUR DIGITAL
                    </span>
                    <span className="bg-gradient-to-r from-primary via-orange-400 to-amber-400 bg-clip-text text-transparent block">
                      CHOICE
                    </span>
                  </h1>
                  
                  <p className="text-2xl text-gray-300 leading-relaxed max-w-2xl">
                    We are the <span className="text-primary font-bold">premier digital transformation agency</span> specializing in 
                    <span className="text-orange-400 font-semibold"> e-commerce mastery</span>, 
                    <span className="text-amber-400 font-semibold"> AI innovation</span>, and 
                    <span className="text-primary font-semibold"> complete A-Z solutions</span>.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button size="lg" className="group bg-gradient-to-r from-primary via-orange-500 to-amber-500 hover:from-primary/90 hover:via-orange-500/90 hover:to-amber-500/90 text-white font-bold px-8 py-6 rounded-2xl text-lg shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105">
                    🚀 Start Your Journey
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline" className="group border-2 border-primary/50 text-white hover:bg-primary/10 font-bold px-8 py-6 rounded-2xl text-lg backdrop-blur-xl transition-all duration-300 hover:scale-105">
                    📞 Schedule Call
                  </Button>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative">
                <div className="relative group perspective-1000">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-orange-500/30 rounded-3xl blur-2xl transform rotate-6 scale-110 opacity-50 group-hover:opacity-75 transition-all duration-700"></div>
                  
                  <Card className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border-2 border-white/20 rounded-3xl overflow-hidden transform-gpu transition-all duration-700 group-hover:rotateY-12 group-hover:rotateX-6 group-hover:scale-105" style={{transformStyle: 'preserve-3d'}}>
                    <CardContent className="p-12 text-center h-[600px] flex flex-col justify-center">
                      <div className="relative mb-8">
                        <div className="w-24 h-24 bg-gradient-to-br from-primary to-orange-500 rounded-3xl mx-auto flex items-center justify-center mb-6 animate-pulse shadow-2xl shadow-primary/50">
                          <Target className="w-12 h-12 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-ping"></div>
                      </div>
                      
                      <h3 className="text-4xl font-black text-white mb-6">Digital Excellence</h3>
                      <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        Transforming <span className="text-primary font-bold">500+ businesses</span> with cutting-edge solutions and unmatched expertise.
                      </p>
                      
                      <div className="flex items-center justify-center gap-3 text-primary font-bold text-lg">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                          ))}
                        </div>
                        <span>5.0 Rating</span>
                      </div>
                      
                      <div className="mt-6 flex items-center justify-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        <span className="text-green-400 font-semibold">Trusted Worldwide</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="relative z-20 py-24">
          <div className="container mx-auto px-4 md:px-16">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-white mb-6">Our Success Story</h2>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Founded with a vision to revolutionize digital commerce, <span className="text-primary font-bold">YOUR DIGITAL CHOICE</span> has emerged as the go-to partner for businesses seeking explosive growth in the digital landscape.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
              {[
                { number: "500+", label: "Success Stories", icon: Award },
                { number: "99%", label: "Client Satisfaction", icon: Star },
                { number: "5+", label: "Years Excellence", icon: TrendingUp },
                { number: "24/7", label: "Expert Support", icon: Clock }
              ].map((stat, i) => (
                <Card key={i} className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-black text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl text-gray-300 leading-relaxed">
                From humble beginnings to serving <span className="text-orange-400 font-bold">500+ successful clients</span> across Amazon, eBay, Shopify, and beyond, we've mastered the art of turning digital dreams into profitable realities.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="relative z-20 py-24">
          <div className="container mx-auto px-4 md:px-16">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-white mb-6">Why We're Different</h2>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
                We don't just provide services – we deliver <span className="text-primary font-bold">complete digital transformation</span> that revolutionizes your business.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Zap,
                  title: "Lightning Fast Results",
                  description: "Our streamlined processes and expert team deliver rapid implementation and quick ROI for your business."
                },
                {
                  icon: Shield,
                  title: "Complete A-Z Solutions",
                  description: "From Amazon to AI, we handle everything so you can focus on growing your business while we handle the tech."
                },
                {
                  icon: Users,
                  title: "Dedicated Expert Team",
                  description: "Work directly with seasoned professionals who understand your industry and are committed to your success."
                }
              ].map((feature, i) => (
                <Card key={i} className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-20 py-24">
          <div className="container mx-auto px-4 md:px-16">
            <Card className="bg-gradient-to-r from-primary via-orange-500 to-amber-500 border-0 shadow-2xl shadow-primary/30 rounded-3xl overflow-hidden max-w-6xl mx-auto">
              <CardContent className="p-16 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 fill-current text-yellow-300 mx-1" />
                    ))}
                  </div>
                  <h3 className="text-5xl font-black text-white mb-8">Ready to Transform Your Business?</h3>
                  <p className="text-2xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto">
                    Join the ranks of successful businesses who chose us as their digital transformation partner. Let's create your success story together.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-black px-12 py-6 rounded-2xl text-xl shadow-xl">
                      <a href="/contact">
                        🚀 Start Your Transformation
                      </a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="bg-transparent text-white hover:bg-white/10 border-2 border-white font-black px-12 py-6 rounded-2xl text-xl backdrop-blur-xl">
                      <a href={`tel:${content.contact.phone}`}>
                        📞 Call Now
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <div className="relative z-30">
        <Footer 
          companyName={content.companyName}
          description={content.footer.description}
          copyright={content.footer.copyright}
          companyLinks={content.footer.companyLinks}
          contact={content.contact}
          socials={content.socials}
        />
      </div>
    </>
  );
}
