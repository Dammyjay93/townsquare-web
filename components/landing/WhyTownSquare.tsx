export default function WhyTownSquare() {
  const benefits = [
    {
      title: 'No more unreliable Facebook groups',
      description:
        'Stop scrolling through endless posts trying to find someone trustworthy. Browse verified profiles with real work samples and reviews.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"></path>
        </svg>
      ),
    },
    {
      title: 'Providers who understand your culture',
      description:
        'Nigerian hairstylists who know braids, caterers who can cook jollof for 50, and vendors who speak your language—literally and culturally.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
    },
    {
      title: 'Connect directly, no middleman',
      description:
        'Message providers, discuss your needs, and arrange everything directly. We don\'t take a cut—this is a community platform, not a corporate one.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="mt-12 sm:mt-16">
      <div className="rounded-3xl border border-slate-200 bg-white/90 overflow-hidden relative shadow-sm shadow-slate-100">
        {/* Subtle ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-secondary-50/30 pointer-events-none"></div>

        <div className="relative p-6 sm:p-8 md:p-10">
          {/* Header */}
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs text-primary-700 mb-4">
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary-500/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-2.5 w-2.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2v20M2 12h20"></path>
                </svg>
              </span>
              <span className="font-medium">Why TownSquare</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-3">
              Built for Nigerians in the diaspora
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Finding quality Nigerian service providers in Berlin shouldn't be this hard. We're changing that.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white/90 p-5 flex flex-col gap-3 shadow-sm hover:shadow-md hover:border-primary-200 transition-all"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500/10 text-primary-600">
                  {benefit.icon}
                </div>
                <h3 className="text-base font-semibold tracking-tight text-slate-900">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl border border-slate-200 bg-slate-50">
            <div className="text-center sm:text-left">
              <p className="text-sm font-medium text-slate-900">
                Ready to find your next favorite vendor?
              </p>
              <p className="text-xs text-slate-600 mt-1">
                Join Nigerians in Berlin who've already made the switch
              </p>
            </div>
            <button className="whitespace-nowrap rounded-full bg-primary-600 px-6 py-2 text-sm font-semibold tracking-tight text-white shadow-sm shadow-primary-500/30 hover:bg-primary-700 transition">
              Get the app
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
