import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Download TownSquare',
  description: 'Download the TownSquare app for iOS and Android to discover and book local services.',
};

export default function DownloadPage() {
  const appStoreUrl = process.env.NEXT_PUBLIC_APP_STORE_URL || 'https://apps.apple.com';
  const playStoreUrl = process.env.NEXT_PUBLIC_PLAY_STORE_URL || 'https://play.google.com';

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            TownSquare
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Download TownSquare
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-2xl mx-auto">
            Get started with TownSquare on your device. Available for iOS and Android.
          </p>

          {/* Download Options */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
            {/* iOS */}
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-primary-600 hover:shadow-lg transition-all"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-900 rounded-2xl mx-auto mb-4"></div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">iOS</h2>
                <p className="text-gray-600">Download on the App Store</p>
              </div>
              <div className="text-sm text-gray-500 mb-4">
                For iPhone and iPad
              </div>
              <div className="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold inline-block">
                Download
              </div>
            </a>

            {/* Android */}
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-primary-600 hover:shadow-lg transition-all"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-900 rounded-2xl mx-auto mb-4"></div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Android</h2>
                <p className="text-gray-600">Get it on Google Play</p>
              </div>
              <div className="text-sm text-gray-500 mb-4">
                For Android devices
              </div>
              <div className="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold inline-block">
                Download
              </div>
            </a>
          </div>

          {/* Features */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">What You Get</h3>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="w-12 h-12 bg-primary-100 rounded-xl mb-4"></div>
                <h4 className="font-semibold text-gray-900 mb-2">Browse Services</h4>
                <p className="text-gray-600 text-sm">
                  Explore local service providers with detailed profiles and portfolios
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary-100 rounded-xl mb-4"></div>
                <h4 className="font-semibold text-gray-900 mb-2">Direct Messaging</h4>
                <p className="text-gray-600 text-sm">
                  Connect with providers instantly to discuss your needs
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary-100 rounded-xl mb-4"></div>
                <h4 className="font-semibold text-gray-900 mb-2">Easy Booking</h4>
                <p className="text-gray-600 text-sm">
                  Schedule appointments and manage your bookings in one place
                </p>
              </div>
            </div>
          </div>

          {/* System Requirements */}
          <div className="mt-12 text-sm text-gray-500">
            <p className="mb-2">
              <strong>iOS:</strong> Requires iOS 13.0 or later
            </p>
            <p>
              <strong>Android:</strong> Requires Android 6.0 or later
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-4">
            <Link href="/terms" className="text-gray-600 hover:text-primary-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-primary-600 transition-colors">
              Privacy Policy
            </Link>
            <a href="mailto:support@mytownsquare.co" className="text-gray-600 hover:text-primary-600 transition-colors">
              Support
            </a>
          </div>
          <div className="text-gray-600">
            © 2024 TownSquare. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
