'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'phosphor-react';
import { trackEvents } from '@/lib/posthog';

export default function VendorCTA() {
  return (
    <section id="vendors" className="w-full relative overflow-hidden bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700">
      {/* Gradient overlay */}
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-primary-500/30 via-primary-600/20 to-transparent blur-3xl pointer-events-none"></div>

      <div className="relative">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch">
            {/* Left: Content */}
            <div className="px-4 sm:px-6 lg:px-8 lg:pr-24 py-10 lg:py-12 relative z-10">
              <div className="space-y-8">
                {/* Icon */}
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                  <ArrowUpRight size={28} weight="bold" className="text-primary-500" />
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
                    Get discovered by customers looking for you.
                  </h2>
                  <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-lg">
                    List your services on TownSquare and connect with Nigerians in Berlin who need exactly what you offer. Set your own prices, showcase your work, and connect with customers on your terms.
                  </p>
                </div>

                <div>
                  <a href="/download" onClick={() => trackEvents.vendorCtaClick()} className="group inline-flex items-center gap-0 shadow-lg hover:shadow-xl transition-all duration-100">
                    <span className="px-8 py-4 text-base font-semibold tracking-tight text-primary-500 bg-white rounded-l-full rounded-r-full transition-all duration-100 group-hover:bg-white/90">
                      List your business
                    </span>
                    <span className="flex items-center justify-center w-14 h-14 bg-white rounded-full transition-all duration-100 group-hover:bg-white/90 group-hover:rotate-45">
                      <ArrowUpRight size={20} weight="bold" className="text-primary-500" />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Spacer for grid structure */}
            <div className="hidden lg:block"></div>
          </div>
        </div>

        {/* Right: Image - Absolute positioned to break out and extend to viewport edge */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-1/2 overflow-hidden">
          <Image
            src="/images/grow-your-business.png"
            alt="Grow your business with TownSquare"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
