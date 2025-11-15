# GitHub Pages Setup Guide

## 📋 Repository Setup (Already Done)
✅ Files copied to separate repository
✅ README.md created
✅ .gitignore configured
✅ CNAME file for custom domain
✅ GitHub Actions workflow created

## 🚀 Next Steps

### 1. Push to GitHub
```bash
cd ~/Work/startupforstartups-website
git add .
git commit -m "Initial commit: Marketing website for StartupForStartups.com"
git branch -M main
git remote add origin https://github.com/USERNAME/startupforstartups-website.git
git push -u origin main
```

### 2. Enable GitHub Pages
1. Go to repository Settings
2. Navigate to "Pages" section
3. Source: "Deploy from a branch"
4. Branch: `main` / `/ (root)`
5. Click "Save"

### 3. Configure Custom Domain
1. In Pages settings, add custom domain: `startupforstartups.com`
2. Enable "Enforce HTTPS"
3. GitHub will verify domain ownership

### 4. DNS Configuration
Update your DNS provider with these records:

**A Records (point to GitHub Pages IPs):**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Record:**
```
www.startupforstartups.com → username.github.io
```

### 5. Verification
- Check Actions tab for deployment status
- Visit startupforstartups.com to verify
- Test all links and functionality
- Verify HTTPS is working

## 🔄 Auto-Deployment
The GitHub Actions workflow will automatically:
- Trigger on every push to main branch
- Build and deploy the website
- Update the live site at startupforstartups.com

## 📞 Troubleshooting
- DNS changes can take up to 24 hours to propagate
- Check Actions tab for deployment errors
- Verify CNAME file contains correct domain
- Ensure repository is public for GitHub Pages