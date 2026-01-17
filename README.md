# Portfolio Website - Akshdeep Singh

A modern, responsive portfolio website showcasing my skills as a Cloud-Native Backend Engineer. Built with a cyberpunk-lite dark theme featuring neon blue and purple accents.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Cyberpunk Lite Theme**: Dark mode with neon blue (#00d4ff) and purple (#b84dff) accents
- **Smooth Animations**: Fade-in effects, parallax scrolling, and interactive hover states
- **Glassmorphism Effects**: Modern glass-card design with backdrop blur
- **SEO Optimized**: Proper meta tags, semantic HTML5, and heading hierarchy
- **Performance Optimized**: Lightweight, fast-loading with minimal dependencies

## 📋 Sections

1. **Hero Section**: Eye-catching headline with call-to-action buttons
2. **About Me**: Professional summary highlighting education and expertise
3. **Technical Skills**: Categorized skill grid (Languages, Backend, Cloud & DevOps, Tools)
4. **Featured Projects**: 4 detailed project cards with technologies used
5. **Achievements & Certifications**: AWS certification and SAP Hackathon recognition
6. **Contact**: Email and social media links (LinkedIn, GitHub)

## 🛠️ Tech Stack

- **HTML5**: Semantic structure
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Vanilla JavaScript**: No frameworks, pure JS for interactions
- **Font Awesome**: Icon library
- **Google Fonts**: Inter & Orbitron fonts

## 🎨 Design Features

- Animated gradient backgrounds
- Cyber grid pattern overlay
- Glassmorphism card effects
- Smooth scroll navigation
- Mobile-responsive menu
- Intersection Observer animations
- Custom scrollbar styling
- Neon glow effects on hover

## 🚦 How to Run Locally

### Option 1: Python HTTP Server
```bash
cd /home/akshdeep/portfolio
python3 -m http.server 8000
```
Then open your browser and navigate to: `http://localhost:8000`

### Option 2: PHP Server
```bash
cd /home/akshdeep/portfolio
php -S localhost:8000
```

### Option 3: Node.js HTTP Server
```bash
cd /home/akshdeep/portfolio
npx http-server -p 8000
```

### Option 4: VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
├── hero-bg.jpg         # Hero section background image
├── about-bg.jpg        # About section background image
└── README.md           # This file
```

## 🎨 Background Images

The portfolio features custom background images:
- **Hero Section**: Professional photo with cloud/tech overlay graphics (30% opacity with gradient overlay)
- **About Section**: Coding environment photo (15% opacity with gradient overlay)

Both images are optimized with overlay gradients to ensure text readability while maintaining visual appeal.


## 🎯 Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --cyber-blue: #00d4ff;
    --cyber-purple: #b84dff;
    --dark-bg: #0a0a0a;
    --dark-card: #1a1a1a;
}
```

### Adding Projects
Add new project cards in the `#projects` section of `index.html` following the existing structure.

### Updating Social Links
Modify the links in the `#contact` section:
- LinkedIn: Update the `href` attribute
- GitHub: Update the `href` attribute
- Email: Update the `mailto:` link

## 📱 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Future Enhancements

- Add actual resume PDF download functionality
- Integrate contact form with backend
- Add project detail modal windows
- Implement dark/light theme toggle
- Add blog section
- Include testimonials section

## 📄 License

This project is open source and available for personal use.

## 👤 Contact

**Akshdeep Singh**
- Email: akshd4114@gmail.com
- LinkedIn: [linkedin.com/in/akshdeep-singh](https://linkedin.com/in/akshdeep-singh)
- GitHub: [github.com/akshdeep-singh](https://github.com/akshdeep-singh)

---

Built with ❤️ using HTML, Tailwind CSS, and JavaScript
