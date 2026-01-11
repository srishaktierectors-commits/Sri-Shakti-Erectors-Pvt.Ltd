# Sri Shakti Erectors - Corporate Website

A professional corporate website for Sri Shakti Erectors, a leading company specializing in thermal power plant mechanical erection services across India.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Industrial Aesthetic**: Professional design with steel grey, dark blue color palette
- **SEO Optimized**: Semantic HTML, proper meta tags, and optimized structure
- **Fast Performance**: Vanilla JavaScript, no heavy frameworks
- **Interactive Elements**: Smooth animations, scroll effects, and form validation
- **6 Complete Pages**: Home, About, Services, Projects, Clients, and Contact

## 📁 Project Structure

```
sri_shakti_erectors/
├── index.html              # Home page
├── about.html              # About Us page
├── services.html           # Services page
├── projects.html           # Projects/Experience page
├── clients.html            # Clients page
├── contact.html            # Contact page
├── css/
│   ├── main.css           # Design system and base styles
│   └── components.css     # Component-specific styles
├── js/
│   ├── main.js            # Core JavaScript functionality
│   └── form-validation.js # Contact form validation
└── images/                # Image assets (to be added)
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: #0D47A1 (Deep Blue)
- **Secondary Grey**: #2C3E50 (Steel Grey)
- **Accent Orange**: #FF6F00 (Industrial Orange)
- **Text Colors**: #212121, #616161, #FFFFFF
- **Background**: #FFFFFF, #F5F5F5, #263238

### Typography
- **Headings**: Montserrat (Google Fonts)
- **Body**: Roboto (Google Fonts)
- **Responsive font sizes** with proper hierarchy

### Components
- Navigation header (sticky, responsive)
- Hero sections
- Service cards
- Project cards
- Client logos grid
- Contact form with validation
- Footer
- Back-to-top button

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. **Clone or download** the project files to your local machine

2. **Open the website**:
   - Simply open `index.html` in your web browser, or
   - Use a local development server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js http-server
     npx http-server
     ```

3. **View in browser**:
   - Navigate to `http://localhost:8000` (if using a server)
   - Or directly open `index.html`

## 🌐 Deployment

This is a static website that can be deployed to any static hosting platform. Here are the recommended options:

### Option 1: Netlify (Recommended ⭐)

**Why Netlify?**
- Free tier with custom domain
- Auto-deploy from Git on every commit
- Built-in form handling (no backend needed!)
- Free SSL certificate
- Drag-and-drop deployment

**Steps:**

1. **Create a Git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub**:
   ```bash
   # Create a new repo on GitHub first, then:
   git remote add origin https://github.com/yourusername/sri-shakti-erectors.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com) and sign up
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account
   - Select your repository
   - Click "Deploy site"
   - Done! Your site is live at `https://your-site-name.netlify.app`

4. **Add custom domain** (optional):
   - Go to Site settings → Domain management
   - Add your custom domain
   - Update DNS records as instructed

5. **Enable form submissions**:
   - Forms will automatically work with Netlify Forms
   - View submissions in Netlify dashboard

### Option 2: Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

### Option 3: GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select branch: `main`
4. Select folder: `/ (root)`
5. Click Save
6. Your site will be live at `https://yourusername.github.io/repository-name`

### Manual Deployment (Any Web Host)

Simply upload all files to your web hosting via FTP:
- Upload all HTML files to root directory
- Upload `css/` and `js/` folders
- Upload `images/` folder (when added)
- Ensure `index.html` is in the root

### Continuous Deployment Workflow

Once connected to Netlify/Vercel/GitHub Pages:

1. Make changes to your code locally
2. Commit changes:
   ```bash
   git add .
   git commit -m "Update contact information"
   ```
3. Push to GitHub:
   ```bash
   git push
   ```
4. **Your site automatically updates!** ✨

No Node.js or build process needed!

## 📄 Pages Overview

### 1. Home Page (`index.html`)
- Hero section with company tagline
- Statistics showcase (years, projects, capacity)
- Core services overview
- Why choose us section
- Featured clients
- Call-to-action

### 2. About Us (`about.html`)
- Company story and background
- Mission and vision statements
- Core values
- Technical capabilities
- Certifications and safety record

### 3. Services (`services.html`)
Detailed information on all services:
- Steam Turbine Generator Erection
- Air-Cooled & Water-Cooled Condenser Erection
- Auxiliaries Erection
- Power Plant Piping Works
- Commissioning Support
- Shutdown Maintenance

### 4. Projects (`projects.html`)
- Featured projects grid
- Project statistics
- Geographic coverage across India
- Project categories

### 5. Clients (`clients.html`)
- EPC contractors and OEMs
- Power generation companies
- Industrial groups
- Client testimonials
- Why clients choose us

### 6. Contact (`contact.html`)
- Contact form with validation
- Office information
- Business hours
- Service areas across India
- Map placeholder

## ✨ JavaScript Features

### Core Functionality (`main.js`)
- Mobile navigation toggle
- Smooth scrolling for anchor links
- Header scroll effect
- Active navigation highlighting
- Back-to-top button
- Scroll-based animations
- Stats counter animation
- Lazy image loading

### Form Validation (`form-validation.js`)
- Real-time field validation
- Email format validation
- Phone number validation (10-digit)
- Required field checks
- Success/error messaging
- Form submission handling

## 🎯 Customization Guide

### Update Company Information

1. **Company Name**: Search and replace "Sri Shakti Erectors" in all HTML files
2. **Contact Details**: Update in `contact.html` and footer sections
3. **Email**: Replace `info@srishaktierectors.com`
4. **Phone**: Replace `+91 XXX XXX XXXX`
5. **Address**: Update office address in `contact.html`

### Add Images

1. Create an `images/` folder in the project root
2. Add your images:
   - `logo.png` - Company logo
   - `hero-bg.jpg` - Hero section background
   - Project photos
   - Client logos
3. Update image paths in HTML files

### Modify Colors

Edit CSS custom properties in `css/main.css`:
```css
:root {
  --color-primary: #0D47A1;
  --color-secondary: #2C3E50;
  --color-accent: #FF6F00;
  /* ... other colors */
}
```

### Add Google Maps

In `contact.html`, replace the map placeholder with:
```html
<iframe 
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  width="100%" 
  height="450" 
  style="border:0;" 
  allowfullscreen="" 
  loading="lazy">
</iframe>
```

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 SEO Features

- Semantic HTML5 elements
- Proper heading hierarchy (single H1 per page)
- Meta descriptions for each page
- Optimized title tags
- Alt text for images (to be added)
- Fast loading times
- Mobile-friendly design

## 🛠️ Future Enhancements

- Add actual project images
- Integrate real client logos
- Connect contact form to backend/email service
- Add Google Analytics
- Implement blog section
- Add case studies
- Create downloadable brochures
- Add multilingual support

## 📞 Support

For questions or support regarding this website:
- Email: info@srishaktierectors.com
- Phone: +91 XXX XXX XXXX

## 📝 License

© 2026 Sri Shakti Erectors. All rights reserved.

---

**Built with**: HTML5, CSS3, Vanilla JavaScript  
**Design**: Industrial corporate aesthetic  
**Status**: Production-ready
