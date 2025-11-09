'use client';

import { VendorProfileData } from '@/lib/types';
import { useState, useEffect } from 'react';
import ServiceCategoryCard from './ServiceCategoryCard';
import PhotoGallery from './PhotoGallery';
import Icon from './Icon';
import AppPromptModal from './AppPromptModal';
import QRCode from 'react-qr-code';

interface Props {
  data: VendorProfileData;
}

export default function VendorProfile({ data }: Props) {
  const { vendor, category, serviceCategories, allPhotos } = data;
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    actionType: 'whatsapp' | 'instagram' | 'website';
    pendingAction: (() => void) | null;
  }>({
    isOpen: false,
    actionType: 'whatsapp',
    pendingAction: null,
  });

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 1024);
      setIsMobile(window.innerWidth < 768);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const handleWhatsAppClick = () => {
    if (vendor.whatsapp) {
      const cleanNumber = vendor.whatsapp.replace(/[^0-9]/g, '');
      const action = () => {
        window.open(
          `https://wa.me/${cleanNumber}?text=Hi ${vendor.business_name}, I found you on TownSquare!`,
          '_blank'
        );
      };

      // Always show modal to prompt app download
      setModalState({
        isOpen: true,
        actionType: 'whatsapp',
        pendingAction: action,
      });
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: vendor.business_name,
      text: `Check out ${vendor.business_name} on TownSquare!`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleModalClose = () => {
    setModalState({
      isOpen: false,
      actionType: 'whatsapp',
      pendingAction: null,
    });
  };

  const handleModalContinue = () => {
    if (modalState.pendingAction) {
      modalState.pendingAction();
    }
    handleModalClose();
  };

  const handleInstagramClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (vendor.instagram) {
      const instagram = vendor.instagram;
      const action = () => {
        window.open(`https://instagram.com/${instagram.replace('@', '')}`, '_blank');
      };

      // Always show modal to prompt app download
      setModalState({
        isOpen: true,
        actionType: 'instagram',
        pendingAction: action,
      });
    }
  };

  const handleWebsiteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (vendor.website) {
      const website = vendor.website;
      const action = () => {
        window.open(website.startsWith('http') ? website : `https://${website}`, '_blank');
      };

      // Always show modal to prompt app download
      setModalState({
        isOpen: true,
        actionType: 'website',
        pendingAction: action,
      });
    }
  };

  // Helper component to render blurred text
  const BlurredText = ({ text, className = '' }: { text: string; className?: string }) => {
    return (
      <span className={className} style={{ filter: 'blur(4px)', userSelect: 'none' }}>
        {text}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Logo and Share Button */}
      <header className="pt-6 sm:pt-8 pb-4">
        <div className="max-w-[960px] mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-bold text-xs">TS</span>
              </div>
              <span className="text-base sm:text-lg font-bold text-gray-900">Townsquare</span>
            </div>
            {/* Share Button - Increased touch target */}
            <button
              onClick={handleShare}
              className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow touch-manipulation"
              aria-label="Share profile"
            >
              <Icon name="share-social-outline" size={20} color="#1a3e46" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content - Responsive layout */}
      <div className="max-w-[960px] mx-auto px-4 lg:px-6 pb-4 lg:pb-6">
        <div className="bg-white rounded-xl shadow-sm w-full" style={{ border: '0.5px solid #e5e7eb' }}>
          {/* Mobile: Single column with natural flow */}
          {/* Desktop: Two columns with fixed height */}
          <div
            className={`${
              isDesktop ? 'grid grid-cols-2 gap-6 overflow-hidden' : 'flex flex-col'
            } pt-5 px-5 lg:pt-6 lg:px-6`}
            style={isDesktop ? { height: 'calc(100vh - 220px)', maxHeight: '800px' } : {}}
          >
            {/* Mobile: Business Info First (better UX) */}
            {!isDesktop && (
              <div className="mb-5 order-1">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{vendor.business_name}</h1>
                {vendor.location && (
                  <div className="mb-2">
                    <p className="text-sm text-gray-600">{vendor.location}</p>
                  </div>
                )}
                {category && (
                  <div className="inline-block">
                    <span className="px-2.5 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs text-gray-700">
                      {category.name}
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Photo Gallery */}
            <div className={`${!isDesktop ? 'mb-5 order-2' : 'overflow-hidden'}`}>
              {allPhotos.length > 0 && (
                <PhotoGallery
                  photos={allPhotos}
                  businessName={vendor.business_name}
                  selectedIndex={selectedPhotoIndex}
                  onSelectPhoto={setSelectedPhotoIndex}
                  logoUrl={vendor.logo_url}
                />
              )}
            </div>

            {/* Content - Scrollable on desktop, natural flow on mobile */}
            <div className={`${isDesktop ? 'overflow-y-auto pr-2' : 'order-3'}`}>
              {/* Desktop: Business Info */}
              {isDesktop && (
                <div className="mb-5">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">{vendor.business_name}</h1>
                  {vendor.location && (
                    <div className="mb-2">
                      <p className="text-sm text-gray-600">{vendor.location}</p>
                    </div>
                  )}
                  {category && (
                    <div className="inline-block">
                      <span className="px-2.5 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs text-gray-700">
                        {category.name}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* About Section */}
              {vendor.description && (
                <div className="mb-5">
                  <h2 className="text-base font-bold text-gray-900 mb-2">About</h2>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {vendor.description}
                  </p>
                </div>
              )}

              {/* Specialties */}
              {vendor.services && vendor.services.length > 0 && (
                <div className="mb-5">
                  <h2 className="text-base font-bold text-gray-900 mb-3">Specialties</h2>
                  <div className="flex flex-wrap gap-1.5">
                    {vendor.services.slice(0, 10).map((service, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 border border-gray-200 rounded-full px-2.5 py-1 text-xs text-gray-700"
                      >
                        {service}
                      </span>
                    ))}
                    {vendor.services.length > 10 && (
                      <span className="bg-gray-100 border border-gray-200 rounded-full px-2.5 py-1 text-xs text-gray-600">
                        +{vendor.services.length - 10} more
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Services & Pricing */}
              {serviceCategories.length > 0 && (
                <div className="mb-5">
                  <div className="mb-3">
                    <h2 className="text-base font-bold text-gray-900">Services & Pricing</h2>
                  </div>
                  <div>
                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                      {serviceCategories.map((serviceCategory, index) => (
                        <div key={serviceCategory.id}>
                          <ServiceCategoryCard serviceCategory={serviceCategory} />
                          {index < serviceCategories.length - 1 && (
                            <div className="h-px" style={{ backgroundColor: '#eeeeec' }} />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Connect Section */}
              {(vendor.instagram || vendor.website) && (
                <div className="mb-5">
                  <h2 className="text-base font-bold text-gray-900 mb-3">Connect</h2>
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                    {vendor.instagram && (
                      <>
                        <a
                          href={`https://instagram.com/${vendor.instagram.replace('@', '')}`}
                          onClick={handleInstagramClick}
                          className="flex flex-row items-center p-4 hover:bg-gray-50 transition-colors active:bg-gray-100 touch-manipulation"
                        >
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-white"
                            style={{
                              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                              borderWidth: 0.5,
                              borderColor: '#eeeeec',
                              borderStyle: 'solid',
                            }}
                          >
                            <Icon name="logo-instagram" size={20} color="#1a3e46" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-500 mb-1">Instagram</p>
                            <BlurredText text={vendor.instagram} className="text-base text-gray-900" />
                          </div>
                          <Icon name="chevron-forward" size={20} color="#a8a29e" />
                        </a>
                        {vendor.website && (
                          <div className="h-px" style={{ backgroundColor: '#eeeeec' }} />
                        )}
                      </>
                    )}

                    {vendor.website && (
                      <a
                        href={
                          vendor.website.startsWith('http')
                            ? vendor.website
                            : `https://${vendor.website}`
                        }
                        onClick={handleWebsiteClick}
                        className="flex flex-row items-center p-4 hover:bg-gray-50 transition-colors active:bg-gray-100 touch-manipulation"
                      >
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-white"
                          style={{
                            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                            borderWidth: 0.5,
                            borderColor: '#eeeeec',
                            borderStyle: 'solid',
                          }}
                        >
                          <Icon name="globe-outline" size={20} color="#1a3e46" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-500 mb-1">Website</p>
                          <BlurredText text={vendor.website} className="text-base text-gray-900 block truncate" />
                        </div>
                        <Icon
                          name="chevron-forward"
                          size={20}
                          color="#a8a29e"
                          className="flex-shrink-0"
                        />
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* WhatsApp Button - Better touch target */}
              {vendor.whatsapp && (
                <div className="mt-6 mb-5">
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold text-sm hover:bg-gray-800 active:opacity-80 transition-all touch-manipulation"
                    style={{ height: '48px', minHeight: '48px' }}
                  >
                    <Icon name="logo-whatsapp" size={20} color="white" className="mr-2" />
                    Send a message
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Footer - Smart rendering based on device */}
          <div className="border-t border-gray-100 py-3 px-4">
            {isDesktop ? (
              // Desktop: QR Code + Powered by
              <div className="flex items-center justify-center gap-3">
                <div className="flex-shrink-0">
                  <div className="inline-block p-1.5 bg-white border border-gray-200 rounded-sm">
                    <QRCode value={`townsquare://vendor/${vendor.username}`} size={40} />
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-gray-900">Get the TownSquare App</p>
                  <p className="text-xs text-gray-500">
                    Powered by <span className="font-semibold text-gray-700">TownSquare</span>
                  </p>
                </div>
              </div>
            ) : (
              // Mobile: Simple powered by text
              <div className="text-center">
                <p className="text-xs text-gray-500">
                  Powered by <span className="font-semibold text-gray-700">TownSquare</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* App Prompt Modal - Shown on all devices to encourage app download */}
      <AppPromptModal
        isOpen={modalState.isOpen}
        onClose={handleModalClose}
        onContinue={handleModalContinue}
        vendorName={vendor.business_name}
        vendorUsername={vendor.username}
        actionType={modalState.actionType}
      />
    </div>
  );
}
