import { Metadata } from 'next';
import Navigation from '@/components/landing/Navigation';
import Footer from '@/components/landing/Footer';

export const metadata: Metadata = {
  title: 'Impressum - TownSquare',
  description: 'Legal notice and contact information for TownSquare',
};

export default function ImpressumPage() {
  return (
    <>
      <Navigation forceWhiteBg={true} />
      <div className="min-h-screen bg-gray-50 pt-28 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Information in accordance with Section 5 TMG (Telemediengesetz)
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Provider</h2>
              <p className="text-gray-700">
                TownSquare<br />
                [Your Company Legal Name]<br />
                [Street Address]<br />
                [Postal Code] Berlin<br />
                Germany
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700">
                <strong>Email:</strong>{' '}
                <a href="mailto:legal@mytownsquare.co" className="text-primary-600 hover:text-primary-700">
                  legal@mytownsquare.co
                </a>
                <br />
                <strong>Phone:</strong> [Your Contact Phone]
                <br />
                <strong>Website:</strong>{' '}
                <a href="https://mytownsquare.co" className="text-primary-600 hover:text-primary-700">
                  https://mytownsquare.co
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Represented by</h2>
              <p className="text-gray-700">
                [Name of Managing Director / Authorized Representative]
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Register Entry</h2>
              <p className="text-gray-700">
                <strong>Registration Court:</strong> [Court Name]<br />
                <strong>Registration Number:</strong> [Registration Number]<br />
                <strong>VAT ID:</strong> [VAT Identification Number according to §27a UStG]
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Responsible for Content (According to § 55 Abs. 2 RStV)
              </h2>
              <p className="text-gray-700">
                [Name of Person Responsible for Content]<br />
                [Address]<br />
                [Postal Code] Berlin<br />
                Germany
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">EU Dispute Resolution</h2>
              <p className="text-gray-700 mb-4">
                The European Commission provides a platform for online dispute resolution (ODR):{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                .
              </p>
              <p className="text-gray-700">
                We are not willing or obliged to participate in dispute resolution proceedings before a consumer
                arbitration board.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Liability for Content</h2>
              <p className="text-gray-700 mb-4">
                As a service provider, we are responsible for our own content on these pages in accordance with
                general legislation pursuant to Section 7 (1) of the German Telemedia Act (TMG). However,
                according to Sections 8 to 10 of the TMG, we are not obligated to monitor transmitted or stored
                third-party information or to investigate circumstances that indicate illegal activity.
              </p>
              <p className="text-gray-700">
                Obligations to remove or block the use of information under general law remain unaffected.
                However, liability in this regard is only possible from the time of knowledge of a specific
                infringement. Upon notification of such violations, we will remove this content immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Liability for Links</h2>
              <p className="text-gray-700 mb-4">
                Our website contains links to external third-party websites over whose content we have no
                influence. Therefore, we cannot assume any liability for this third-party content. The respective
                provider or operator of the pages is always responsible for the content of the linked pages.
              </p>
              <p className="text-gray-700">
                The linked pages were checked for possible legal violations at the time of linking. Illegal
                content was not recognizable at the time of linking. However, permanent monitoring of the content
                of the linked pages is not reasonable without concrete evidence of an infringement. Upon
                notification of violations, we will remove such links immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Copyright</h2>
              <p className="text-gray-700 mb-4">
                The content and works on these pages created by the site operators are subject to German
                copyright law. The reproduction, editing, distribution, and any kind of exploitation outside the
                limits of copyright require the written consent of the respective author or creator.
              </p>
              <p className="text-gray-700">
                Downloads and copies of this page are only permitted for private, non-commercial use. Insofar as
                the content on this page was not created by the operator, the copyrights of third parties are
                respected. Third-party content is identified as such. Should you nevertheless become aware of a
                copyright infringement, please inform us accordingly. Upon notification of violations, we will
                remove such content immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Image Credits</h2>
              <p className="text-gray-700">
                Images used on this website are either owned by TownSquare, provided by vendors with appropriate
                licenses, or sourced from royalty-free image providers with proper attribution.
              </p>
            </section>

            <section className="mb-8">
              <p className="text-xs text-gray-500">
                <strong>Note:</strong> This Impressum template contains placeholder information marked in [brackets].
                Please replace all placeholder text with your actual company information before publishing.
              </p>
            </section>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}
