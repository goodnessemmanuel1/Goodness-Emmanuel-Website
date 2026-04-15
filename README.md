# Goodness Emmanuel — Portfolio Website
 
The personal portfolio website of Goodness Emmanuel built with vanilla HTML, CSS, and JavaScript. Clean, corporate aesthetic using a black, white, and deep navy color scheme.
 
---
 
## Pages
 
| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero section with profile photo, availability badge, and CTA buttons |
| About | `about.html` | Personal bio and development philosophy |
| Projects | `projects.html` | Showcase of featured work with tech stack badges |
| Contact | `contact.html` | Email and social media contact details |
 
---
 
## Project Structure
 
```
portfolio/
├── index.html          # Home page
├── about.html          # About page
├── projects.html       # Projects page
├── contact.html        # Contact page
├── styles.css          # All styles (single stylesheet)
├── script.js           # All JavaScript (single script)
└── images/
    └── profile.png     # Profile photo
```
 
---
 
## Features
 
- **Page Loader** — Branded GE loading screen with a navy progress bar on every page load
- **Page Transitions** — Smooth fade out/in animation when navigating between pages
- **Typing Animation** — Hero title cycles through developer roles with a blinking cursor
- **Scroll Animations** — Elements fade up into view as you scroll down the page
- **Sticky Navbar** — Fixed navigation with a blur backdrop and scroll-triggered shadow
- **Mobile Navigation** — Animated hamburger menu with slide-down drawer on small screens
- **Responsive Layout** — Fully responsive across desktop, tablet, and mobile
 
---
 
## Tech Stack
 
- **HTML5** — Semantic markup
- **CSS3** — Custom properties, Grid, Flexbox, animations
- **JavaScript (ES6+)** — Vanilla JS, no frameworks or dependencies
- **Google Fonts** — Cormorant Garamond (headings) + Inter (body)
 
---
 
## Customisation
 
### Updating your details
 
| What | Where |
|------|-------|
| Profile photo | Replace `images/profile.png` |
| Hero name & statement | `index.html` — `.hero-text` section |
| About text | `about.html` — `.about-paragraph` elements |
| Projects | `projects.html` — duplicate an `<article class="project-card">` block |
| Email address | `contact.html` — `href="mailto:..."` and link text |
| Social media URLs | All four `.html` files — footer `<a href="...">` links |
 
### Changing the typing animation roles
 
Open `script.js` and edit the `roles` array around line 60:
 
```js
const roles = [
    'Front-End Developer',
    'UI / UX Enthusiast',
    'Clean Code Advocate',
    'Web Performance Nerd',
];
```
 
### Changing colours
 
All colours are CSS custom properties in `styles.css` inside `:root`. The key ones are:
 
```css
:root {
    --bg:           #000000;   /* Page background */
    --navy:         #1a3a6b;   /* Primary accent (deep navy) */
    --navy-light:   #2e6bc4;   /* Hover / interactive states */
    --navy-pale:    #5a8fd4;   /* Subtle text accents */
    --text-primary: #ffffff;   /* Main text */
}
```
 
---
 
## Getting Started
 
No build tools or dependencies required. Just open any `.html` file directly in a browser, or serve with any static file server:
 
```bash
# Using VS Code Live Server — right-click index.html → Open with Live Server
 
# Using Python
python -m http.server 3000
 
# Using Node.js (npx)
npx serve .
```
 
---
 
## Social Links
 
Update all social URLs in the footer of each HTML file to match your actual handles:
 
| Platform | Placeholder URL |
|----------|----------------|
| GitHub | `https://github.com/goodnessemmanuel` |
| LinkedIn | `https://www.linkedin.com/in/emmanuelgoodness` |
| TikTok | `https://tiktok.com/@goodnessemmanuel` |
| Instagram | `https://instagram.com/goodnessemmanuel` |
 
---
 
## License
 
© 2026 Goodness Emmanuel. All rights reserved.
 