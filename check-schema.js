const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function checkSchema() {
  console.log('🔍 Checking vendors table schema...\n');

  // Try to get vendors (not vendors_public since it might not exist yet)
  const { data, error } = await supabase.from('vendors').select('*').limit(1).single();

  if (error) {
    console.error('❌ Error:', error.message);
    console.log('\nLet me try checking what tables are accessible...\n');
    return;
  }

  console.log('✅ Vendors table columns:');
  const columns = Object.keys(data || {});
  columns.forEach((col, i) => {
    console.log(`${i + 1}. ${col}`);
  });
}

checkSchema().catch(console.error);
