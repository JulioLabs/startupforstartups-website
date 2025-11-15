# Startup For Startups - Static Website

This repository contains the static marketing website for [Startup For Startups](https://startupforstartups.com), built with Hugo and deployed via GitHub Pages.

## 🚀 Quick Start

### Prerequisites
- Hugo Extended v0.120.0 or higher
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/startupforstartups-website.git
   cd startupforstartups-website
   ```

2. **Navigate to Hugo site directory**
   ```bash
   cd hugo-site
   ```

3. **Start the development server**
   ```bash
   hugo server
   ```

4. **View the site**
   Open your browser and go to `http://localhost:1313`

### Alternative Commands

- **Build for production**
  ```bash
  hugo --minify
  ```

- **Build with drafts**
  ```bash
  hugo server --buildDrafts
  ```

- **Build and watch for changes**
  ```bash
  hugo server --watch
  ```

## 🛠️ Technology Stack

- **Hugo** - Static site generator
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Outfit font family)

## 🎨 Design System

The website follows the **Future Forward** design system used throughout the StartupForStartups platform:

- **Colors**: Professional green gradients (#059669, #4e9a69)
- **Typography**: Outfit font family for modern, clean appearance
- **Layout**: Responsive grid system with mobile-first approach
- **Components**: Consistent button styles, cards, and interactive elements

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🚀 Deployment

This website is automatically deployed using GitHub Pages with GitHub Actions:

- **Source**: Main branch
- **Domain**: startupforstartups.com
- **HTTPS**: Enabled
- **Auto-deploy**: On every push to main branch

### Deployment Status
![Deployment Status](https://github.com/username/startupforstartups-website/actions/workflows/deploy.yml/badge.svg)

## 📁 Project Structure

```
startupforstartups-website/
├── README.md                 # This file
├── original-backup/          # Backup of original HTML files
├── hugo-site/               # Hugo site root
│   ├── content/             # Content files (Markdown)
│   │   ├── features/        # Feature pages
│   │   └── legal/          # Legal pages (terms, privacy)
│   ├── static/             # Static assets
│   │   ├── assets/         # CSS, JS, images
│   │   ├── robots.txt
│   │   ├── sitemap.xml
│   │   └── CNAME
│   ├── themes/
│   │   └── startup-theme/  # Custom Hugo theme
│   └── hugo.toml           # Hugo configuration
└── .github/
    └── workflows/
        └── hugo.yml        # GitHub Actions deployment
```

## 🎨 Theme: Startup Theme

### Overview
Custom Hugo theme built specifically for Startup For Startups, featuring:
- **Responsive design** optimized for all devices
- **Modern styling** with Outfit font and custom color gradients
- **Component-based layout** with reusable partials
- **SEO optimized** with proper meta tags and structured data
- **Widget integration** for SFS platform widgets

### Theme Features
- ✅ **Homepage** - Hero, problem, solution, features, platform sections
- ✅ **Feature pages** - Individual pages for each platform feature
- ✅ **Legal pages** - Terms of service, privacy policy templates
- ✅ **Navigation** - Responsive header with mobile menu
- ✅ **Footer** - Multi-column layout with social links
- ✅ **Typography** - Outfit font family integration
- ✅ **Icons** - Font Awesome 6.0.0 integration
- ✅ **Widgets** - SFS widget loading and consent banners

## 📝 Content Management

### Adding New Pages

1. **Feature pages**
   ```bash
   cd hugo-site
   hugo new content/features/new-feature.md
   ```

2. **Legal/Business pages**
   ```bash
   hugo new content/legal/new-document.md
   ```

3. **Custom sections**
   ```bash
   mkdir content/new-section
   hugo new content/new-section/page.md
   ```

### Page Front Matter
```yaml
---
title: "Page Title"
description: "SEO description for the page"
date: 2025-11-15
draft: false  # Set to true to hide from build
---
```

### Navigation
Update `hugo.toml` to add menu items:
```toml
[[menu.main]]
  name = "New Page"
  url = "/new-page"
  weight = 40
```

## 🔗 Important Links

- **Main Application**: [app.startupforstartups.com](https://app.startupforstartups.com)
- **Blog**: [blog.startupforstartups.com](https://blog.startupforstartups.com)
- **Twitter**: [@get_s4s](https://twitter.com/get_s4s)

## 🛠 Development Tips

### Live Reload
Hugo's development server includes live reload:
- Edit any file and see changes instantly
- No need to restart the server for most changes
- CSS and content changes appear immediately

### Draft Content
Work on content without publishing:
```bash
hugo server --buildDrafts  # Include draft pages
hugo server --buildFuture  # Include future-dated content
```

### Build Performance
- **Typical build time**: ~30ms for current site
- **Pages generated**: ~10 (including content pages)
- **Static files**: ~11 (assets, robots.txt, etc.)

## 🔧 Troubleshooting

### Common Issues

1. **Hugo not found**
   ```bash
   # Install Hugo (Ubuntu/Debian)
   sudo snap install hugo

   # Or download from GitHub releases
   # https://github.com/gohugoio/hugo/releases
   ```

2. **Build warnings about missing layouts**
   - These are normal for unused content types
   - Can be ignored unless you need those specific layouts

3. **Changes not appearing**
   - Check if file is in the right directory
   - Ensure front matter is correct
   - Try restarting `hugo server`

4. **Styling issues**
   - Verify CSS files are in `/static/assets/css/`
   - Check browser developer tools for 404s
   - Ensure paths start with `/` for absolute URLs

## 📚 Additional Resources

- [Hugo Quick Start](https://gohugo.io/getting-started/quick-start/)
- [Hugo Directory Structure](https://gohugo.io/getting-started/directory-structure/)
- [Markdown Syntax Guide](https://www.markdownguide.org/basic-syntax/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

## 📞 Contact

For questions about the website or theme:
- **Email**: sushrut@startupforstartups.com
- **Repository Issues**: Create an issue in this repository
- **Documentation**: See `/documentation/` in the main platform repository

## 📝 License

© 2025 Startup For Startups. All rights reserved.

---

Built with ❤️ for the startup community using Hugo