'use client';

import { useEffect } from 'react';
import { Warning, ArrowCounterClockwise } from 'phosphor-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
          <div className="flex flex-col items-center text-center">
            {/* Error Icon */}
            <div className="w-16 h-16 bg-error-100 rounded-full flex items-center justify-center mb-6">
              <Warning className="h-8 w-8 text-error-600" weight="fill" />
            </div>

            {/* Heading */}
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Something went wrong
            </h1>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-8 max-w-sm">
              We encountered an unexpected error. Don't worry, our team has been notified and we're working on a fix.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <button
                onClick={reset}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                <ArrowCounterClockwise className="h-5 w-5" />
                Try again
              </button>
              <a
                href="/"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Go home
              </a>
            </div>

            {/* Error Details (Development only) */}
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-6 w-full text-left">
                <summary className="cursor-pointer text-xs text-gray-500 hover:text-gray-700 font-medium">
                  Error details (dev only)
                </summary>
                <pre className="mt-2 p-4 bg-gray-50 rounded text-xs text-gray-700 overflow-auto max-h-40">
                  {error.message}
                  {error.stack && `\n\n${error.stack}`}
                </pre>
              </details>
            )}
          </div>
        </div>

        {/* Support Contact */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            Need help?{' '}
            <a
              href="mailto:support@mytownsquare.co"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
