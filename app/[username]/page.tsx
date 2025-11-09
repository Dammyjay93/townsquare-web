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

interface Props {
  params: {
    username: string;
  };
}

async function getVendorData(username: string): Promise<VendorProfileData | null> {
  // Fetch vendor from vendors_public view
  const { data: vendor, error: vendorError } = await supabase
    .from('vendors_public')
    .select('*')
    .eq('username', username)
    .single();

  if (vendorError || !vendor) {
    return null;
  }

  // Fetch category
  let category: Category | null = null;
  if (vendor.category_id) {
    const { data: categoryData } = await supabase
      .from('categories')
      .select('*')
      .eq('id', vendor.category_id)
      .single();

    if (categoryData) {
      category = categoryData;
    }
  }

  // Fetch district
  let district: { name: string; city: string } | null = null;
  if (vendor.district_id) {
    const { data: districtData } = await supabase
      .from('districts')
      .select('name, city')
      .eq('id', vendor.district_id)
      .single();

    if (districtData) {
      district = districtData;
    }
  }

  // Fetch service categories
  const { data: serviceCategories } = await supabase
    .from('service_categories')
    .select('*')
    .eq('vendor_id', vendor.id)
    .order('display_order', { ascending: true });

  // Fetch photos
  const { data: photos } = await supabase
    .from('vendor_photos')
    .select('*')
    .eq('vendor_id', vendor.id)
    .order('display_order', { ascending: true });

  const allPhotos: VendorPhoto[] = photos || [];

  // Group photos by service category
  const serviceCategoriesWithPhotos = (serviceCategories || []).map((sc: ServiceCategory) => ({
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
