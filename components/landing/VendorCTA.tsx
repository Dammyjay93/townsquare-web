export default function VendorCTA() {
  return (
    <section id="vendors" className="mt-12 sm:mt-16">
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 overflow-hidden relative shadow-[0_18px_60px_rgba(15,23,42,0.35)]">
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary-500/40 via-secondary-500/30 to-transparent blur-3xl pointer-events-none"></div>
        <div className="relative flex flex-col md:flex-row items-stretch">
          <div className="flex-1 p-5 sm:p-7 flex flex-col gap-4">
            <span className="inline-flex items-center gap-2 text-xs text-primary-200 w-fit">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-500/25">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </span>
              For local vendors
            </span>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-slate-50">
              Grow your business with neighbors you can trust
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Join a community-driven marketplace built for local professionals. Reach nearby customers, manage bookings, and get paid on time — all in one app.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 text-xs text-slate-200 mt-1">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-secondary-500/20 text-secondary-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                No listing fees
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-500/20 text-primary-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M3 3h18v4H3z"></path>
                    <path d="M8 21h8"></path>
                    <path d="M10 7v14"></path>
                    <path d="M14 7v14"></path>
                  </svg>
                </span>
                Instant payouts
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-secondary-500/20 text-secondary-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M3 12h18"></path>
                    <path d="M3 6h18"></path>
                    <path d="M3 18h18"></path>
                  </svg>
                </span>
                Built-in scheduling
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3 items-center">
              <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold tracking-tight text-slate-900 shadow-sm shadow-slate-900/30 hover:bg-slate-100 transition">
                Become a vendor
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
              </button>
              <button className="inline-flex items-center gap-1.5 text-xs text-slate-200 hover:text-white">
                Learn how it works
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="md:w-72 border-t md:border-t-0 md:border-l border-slate-700/80 bg-slate-900/90 p-5 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-300">Snapshot from vendors</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-secondary-500/15 px-2 py-0.5 text-[0.65rem] text-secondary-300 border border-secondary-500/30">
                +36%
                <span className="text-slate-300">more bookings</span>
              </span>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-3 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-full overflow-hidden bg-gradient-to-br from-primary-400 to-primary-600"></div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-50">Glow Studio</span>
                    <span className="text-[0.65rem] text-slate-400">Makeup & hair</span>
                  </div>
                </div>
                <span className="text-[0.65rem] text-secondary-300">4.9 rating</span>
              </div>

              <div>
                <div className="flex items-center justify-between text-[0.65rem] text-slate-400 mb-1">
                  <span>Monthly bookings</span>
                  <span>Last 6 months</span>
                </div>
                <div className="w-full h-16 rounded-xl bg-slate-950 overflow-hidden flex items-end gap-1.5 p-1.5">
                  <div
                    className="flex-1 rounded-full bg-primary-500/50"
                    style={{ height: '35%' }}
                  ></div>
                  <div
                    className="flex-1 rounded-full bg-primary-500/60"
                    style={{ height: '55%' }}
                  ></div>
                  <div
                    className="flex-1 rounded-full bg-primary-500/80"
                    style={{ height: '70%' }}
                  ></div>
                  <div
                    className="flex-1 rounded-full bg-secondary-500/80"
                    style={{ height: '85%' }}
                  ></div>
                  <div
                    className="flex-1 rounded-full bg-secondary-500"
                    style={{ height: '100%' }}
                  ></div>
                  <div
                    className="flex-1 rounded-full bg-primary-400/90"
                    style={{ height: '92%' }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[0.65rem] text-slate-400">
                <span>Avg. response time</span>
                <span className="text-slate-50">6 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
