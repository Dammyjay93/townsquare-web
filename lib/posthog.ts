// PostHog Analytics Configuration for TownSquare Web
import posthog from 'posthog-js';

export const initPostHog = () => {
  if (typeof window === 'undefined') return;

  // Only initialize if we have a key and haven't already initialized
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY || posthog.__loaded) return;

  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
    person_profiles: 'identified_only',
    capture_pageview: false, // We'll capture manually after consent check
    capture_pageleave: true,
    autocapture: true,
    persistence: 'localStorage+cookie',
    // GDPR: Opt out by default until user consents
    opt_out_capturing_by_default: true,
    // Enable debug mode in development
    debug: process.env.NODE_ENV === 'development',
    // Enable error tracking
    capture_exceptions: true,
    loaded: (posthog) => {
      // Check if user has already consented to cookies
      const consent = localStorage.getItem('cookie-consent');
      if (consent === 'accepted') {
        posthog.opt_in_capturing();
        posthog.capture('$pageview');
      }
    },
  });
};

// Analytics event tracking helpers
export const analytics = {
  // Track custom events
  track: (eventName: string, properties?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && posthog.__loaded) {
      posthog.capture(eventName, properties);
    }
  },

  // Identify user
  identify: (userId: string, properties?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && posthog.__loaded) {
      posthog.identify(userId, properties);
    }
  },

  // Reset user (on logout)
  reset: () => {
    if (typeof window !== 'undefined' && posthog.__loaded) {
      posthog.reset();
    }
  },

  // Enable tracking (when user accepts cookies)
  enableTracking: () => {
    if (typeof window !== 'undefined' && posthog.__loaded) {
      posthog.opt_in_capturing();
    }
  },

  // Disable tracking (when user declines cookies)
  disableTracking: () => {
    if (typeof window !== 'undefined' && posthog.__loaded) {
      posthog.opt_out_capturing();
    }
  },
};

// Pre-defined events for TownSquare Web
export const trackEvents = {
  // Landing page events
  pageView: (pageName: string) => analytics.track('page_view', { page: pageName }),
  appStoreClick: (store: 'ios' | 'android') =>
    analytics.track('app_store_click', { store }),
  ctaClick: (ctaName: string) => analytics.track('cta_click', { cta: ctaName }),

  // Vendor profile events
  vendorProfileView: (vendorId: string, vendorName: string) =>
    analytics.track('vendor_profile_view', { vendor_id: vendorId, vendor_name: vendorName }),
  vendorWhatsAppClick: (vendorId: string, vendorName: string) =>
    analytics.track('vendor_whatsapp_click', { vendor_id: vendorId, vendor_name: vendorName }),
  vendorInstagramClick: (vendorId: string, vendorName: string) =>
    analytics.track('vendor_instagram_click', { vendor_id: vendorId, vendor_name: vendorName }),
  vendorWebsiteClick: (vendorId: string, vendorName: string) =>
    analytics.track('vendor_website_click', { vendor_id: vendorId, vendor_name: vendorName }),
  vendorShareClick: (vendorId: string, vendorName: string) =>
    analytics.track('vendor_share_click', { vendor_id: vendorId, vendor_name: vendorName }),

  // Download banner events
  downloadBannerClick: (source: string) =>
    analytics.track('download_banner_click', { source }),
  downloadBannerDismiss: (source: string) =>
    analytics.track('download_banner_dismiss', { source }),

  // Navigation events
  navClick: (linkName: string, location: string) =>
    analytics.track('nav_click', { link_name: linkName, location }),
  heroCtaClick: () => analytics.track('hero_cta_click'),
  vendorCtaClick: () => analytics.track('vendor_cta_click'),

  // Footer events
  footerSocialClick: (platform: string) =>
    analytics.track('footer_social_click', { platform }),
};

export default posthog;
