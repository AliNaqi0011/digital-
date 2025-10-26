import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from "@/components/ui/toaster"
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { ErrorBoundary } from '@/components/error-boundary';

const title = 'YOUR DIGITAL CHOICE - Premium IT Solutions & Software Development';
const description = 'Transform your business with cutting-edge IT solutions. Expert software development, cloud services, cybersecurity, and managed IT support. 24/7 availability.';

export const metadata: Metadata = {
  title: {
    default: title,
    template: '%s | YOUR DIGITAL CHOICE'
  },
  description: description,
  keywords: ['IT solutions', 'software development', 'cloud services', 'cybersecurity', 'managed IT', 'web development', 'mobile apps'],
  authors: [{ name: 'YOUR DIGITAL CHOICE' }],
  creator: 'YOUR DIGITAL CHOICE',
  publisher: 'YOUR DIGITAL CHOICE',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://creativeexperts.dev',
    title: title,
    description: description,
    siteName: 'YOUR DIGITAL CHOICE',
    images: [
      {
        url: 'https://picsum.photos/seed/og-image/1200/630',
        width: 1200,
        height: 630,
        alt: 'YOUR DIGITAL CHOICE - IT Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: ['https://picsum.photos/seed/og-image/1200/630'],
    creator: '@creativeexperts',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://creativeexperts.dev" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="antialiased">
        <ErrorBoundary>
          <FirebaseClientProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                disableTransitionOnChange
            >
                {children}
                <Toaster />
            </ThemeProvider>
          </FirebaseClientProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
