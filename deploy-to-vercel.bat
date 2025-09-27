@echo off
echo ========================================
echo MR Groups Loan Management App
echo Vercel Deployment Script
echo ========================================
echo.

echo Step 1: Checking if Vercel CLI is installed...
vercel --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Vercel CLI not found. Installing...
    npm install -g vercel
    if %errorlevel% neq 0 (
        echo Failed to install Vercel CLI. Please install manually:
        echo npm install -g vercel
        pause
        exit /b 1
    )
)

echo.
echo Step 2: Building the project...
npm run build
if %errorlevel% neq 0 (
    echo Build failed. Please check for errors.
    pause
    exit /b 1
)

echo.
echo Step 3: Deploying to Vercel...
vercel --prod

echo.
echo ========================================
echo Deployment completed!
echo Check your Vercel dashboard for the live URL.
echo ========================================
pause
