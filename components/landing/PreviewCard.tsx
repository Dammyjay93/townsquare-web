export default function PreviewCard() {
  return (
    <section className="w-full lg:w-[48%] flex items-center justify-center">
      <div className="relative w-full max-w-md">
        {/* Ambient glow */}
        <div className="absolute -inset-10 bg-gradient-to-tr from-primary-400/25 via-secondary-400/20 to-primary-400/15 blur-3xl opacity-80"></div>

        <div className="relative rounded-3xl border border-slate-200 bg-white/90 backdrop-blur-xl shadow-[0_24px_80px_rgba(15,23,42,0.15)] overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-5">
            {/* Image-focused panel */}
            <div className="sm:col-span-3 sm:border-b-0 sm:border-r sm:p-5 flex flex-col bg-white/90 border-slate-100 border-b pt-4 pr-4 pb-4 pl-4 gap-x-4 gap-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600"></div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-slate-900">
                      Saturday evening event
                    </span>
                    <span className="text-[0.6rem] text-slate-500">
                      Makeup, photos & catering nearby
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary-50 px-2 py-0.5 text-[0.6rem] text-secondary-700 border border-secondary-100">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-secondary-500 animate-pulse"></span>
                  24 pros online
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-1">
                <div className="relative h-24 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-200 to-primary-400">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent"></div>
                  <div className="absolute bottom-2 left-2">
                    <p className="text-[0.7rem] text-white font-medium">
                      Bridal makeup at home
                    </p>
                    <p className="text-[0.65rem] text-primary-100">
                      From €80 • 0.8 km
                    </p>
                  </div>
                </div>
                <div className="relative h-24 rounded-2xl overflow-hidden bg-gradient-to-br from-secondary-200 to-secondary-400">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent"></div>
                  <div className="absolute bottom-2 left-2">
                    <p className="text-[0.7rem] text-white font-medium">
                      Event photography
                    </p>
                    <p className="text-[0.65rem] text-primary-100">
                      From €200 • 1.2 km
                    </p>
                  </div>
                </div>
                <div className="relative h-24 rounded-2xl overflow-hidden bg-gradient-to-br from-accent-orange to-accent-yellow">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent"></div>
                  <div className="absolute bottom-2 left-2">
                    <p className="text-[0.7rem] text-white font-medium">
                      Nigerian home catering
                    </p>
                    <p className="text-[0.65rem] text-primary-100">
                      From €25 / guest
                    </p>
                  </div>
                </div>
              </div>

              <button className="mt-2 inline-flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 hover:bg-slate-100 transition">
                <div className="flex flex-col text-[0.7rem] text-slate-700">
                  <span>See more photos & reviews in the app</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-slate-800 border border-slate-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m13 6 6 6-6 6"></path>
                    </svg>
                  </span>
                </div>
              </button>
            </div>

            {/* Categories */}
            <div className="sm:col-span-2 bg-gradient-to-b from-slate-50 via-primary-50/80 to-secondary-50/60 p-4 sm:p-5 flex flex-col gap-4">
              <div>
                <h2 className="text-sm font-semibold tracking-tight text-slate-900">
                  Book by category
                </h2>
                <p className="text-xs text-slate-600 mt-1">
                  Real work from local professionals across beauty, events, and home.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {/* Beauty */}
                <button className="flex flex-col items-start gap-1 rounded-2xl border border-primary-200 bg-white/90 p-2.5 text-left shadow-sm shadow-primary-100/60 hover:border-primary-400 transition">
                  <div className="h-14 w-full rounded-xl overflow-hidden bg-gradient-to-br from-primary-200 to-primary-400 mb-1"></div>
                  <span className="text-xs font-medium text-slate-900">Beauty</span>
                  <span className="text-[0.65rem] text-slate-600">
                    Makeup, hair, nails
                  </span>
                </button>

                {/* Events */}
                <button className="flex flex-col items-start gap-1 rounded-2xl border border-secondary-200 bg-white/90 p-2.5 text-left shadow-sm shadow-secondary-100/60 hover:border-secondary-400 transition">
                  <div className="h-14 w-full rounded-xl overflow-hidden bg-gradient-to-br from-secondary-200 to-secondary-400 mb-1"></div>
                  <span className="text-xs font-medium text-slate-900">Events</span>
                  <span className="text-[0.65rem] text-slate-600">
                    Photo, catering, DJ
                  </span>
                </button>

                {/* Home */}
                <button className="flex flex-col items-start gap-1 rounded-2xl border border-primary-200 bg-white/90 p-2.5 text-left shadow-sm shadow-primary-100/60 hover:border-primary-400 transition">
                  <div className="h-14 w-full rounded-xl overflow-hidden bg-gradient-to-br from-accent-orange to-accent-yellow mb-1"></div>
                  <span className="text-xs font-medium text-slate-900">Home</span>
                  <span className="text-[0.65rem] text-slate-600">
                    Cleaning, repairs
                  </span>
                </button>

                {/* Wellness */}
                <button className="flex flex-col items-start gap-1 rounded-2xl border border-secondary-200 bg-white/90 p-2.5 text-left shadow-sm shadow-secondary-100/60 hover:border-secondary-400 transition">
                  <div className="h-14 w-full rounded-xl overflow-hidden bg-gradient-to-br from-accent-purple to-accent-pink mb-1"></div>
                  <span className="text-xs font-medium text-slate-900">Wellness</span>
                  <span className="text-[0.65rem] text-slate-600">
                    Massage, fitness
                  </span>
                </button>
              </div>

              <div className="mt-1 flex flex-col gap-2">
                <div className="flex items-center justify-between text-[0.7rem] text-slate-600">
                  <span>Average response time</span>
                  <span className="text-secondary-600 font-medium">under 10 minutes</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
