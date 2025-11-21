# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your Sohail Sales Channel website to GitHub Pages for free hosting.

## Prerequisites

- A GitHub account
- Your project connected to GitHub (use the GitHub button in Lovable)

## Deployment Steps

### Step 1: Connect to GitHub
1. In Lovable editor, click the **GitHub** button in the top right
2. Click **Connect to GitHub**
3. Authorize the Lovable GitHub App
4. Click **Create Repository** to create a new repo with your code

### Step 2: Enable GitHub Pages
1. Go to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Build and deployment**:
   - Source: Select **GitHub Actions**
5. Save the settings

### Step 3: Configure Base Path (if needed)
If your repository name is NOT your username (e.g., `yourusername.github.io`):

1. Your site will be at: `https://yourusername.github.io/repository-name/`
2. Update `vite.config.ts` to add the base path:

```typescript
export default defineConfig(({ mode }) => ({
  base: '/repository-name/', // Replace with your repo name
  // ... rest of config
}));
```

### Step 4: Deploy
The GitHub Action (`.github/workflows/deploy.yml`) will automatically:
- Build your project whenever you push to the `main` branch
- Deploy it to GitHub Pages

**First deployment:**
1. Push any change to trigger the workflow, OR
2. Go to **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**

### Step 5: Access Your Site
After 2-3 minutes, your site will be live at:
- `https://yourusername.github.io/` (if repo name is `yourusername.github.io`)
- `https://yourusername.github.io/repository-name/` (for other repos)

## Automatic Updates

Every time you:
- Make changes in Lovable (auto-syncs to GitHub)
- Push commits to the `main` branch

The site will automatically rebuild and deploy! 🎉

## Custom Domain (Optional)

To use your own domain (e.g., `sohailsales.com`):

1. Go to **Settings** → **Pages** → **Custom domain**
2. Enter your domain name
3. Add DNS records at your domain registrar:
   - Type: `CNAME`
   - Name: `www` (or `@` for root)
   - Value: `yourusername.github.io`
4. Wait for DNS propagation (can take 24-48 hours)

## Troubleshooting

### Build fails?
- Check **Actions** tab for error logs
- Ensure all dependencies are in `package.json`
- Verify Node version compatibility

### 404 on routes?
- Single-page apps need special handling
- GitHub Pages doesn't support client-side routing by default
- Copy `index.html` to `404.html` in build folder

### Assets not loading?
- Check the `base` path in `vite.config.ts`
- Make sure it matches your repository name

## Cost

**GitHub Pages is 100% FREE** for public repositories!
- Unlimited bandwidth
- Free SSL certificate
- Automatic HTTPS

## Support

Need help? 
- [GitHub Pages Documentation](https://docs.github.com/pages)
- [Lovable Discord Community](https://discord.gg/lovable)
- [Lovable Documentation](https://docs.lovable.dev)
