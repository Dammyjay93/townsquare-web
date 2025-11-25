'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import posthog from 'posthog-js';
import { initPostHog } from '@/lib/posthog';

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    initPostHog();
  }, []);

  // Track page views on route changes (only if user has consented)
  useEffect(() => {
    if (pathname && posthog.__loaded) {
      // GDPR: Only track if user has opted in
      const hasOptedIn = posthog.has_opted_in_capturing();
      if (hasOptedIn) {
        let url = window.origin + pathname;
        if (searchParams?.toString()) {
          url = url + '?' + searchParams.toString();
        }
        posthog.capture('$pageview', { $current_url: url });
      }
    }
  }, [pathname, searchParams]);

  return <>{children}</>;
}
