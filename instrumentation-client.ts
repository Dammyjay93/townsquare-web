// Sentry Client-Side Configuration for TownSquare Web
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Environment
  environment: process.env.NODE_ENV,

  // Performance Monitoring
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,

  // Session Replay (only in production)
  replaysSessionSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 0,
  replaysOnErrorSampleRate: 1.0,

  // Enable debug in development
  debug: process.env.NODE_ENV === 'development',

  // Filter out common non-actionable errors
  ignoreErrors: [
    // Browser extensions
    /extensions\//i,
    /^chrome:\/\//i,
    // Network errors
    'NetworkError',
    'Network request failed',
    'Failed to fetch',
    // User aborted
    'AbortError',
    // Resize observer
    'ResizeObserver loop limit exceeded',
  ],

  // Add release info
  release: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA,

  // Sanitize PII before sending to Sentry
  beforeSend(event) {
    // Redact email addresses
    if (event.request?.url) {
      event.request.url = event.request.url.replace(
        /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
        '[email]'
      );
    }

    // Redact phone numbers (international format) from query string
    if (event.request?.query_string && typeof event.request.query_string === 'string') {
      event.request.query_string = event.request.query_string.replace(
        /(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g,
        '[phone]'
      );
    }

    // Redact from breadcrumbs
    if (event.breadcrumbs) {
      event.breadcrumbs = event.breadcrumbs.map((breadcrumb) => {
        if (breadcrumb.message) {
          breadcrumb.message = breadcrumb.message.replace(
            /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
            '[email]'
          );
        }
        return breadcrumb;
      });
    }

    return event;
  },

  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
});

// Export hook for Next.js router transition instrumentation
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
