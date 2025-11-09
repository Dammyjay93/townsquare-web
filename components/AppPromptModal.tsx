'use client';

import { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import Icon from './Icon';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
  vendorName: string;
  vendorUsername: string;
  actionType: 'whatsapp' | 'instagram' | 'website';
}

export default function AppPromptModal({
  isOpen,
  onClose,
  onContinue,
  vendorName,
  vendorUsername,
  actionType,
}: Props) {
  const [isDesktop, setIsDesktop] = useState(false);

  const appStoreUrl = process.env.NEXT_PUBLIC_APP_STORE_URL || 'https://apps.apple.com';
  const playStoreUrl = process.env.NEXT_PUBLIC_PLAY_STORE_URL || 'https://play.google.com';

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const deepLink = `townsquare://vendor/${vendorUsername}`;

  const getActionText = () => {
    switch (actionType) {
      case 'whatsapp':
        return `message ${vendorName}`;
      case 'instagram':
        return `follow ${vendorName} on Instagram`;
      case 'website':
        return `visit ${vendorName}'s website`;
      default:
        return `connect with ${vendorName}`;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-xl max-w-md w-full mx-4 p-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <Icon name="close" size={20} color="#6b7280" />
        </button>

        {/* Content */}
        <div className="text-center">
          {/* App Icon */}
          <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-xl">TS</span>
          </div>

          {/* Heading */}
          <h2 className="text-xl font-bold text-gray-900 mb-2">Get the TownSquare App</h2>
          <p className="text-sm text-gray-600 mb-6">
            Download TownSquare to {getActionText()} and discover more vendors
          </p>

          {isDesktop ? (
            // Desktop: QR Code
            <div className="mb-6">
              <div className="inline-block p-4 bg-white border-2 border-gray-200 rounded-xl">
                <QRCode value={deepLink} size={180} />
              </div>
              <p className="text-xs text-gray-500 mt-3">Scan with your phone camera to download</p>
            </div>
          ) : (
            // Mobile: Download buttons
            <div className="space-y-3 mb-6">
              {/iPhone|iPad|iPod/.test(navigator.userAgent) ? (
                <a
                  href={appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-4 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
                >
                  Download on App Store
                </a>
              ) : (
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-4 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
                >
                  Download on Google Play
                </a>
              )}
            </div>
          )}

          {/* Continue to web action */}
          <button
            onClick={onContinue}
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Continue to{' '}
            {actionType === 'whatsapp'
              ? 'WhatsApp'
              : actionType === 'instagram'
                ? 'Instagram'
                : 'website'}
          </button>
        </div>
      </div>
    </div>
  );
}
