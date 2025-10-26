'use client';
import { Clock, Heart, Zap, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const iconMap: { [key: string]: React.ElementType } = {
  Clock, Heart, Zap, Shield
};

interface WhyChooseUsProps {
  whyChooseUsContent: {
    title: string;
    subtitle: string;
    items: { icon: string; title: string; description: string }[];
  }
}

export function WhyChooseUs({ whyChooseUsContent }: WhyChooseUsProps) {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-gray-900/50 via-black to-gray-900/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container px-4 md:px-16 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">{whyChooseUsContent.title}</h2>
          <p className="text-muted-foreground max-w-4xl mx-auto text-xl leading-relaxed">{whyChooseUsContent.subtitle}</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {whyChooseUsContent.items.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <Card key={index} className="group bg-gradient-to-br from-card/60 to-card/20 backdrop-blur-xl border border-primary/20 hover:border-primary/40 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-3">
                <CardHeader className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover:from-primary/40 group-hover:to-primary/20 transition-all duration-300">
                    {Icon && <Icon className="w-8 h-8 text-primary" />}
                  </div>
                  <CardTitle className="text-xl font-bold text-white mb-4">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <CardDescription className="text-muted-foreground leading-relaxed text-center">{item.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
        
        {/* Reviews/Testimonials Section */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-card/40 to-card/20 backdrop-blur-xl rounded-3xl p-12 border border-primary/20 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-6 text-yellow-400 fill-current">
                    ⭐
                  </div>
                ))}
              </div>
            </div>
            <blockquote className="text-2xl font-medium text-white mb-6 italic">
              "YOUR DIGITAL CHOICE transformed our business with their exceptional e-commerce solutions. Their expertise in Amazon FBA and digital marketing delivered results beyond our expectations."
            </blockquote>
            <cite className="text-primary font-semibold">- Sarah Johnson, CEO of TechVision Inc.</cite>
          </div>
        </div>
      </div>
    </section>
  );
}