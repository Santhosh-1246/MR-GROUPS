# 🚀 Vercel Deployment Guide for MR Groups Loan Management App

## Prerequisites
- GitHub account
- Vercel account (free tier available)
- Your app code pushed to GitHub

## Step 1: Prepare Your Repository

### 1.1 Push to GitHub
```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit with Vercel deployment configuration"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

## Step 2: Deploy to Vercel

### 2.1 Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project"
4. Import your GitHub repository

### 2.2 Configure Environment Variables
In Vercel dashboard, go to your project settings:

1. **Project Settings** → **Environment Variables**
2. Add these variables:

```
NEXT_PUBLIC_SUPABASE_URL = https://zhohpntqzrcsxihlscah.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpob2hwbnRxenJjc3hpaGxzY2FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzODc1NTIsImV4cCI6MjA3Mzk2MzU1Mn0.nJXHxhcQRnHTTAuMR5BM0qh9mqw-AHJOxxS_tB16nOw
```

3. Make sure to set them for **Production**, **Preview**, and **Development** environments

### 2.3 Deploy
1. Click "Deploy" button
2. Vercel will automatically build and deploy your app
3. You'll get a live URL like: `https://your-app-name.vercel.app`

## Step 3: Configure Custom Domain (Optional)

### 3.1 Add Custom Domain
1. Go to **Project Settings** → **Domains**
2. Add your custom domain (e.g., `loans.mrgroups.com`)
3. Follow Vercel's DNS configuration instructions

## Step 4: Verify Deployment

### 4.1 Test Your App
1. Visit your Vercel URL
2. Test all major features:
   - Customer management
   - Loan management
   - Collections
   - Batch management
   - Dashboard

### 4.2 Check Environment Variables
1. Open browser developer tools
2. Check if Supabase connection is working
3. Verify all API calls are successful

## Step 5: Production Optimizations

### 5.1 Performance
- ✅ Next.js optimization enabled
- ✅ Image optimization configured
- ✅ Compression enabled
- ✅ SWC minification enabled

### 5.2 Security
- ✅ Environment variables properly configured
- ✅ Supabase RLS policies in place
- ✅ No sensitive data in client-side code

## Step 6: Monitoring & Maintenance

### 6.1 Vercel Analytics
1. Enable Vercel Analytics in your project
2. Monitor performance and usage

### 6.2 Automatic Deployments
- Every push to `main` branch triggers automatic deployment
- Preview deployments for pull requests
- Easy rollback if needed

## Troubleshooting

### Common Issues:

1. **Build Errors**
   - Check if all dependencies are in `package.json`
   - Verify TypeScript compilation
   - Check for missing environment variables

2. **Runtime Errors**
   - Verify Supabase connection
   - Check browser console for errors
   - Ensure all API routes are working

3. **Environment Variables Not Working**
   - Double-check variable names (case-sensitive)
   - Ensure variables are set for all environments
   - Redeploy after adding new variables

## Your Live App URL

Once deployed, your app will be available at:
**`https://your-app-name.vercel.app`**

## Support

If you encounter any issues:
1. Check Vercel deployment logs
2. Verify Supabase connection
3. Test locally first with `npm run dev`
4. Check this guide for common solutions

---

## Quick Commands

```bash
# Local development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel (if using Vercel CLI)
vercel --prod
```

**🎉 Your MR Groups Loan Management App is now live on Vercel!**
