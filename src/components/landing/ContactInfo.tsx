'use client';

import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    details: ['Alhama Town 76', 'Lahore, Pakistan']
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+92 311 4648875', 'Mon-Fri 9AM-6PM']
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['creativexperts10@gmail.com', 'creativexperts10@gmail.com']
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 4PM']
  }
];

export function ContactInfo() {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to start your project? Contact us today and let's discuss how we can help transform your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}