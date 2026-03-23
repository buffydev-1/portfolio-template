# Modern Portfolio Template

A professional, production-ready portfolio website template built with HTML, CSS, and Vanilla JavaScript. Designed for developers and designers who want a clean, fast, and customizable personal website without the overhead of heavy frameworks.

## Features

-   **Modular Architecture**: Code is split into logical CSS and JS files for easy maintenance.
-   **Dark/Light Mode**: Fully functional theme toggle with persistence (localStorage) and system preference detection.
-   **Responsive Design**: Mobile-first approach using CSS Grid and Flexbox.
-   **Animations**: Smooth scroll reveal animations (Intersection Observer) and custom CSS keyframes.
-   **Project Filtering**: JavaScript-powered category filtering for the projects section.
-   **Form Validation**: Client-side validation for the contact form.
-   **Typewriter Effect**: Custom typewriter animation for the hero section.

## File Structure

```
portfolio-template/
├── index.html          # Landing page (Hero, Featured, CTA)
├── about.html          # About page (Bio, Skills, Timeline)
├── projects.html       # Projects gallery with filtering
├── contact.html        # Contact page with form
├── css/
│   ├── variables.css   # Global color palette, typography, spacing
│   ├── reset.css       # Modern CSS reset
│   ├── global.css      # Base styles and utilities
│   ├── navbar.css      # Header and mobile menu styles
│   ├── hero.css        # Hero section styles
│   ├── projects.css    # Project card and filter styles
│   ├── about.css       # Timeline and skills grid styles
│   ├── contact.css     # Form styles
│   ├── footer.css      # Footer styles
│   ├── animations.css  # Keyframes and transition classes
│   └── responsive.css  # Global media queries
├── js/
│   ├── main.js         # Entry point
│   ├── theme.js        # Dark/Light mode logic
│   ├── navbar.js       # Mobile menu toggle
│   ├── projects.js     # Filtering logic
│   ├── contact.js      # Form validation
│   ├── typewriter.js   # Hero text animation
│   └── animations.js   # Scroll reveal observer
└── assets/             # Images and icons
```

## How to Customize

### 1. Colors & Fonts
Edit `css/variables.css` to change the entire color scheme.
-   `--color-primary`: Your main brand color.
-   `--font-sans`: Your primary font stack.

### 2. Content
-   Open `index.html` to update your name, title, and hero description.
-   Open `about.html` to update your bio, skills list, and experience timeline.
-   Open `projects.html` to add your own projects. Duplicate the `<article class="project-card">` blocks and update the `data-category` attribute.

### 3. Contact Form
The contact form in `contact.html` is set up for frontend validation. To make it functional, you can:
-   Use a service like [Formspree](https://formspree.io/) or [Netlify Forms](https://docs.netlify.com/forms/setup/).
-   Update the `<form>` `action` attribute to point to your backend endpoint.

## Running Locally

Since this is a static site, you can open `index.html` directly in your browser. However, for the best experience (and to avoid CORS issues with some advanced features if you add them later), use a local server:

**Using Python:**
```bash
python -m http.server 8000
```

**Using VS Code Live Server:**
Right-click `index.html` and select "Open with Live Server".

## License

This template is open-source and free to use for personal or commercial projects.
