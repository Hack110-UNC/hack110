# Manual Deployment Guide

## Step 1: Fix Dependencies
If you're getting build errors, try this in Command Prompt (not PowerShell):

```cmd
cd c:\Users\conor\hack110
rmdir /s /q node_modules
del package-lock.json
npm install
```

## Step 2: Build the Project
```cmd
npm run build
```

## Step 3: Deploy to GitHub Pages
```cmd
npm run deploy
```

## Alternative: Manual GitHub Pages Setup

If npm commands don't work, you can:

1. Commit all your changes to the main branch
2. Go to your GitHub repository settings
3. Go to "Pages" section
4. Change source from "Deploy from branch" and select "main" branch and "/dist" folder
5. Or create a GitHub Action to build and deploy

## Debugging Steps

1. Check browser console (F12) on your deployed site
2. Look for 404 errors on JavaScript/CSS files
3. Verify the files exist in your dist folder
4. Check if GitHub Pages is serving from the correct branch/folder

## Quick Fix for JavaScript Loading Issues

The main issue is likely that your JavaScript bundle isn't loading. This could be due to:
- Incorrect paths in index.html (should have /hack110/ prefix)
- GitHub Pages not serving .js files with correct MIME type
- Build process not completing successfully