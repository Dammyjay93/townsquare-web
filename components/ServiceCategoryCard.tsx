import Image from 'next/image';
import { ServiceCategory, VendorPhoto } from '@/lib/types';
import Icon from './Icon';

interface Props {
  serviceCategory: ServiceCategory & { photos: VendorPhoto[] };
}

function formatDuration(duration: string): string {
  // Convert duration like "PT45M" to "45 mins" or "PT1H30M" to "1h 30mins"
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
  if (!match) return duration;

  const hours = match[1] ? parseInt(match[1]) : 0;
  const minutes = match[2] ? parseInt(match[2]) : 0;

  if (hours && minutes) {
    return `${hours}h ${minutes}mins`;
  } else if (hours) {
    return `${hours}h`;
  } else if (minutes) {
    return `${minutes} mins`;
  }
  return duration;
}

export default function ServiceCategoryCard({ serviceCategory }: Props) {
  const hasVariants = serviceCategory.variants && serviceCategory.variants.length > 0;

  return (
    <div className="p-4">
      {/* Service Info */}
      <div className="mb-3">
        {/* Service Name and Price - Same Line (mobile: text-lg font-semibold) */}
        <div className="flex items-start justify-between mb-1">
          <h3 className="text-lg font-semibold text-gray-900 flex-1 mr-3">
            {serviceCategory.name}
          </h3>
          {!hasVariants && serviceCategory.price && (
            <span className="text-lg font-bold text-gray-900">
              €{serviceCategory.price.replace(/[€\s]/g, '')}
            </span>
          )}
        </div>

        {/* Duration if no variants (mobile: flex-row items-center mb-2) */}
        {!hasVariants && serviceCategory.duration && (
          <div className="flex items-center mb-2">
            <Icon name="time-outline" size={16} color="#78716c" />
            <span className="text-base text-gray-600 ml-1">
              {formatDuration(serviceCategory.duration)}
            </span>
          </div>
        )}

        {/* Description (mobile: text-base text-gray-700 leading-5) */}
        {serviceCategory.description && (
          <p className="text-base text-gray-700 mt-1 leading-5 line-clamp-2">
            {serviceCategory.description}
          </p>
        )}

        {/* Variants (mobile: mt-2) */}
        {hasVariants && serviceCategory.variants && (
          <div className="mt-2">
            {serviceCategory.variants.map((variant, index) => (
              <div key={index} className="flex items-start justify-between mb-2">
                <div className="flex-1 mr-3">
                  <p className="text-base font-medium text-gray-900">
                    {variant.size || variant.type || 'Option'}
                  </p>
                  {variant.description && (
                    <p className="text-sm text-gray-600 mt-0.5">{variant.description}</p>
                  )}
                </div>
                <span className="text-base font-bold text-gray-900">
                  €{variant.price.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Photos Row (mobile: flex-row gap-2, 60px x 60px) */}
      {serviceCategory.photos.length > 0 && (
        <div className="flex gap-2">
          {serviceCategory.photos.slice(0, 3).map((photo, photoIndex) => (
            <div
              key={photo.id || photoIndex}
              className="relative w-[60px] h-[60px] rounded-md border overflow-hidden flex-shrink-0"
              style={{ borderColor: '#eeeeec' }}
            >
              <Image
                src={photo.photo_url}
                alt={serviceCategory.name}
                fill
                className="object-cover"
              />
            </div>
          ))}
          {serviceCategory.photos.length > 3 && (
            <div
              className="w-[60px] h-[60px] rounded-md border flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: '#f5f5f4', borderColor: '#eeeeec' }}
            >
              <span className="text-sm font-semibold text-gray-600">
                +{serviceCategory.photos.length - 3}
              </span>
            </div>
          )}
        </div>
      )}

      {serviceCategory.photos.length === 0 && (
        <p className="text-xs text-gray-500">No photos yet</p>
      )}
    </div>
  );
}
