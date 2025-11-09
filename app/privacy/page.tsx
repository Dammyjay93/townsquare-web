import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - TownSquare',
  description: 'Privacy Policy for TownSquare platform',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> November 9, 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                TownSquare ("we," "our," or "us") respects your privacy and is committed to protecting your
                personal data. This Privacy Policy explains how we collect, use, store, and share your information
                when you use our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">2.1 Information You Provide</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Account Information:</strong> Name, email address, phone number, and password</li>
                <li><strong>Profile Information:</strong> Profile picture, bio, business details (for vendors)</li>
                <li><strong>Service Information:</strong> Service descriptions, pricing, availability, photos</li>
                <li><strong>Communication Data:</strong> Messages sent through the platform</li>
                <li><strong>Payment Information:</strong> Payment details processed through our payment providers</li>
                <li><strong>Reviews and Ratings:</strong> Content you post in reviews and ratings</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">2.2 Automatically Collected Information</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Usage Data:</strong> How you interact with the platform</li>
                <li><strong>Device Information:</strong> IP address, browser type, device type, operating system</li>
                <li><strong>Location Data:</strong> Approximate location based on IP address or precise location if you grant permission</li>
                <li><strong>Cookies and Similar Technologies:</strong> See our Cookie Policy section below</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Provide Services:</strong> Enable you to find services, book appointments, and communicate with vendors</li>
                <li><strong>Process Transactions:</strong> Handle payments and bookings</li>
                <li><strong>Improve Platform:</strong> Analyze usage patterns to enhance user experience</li>
                <li><strong>Communication:</strong> Send booking confirmations, updates, and important notices</li>
                <li><strong>Marketing:</strong> Send promotional materials (with your consent)</li>
                <li><strong>Safety and Security:</strong> Detect fraud, enforce terms, and protect users</li>
                <li><strong>Legal Compliance:</strong> Comply with applicable laws and regulations</li>
                <li><strong>Customer Support:</strong> Respond to your inquiries and resolve issues</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Legal Basis for Processing (GDPR)</h2>
              <p className="text-gray-700 mb-4">
                Under the General Data Protection Regulation (GDPR), we process your data based on:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Contract:</strong> Processing necessary to fulfill our services to you</li>
                <li><strong>Consent:</strong> You have given explicit consent for specific purposes</li>
                <li><strong>Legitimate Interests:</strong> Processing necessary for our legitimate business interests</li>
                <li><strong>Legal Obligation:</strong> Processing required by law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Information Sharing</h2>
              <p className="text-gray-700 mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Service Providers:</strong> Vendors you book services with</li>
                <li><strong>Third-Party Services:</strong> Payment processors, email services, analytics providers</li>
                <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect rights and safety</li>
                <li><strong>With Your Consent:</strong> Any other sharing you explicitly authorize</li>
              </ul>
              <p className="text-gray-700 mb-4">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We retain your personal data only as long as necessary to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide our services to you</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes</li>
                <li>Enforce our agreements</li>
              </ul>
              <p className="text-gray-700 mb-4">
                When you delete your account, we will delete or anonymize your personal information within 90 days,
                except where we are required to retain it by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights</h2>
              <p className="text-gray-700 mb-4">Under GDPR and other privacy laws, you have the right to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
                <li><strong>Restriction:</strong> Limit how we use your data</li>
                <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
                <li><strong>Object:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for processing at any time</li>
              </ul>
              <p className="text-gray-700 mb-4">
                To exercise these rights, contact us at privacy@mytownsquare.co.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal data,
                including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication</li>
                <li>Staff training on data protection</li>
              </ul>
              <p className="text-gray-700 mb-4">
                However, no method of transmission over the internet is 100% secure. We cannot guarantee
                absolute security of your data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. International Data Transfers</h2>
              <p className="text-gray-700 mb-4">
                Your data may be transferred to and processed in countries outside your country of residence.
                We ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved
                by the European Commission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our platform</li>
                <li>Improve our services</li>
                <li>Deliver personalized content</li>
              </ul>
              <p className="text-gray-700 mb-4">
                You can control cookies through your browser settings. Note that disabling cookies may affect
                platform functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                TownSquare is not intended for users under 18 years of age. We do not knowingly collect
                information from children. If you believe we have collected information from a child, please
                contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Third-Party Links</h2>
              <p className="text-gray-700 mb-4">
                Our platform may contain links to third-party websites. We are not responsible for the privacy
                practices of these websites. We encourage you to read their privacy policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of significant changes
                by email or through a notice on the platform. The "Last Updated" date at the top indicates when
                the policy was last revised.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Data Protection Officer</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about how we process your personal data, you can contact our Data
                Protection Officer at:
              </p>
              <ul className="list-none text-gray-700 mb-4">
                <li>Email: privacy@mytownsquare.co</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Supervisory Authority</h2>
              <p className="text-gray-700 mb-4">
                If you are located in the European Economic Area, you have the right to lodge a complaint with
                your local data protection authority if you believe we have not complied with applicable data
                protection laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <ul className="list-none text-gray-700">
                <li>Email: privacy@mytownsquare.co</li>
                <li>Support: support@mytownsquare.co</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
