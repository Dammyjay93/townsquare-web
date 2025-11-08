'use client';

import { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import Icon from './Icon';

interface Props {
  vendorUsername: string;
}

export default function AppDownloadBanner({ vendorUsername }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if banner was dismissed
    const dismissed = localStorage.getItem('townsquare_banner_dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }

    // Detect device type
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('townsquare_banner_dismissed', 'true');
  };

  if (!isVisible) return null;

  // Deep link URL for the vendor profile
  const deepLink = `townsquare://vendor/${vendorUsername}`;
  const appStoreUrl = 'https://apps.apple.com/app/townsquare'; // Update with actual URL
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.townsquare'; // Update with actual URL

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-[960px] mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {isDesktop ? (
            // Desktop: QR Code + Message
            <>
              <div className="flex items-center gap-4 flex-1">
                <div className="flex-shrink-0 p-2 bg-white border border-gray-200 rounded-lg">
                  <QRCode value={deepLink} size={64} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Get the TownSquare App</p>
                  <p className="text-xs text-gray-600">
                    Scan to download and book vendors directly
                  </p>
                </div>
              </div>
            </>
          ) : (
            // Mobile: Direct download button
            <>
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">TS</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900">Get the TownSquare App</p>
                  <p className="text-xs text-gray-600">Book vendors and save favorites</p>
                </div>
              </div>
              <a
                href={/iPhone|iPad|iPod/.test(navigator.userAgent) ? appStoreUrl : playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
              >
                Download
              </a>
            </>
          )}

          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Dismiss banner"
          >
            <Icon name="close" size={20} color="#6b7280" />
          </button>
        </div>
      </div>
    </div>
  );
}
