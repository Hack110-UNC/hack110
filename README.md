# Hack110 Static Website

This is a static HTML/CSS version of the Hack110 website with no JavaScript dependencies.

## Features

- **Pure HTML/CSS**: No JavaScript frameworks or build tools required
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Fast Loading**: Minimal dependencies and optimized for performance
- **Easy to Deploy**: Can be hosted on any static web server

## Structure

```
static-site/
├── index.html          # Home page
├── about.html          # About page
├── map.html            # Floor plans and location info
├── workshops.html      # Workshop schedule
├── assets/
│   └── styles.css      # Main stylesheet (Tailwind-like utilities)
└── images/             # All images and assets
    ├── *.png           # Image files
    ├── *.jpg           # Image files
    └── *.svg           # Vector graphics
```

## Pages

1. **Home (index.html)**: Landing page with call-to-action
2. **About (about.html)**: Event information, timeline, and winners
3. **Map (map.html)**: Building floor plans and room locations
4. **Workshops (workshops.html)**: Schedule and workshop categories

## Deployment

### Option 1: GitHub Pages
1. Copy all files from `static-site/` to your repository root
2. Enable GitHub Pages in repository settings
3. Choose "Deploy from branch" and select main branch

### Option 2: Any Static Host
Upload the contents of the `static-site/` folder to any web server:
- Netlify
- Vercel
- AWS S3
- Apache/Nginx server

### Option 3: Local Testing
Open `index.html` directly in any web browser to test locally.

## Customization

### Colors
Main gradient: Pink (#831843) → Orange (#ea580c) → Teal (#14b8a6)
You can modify this in the `.bg-gradient` class in `assets/styles.css`.

### Content
All content is directly in the HTML files and can be edited with any text editor.

### Styling
The CSS uses utility classes similar to Tailwind CSS. All styles are in `assets/styles.css`.

## Browser Support

Works in all modern browsers including:
- Chrome/Edge
- Firefox
- Safari
- Mobile browsers

## Performance

- No JavaScript = Fast initial load
- Optimized CSS with only necessary styles
- Compressed images
- Minimal HTTP requests

## Maintenance

To update:
1. Edit HTML files directly
2. Add new images to the `images/` folder
3. Modify styles in `assets/styles.css`
4. Re-upload to your hosting provider

No build process required!