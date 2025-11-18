export default function WhyTownSquare() {
  const features = [
    {
      title: 'Everyone in one place.',
      description:
        'Stop jumping between Facebook, Instagram, WhatsApp groups, and Telegram channels. Every Nigerian service provider you need is here—with photos of their work and ways to reach them.',
      image: 'feature-1.jpg',
    },
    {
      title: 'Find them fast, contact them directly.',
      description:
        'Browse vendors, see their work, tap to WhatsApp them. No forms to fill out, no back-and-forth through a platform. Just direct contact with the person who can help you.',
      image: 'feature-2.jpg',
    },
    {
      title: 'People who already know what you want.',
      description:
        'A hairstylist who can do the exact style you\'re picturing. A caterer who knows how your jollof should taste. A photographer who gets the vibe for your owambe. No long explanations needed.',
      image: 'feature-3.jpg',
    },
    {
      title: 'Free. No hidden costs.',
      description:
        'Use the app, browse vendors, contact them—completely free. We don\'t charge fees or take a percentage. Vendors set their own prices and you pay them directly.',
      image: 'feature-4.jpg',
    },
    {
      title: 'Built because we needed it too.',
      description:
        'We\'re Nigerians living in Berlin who got tired of the endless searching. TownSquare is what we wish existed when we first moved here—a simple way to find our people.',
      image: 'feature-5.jpg',
    },
  ];

  return (
    <section id="why-townsquare">
      {/* Two column layout: sticky left, scrollable right */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Column - Sticky Header */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
              Find your people.
              <span className="block">Get things done.</span>
            </h2>
            <p className="text-base text-slate-600 max-w-lg">
              Nigerian service providers in Berlin, all in one app. No more searching across platforms or settling for providers who don't get it.
            </p>
          </div>
        </div>

        {/* Right Column - Scrollable Content */}
        <div className="space-y-12">
          {features.map((feature, index) => (
            <div key={index} className="group">
              {/* Image */}
              <div className="rounded-2xl overflow-hidden mb-6 h-64 sm:h-80 lg:h-96">
                <div className="w-full h-full bg-gradient-to-br from-primary-100 via-slate-50 to-secondary-100 border border-slate-200 flex items-center justify-center">
                  <span className="text-sm text-slate-400 font-medium">
                    {feature.image}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
