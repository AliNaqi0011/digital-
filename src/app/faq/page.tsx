
import type { Metadata } from 'next';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import content from '@/lib/content.json';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: `FAQ | ${content.companyName}`,
  description: content.faqPage.description,
  openGraph: {
    title: `FAQ | ${content.companyName}`,
    description: content.faqPage.description,
  },
  twitter: {
    title: `FAQ | ${content.companyName}`,
    description: content.faqPage.description,
  },
}

export default function FAQPage() {
  const { faqPage } = content;

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
        <section className="py-20 md:py-32 bg-secondary/30">
            <div className="container px-4 md:px-6 text-center animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-primary">{faqPage.title}</h1>
                <p className="max-w-2xl mx-auto mt-4 text-lg md:text-xl text-muted-foreground">{faqPage.description}</p>
            </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 md:py-32">
            <div className="container max-w-4xl mx-auto px-4 md:px-6">
                <Accordion type="single" collapsible className="w-full">
                    {faqPage.questions.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground pt-2">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
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
