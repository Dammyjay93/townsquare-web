import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { supabase } from '@/lib/supabase';
import {
  VendorPublic,
  Category,
  ServiceCategory,
  VendorPhoto,
  VendorProfileData,
} from '@/lib/types';
import VendorProfile from '@/components/VendorProfile';

// ISR: Revalidate every 5 minutes
export const revalidate = 300;

interface Props {
  params: {
    username: string;
  };
}

async function getVendorData(username: string): Promise<VendorProfileData | null> {
  // Consolidated query: Fetch vendor with related data in a single call
  const { data: vendor, error: vendorError } = await supabase
    .from('vendors_public')
    .select(`
      *,
      category:categories(*),
      district:districts(name, city),
      service_categories(*),
      vendor_photos(*)
    `)
    .eq('username', username)
    .order('service_categories(display_order)', { ascending: true })
    .order('vendor_photos(display_order)', { ascending: true })
    .single();

  if (vendorError || !vendor) {
    return null;
  }

  const category: Category | null = vendor.category || null;
  const district: { name: string; city: string } | null = vendor.district || null;
  const serviceCategories: ServiceCategory[] = vendor.service_categories || [];
  const allPhotos: VendorPhoto[] = vendor.vendor_photos || [];

  // Group photos by service category
  const serviceCategoriesWithPhotos = serviceCategories.map((sc: ServiceCategory) => ({
    ...sc,
    photos: allPhotos.filter((p: VendorPhoto) => p.service_category_id === sc.id),
  }));

  return {
    vendor: vendor as VendorPublic,
    category,
    district,
    serviceCategories: serviceCategoriesWithPhotos,
    allPhotos,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getVendorData(params.username);

  if (!data) {
    return {
      title: 'Vendor Not Found | TownSquare',
    };
  }

  const { vendor, category } = data;

  return {
    title: `${vendor.business_name} | TownSquare`,
    description:
      vendor.description || `${vendor.business_name} - ${category?.name || 'Service'} in Berlin`,
    openGraph: {
      title: vendor.business_name,
      description: vendor.description || '',
      images: data.allPhotos.length > 0 ? [data.allPhotos[0].photo_url] : [],
    },
  };
}

export default async function VendorPage({ params }: Props) {
  const data = await getVendorData(params.username);

  if (!data) {
    notFound();
  }

  return <VendorProfile data={data} />;
}
