import { Metadata } from 'next';
import Navigation from '@/components/landing/Navigation';
import Hero from '@/components/landing/Hero';
import PreviewCard from '@/components/landing/PreviewCard';
import HowItWorks from '@/components/landing/HowItWorks';
import ServiceCategories from '@/components/landing/ServiceCategories';
import VendorCTA from '@/components/landing/VendorCTA';
import FAQ from '@/components/landing/FAQ';
import Footer from '@/components/landing/Footer';

export const metadata: Metadata = {
  title: 'TownSquare - Nigerian Services in Berlin',
  description:
    "Connect with trusted Nigerian service providers in Berlin. From hair & beauty to events and home services, discover local pros who understand your culture.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 antialiased flex flex-col">
      <div className="flex-1 flex flex-col bg-gradient-to-b from-primary-50 via-slate-50 to-slate-100">
        {/* Top Gradient Glow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary-400/30 via-secondary-400/20 to-transparent blur-3xl opacity-80"></div>

        {/* Container */}
        <div className="relative mx-auto w-full max-w-6xl flex-1 flex flex-col px-4 sm:px-6 lg:px-8 pt-4 pb-10">
          {/* Navigation */}
          <Navigation />

          {/* Hero + Preview Card (Side by Side) */}
          <div className="flex-1 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mt-6 lg:mt-10">
            <Hero />
            <PreviewCard />
          </div>

          {/* How It Works */}
          <HowItWorks />

          {/* Service Categories */}
          <ServiceCategories />

          {/* Vendor CTA */}
          <VendorCTA />

          {/* FAQ */}
          <FAQ />

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
