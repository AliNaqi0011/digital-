import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { Statistics } from '@/components/landing/Statistics';
import { ClientLogos } from '@/components/landing/ClientLogos';
import { WhyChooseUs } from '@/components/landing/WhyChooseUs';
import { SoftwareEngineering } from '@/components/landing/SoftwareEngineering';
import { Services } from '@/components/landing/Services';
import { Process } from '@/components/landing/Process';
import { TechStack } from '@/components/landing/TechStack';
import { Testimonials } from '@/components/landing/Testimonials';
import { ContactInfo } from '@/components/landing/ContactInfo';
import { CallToAction } from '@/components/landing/CallToAction';
import { Newsletter } from '@/components/landing/Newsletter';
import { Footer } from '@/components/landing/Footer';
import { ScrollToTop } from '@/components/ui/scroll-to-top';
import placeholderImages from '@/lib/placeholder-images.json';
import content from '@/lib/content.json';

export default function Home() {
  const techStackContent = {
    ...content.techStack,
    categories: content.techStack.categories.map(category => ({
      ...category,
      technologies: placeholderImages.techStack[category.id as keyof typeof placeholderImages.techStack]
    }))
  };

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
        <Hero heroContent={content.hero} />
        <Statistics />
        <Services servicesContent={content.services} />
        <ClientLogos />
        <WhyChooseUs whyChooseUsContent={content.whyChooseUs} />
        <SoftwareEngineering 
          softwareEngineeringContent={content.softwareEngineering}
          image={placeholderImages.softwareEngineering} 
        />
        <Process processContent={content.process} />
        <TechStack techStackContent={techStackContent} />
        <Testimonials 
          testimonialsContent={content.testimonials}
          images={placeholderImages.testimonials}
        />
        <ContactInfo />
        <CallToAction />
        <Newsletter />
      </main>
      <Footer 
        companyName={content.companyName}
        footerContent={content.footer}
        services={content.services.items}
        contact={content.contact}
        socials={content.socials}
      />
      <ScrollToTop />
    </div>
  );
}