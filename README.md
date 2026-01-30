# Blossom Herbison - Portfolio Website

A responsive, accessible portfolio website showcasing design systems, interactive components, and frontend development expertise.

## Overview

This portfolio demonstrates a thoughtful approach to web design with a focus on accessibility, user experience, and clean code architecture. Designed as a single-page portfolio, it requires no scrolling—all essential information is presented within the viewport, creating an immediate and immersive introduction. The site opens with a dedicated Acknowledgement of Country page before entering the portfolio. Features include a dynamic project carousel, social integration, and intelligent mobile interactions.

## Features

**Interactive Project Carousel**
- Smooth CSS transitions and keyboard navigation (arrow keys)
- Dynamic pagination indicators with brand color styling
- Responsive image handling with gradient overlays
- Project information and call-to-action buttons

**Mobile-Optimized Social Rail**
- Fixed positioning on desktop (left side, vertically centered)
- Intelligent scroll behavior on mobile—transitions from top to bottom as user scrolls
- Smooth transitions and hover effects
- Email, LinkedIn, and GitHub integration

**Acknowledgement of Country Landing Page**
- Dedicated landing experience honoring Traditional Custodians
- Black background with modern typography
- Call-to-action to enter the portfolio

**Responsive Breakpoints**
- Optimized for phones 400px and above (stacked title)
- Tablet layout (768px - 899px)
- Desktop layout with constrained carousel width for better proportions

**Accessibility First**
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigable interface
- High contrast color palette

**Design System**
- Centralized color tokens and spacing variables
- Consistent typography scale
- Reusable component patterns
- Smooth transitions and hover states

## Technical Stack

- HTML5
- CSS3 (Grid, Flexbox, CSS Variables)
- Vanilla JavaScript
- FontAwesome Icons
- Google Fonts (Sancreek, Rosario)

## Project Structure

```
├── acknowledge/
│   └── index.html      # Acknowledgement of Country landing page
├── portfolio/
│   ├── index.html      # Main portfolio page
│   ├── about.html      # About page with skills section
│   ├── style.css       # Portfolio styling
│   ├── carousel.js     # Interactive carousel functionality
│   ├── social-rail.js  # Mobile scroll behavior
│   └── image/          # Project screenshots and assets
├── landing.css         # Landing page styling
├── README.md           # This file
└── ...other assets
```

## Key Components

**Landing Page - Acknowledgement of Country**
Opens the portfolio experience with a dedicated page honoring the Whadjuk people of the Noongar Nation and Traditional Custodians across Australia. Uses a clean black background with Rosario typography.

**Carousel System**
The project carousel uses vanilla JavaScript to handle slide navigation through arrow keys and dot pagination. Features three projects with gradient overlays, project descriptions, and external links. Pagination dots use the brand color for the container and action color for inactive dots.

**Responsive Social Rail**
Fixed positioning on desktop (left side, vertically centered). On mobile, intelligently transitions from the top to the bottom of the page as the user scrolls, ensuring it stays accessible without obstructing content.

**Design Tokens System**
All colors, spacing, and typography values are managed through CSS custom properties across separate stylesheets. This enables easy theme adjustments and consistent scaling across the site.

## Mobile Optimizations

- **Responsive Title**: Stacks vertically on phones 400px and above to prevent text squashing
- **Flexible Carousel**: Adapts width and height based on viewport size
- **Social Rail Behavior**: Transitions position on scroll for better accessibility
- **Touch-Friendly**: All buttons and interactive elements sized for comfortable mobile interaction

## How It Works

**Desktop Flow:**
1. User visits acknowledge/index.html
2. Clicks "Enter Portfolio" → portfolio/index.html
3. Explores projects with carousel navigation
4. Can access about page via about image link
5. Social rail remains fixed on left side

**Mobile Flow:**
1. User visits acknowledge/index.html
2. Clicks "Enter Portfolio" → portfolio/index.html
3. Scrolls through full-width carousel and content
4. Social rail automatically moves to bottom as user scrolls
5. Touch-friendly navigation throughout

## Future Enhancements

- Automated deployment pipeline
- Additional case study pages with detailed project breakdowns
- Blog section for articles and insights
- Dark mode toggle
- Contact form integration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

Portfolio of Blossom Herbison | [Visit Site](https://blossom-4.github.io)