
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Briefcase, Mail, Menu, Moon, Phone, Sun, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
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

function QuoteForm({ setOpen, title, description }: { setOpen: (open: boolean) => void; title: string; description: string; }) {
  const { toast } = useToast();
  const { firestore } = useFirebase();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof quoteFormSchema>>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: { name: "", email: "" },
  });

  const onSubmit = (data: z.infer<typeof quoteFormSchema>) => {
    if (!firestore) return;
    try {
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
    } catch (error) {
      console.error("Quote request failed: ", error);
      toast({
        variant: "destructive",
        title: 'Uh oh! Something went wrong.',
        description: 'Could not request quote. Please try again later.',
      });
    }
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

interface HeaderProps {
  companyName: string;
  navigation: { name: string; href: string }[];
  contact: {
    email: string;
    phone: string;
  };
  socials: {
    twitter: string;
    linkedin: string;
  };
  quoteDialog: {
    title: string;
    description: string;
  }
}

export function Header({ companyName, navigation, contact, socials, quoteDialog }: HeaderProps) {
  const [openQuoteDialog, setOpenQuoteDialog] = useState(false);

  return (
    <>
      <div className="text-secondary-foreground py-2 px-4 md:px-8 text-sm bg-gradient-to-r from-white via-sky-200 to-blue-500 dark:from-black dark:via-sky-900 dark:to-blue-800">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <a href={`mailto:${contact.email}`} className="flex items-center gap-1.5 hover:text-primary transition-colors"><Mail className="w-4 h-4" /> {contact.email}</a>
            <a href={`tel:${contact.phone}`} className="hidden md:flex items-center gap-1.5 hover:text-primary transition-colors"><Phone className="w-4 h-4" /> {contact.phone}</a>
          </div>
          <div className="flex gap-4 items-center">
            <Link href={socials.twitter} className="hover:text-primary transition-colors" aria-label="Twitter"><Twitter className="w-4 h-4" /></Link>
            <Link href={socials.linkedin} className="hover:text-primary transition-colors" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></Link>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-50 flex items-center justify-between h-20 px-4 md:px-8 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-2xl shadow-primary/10">
        <Link href="/" className="flex items-center gap-3" prefetch={false}>
          <Briefcase className="w-8 h-8 text-primary animate-pulse" />
          <h1 className="text-xl font-bold tracking-wider">{companyName}</h1>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-lg font-semibold" role="navigation" aria-label="Main navigation">
          {navigation.map(item => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-2 py-1" 
              prefetch={false}
              aria-label={`Navigate to ${item.name}`}
            >
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
                <DialogTitle className="text-2xl text-primary">{quoteDialog.title}</DialogTitle>
                <DialogDescription>
                  {quoteDialog.description}
                </DialogDescription>
              </DialogHeader>
              <QuoteForm setOpen={setOpenQuoteDialog} title={quoteDialog.title} description={quoteDialog.description} />
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
              <nav className="flex flex-col gap-6 mt-8 text-lg" role="navigation" aria-label="Mobile navigation">
                {navigation.map(item => (
                  <Link 
                    key={item.name} 
                    href={item.href} 
                    className="text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-2 py-1" 
                    prefetch={false}
                    aria-label={`Navigate to ${item.name}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
