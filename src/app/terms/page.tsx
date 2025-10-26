
import type { Metadata } from 'next';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import content from '@/lib/content.json';

export const metadata: Metadata = {
  title: `Terms & Conditions | ${content.companyName}`,
  description: "Read the terms and conditions for using our services.",
}

export default function TermsPage() {
  const { termsPage } = content;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header 
        companyName={content.companyName}
        navigation={content.navigation}
        contact={content.contact}
        socials={content.socials}
        quoteDialog={content.quoteDialog}
      />
      <main className="flex-1 py-24 md:py-32">
        <div className="container max-w-4xl mx-auto px-4 md:px-6">
          <div className="prose dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold tracking-tight text-primary mb-4">{termsPage.title}</h1>
            <p className="text-sm text-muted-foreground mb-12">Last updated: {termsPage.lastUpdated}</p>
            
            <div className="space-y-8">
              {termsPage.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-semibold border-b border-border pb-2 mb-4">{section.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
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
