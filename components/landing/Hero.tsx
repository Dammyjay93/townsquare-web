'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, CaretDown } from 'phosphor-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="w-full flex flex-col items-center justify-center text-center gap-8 py-16 lg:py-24 relative px-8 sm:px-12 lg:px-6">
      {/* Headline */}
      <div
        className={`max-w-4xl space-y-6 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight text-white leading-tight">
          One App. Every Nigerian
          <span className="block">
            Service You Need.
          </span>
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-xl mx-auto leading-relaxed">
          Hair stylists, caterers, photographers, and more—all Nigerian, all in Berlin. Find them, contact them, book them.
        </p>
      </div>

      {/* CTA */}
      <div
        className={`flex flex-col sm:flex-row gap-4 items-center transition-all duration-1000 delay-200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <Link
          href="/download"
          className="group inline-flex items-center gap-0 whitespace-nowrap shadow-lg hover:shadow-xl active:scale-100 transition-all duration-100"
          aria-label="Download TownSquare app to find Nigerian service providers"
        >
          <span className="px-8 py-4 text-base font-semibold tracking-tight text-primary-500 bg-white rounded-l-full rounded-r-full transition-all duration-100 group-hover:bg-primary-500 group-hover:text-white">
            Get the App
          </span>
          <span className="flex items-center justify-center w-14 h-14 bg-white rounded-full transition-all duration-100 group-hover:bg-primary-500 group-hover:rotate-45">
            <ArrowUpRight size={20} weight="bold" className="text-primary-500 transition-colors duration-100 group-hover:text-white" />
          </span>
        </Link>
      </div>
    </section>
  );
}
