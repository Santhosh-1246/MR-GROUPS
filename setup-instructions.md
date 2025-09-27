# Setup Instructions for MR Groups Loan Management System

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set up Environment Variables**
   Create a `.env.local` file in the root directory with:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   ```

3. **Run the Application**
   ```bash
   npm run dev
   ```

4. **Open Browser**
   Navigate to `http://localhost:3000`

## Database Setup (Optional for Demo)

The application works with mock data by default. To connect to a real database:

1. Create a Supabase project at https://supabase.com
2. Run the SQL schema from `database-schema.sql` in your Supabase SQL editor
3. Update the environment variables with your Supabase credentials

## Features Available

✅ **Dashboard** - Professional loan dashboard with charts and statistics
✅ **Loan Management** - Add, edit, and track loans
✅ **Customer Management** - Manage customer database
✅ **Batch Management** - Weekly collection batches
✅ **Responsive Design** - Works on all devices
✅ **Modern UI** - Clean, professional interface

## Demo Data

The application includes sample data for demonstration:
- 3 sample customers
- 3 sample loans
- 4 sample batches
- Mock dashboard statistics

## Next Steps

1. Replace mock data with real API calls
2. Implement authentication
3. Add data validation
4. Deploy to production

The application is ready to run and explore!
