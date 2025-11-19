export default function FAQ() {
  const faqs = [
    {
      question: 'Is TownSquare free to use?',
      answer:
        'Yes, completely free. Browse vendors, view portfolios, and contact them directly at no cost. Vendors set their own prices and you pay them directly.',
    },
    {
      question: 'How do I contact a service provider?',
      answer:
        'Each vendor chooses how they want to be contacted (WhatsApp, Instagram, website, or a combination). Just tap their preferred contact method on their profile. No forms, no middleman, just direct communication.',
    },
    {
      question: 'Can I see examples of their work?',
      answer:
        'Yes. Every vendor profile includes photos of their work so you can see their quality and style before reaching out.',
    },
    {
      question: 'How do I know if a vendor is reliable?',
      answer:
        'You can see ratings and reviews from other users who have used their services. We also verify vendor profiles.',
    },
    {
      question: 'Can I become a vendor on TownSquare?',
      answer:
        'Absolutely. If you provide services to Nigerians in Berlin, you can create a vendor profile and showcase your work to potential clients.',
    },
  ];

  return (
    <section id="faq" className="py-12 sm:py-16">
      {/* Header */}
      <div className="text-center space-y-4 mb-12">
        <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-600 text-xs font-medium rounded-full uppercase tracking-wide">
          FAQ
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
          Frequently asked questions
        </h2>
        <p className="text-base text-slate-600 max-w-2xl mx-auto">
          Here are the top questions users ask before getting started.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-3xl mx-auto border border-slate-200 rounded-2xl bg-white overflow-hidden">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group border-b border-slate-100 last:border-b-0 hover:bg-primary-50 transition-colors"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-medium text-slate-900 list-none p-6">
              <span>{faq.question}</span>
              <span className="inline-flex h-8 w-8 items-center justify-center flex-shrink-0 bg-primary-100 group-hover:bg-primary-200 rounded-full text-primary-500 group-open:rotate-45 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 5v14M5 12h14"></path>
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6">
              <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
