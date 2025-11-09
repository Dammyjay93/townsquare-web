// TownSquare Icon Component - Phosphor Icons Wrapper (Web)
// Matches mobile implementation exactly

import React from 'react';
import * as Phosphor from 'phosphor-react';

// Icon name mapping from Ionicons to Phosphor (same as mobile)
const iconNameMap: Record<string, string> = {
  // Navigation
  'arrow-back': 'ArrowLeft',
  'arrow-forward': 'ArrowRight',
  'chevron-back': 'CaretLeft',
  'chevron-forward': 'CaretRight',
  'chevron-down': 'CaretDown',
  'chevron-up': 'CaretUp',

  // Actions
  close: 'X',
  'close-circle': 'XCircle',
  'x-circle': 'XCircle',
  checkmark: 'Check',
  'checkmark-circle': 'CheckCircle',

  // Common
  search: 'MagnifyingGlass',
  heart: 'Heart',
  'heart-outline': 'Heart',
  star: 'Star',

  // Communication
  'logo-instagram': 'InstagramLogo',
  'logo-whatsapp': 'WhatsappLogo',
  globe: 'Globe',
  'globe-outline': 'Globe',
  'share-social-outline': 'ShareNetwork',
  'share-social': 'ShareNetwork',

  // Time
  time: 'Clock',
  'time-outline': 'Clock',
};

export type IconWeight = 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  weight?: IconWeight;
  className?: string;
}

const ICON_FALLBACK = {
  component: Phosphor.Question,
  key: 'Question',
};

export default function Icon({
  name,
  size = 24,
  color = '#000000',
  weight = 'regular',
  className,
}: IconProps) {
  const iconLibrary = Phosphor as unknown as Record<
    string,
    React.ComponentType<Phosphor.IconProps>
  >;

  // Map the icon name
  const mappedName = iconNameMap[name] || name;

  // Resolve the icon component
  const ResolvedIcon = iconLibrary[mappedName] || ICON_FALLBACK.component;

  if (!iconLibrary[mappedName]) {
    console.warn(
      `Icon "${mappedName}" not found in Phosphor. Using fallback "${ICON_FALLBACK.key}".`
    );
  }

  return <ResolvedIcon size={size} color={color} weight={weight} className={className} />;
}

export type IconName = keyof typeof iconNameMap | string;
