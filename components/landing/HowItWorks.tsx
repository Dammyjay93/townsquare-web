export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mt-16 sm:mt-24">
      <div className="border-t border-slate-200 pt-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
              How it works
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Three simple steps to book a trusted professional in your neighborhood.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm shadow-slate-100">
              1
            </span>
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm shadow-slate-100">
              2
            </span>
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm shadow-slate-100">
              3
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Step 1 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col gap-4 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-primary-500/10 text-primary-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4.5 w-4.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="11" cy="11" r="7"></circle>
                  <path d="m16 16 4 4"></path>
                </svg>
              </div>
              <span className="text-xs text-slate-500">Step 1</span>
            </div>
            <h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-900">
              Discover Nigerian professionals
            </h3>
            <p className="text-sm text-slate-600">
              Browse verified Nigerian service providers in Berlin with detailed profiles, portfolios, and reviews from the community.
            </p>
          </div>

          {/* Step 2 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col gap-4 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-secondary-500/10 text-secondary-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4.5 w-4.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2"></rect>
                  <path d="M16 2v4"></path>
                  <path d="M8 2v4"></path>
                  <path d="M3 10h18"></path>
                </svg>
              </div>
              <span className="text-xs text-slate-500">Step 2</span>
            </div>
            <h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-900">
              Connect directly with vendors
            </h3>
            <p className="text-sm text-slate-600">
              Message providers directly through the app, discuss your needs, compare options, and arrange services that work for you.
            </p>
          </div>

          {/* Step 3 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col gap-4 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-secondary-500/10 text-secondary-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4.5 w-4.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-xs text-slate-500">Step 3</span>
            </div>
            <h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-900">
              Arrange your service
            </h3>
            <p className="text-sm text-slate-600">
              Agree on details, pricing, and timing directly with your provider. Handle payment as you both prefer—cash, transfer, or card.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
