export default function FAQ() {
  const faqs = [
    {
      question: 'How do you vet local service providers?',
      answer:
        'Every vendor completes identity verification and business checks where applicable. We combine this with ongoing community ratings and reviews to maintain high standards.',
    },
    {
      question: 'Is payment handled in the app?',
      answer:
        'Yes. You can pay securely using your preferred method. Funds are only released to the provider after the service is completed.',
    },
    {
      question: 'Can I reschedule or cancel a booking?',
      answer:
        "Absolutely. Each vendor sets their own cancellation and rescheduling policy, which you'll see clearly before confirming your booking.",
    },
  ];

  return (
    <section id="faq" className="mt-12 sm:mt-16 mb-4">
      <div className="grid md:grid-cols-[1.4fr_1fr] gap-6">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900">
            Frequently asked questions
          </h2>
          <div className="mt-4 space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-slate-200 bg-white/90 p-3 sm:p-4 shadow-sm shadow-slate-100"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-2 text-sm text-slate-900 list-none">
                  <span>{faq.question}</span>
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-50 text-slate-500 border border-slate-200 group-open:rotate-180 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/95 p-4 sm:p-5 flex flex-col gap-4 shadow-sm shadow-slate-100">
          <h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-900">
            Ready to meet your next favorite local pro?
          </h3>
          <p className="text-sm text-slate-600">
            Enter your email or phone number and we'll send you a link to download the app.
          </p>
          <form className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <label className="text-xs text-slate-700">Email or phone</label>
              <div className="flex rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-slate-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-9.5 6L2 7"></path>
                </svg>
                <input
                  type="text"
                  placeholder="you@example.com or +49 XXX XXX XXXX"
                  className="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 text-sm text-slate-900 placeholder:text-slate-400"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-1 inline-flex items-center justify-center rounded-2xl bg-primary-600 px-4 py-2 text-sm font-semibold tracking-tight text-white shadow-md shadow-primary-500/40 hover:bg-primary-700 transition"
            >
              Get download link
            </button>
          </form>
          <p className="text-[0.7rem] text-slate-500">
            By continuing, you agree to receive a message with a download link. Standard messaging rates may apply.
          </p>
        </div>
      </div>
    </section>
  );
}
