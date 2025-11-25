// Sentry Server-Side Configuration for TownSquare Web
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Environment
  environment: process.env.NODE_ENV,

  // Performance Monitoring
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,

  // Enable debug in development
  debug: process.env.NODE_ENV === 'development',

  // Add release info
  release: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA,
});
