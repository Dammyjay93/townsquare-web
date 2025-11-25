'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import QRCode from 'react-qr-code';
import Navigation from '@/components/landing/Navigation';
import Footer from '@/components/landing/Footer';

export default function DownloadPage() {
  const appStoreUrl = process.env.NEXT_PUBLIC_APP_STORE_URL || '';
  const playStoreUrl = process.env.NEXT_PUBLIC_PLAY_STORE_URL || '';
  const isAppStoreReady = appStoreUrl && !appStoreUrl.includes('placeholder');
  const isPlayStoreReady = playStoreUrl && !playStoreUrl.includes('placeholder');

  const [isMobile, setIsMobile] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('https://mytownsquare.co/download');

  useEffect(() => {
    // Detect device type
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

    // Check if iOS
    const ios = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
    setIsIOS(ios);

    // Check if Android
    const android = /android/i.test(userAgent);
    setIsAndroid(android);

    // Check if mobile
    setIsMobile(ios || android);

    // Set the actual URL on client side for QR code
    setDownloadUrl(window.location.href);
  }, []);

  return (
    <>
      <Navigation forceWhiteBg={true} />

      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 pt-28 pb-12">
        {/* Animated gradient shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large primary teal circle - top left */}
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-primary-200/30 to-white/20 rounded-full blur-[150px] animate-float-slow"></div>

          {/* Large secondary teal circle - bottom right */}
          <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-gradient-to-tl from-secondary-200/25 to-white/15 rounded-full blur-[150px] animate-float-medium"></div>

          {/* Medium teal blob - middle left */}
          <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-primary-300/25 to-white/15 rounded-[40%] blur-[140px] animate-float-fast"></div>

          {/* Medium teal circle - top right */}
          <div className="absolute top-10 right-10 w-[450px] h-[450px] bg-gradient-to-bl from-secondary-300/20 to-white/10 rounded-full blur-[140px] animate-float-medium"></div>

          {/* Small purple accent circle - bottom left */}
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-purple-300/25 to-white/15 rounded-full blur-[120px] animate-float-slow"></div>

          {/* Small coral/orange accent - top center */}
          <div className="absolute top-1/4 left-1/2 w-72 h-72 bg-gradient-to-br from-orange-300/20 to-white/10 rounded-full blur-[130px] animate-float-fast"></div>
        </div>

      {/* Main Content - Glass container with teal gradient */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="bg-primary-600 backdrop-blur-xl shadow-2xl pt-10 pb-10 sm:pt-12 sm:pb-12 lg:pt-20 lg:pb-20 mx-4 sm:mx-6 lg:mx-8 px-6 sm:px-8 lg:px-16 relative overflow-hidden" style={{ borderRadius: '16px' }}>
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-12">
            {/* Left Column - Content */}
            <div className="flex-1 space-y-6 sm:space-y-8 relative z-10">
              {/* Available on badges */}
              <div className="flex items-center gap-3 text-sm">
                <span className="font-medium text-white">Available on</span>
                <div className="flex items-center gap-2 text-white">
                  {/* Apple logo */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                  </svg>
                  {/* Google Play logo */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight text-white leading-tight">
                Get the TownSquare app
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl leading-relaxed">
                Find and connect with Nigerian vendors in Berlin. Browse profiles, view their work, and contact them directly on WhatsApp, Instagram, or their website.
              </p>

              {/* Download Button - Smart button on mobile, badges on desktop */}
              <div>
                {isMobile ? (
                  // Mobile: Single download button based on device
                  (isIOS && !isAppStoreReady) || (isAndroid && !isPlayStoreReady) ? (
                    <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/20 rounded-full border border-white/30">
                      <span className="text-base font-semibold text-white whitespace-nowrap">
                        Coming Soon
                      </span>
                      <span className="text-xs text-white/80 bg-white/10 px-3 py-1 rounded-full">
                        {isIOS ? 'App Store' : 'Google Play'}
                      </span>
                    </div>
                  ) : (
                    <a
                      href={isIOS ? appStoreUrl : playStoreUrl}
                      className="group inline-flex items-center gap-0 shadow-lg hover:shadow-xl transition-all duration-100"
                    >
                      <span className="px-8 py-4 text-base font-semibold tracking-tight text-primary-600 bg-white rounded-l-full rounded-r-full transition-all duration-100 group-hover:bg-white/90 whitespace-nowrap">
                        Get the app
                      </span>
                      <span className="flex items-center justify-center w-14 h-14 bg-white rounded-full transition-all duration-100 group-hover:bg-white/90 group-hover:rotate-45">
                        <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </span>
                    </a>
                  )
                ) : (
                  // Desktop: Show both store badges and QR code
                  <div className="flex flex-wrap items-center gap-4">
                    {isAppStoreReady ? (
                      <a
                        href={appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block hover:opacity-80 transition-opacity"
                      >
                        <div className="bg-black text-white px-5 py-2.5 rounded-lg flex items-center gap-2.5">
                          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                          </svg>
                          <div className="text-left">
                            <div className="text-[10px]">Download on the</div>
                            <div className="text-lg font-semibold -mt-0.5">App Store</div>
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="bg-white/20 border border-white/30 text-white px-5 py-2.5 rounded-lg flex items-center gap-2.5 opacity-60 cursor-not-allowed">
                        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                        </svg>
                        <div className="text-left">
                          <div className="text-[10px]">Coming Soon</div>
                          <div className="text-lg font-semibold -mt-0.5">App Store</div>
                        </div>
                      </div>
                    )}

                    {isPlayStoreReady ? (
                      <a
                        href={playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block hover:opacity-80 transition-opacity"
                      >
                        <div className="bg-black text-white px-5 py-2.5 rounded-lg flex items-center gap-2.5">
                          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                          </svg>
                          <div className="text-left">
                            <div className="text-[10px]">GET IT ON</div>
                            <div className="text-lg font-semibold -mt-0.5">Google Play</div>
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="bg-white/20 border border-white/30 text-white px-5 py-2.5 rounded-lg flex items-center gap-2.5 opacity-60 cursor-not-allowed">
                        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                        </svg>
                        <div className="text-left">
                          <div className="text-[10px]">Coming Soon</div>
                          <div className="text-lg font-semibold -mt-0.5">Google Play</div>
                        </div>
                      </div>
                    )}

                    {/* QR Code - Desktop only */}
                    <div className="bg-white px-3 py-2.5 rounded-lg shadow-lg border border-slate-200 flex items-center justify-center" title="Scan to download TownSquare app">
                      <QRCode
                        value={downloadUrl}
                        size={44}
                        level="M"
                        className="w-11 h-11"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - App Preview */}
            <div className="flex-1 relative -mb-10 sm:-mb-12 lg:-mb-20 flex justify-center lg:justify-end">
              <div className="w-[320px] sm:w-[360px] lg:w-[400px] xl:w-[450px]">
                <Image
                  src="/images/app-screenshot.png"
                  alt="TownSquare App Screenshot"
                  width={1170}
                  height={2532}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <Footer />
    </>
  );
}
