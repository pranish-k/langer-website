# Deployment Guide - Dr. Arthur M. Langer Website

This guide provides instructions for deploying the website to production.

## Pre-Deployment Checklist

- [x] All images are in the public folder
- [x] Site logo (sitelogo.png) is configured
- [x] Page title is set to "Dr. Art Langer"
- [x] All placeholder content has been replaced
- [x] Code is organized and clean
- [x] README.md is updated

## Building for Production

### 1. Create Production Build

```bash
npm run build
```

This command will:
- Create an optimized production build in the `build` folder
- Minify JavaScript and CSS files
- Optimize images
- Generate static HTML files
- Add cache-busting hashes to filenames

### 2. Test the Production Build Locally

```bash
# Install serve globally (one time only)
npm install -g serve

# Serve the production build
serve -s build
```

Visit `http://localhost:3000` to test the production build.

## Deployment Options

### Option 1: Netlify (Recommended for Beginners)

1. **Sign up** at [netlify.com](https://netlify.com)
2. **Drag and drop** the `build` folder to Netlify's dashboard
3. **Configure** custom domain (optional)

**Or via Git:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### Option 2: Vercel

1. **Install** Vercel CLI:
```bash
npm install -g vercel
```

2. **Deploy**:
```bash
vercel --prod
```

3. Follow the prompts to complete deployment

### Option 3: GitHub Pages

1. **Install** gh-pages:
```bash
npm install --save-dev gh-pages
```

2. **Add** to package.json scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

3. **Deploy**:
```bash
npm run deploy
```

### Option 4: AWS S3 + CloudFront

1. **Create S3 Bucket**:
   - Enable static website hosting
   - Upload contents of `build` folder

2. **Configure CloudFront**:
   - Create distribution pointing to S3 bucket
   - Configure SSL certificate
   - Set up custom domain

3. **Deploy**:
```bash
aws s3 sync build/ s3://your-bucket-name --delete
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

### Option 5: Traditional Web Hosting (cPanel, etc.)

1. **Run** production build:
```bash
npm run build
```

2. **Upload** the entire `build` folder contents to your web server's public directory (usually `public_html` or `www`)

3. **Configure** .htaccess for client-side routing:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

## Post-Deployment

### 1. Verify Deployment

- [ ] All pages load correctly
- [ ] Navigation works properly
- [ ] All images display
- [ ] Carousel auto-advances
- [ ] External links open in new tabs
- [ ] Responsive design works on mobile
- [ ] Site logo appears in browser tab

### 2. Configure Custom Domain (if applicable)

1. Update DNS records to point to your hosting provider
2. Configure SSL certificate (Let's Encrypt recommended)
3. Update `homepage` in package.json if needed

### 3. Set Up Analytics (Optional)

Add Google Analytics or similar tracking:

1. Get tracking ID from analytics provider
2. Add tracking code to `public/index.html` before `</head>`

### 4. Configure SEO

Already configured:
- Meta description
- Page title
- Proper HTML semantics
- Responsive design

Additional recommendations:
- Create robots.txt (already present)
- Add sitemap.xml
- Submit to Google Search Console

## Performance Optimization

The build is already optimized, but you can further improve:

1. **Enable Gzip/Brotli** compression on server
2. **Configure caching headers** for static assets
3. **Use CDN** for global content delivery
4. **Optimize images** further if needed

## Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routing Issues After Deploy

Ensure your server is configured to serve `index.html` for all routes. See deployment option specific instructions above.

### Images Not Loading

- Check that images are in the `public` folder
- Verify image paths start with `/` (e.g., `/sitelogo.png`)
- Ensure image files are included in the build

## Environment Variables

If you need environment-specific configuration:

1. Create `.env.production`:
```
REACT_APP_API_URL=https://api.example.com
```

2. Use in code:
```javascript
const apiUrl = process.env.REACT_APP_API_URL;
```

## Maintenance

### Updating Content

1. Make changes to source files
2. Test locally with `npm start`
3. Build with `npm run build`
4. Deploy the new build folder

### Version Control

```bash
# Commit changes
git add .
git commit -m "Update content"
git push origin main

# Tag releases
git tag -a v1.0.0 -m "Initial production release"
git push origin v1.0.0
```

## Support

For issues:
- Check the [README.md](README.md)
- Review Create React App [documentation](https://create-react-app.dev)
- Contact the development team

---

**Last Updated**: October 2024
**Version**: 1.0.0
