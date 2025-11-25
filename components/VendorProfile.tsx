'use client';

import { VendorProfileData } from '@/lib/types';
import { useState } from 'react';
import ServiceCategoryCard from './ServiceCategoryCard';
import PhotoGallery from './PhotoGallery';
import Icon from './Icon';
import AppPromptModal from './AppPromptModal';
import ActionCard from './ActionCard';
import Navigation from './landing/Navigation';
import QRCode from 'react-qr-code';

interface Props {
  data: VendorProfileData;
  rating?: number;
  reviewCount?: number;
  verified?: boolean;
}

export default function VendorProfile({ data, rating, reviewCount, verified = false }: Props) {
  const { vendor, category, district, serviceCategories, allPhotos } = data;
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [showBanner, setShowBanner] = useState(true);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    actionType: 'whatsapp' | 'instagram' | 'website';
    pendingAction: (() => void) | null;
  }>({
    isOpen: false,
    actionType: 'whatsapp',
    pendingAction: null,
  });

  const downloadUrl =
    typeof window !== 'undefined'
      ? `${window.location.protocol}//${window.location.host}/download`
      : '/download';

  const handleWhatsAppClick = () => {
    if (vendor.whatsapp) {
      const cleanNumber = vendor.whatsapp.replace(/[^0-9]/g, '');
      const action = () => {
        window.open(
          `https://wa.me/${cleanNumber}?text=Hi ${vendor.business_name}, I found you on TownSquare!`,
          '_blank'
        );
      };

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

      setModalState({
        isOpen: true,
        actionType: 'website',
        pendingAction: action,
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation forceWhiteBg />

      {/* Main Content - with top padding for fixed nav */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-32 space-y-6 sm:space-y-8">
        {/* Gallery - Full Width */}
        {allPhotos.length > 0 && (
          <PhotoGallery
            photos={allPhotos}
            businessName={vendor.business_name}
            selectedIndex={selectedPhotoIndex}
            onSelectPhoto={setSelectedPhotoIndex}
            logoUrl={vendor.logo_url}
          />
        )}

        {/* Content Grid */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Main Content - Left Column */}
          <div className="flex-1 min-w-0 space-y-6">
            {/* Header Info */}
            <div className="space-y-3">
              {/* Badges Row */}
              {(category || verified) && (
                <div className="flex items-center gap-2 flex-wrap">
                  {category && (
                    <span className="px-2.5 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs text-gray-700">
                      {category.name}
                    </span>
                  )}
                  {verified && (
                    <span className="inline-flex items-center gap-1 text-success-700 text-xs font-medium px-2 py-0.5 rounded-full bg-success-50">
                      <Icon name="shield-checkmark" size={12} color="#15803d" /> Verified
                    </span>
                  )}
                </div>
              )}

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                {vendor.business_name}
              </h1>

              {/* Location + Rating Row */}
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                {district && (
                  <div className="flex items-center gap-1">
                    <Icon name="location-outline" size={14} color="#78716c" />
                    <span>
                      {district.name}
                      {vendor.postal_code && `, ${vendor.postal_code}`}
                      {district.city && ` ${district.city}`}
                    </span>
                  </div>
                )}
                {rating && reviewCount && (
                  <>
                    <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full" />
                    <div className="flex items-center gap-1 text-gray-900 font-medium">
                      <Icon name="star" size={14} color="#1a3e46" />
                      <span>{rating}</span>
                      <span className="text-gray-500 font-normal underline decoration-gray-300 underline-offset-2">
                        ({reviewCount} reviews)
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* About Section */}
            {vendor.description && (
              <div className="pt-6" style={{ borderTop: '0.5px solid #eeeeec' }}>
                <h2 className="text-base font-bold text-gray-900 mb-2">About</h2>
                <p className="text-sm text-gray-700 leading-relaxed">{vendor.description}</p>
              </div>
            )}

            {/* Specialties */}
            {vendor.services && vendor.services.length > 0 && (
              <div className="pt-6" style={{ borderTop: '0.5px solid #eeeeec' }}>
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
              <div className="pt-6" style={{ borderTop: '0.5px solid #eeeeec' }}>
                <h2 className="text-base font-bold text-gray-900 mb-3">Services & Pricing</h2>
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
            )}

            {/* Mobile: ActionCard (shown inline on mobile) */}
            {(vendor.instagram || vendor.website || vendor.whatsapp) && (
              <div className="md:hidden pt-6" style={{ borderTop: '0.5px solid #eeeeec' }}>
                <ActionCard
                  vendorName={vendor.business_name}
                  instagram={vendor.instagram}
                  website={vendor.website}
                  whatsapp={vendor.whatsapp}
                  memberSince={vendor.approved_at}
                  onInstagramClick={handleInstagramClick}
                  onWebsiteClick={handleWebsiteClick}
                  onWhatsAppClick={handleWhatsAppClick}
                  onShare={handleShare}
                />
              </div>
            )}
          </div>

          {/* Sidebar - Right Column (Desktop only) */}
          <div className="hidden md:block w-[380px] flex-shrink-0 relative">
            <div className="sticky top-24">
              {(vendor.instagram || vendor.website || vendor.whatsapp) && (
                <ActionCard
                  vendorName={vendor.business_name}
                  instagram={vendor.instagram}
                  website={vendor.website}
                  whatsapp={vendor.whatsapp}
                  memberSince={vendor.approved_at}
                  onInstagramClick={handleInstagramClick}
                  onWebsiteClick={handleWebsiteClick}
                  onWhatsAppClick={handleWhatsAppClick}
                  onShare={handleShare}
                />
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 px-4 z-40">
          <div className="max-w-screen-xl mx-auto flex items-center justify-center gap-3 relative">
            <button
              onClick={() => window.open(downloadUrl, '_blank')}
              className="flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer hidden sm:block"
              aria-label="Download app"
            >
              <div className="inline-block p-1 bg-white border border-gray-200 rounded-sm">
                <QRCode value={downloadUrl} size={32} fgColor="#1F4A54" />
              </div>
            </button>
            <div className="flex flex-col justify-center">
              <p className="text-xs sm:text-sm font-semibold text-gray-900">
                Browse more vendors in the app
              </p>
              <p className="text-2xs sm:text-xs text-gray-500">
                <a href={downloadUrl} className="hover:underline">
                  Download TownSquare
                </a>
              </p>
            </div>
            <button
              onClick={() => setShowBanner(false)}
              className="absolute right-0 sm:right-2 p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close banner"
            >
              <Icon name="close" size={18} color="#78716c" />
            </button>
          </div>
        </div>
      )}

      {/* App Prompt Modal */}
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
