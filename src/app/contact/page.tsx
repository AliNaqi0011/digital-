'use client';

import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Sparkles, Zap, Target, Award, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { useToast } from '@/hooks/use-toast';
import content from '@/lib/content.json';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { toast } = useToast();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        toast({
          title: '🎉 Message Sent Successfully!',
          description: 'We\'ll get back to you within 24 hours with a personalized solution.',
        });
        setFormData({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: '❌ Oops! Something went wrong',
        description: 'Please try again or call us directly for immediate assistance.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-primary/5 via-transparent to-primary/5 rounded-full blur-3xl animate-spin" style={{animationDuration: '30s'}}></div>
        </div>

        {/* Floating Elements */}
        <div className="fixed inset-0 z-10 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            >
              <div className="w-2 h-2 bg-primary rounded-full blur-sm"></div>
            </div>
          ))}
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
                    <span className="text-primary font-semibold">✨ Award-Winning Digital Agency</span>
                  </div>
                  
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none">
                    <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent block">
                      Let's Create
                    </span>
                    <span className="bg-gradient-to-r from-primary via-orange-400 to-amber-400 bg-clip-text text-transparent block">
                      Digital Magic
                    </span>
                    <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent block">
                      Together
                    </span>
                  </h1>
                  
                  <p className="text-2xl text-gray-300 leading-relaxed max-w-2xl">
                    Transform your business with our <span className="text-primary font-bold">5+ years of expertise</span> in 
                    <span className="text-orange-400 font-semibold"> e-commerce mastery</span>, 
                    <span className="text-amber-400 font-semibold"> AI innovation</span>, and 
                    <span className="text-primary font-semibold"> digital excellence</span>.
                  </p>
                </div>

                {/* Achievement Cards */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Target, number: "500+", label: "Success Stories", desc: "Amazon • eBay • Shopify" },
                    { icon: Award, number: "99%", label: "Client Happiness", desc: "5-Star Reviews" },
                    { icon: Zap, number: "24/7", label: "Expert Support", desc: "Always Available" },
                    { icon: Sparkles, number: "A-Z", label: "Complete Solutions", desc: "End-to-End Service" }
                  ].map((item, i) => (
                    <Card key={i} className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-2xl border border-white/10 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                      <CardContent className="p-6 text-center">
                        <item.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <div className="text-3xl font-black text-white mb-2">{item.number}</div>
                        <div className="text-white font-bold mb-1">{item.label}</div>
                        <div className="text-gray-400 text-sm">{item.desc}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button size="lg" className="group bg-gradient-to-r from-primary via-orange-500 to-amber-500 hover:from-primary/90 hover:via-orange-500/90 hover:to-amber-500/90 text-white font-bold px-8 py-6 rounded-2xl text-lg shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105">
                    🚀 Start Your Project
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline" className="group border-2 border-primary/50 text-white hover:bg-primary/10 font-bold px-8 py-6 rounded-2xl text-lg backdrop-blur-xl transition-all duration-300 hover:scale-105">
                    💬 Free Consultation
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
                          <Mail className="w-12 h-12 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-ping"></div>
                      </div>
                      
                      <h3 className="text-4xl font-black text-white mb-6">Ready to Dominate?</h3>
                      <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        Join <span className="text-primary font-bold">500+ successful businesses</span> who chose us for their digital transformation journey.
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
                        <span className="text-green-400 font-semibold">Online Now • Instant Response</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="relative z-20 py-24">
          <div className="container mx-auto px-4 md:px-16">
            <div className="grid lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
              
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-black text-white mb-6">Let's Talk Business</h2>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Ready to 10x your revenue? Our experts are standing by to craft your success story.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    { icon: Mail, title: "Email Response", desc: "< 2 Hours", contact: content.contact.email, href: `mailto:${content.contact.email}` },
                    { icon: Phone, title: "Direct Hotline", desc: "24/7 Available", contact: content.contact.phone, href: `tel:${content.contact.phone}` },
                    { icon: MapPin, title: "HQ Location", desc: "Visit Anytime", contact: content.contact.address, href: "#" }
                  ].map((item, i) => (
                    <Card key={i} className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-primary to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <item.icon className="w-7 h-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                            <p className="text-gray-400 text-sm mb-2">{item.desc}</p>
                            <a href={item.href} className="text-primary hover:text-orange-400 transition-colors font-semibold">
                              {item.contact}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2 space-y-8">
                <Card className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border-2 border-white/20 hover:border-primary/50 rounded-3xl overflow-hidden transform-gpu transition-all duration-700 hover:rotateY-3 hover:scale-[1.02]" style={{transformStyle: 'preserve-3d'}}>
                  <CardContent className="p-10">
                    <div className="text-center mb-10">
                      <h2 className="text-4xl font-black text-white mb-4">🚀 Launch Your Success</h2>
                      <p className="text-xl text-gray-300">Fill out the form and get a personalized strategy within 24 hours</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          { id: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe', required: true },
                          { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@company.com', required: true }
                        ].map((field) => (
                          <div key={field.id} className="space-y-3">
                            <Label htmlFor={field.id} className="text-white font-semibold text-lg">{field.label} {field.required && '*'}</Label>
                            <Input
                              id={field.id}
                              name={field.id}
                              type={field.type}
                              value={formData[field.id as keyof typeof formData]}
                              onChange={handleChange}
                              required={field.required}
                              placeholder={field.placeholder}
                              className="bg-black/50 border-2 border-white/20 focus:border-primary text-white placeholder:text-gray-500 h-14 text-lg rounded-xl backdrop-blur-xl"
                            />
                          </div>
                        ))}
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <Label htmlFor="phone" className="text-white font-semibold text-lg">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 123-4567"
                            className="bg-black/50 border-2 border-white/20 focus:border-primary text-white placeholder:text-gray-500 h-14 text-lg rounded-xl backdrop-blur-xl"
                          />
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="company" className="text-white font-semibold text-lg">Company</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your Company"
                            className="bg-black/50 border-2 border-white/20 focus:border-primary text-white placeholder:text-gray-500 h-14 text-lg rounded-xl backdrop-blur-xl"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <Label className="text-white font-semibold text-lg">Service Needed</Label>
                          <Select onValueChange={(value) => handleSelectChange('service', value)}>
                            <SelectTrigger className="bg-black/50 border-2 border-white/20 focus:border-primary text-white h-14 text-lg rounded-xl backdrop-blur-xl">
                              <SelectValue placeholder="Choose your service" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-900 border-primary/30 backdrop-blur-xl">
                              <SelectItem value="amazon-domination">🏆 Amazon Domination</SelectItem>
                              <SelectItem value="ebay-mastery">💎 eBay Mastery</SelectItem>
                              <SelectItem value="shopify-empire">🛍️ Shopify Empire</SelectItem>
                              <SelectItem value="ai-revolution">🤖 AI Revolution</SelectItem>
                              <SelectItem value="digital-transformation">⚡ Digital Transformation</SelectItem>
                              <SelectItem value="everything">🚀 Everything (Full Package)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-3">
                          <Label className="text-white font-semibold text-lg">Investment Range</Label>
                          <Select onValueChange={(value) => handleSelectChange('budget', value)}>
                            <SelectTrigger className="bg-black/50 border-2 border-white/20 focus:border-primary text-white h-14 text-lg rounded-xl backdrop-blur-xl">
                              <SelectValue placeholder="Select your budget" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-900 border-primary/30 backdrop-blur-xl">
                              <SelectItem value="starter">💰 $5K - $15K (Starter)</SelectItem>
                              <SelectItem value="growth">💎 $15K - $50K (Growth)</SelectItem>
                              <SelectItem value="enterprise">🏆 $50K+ (Enterprise)</SelectItem>
                              <SelectItem value="discuss">💬 Let's Discuss</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="message" className="text-white font-semibold text-lg">Your Vision *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          placeholder="Tell us about your goals, challenges, and how we can help you dominate your market..."
                          className="bg-black/50 border-2 border-white/20 focus:border-primary text-white placeholder:text-gray-500 text-lg rounded-xl backdrop-blur-xl resize-none"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-gradient-to-r from-primary via-orange-500 to-amber-500 hover:from-primary/90 hover:via-orange-500/90 hover:to-amber-500/90 text-white font-black py-6 text-xl rounded-2xl shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>⏳ Sending Your Message...</>
                        ) : (
                          <>🚀 Launch My Success Story</>
                        )}
                        <Send className="ml-3 w-6 h-6" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>


              </div>
            </div>
          </div>
        </section>

        {/* Full Width Premium CTA */}
        <section className="relative z-20 py-16">
          <div className="container mx-auto px-4 md:px-16">
            <Card className="bg-gradient-to-r from-primary via-orange-500 to-amber-500 border-0 shadow-2xl shadow-primary/30 rounded-3xl overflow-hidden">
              <CardContent className="p-12 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-xl">
                    <Phone className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-4xl font-black text-white mb-6">🎯 Get Your FREE Strategy Session</h3>
                  <p className="text-2xl text-white/90 mb-10 leading-relaxed">
                    Skip the wait! Get instant access to our experts and receive a personalized roadmap to success.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                    <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-black px-10 py-6 rounded-2xl text-xl shadow-xl">
                      <a href={`tel:${content.contact.phone}`}>
                        📞 Call Now: {content.contact.phone}
                      </a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="bg-transparent text-white hover:bg-white/10 border-2 border-white font-black px-10 py-6 rounded-2xl text-xl backdrop-blur-xl">
                      <a href={`mailto:${content.contact.email}`}>
                        ✉️ Email Direct
                      </a>
                    </Button>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-white/90">
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                    <span className="font-bold text-lg">🔥 Available 24/7 • Instant Response Guaranteed</span>
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