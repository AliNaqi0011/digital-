
'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone, Twitter, Linkedin } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import { addDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import { useFirebase } from '@/firebase';
import { collection } from 'firebase/firestore';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const subscribeFormSchema = z.object({
  email: z.string().email('Please enter a valid email address.'),
});

function SubscribeForm() {
  const { toast } = useToast();
  const { firestore } = useFirebase();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof subscribeFormSchema>>({
    resolver: zodResolver(subscribeFormSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = (data: z.infer<typeof subscribeFormSchema>) => {
    if (!firestore) return;
    try {
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
    } catch (error) {
      console.error("Subscription failed: ", error);
      toast({
        variant: "destructive",
        title: 'Uh oh! Something went wrong.',
        description: 'Could not subscribe. Please try again later.',
      });
    }
  };

  return (
    <form className="flex mt-2" onSubmit={handleSubmit(onSubmit)}>
      <Input type="email" placeholder="Enter your email" {...register('email')} className="rounded-r-none" aria-label="Email for subscription" />
      <Button type="submit" className="rounded-l-none">Subscribe</Button>
      {errors.email && <p className="text-sm text-destructive absolute mt-12">{errors.email.message}</p>}
    </form>
  );
}

interface FooterProps {
  companyName: string;
  footerContent: {
    description: string;
    copyright: string;
    companyLinks: { name: string; href: string }[];
  };
  services: { title: string }[];
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

export function Footer({ companyName, footerContent, services, contact, socials }: FooterProps) {
  return (
    <footer id="contact" className="border-t border-border/50 bg-gradient-to-r from-white via-sky-200 to-blue-500 dark:from-black dark:via-sky-900 dark:to-blue-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold">{companyName}</h3>
            <p className="text-muted-foreground mt-4 max-w-md">{footerContent.description}</p>
            <div className="mt-6">
              <h4 className="font-semibold text-lg">Stay Connected</h4>
              <SubscribeForm />
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Services</h4>
            <ul className="space-y-3 mt-4">
              {services.map(service => (
                <li key={service.title}><a className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">{service.title}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Company</h4>
            <ul className="space-y-3 mt-4">
              {footerContent.companyLinks.map(link => (
                <li key={link.name}><Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>{link.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <div className="flex items-start gap-3 text-muted-foreground mt-4">
              <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
              <span>{contact.email}</span>
            </div>
            <div className="flex items-start gap-3 text-muted-foreground mt-2">
              <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
              <span>{contact.phone}</span>
            </div>
            <div className="flex items-start gap-3 text-muted-foreground mt-2">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <span>{contact.address}</span>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border/50 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">{footerContent.copyright}</p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <Link href={socials.twitter} className="text-muted-foreground hover:text-primary transition-colors" prefetch={false} aria-label="Twitter"><Twitter className="w-6 h-6" /></Link>
            <Link href={socials.linkedin} className="text-muted-foreground hover:text-primary transition-colors" prefetch={false} aria-label="LinkedIn"><Linkedin className="w-6 h-6" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
