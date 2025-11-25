'use client';

import Icon from './Icon';

interface Props {
  vendorName: string;
  instagram?: string | null;
  website?: string | null;
  whatsapp?: string | null;
  memberSince?: string | null;
  onInstagramClick: (e: React.MouseEvent) => void;
  onWebsiteClick: (e: React.MouseEvent) => void;
  onWhatsAppClick: () => void;
  onShare?: () => void;
}

// Helper component to render blurred text
const BlurredText = ({ text, className = '' }: { text: string; className?: string }) => {
  return (
    <span className={className} style={{ filter: 'blur(4px)', userSelect: 'none' }}>
      {text}
    </span>
  );
};

// Format date as "Jan 2024"
const formatMemberSince = (dateString: string | null | undefined): string | null => {
  if (!dateString) return null;
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

export default function ActionCard({
  vendorName,
  instagram,
  website,
  whatsapp,
  memberSince,
  onInstagramClick,
  onWebsiteClick,
  onWhatsAppClick,
  onShare,
}: Props) {
  const formattedMemberSince = formatMemberSince(memberSince);
  if (!instagram && !website && !whatsapp) {
    return null;
  }

  return (
    <div
      className="bg-white rounded-xl p-5 sm:p-6"
      style={{
        border: '0.5px solid #e5e7eb',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
      }}
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-base font-bold text-gray-900 mb-1">Connect</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            Ready to book? Contact {vendorName} directly.
          </p>
        </div>
        {onShare && (
          <button
            onClick={onShare}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-white hover:bg-gray-50 transition-colors"
            style={{
              border: '0.5px solid #eeeeec',
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
            }}
            aria-label="Share profile"
          >
            <Icon name="share-social-outline" size={16} color="#78716c" />
          </button>
        )}
      </div>

      {/* Contact Links Card */}
      <div
        className="bg-white rounded-2xl overflow-hidden"
        style={{ border: '0.5px solid #e5e7eb' }}
      >
        {/* WhatsApp Link */}
        {whatsapp && (
          <button
            onClick={onWhatsAppClick}
            className="w-full flex items-center p-4 hover:bg-gray-50 transition-colors touch-manipulation text-left"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mr-3 flex-shrink-0 bg-white"
              style={{
                border: '0.5px solid #eeeeec',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
              }}
            >
              <Icon name="logo-whatsapp" size={18} color="#1a3e46" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">WhatsApp</p>
              <p className="text-xs text-gray-500">Send a message</p>
            </div>
            <Icon name="chevron-forward" size={18} color="#d1d5db" />
          </button>
        )}

        {/* Divider */}
        {whatsapp && instagram && (
          <div className="h-px" style={{ backgroundColor: '#f3f4f6' }} />
        )}

        {/* Instagram Link */}
        {instagram && (
          <a
            href={`https://instagram.com/${instagram.replace('@', '')}`}
            onClick={onInstagramClick}
            className="flex items-center p-4 hover:bg-gray-50 transition-colors touch-manipulation"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mr-3 flex-shrink-0 bg-white"
              style={{
                border: '0.5px solid #eeeeec',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
              }}
            >
              <Icon name="logo-instagram" size={18} color="#1a3e46" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">Instagram</p>
              <BlurredText text={instagram} className="text-xs text-gray-500" />
            </div>
            <Icon name="chevron-forward" size={18} color="#d1d5db" />
          </a>
        )}

        {/* Divider */}
        {((whatsapp || instagram) && website) && (
          <div className="h-px" style={{ backgroundColor: '#f3f4f6' }} />
        )}

        {/* Website Link */}
        {website && (
          <a
            href={website.startsWith('http') ? website : `https://${website}`}
            onClick={onWebsiteClick}
            className="flex items-center p-4 hover:bg-gray-50 transition-colors touch-manipulation"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mr-3 flex-shrink-0 bg-white"
              style={{
                border: '0.5px solid #eeeeec',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
              }}
            >
              <Icon name="globe-outline" size={18} color="#1a3e46" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">Website</p>
              <BlurredText text={website} className="text-xs text-gray-500 block truncate" />
            </div>
            <Icon name="chevron-forward" size={18} color="#d1d5db" />
          </a>
        )}
      </div>

      {/* Status Indicators */}
      <div className="mt-5 -mx-5 sm:-mx-6 px-5 sm:px-6 pt-5" style={{ borderTop: '0.5px solid #eeeeec' }}>
        <div className="flex flex-col gap-3">
          {/* Availability */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="checkmark-circle-outline" size={14} color="#78716c" />
              <span className="text-xs text-gray-500">Status</span>
            </div>
            <div className="flex items-center gap-1.5 bg-primary-50 px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-xs font-medium text-primary-600">Accepting clients</span>
            </div>
          </div>

          {/* Member Since */}
          {formattedMemberSince && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon name="time-outline" size={14} color="#78716c" />
                <span className="text-xs text-gray-500">Member since</span>
              </div>
              <span className="text-xs font-medium text-gray-900">{formattedMemberSince}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
