import { Metadata } from 'next';
import Navigation from '@/components/landing/Navigation';
import Hero from '@/components/landing/Hero';
import WhyTownSquare from '@/components/landing/WhyTownSquare';
import Testimonials from '@/components/landing/Testimonials';
import VendorCTA from '@/components/landing/VendorCTA';
import FAQ from '@/components/landing/FAQ';
import Footer from '@/components/landing/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: 'TownSquare - Find Nigerian Service Providers in Berlin',
  description:
    "Discover and connect with trusted Nigerian service providers in Berlin. From hair stylists to caterers, find local pros who understand your culture. Free to browse and message.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <SmoothScroll />
      {/* Navigation - Fixed and outside hero for proper blur */}
      <Navigation />

      {/* Hero Section with its own background */}
      <div className="relative min-h-screen bg-slate-900 overflow-hidden">
        {/* Hero background image with overlay */}
        <div className="absolute inset-0 z-0">
          {/* Base image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/images/hero-image.png")',
            }}
          ></div>
          {/* Black overlay for depth */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6))',
            }}
          ></div>
          {/* Teal overlay with blend mode */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(31, 74, 84, 0.5) 0%, rgba(31, 74, 84, 0.3) 50%, rgba(31, 74, 84, 0.4) 100%)',
              mixBlendMode: 'multiply',
            }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <Hero />
        </div>

        {/* Scroll indicator - positioned at bottom of hero viewport */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/60 text-[10px] uppercase tracking-wide">
          <span>Scroll Down</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="animate-bounce motion-reduce:animate-none">
            <polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></polyline>
          </svg>
        </div>
      </div>

      {/* Rest of the sections with their own backgrounds */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-12">
        {/* Why TownSquare */}
        <WhyTownSquare />
      </div>

      {/* Testimonials - Full Width */}
      <Testimonials />

      {/* Vendor CTA - Full Width */}
      <VendorCTA />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* FAQ */}
        <FAQ />
      </div>

      {/* Footer - Full Width */}
      <Footer />
    </div>
  );
}
