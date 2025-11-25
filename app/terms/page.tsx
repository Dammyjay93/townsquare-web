import { Metadata } from 'next';
import Navigation from '@/components/landing/Navigation';
import Footer from '@/components/landing/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service - TownSquare',
  description: 'Terms of Service for TownSquare platform',
};

export default function TermsOfServicePage() {
  return (
    <>
      <Navigation forceWhiteBg={true} />
      <div className="min-h-screen bg-gray-50 pt-28 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> November 19, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing or using TownSquare ("the Platform"), you agree to be bound by these Terms of Service.
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 mb-4">
                TownSquare is a digital marketplace platform that connects service providers (vendors) with customers
                seeking various services. The Platform facilitates discovery, booking, and reviews of services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
              <p className="text-gray-700 mb-4">
                To use certain features of the Platform, you must create an account. You are responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Providing accurate and complete information</li>
                <li>Updating your information to keep it current</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Vendor Responsibilities</h2>
              <p className="text-gray-700 mb-4">
                If you are a service provider on TownSquare, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide accurate information about your services</li>
                <li>Maintain professional standards in your interactions</li>
                <li>Honor bookings and commitments made through the Platform</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respond promptly to customer inquiries</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Customer Responsibilities</h2>
              <p className="text-gray-700 mb-4">
                If you are using TownSquare to find services, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide accurate information when booking services</li>
                <li>Communicate respectfully with vendors</li>
                <li>Honor confirmed bookings</li>
                <li>Provide honest reviews based on your actual experience</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Prohibited Activities</h2>
              <p className="text-gray-700 mb-4">
                You may not use TownSquare to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Post false, misleading, or fraudulent content</li>
                <li>Harass, threaten, or harm other users</li>
                <li>Attempt to gain unauthorized access to the Platform</li>
                <li>Distribute spam or unsolicited communications</li>
                <li>Use automated systems to access the Platform without permission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Content and Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                You retain ownership of content you post on TownSquare. However, by posting content, you grant
                TownSquare a worldwide, non-exclusive, royalty-free license to use, display, and distribute your
                content in connection with the Platform.
              </p>
              <p className="text-gray-700 mb-4">
                The TownSquare name, logo, and all related materials are protected by copyright and trademark laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Payments and Fees</h2>
              <p className="text-gray-700 mb-4">
                Payment terms are established directly between vendors and customers. TownSquare may charge
                service fees, which will be clearly communicated before any transaction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Cancellations and Refunds</h2>
              <p className="text-gray-700 mb-4">
                Cancellation and refund policies are set by individual vendors. Disputes should be resolved
                directly between customers and vendors, though TownSquare may provide assistance upon request.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Reviews and Ratings</h2>
              <p className="text-gray-700 mb-4">
                Reviews must be based on genuine experiences. We reserve the right to remove reviews that:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Contain false or misleading information</li>
                <li>Include offensive or inappropriate content</li>
                <li>Violate privacy or confidentiality</li>
                <li>Are submitted by competitors or fake accounts</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Privacy</h2>
              <p className="text-gray-700 mb-4">
                Your use of TownSquare is also governed by our Privacy Policy, which explains how we collect,
                use, and protect your personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Disclaimers</h2>
              <p className="text-gray-700 mb-4">
                TownSquare is provided "as is" without warranties of any kind. We do not guarantee:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>The quality or reliability of services provided by vendors</li>
                <li>Uninterrupted or error-free Platform operation</li>
                <li>The accuracy of information posted by users</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                TownSquare shall not be liable for any indirect, incidental, special, or consequential damages
                arising from your use of the Platform. Our total liability shall not exceed the amount you paid
                us in the past 12 months.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Termination</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to suspend or terminate your account if you violate these Terms of Service.
                You may also delete your account at any time through your account settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We may update these Terms of Service from time to time. We will notify you of significant
                changes by email or through the Platform. Your continued use after changes constitutes
                acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These Terms of Service are governed by the laws of Germany. Any disputes shall be resolved
                in the courts of Germany.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">17. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about these Terms of Service, please contact us at:
              </p>
              <ul className="list-none text-gray-700">
                <li>Email: legal@mytownsquare.co</li>
                <li>Support: support@mytownsquare.co</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}
