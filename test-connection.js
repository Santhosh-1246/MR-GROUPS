// Simple Supabase connection test script
// Run with: node test-connection.js

const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('🔍 Testing Supabase Connection...')
console.log('=====================================')

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing environment variables!')
  console.log('Please create a .env.local file with:')
  console.log('NEXT_PUBLIC_SUPABASE_URL=your_supabase_url')
  console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key')
  process.exit(1)
}

console.log('✅ Environment variables found')
console.log(`📍 Supabase URL: ${supabaseUrl}`)
console.log(`🔑 Anon Key: ${supabaseKey.substring(0, 20)}...`)

const supabase = createClient(supabaseUrl, supabaseKey)

async function testConnection() {
  try {
    console.log('\n🧪 Testing database connection...')
    
    // Test basic connection
    const { data, error } = await supabase
      .from('customers')
      .select('count')
      .limit(1)

    if (error) {
      throw error
    }

    console.log('✅ Basic connection successful!')

    // Test all tables
    const tables = ['customers', 'employees', 'loans', 'collections', 'repayments', 'batches', 'batch_customers']
    
    console.log('\n📊 Testing table access...')
    for (const table of tables) {
      try {
        const { error } = await supabase
          .from(table)
          .select('*')
          .limit(1)
        
        if (error) {
          console.log(`❌ ${table}: ${error.message}`)
        } else {
          console.log(`✅ ${table}: Accessible`)
        }
      } catch (err) {
        console.log(`❌ ${table}: ${err.message}`)
      }
    }

    // Get sample data counts
    console.log('\n📈 Sample data counts...')
    const [customersResult, employeesResult, loansResult] = await Promise.all([
      supabase.from('customers').select('*', { count: 'exact', head: true }),
      supabase.from('employees').select('*', { count: 'exact', head: true }),
      supabase.from('loans').select('*', { count: 'exact', head: true })
    ])

    console.log(`👥 Customers: ${customersResult.count || 0}`)
    console.log(`👨‍💼 Employees: ${employeesResult.count || 0}`)
    console.log(`💰 Loans: ${loansResult.count || 0}`)

    console.log('\n🎉 Connection test completed successfully!')
    console.log('Your Supabase database is ready to use.')

  } catch (error) {
    console.error('\n❌ Connection test failed!')
    console.error('Error:', error.message)
    
    if (error.message.includes('relation') && error.message.includes('does not exist')) {
      console.log('\n💡 It looks like the database tables don\'t exist yet.')
      console.log('Please run the database schema from database-schema.sql in your Supabase SQL editor.')
    }
    
    process.exit(1)
  }
}

testConnection()
