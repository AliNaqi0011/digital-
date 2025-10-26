
'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone, Facebook, Linkedin } from 'lucide-react';


interface FooterProps {
  companyName: string;
  description: string;
  copyright: string;
  companyLinks: { name: string; href: string }[];
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  socials: {
    twitter: string;
    linkedin: string;
  };
}

export function Footer({ companyName, description, copyright, companyLinks, contact, socials }: FooterProps) {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black border-t border-primary/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-4">{companyName}</h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md mb-6">{description}</p>
            <div className="flex gap-4">
              <Link href={socials.twitter} className="w-10 h-10 bg-primary/20 hover:bg-primary/30 rounded-full flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-primary" />
              </Link>
              <Link href={socials.linkedin} className="w-10 h-10 bg-primary/20 hover:bg-primary/30 rounded-full flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-primary" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-xl text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-300 hover:text-primary transition-colors text-lg" prefetch={false}>Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-primary transition-colors text-lg" prefetch={false}>About</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-primary transition-colors text-lg" prefetch={false}>Services</Link></li>
              <li><Link href="/career" className="text-gray-300 hover:text-primary transition-colors text-lg" prefetch={false}>Career</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-primary transition-colors text-lg" prefetch={false}>Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-xl text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                <a href={`mailto:${contact.email}`} className="text-gray-300 hover:text-primary transition-colors">{contact.email}</a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                <a href={`tel:${contact.phone}`} className="text-gray-300 hover:text-primary transition-colors">{contact.phone}</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                <span className="text-gray-300">{contact.address}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary/20 text-center">
          <p className="text-gray-400 text-lg">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
