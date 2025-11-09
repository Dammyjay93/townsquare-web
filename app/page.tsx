import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'TownSquare - Discover Local Services',
  description: 'Connect with trusted local service providers in your community. Find hair stylists, caterers, tutors, and more on TownSquare.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">TownSquare</div>
            <Link
              href="/download"
              className="px-6 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Download App
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Your Local Service
            <br />
            <span className="text-primary-600">Marketplace</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Connect with trusted service providers in your community. From beauty to events, find and book local professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/download"
              className="px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors text-lg"
            >
              Get Started
            </Link>
            <Link
              href="#features"
              className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to connect you with the best local service providers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-14 h-14 bg-primary-100 rounded-xl mb-6"></div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Discover</h3>
              <p className="text-gray-600 leading-relaxed">
                Browse verified local service providers with detailed profiles, comprehensive portfolios, and authentic customer reviews.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-14 h-14 bg-primary-100 rounded-xl mb-6"></div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Connect</h3>
              <p className="text-gray-600 leading-relaxed">
                Message providers directly, discuss your requirements, and book appointments seamlessly within the app.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-14 h-14 bg-primary-100 rounded-xl mb-6"></div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Trust</h3>
              <p className="text-gray-600 leading-relaxed">
                Make informed decisions with transparent pricing, verified reviews, and detailed service information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Popular Categories
            </h2>
            <p className="text-xl text-gray-600">
              Find exactly what you need
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Hair & Beauty',
              'Catering & Food',
              'Tutoring',
              'Event Planning',
              'Cleaning Services',
              'Fashion & Tailoring',
              'Fitness & Wellness',
              'Home Services',
            ].map((category) => (
              <div
                key={category}
                className="bg-white border border-gray-200 p-6 rounded-xl hover:border-primary-600 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="text-center font-medium text-gray-900">{category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Download the App</h3>
              <p className="text-gray-600">
                Available on iOS and Android. Get started in seconds.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Browse Services</h3>
              <p className="text-gray-600">
                Explore local providers and read reviews from real customers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Book & Connect</h3>
              <p className="text-gray-600">
                Message providers and schedule your appointments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-primary-600 rounded-3xl p-12 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-10">
              Join thousands discovering amazing local services
            </p>
            <Link
              href="/download"
              className="inline-block px-10 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Download TownSquare
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold text-gray-900 mb-4">TownSquare</div>
              <p className="text-gray-600">
                Your local service marketplace
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
              <div className="space-y-2">
                <Link href="/terms" className="block text-gray-600 hover:text-primary-600 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/privacy" className="block text-gray-600 hover:text-primary-600 transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
              <div className="space-y-2">
                <a href="mailto:support@mytownsquare.co" className="block text-gray-600 hover:text-primary-600 transition-colors">
                  support@mytownsquare.co
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
            © 2024 TownSquare. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
