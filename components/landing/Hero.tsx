'use client';

import { MagnifyingGlass, MapPin, Check, ChatCircle, UsersThree } from 'phosphor-react';

export default function Hero() {
  return (
    <main className="flex-1 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mt-6 lg:mt-10">
      {/* Left column */}
      <section className="w-full lg:w-[52%] flex flex-col gap-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary-300/70 bg-white/80 px-2.5 py-1 text-xs text-primary-800 shadow-sm shadow-primary-100 w-fit">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-500/15 text-primary-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 12h3l3 8 4-16 3 8h5"></path>
            </svg>
          </span>
          <span className="font-medium">New</span>
          <span className="h-0.5 w-0.5 rounded-full bg-primary-500/80"></span>
          <span className="text-slate-700">
            Connect with Nigerian service providers in Berlin
          </span>
        </div>

        {/* Headline */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
            Find Nigerian services
            <span className="block text-primary-600">
              in Berlin
            </span>
          </h1>
          <p className="sm:text-lg leading-relaxed text-base text-slate-600">
            Connect with trusted Nigerian service providers in your area. From hair stylists to caterers, find local pros who understand your culture.
          </p>
        </div>

        {/* Search / CTA */}
        <div className="mt-2 flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 rounded-2xl border border-slate-200 bg-white/80 p-2.5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 shadow-sm shadow-slate-100/60">
              <div className="flex items-center gap-2 flex-1">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                  <MagnifyingGlass size={16} weight="regular" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500">I'm looking for</span>
                  <input
                    type="text"
                    placeholder="Hairstylist, caterer, photographer..."
                    className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 w-full"
                  />
                </div>
              </div>
              <div className="h-px sm:h-8 sm:w-px bg-slate-200 mx-0 sm:mx-1"></div>
              <div className="flex items-center gap-2 sm:w-40">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                  <MapPin size={16} weight="regular" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500">Near</span>
                  <input
                    type="text"
                    placeholder="Neukölln, Kreuzberg..."
                    className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 w-full"
                  />
                </div>
              </div>
            </div>
            <button className="w-full sm:w-auto whitespace-nowrap rounded-2xl bg-primary-600 px-5 sm:px-6 py-2.5 text-sm sm:text-base font-semibold tracking-tight text-white shadow-md shadow-primary-500/30 hover:bg-primary-700 transition">
              Search providers
            </button>
          </div>

          {/* Social proof */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <div className="flex -space-x-2">
              <div className="h-6 w-6 rounded-full border border-white bg-gradient-to-br from-primary-400 to-primary-600 shadow-sm shadow-primary-300/60"></div>
              <div className="h-6 w-6 rounded-full border border-white bg-gradient-to-br from-secondary-400 to-secondary-600 shadow-sm shadow-secondary-300/60"></div>
              <div className="h-6 w-6 rounded-full border border-white bg-gradient-to-br from-accent-orange to-accent-yellow shadow-sm shadow-amber-300/60"></div>
            </div>
            <span className="text-slate-500">
              Trusted by Nigerians in{' '}
              <span className="text-slate-900 font-medium">
                Berlin & beyond
              </span>
            </span>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-5 grid grid-cols-2 sm:flex sm:flex-row gap-3 text-xs sm:text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-secondary-500/10 text-secondary-600">
              <Check size={14} weight="bold" />
            </span>
            <span>Verified profiles</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-500/10 text-primary-600">
              <ChatCircle size={14} weight="bold" />
            </span>
            <span>Direct messaging</span>
          </div>
          <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-secondary-500/10 text-secondary-600">
              <UsersThree size={14} weight="bold" />
            </span>
            <span>Nigerian community</span>
          </div>
        </div>
      </section>
    </main>
  );
}
