const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function testVendors() {
  console.log('🔍 Checking vendors_public view...\n');

  // First, let's see what columns exist
  const { data: sampleVendor, error: sampleError } = await supabase
    .from('vendors_public')
    .select('*')
    .limit(1)
    .single();

  if (sampleError) {
    console.error('❌ Error fetching sample:', sampleError.message);
    return;
  }

  console.log('📋 Available columns in vendors_public:');
  console.log(Object.keys(sampleVendor || {}).join(', '));
  console.log('\n');

  const { data: vendors, error } = await supabase.from('vendors_public').select('*').limit(5);

  if (error) {
    console.error('❌ Error:', error.message);
    return;
  }

  if (!vendors || vendors.length === 0) {
    console.log('⚠️  No vendors found');
    return;
  }

  console.log('✅ Found vendors:\n');
  vendors.forEach((vendor, i) => {
    console.log(`${i + 1}. ${vendor.business_name || 'N/A'}`);
    console.log(`   ID: ${vendor.id}`);
    console.log(`   Full data:`, JSON.stringify(vendor, null, 2));
    console.log('');
  });
}

testVendors().catch(console.error);
