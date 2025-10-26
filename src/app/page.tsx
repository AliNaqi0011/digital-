import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { Services } from '@/components/landing/Services';
import { Statistics } from '@/components/landing/Statistics';
import { WhyChooseUs } from '@/components/landing/WhyChooseUs';
import { Footer } from '@/components/landing/Footer';
import content from '@/lib/content.json';

export default function Home() {
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
        <Services servicesContent={content.services} />
        <Statistics statistics={content.statistics} />
        <WhyChooseUs whyChooseUsContent={content.whyChooseUs} />
      </main>
      <Footer 
        companyName={content.companyName}
        description={content.footer.description}
        copyright={content.footer.copyright}
        companyLinks={content.footer.companyLinks}
        contact={content.contact}
        socials={content.socials}
      />
    </div>
  );
}