const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

async function runMigration() {
  console.log('🚀 Running database migration...\n');

  // Read the migration file
  const migrationPath = path.join(__dirname, '..', 'database-migration-username.sql');
  const migrationSQL = fs.readFileSync(migrationPath, 'utf8');

  // Note: We need the SERVICE_ROLE key to run migrations, not the anon key
  // The anon key doesn't have permission to ALTER tables

  console.log('⚠️  IMPORTANT: This migration requires the Supabase SERVICE_ROLE key.');
  console.log('📋 Please run this SQL manually in the Supabase Dashboard:\n');
  console.log('1. Go to: https://supabase.com/dashboard/project/xoomkgepbukjnakbwhdc/sql/new');
  console.log('2. Copy the SQL from: database-migration-username.sql');
  console.log('3. Paste and click "Run"\n');

  console.log('Alternatively, you can provide the SERVICE_ROLE key as an environment variable:');
  console.log('SUPABASE_SERVICE_ROLE_KEY=your_service_role_key node run-migration.js\n');

  if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.log('✅ Service role key found! Running migration...\n');

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    // Split the migration into individual statements
    const statements = migrationSQL
      .split(';')
      .map(s => s.trim())
      .filter(s => s.length > 0 && !s.startsWith('--'));

    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i] + ';';

      // Skip comments
      if (statement.trim().startsWith('--')) continue;

      console.log(`Executing statement ${i + 1}/${statements.length}...`);

      try {
        const { error } = await supabase.rpc('exec_sql', { sql: statement });

        if (error) {
          console.error(`❌ Error in statement ${i + 1}:`, error.message);
          errorCount++;
        } else {
          successCount++;
        }
      } catch (err) {
        console.error(`❌ Exception in statement ${i + 1}:`, err.message);
        errorCount++;
      }
    }

    console.log(`\n✅ Migration completed: ${successCount} successful, ${errorCount} errors`);
  }
}

runMigration().catch(console.error);
