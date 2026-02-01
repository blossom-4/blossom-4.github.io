# Blossom Herbison - Portfolio Website
A responsive, accessible portfolio website showcasing design systems, interactive components, and frontend development expertise.

## Overview
This portfolio demonstrates a thoughtful approach to web design with a focus on accessibility, user experience, and clean code architecture. Designed as a single-page portfolio, it requires no scrolling—all essential information is presented within the viewport, creating an immediate and immersive introduction. The site opens with a dedicated Acknowledgement of Country page before entering the portfolio. Features include a dynamic project carousel, social integration, and intuitive mobile interactions.

## Features
**Interactive Project Carousel**
- Smooth CSS transitions and keyboard navigation (arrow keys)
- Dynamic pagination indicators with brand colour styling
- Responsive image handling with gradient overlays
- Project information and call-to-action buttons

**Social Rail**
- Fixed positioning on desktop (left side, vertical)
- Intuitive scroll behaviour on mobile (transitions from top to bottom as user scrolls)
- Hover effects
- Email, LinkedIn, and GitHub integration

**Acknowledgement of Country Landing Page**
- Dedicated landing acknowledgement of Traditional Custodians
- Black background with modern typography
- Button to enter portfolio

**Responsive Breakpoints**
- Optimized for phones 400px and below (stacked title)
- Tablet layout (768px - 899px)
- Desktop layout with constrained carousel width for better proportions

**Accessibility First**
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation
- High contrast colour palette - especially on mobile

**Design System**
- Centralised branding and spacing variables
- Consistent typography scale
- Reusable components
- Smooth transitions and hover states

## Technical Stack
- HTML5
- CSS3 (Grid, Flexbox, CSS Variables)
- JavaScript
- FontAwesome Icons
- Google Fonts (Sancreek, Rosario)

## Project Structure
├── acknowledge/
│   ├──  index.html     # Acknowledgement of Country
│   └── landing.css     # Landing page styling 
├── portfolio/
│   ├── index.html      # Main portfolio page
│   ├── about.html      # About page with skills section
│   ├── style.css       # Centralised brand and styling
│   ├── carousel.js     # Interactive carousel 
│   ├── social-rail.js  # Mobile scroll behaviour
│   └── image/          # Project screenshots and bio pic
└── README.md           # Project Description


## Key Components
**Landing Page - Acknowledgement of Country**
Opens the portfolio experience with a dedicated page honoring the Whadjuk people of the Noongar Nation and Traditional Custodians across Australia. Uses a clean black background with Rosario typography.

**Carousel System**
The project carousel uses JavaScript to handle slide navigation through arrow keys and dot pagination. Features three projects with gradient overlays, project descriptions, and external links. Pagination dots use the brand color for the container and action color for inactive dots.

**Responsive Social Rail**
Fixed positioning on desktop (left side, vertical). On mobile, intelligently transitions from the top to the bottom of the page as the user scrolls, ensuring it stays accessible without obstructing content.

**Design Tokens System**
All colours, spacing, and typography values are managed through CSS custom properties across separate stylesheets. This enables easy theme adjustments and consistent scaling across the site.

## Mobile Optimisations
- **Responsive Title**: Stacks vertically on phones 400px and above to prevent text squashing also changes to action colour for higher contrast on smaller screens.
- **Flexible Carousel**: Adapts width and height based on viewport size
- **Social Rail Behaviour**: Transitions position on scroll for better accessibility in mobile view.
- **Touch-Friendly**: All buttons and interactive elements sized for comfortable mobile interaction with animation and cursor adaptation

## How It Works
**Desktop Flow:**
1. User visits acknowledge/index.html
2. Clicks "Enter" → portfolio/index.html
3. Explores projects with carousel navigation
4. Can access about page via about image link
5. Social rail remains fixed on left side

**Mobile Flow:**
1. User visits acknowledge/index.html
2. Clicks "Enter" → portfolio/index.html
3. Scrolls through full-width carousel and content
4. Social rail automatically moves to bottom as user scrolls
5. Touch-friendly navigation throughout

## Future Enhancements
- Additional case study pages with detailed project breakdowns
- Blog section for articles and insights
- Dark mode toggle

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

Portfolio of Blossom Herbison | [Visit Site](https://blossom-4.github.io)