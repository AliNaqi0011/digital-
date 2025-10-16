
import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { WhyChooseUs } from '@/components/landing/WhyChooseUs';
import { SoftwareEngineering } from '@/components/landing/SoftwareEngineering';
import { Services } from '@/components/landing/Services';
import { Process } from '@/components/landing/Process';
import { TechStack } from '@/components/landing/TechStack';
import { Testimonials } from '@/components/landing/Testimonials';
import { Footer } from '@/components/landing/Footer';
import { CursorFollower } from '@/components/ui/cursor-follower';
import placeholderImages from '@/lib/placeholder-images.json';
import content from '@/lib/content.json';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <CursorFollower />
      <Header 
        companyName={content.companyName}
        navigation={content.navigation}
        contact={content.contact}
        socials={content.socials}
        quoteDialog={content.quoteDialog}
      />
      <main className="flex-1">
        <Hero heroContent={content.hero} />
        <WhyChooseUs whyChooseUsContent={content.whyChooseUs} />
        <SoftwareEngineering 
          softwareEngineeringContent={content.softwareEngineering}
          image={placeholderImages.softwareEngineering} 
        />
        <Services servicesContent={content.services} />
        <Process processContent={content.process} />
        <TechStack 
          techStackContent={content.techStack}
          images={placeholderImages.techStack}
        />
        <Testimonials 
          testimonialsContent={content.testimonials}
          images={placeholderImages.testimonials}
        />
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
