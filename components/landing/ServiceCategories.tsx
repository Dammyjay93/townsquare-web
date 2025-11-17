export default function ServiceCategories() {
  const categories = [
    {
      name: 'Beauty & Grooming',
      description:
        'Nigerian hair stylists specializing in braids, weaves, and natural hair care — at home or in-studio.',
      vendors: '15+',
      tags: ['Braiding', 'Natural Hair', 'Makeup', 'Nails'],
      gradient: 'from-primary-200 to-primary-400',
    },
    {
      name: 'Events & Occasions',
      description:
        'Nigerian caterers, photographers, and DJs who understand your culture for birthdays, weddings, and owambe parties.',
      vendors: '12+',
      tags: ['Nigerian Catering', 'Photography', 'DJ'],
      gradient: 'from-secondary-200 to-secondary-400',
    },
    {
      name: 'Home & Everyday',
      description:
        'Tutors, tailors, and everyday helpers from the Nigerian community to make life in Berlin easier.',
      vendors: '10+',
      tags: ['Tutoring', 'Tailoring', 'Translation'],
      gradient: 'from-accent-orange to-accent-yellow',
    },
  ];

  return (
    <section id="categories" className="mt-10 sm:mt-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900">
            Services in your community
          </h2>
          <p className="mt-1 text-sm sm:text-base text-slate-600">
            From everyday essentials to special occasions, we've got you covered.
          </p>
        </div>
        <div className="flex gap-2 text-xs text-slate-700">
          <button className="inline-flex items-center gap-1 rounded-full border border-slate-900 bg-slate-900 px-3 py-1 text-slate-50 shadow-sm shadow-slate-900/20">
            All
          </button>
          <button className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 hover:border-slate-300 shadow-sm shadow-slate-100">
            Beauty
          </button>
          <button className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 hover:border-slate-300 shadow-sm shadow-slate-100">
            Events
          </button>
          <button className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 hover:border-slate-300 shadow-sm shadow-slate-100">
            Home
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
        {categories.map((category) => (
          <div
            key={category.name}
            className="rounded-2xl border border-slate-200 bg-white/90 p-4 flex flex-col gap-3 shadow-sm shadow-slate-100 hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`h-10 w-10 rounded-xl overflow-hidden bg-gradient-to-br ${category.gradient}`}
                ></div>
                <span className="text-sm font-medium text-slate-900">
                  {category.name}
                </span>
              </div>
              <span className="text-[0.7rem] text-slate-500">
                {category.vendors} vendors
              </span>
            </div>
            <p className="text-sm text-slate-600">{category.description}</p>
            <div className="flex flex-wrap gap-1.5 text-[0.7rem] text-slate-700">
              {category.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-50 border border-slate-200 px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
