# Blossom Herbison - Portfolio Website

A responsive, accessible portfolio website showcasing design systems, interactive components, and frontend development expertise.

## Overview

This portfolio demonstrates a thoughtful approach to web design with a focus on accessibility, user experience, and clean code architecture. Designed as a single-page portfolio, it requires no scrolling—all essential information is presented within the viewport, creating an immediate and immersive introduction. The site features a dynamic project carousel, social integration, and a multi-page layout with comprehensive styling systems.

## Features

**Interactive Project Carousel**
- Smooth transitions and keyboard navigation (arrow keys)
- Pagination indicators with active state styling
- Responsive image handling with overlay information

**Accessibility First**
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigable interface
- High contrast color palette

**Responsive Design**
- Mobile-optimized layout
- Flexible grid system using CSS Grid
- Adaptive typography with clamp functions
- Touch-friendly interface elements

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
├── index.html          # Main portfolio page
├── about.html          # About page with skills section
├── contact-page.html   # Contact information
├── style.css           # Centralized styling with CSS variables
├── carousel.js         # Interactive carousel functionality
├── image/              # Project screenshots and assets
└── README.md           # This file
```

## Key Components

**Carousel System**
The project carousel uses vanilla JavaScript to handle slide navigation through arrow keys and dot pagination. Each slide displays project information with a gradient overlay for improved readability.

**Social Rail**
Fixed position navigation with email, LinkedIn, and GitHub links. Responsive behavior adapts layout on mobile devices.

**Design Tokens**
All colors, spacing, and typography values are managed through CSS custom properties, enabling easy theme adjustments and consistent scaling across the site.

## How It Works

The carousel implementation uses CSS transforms for smooth transitions and maintains state through JavaScript to track the current slide. The responsive grid layout automatically adjusts from a two-column layout on desktop to single column on mobile.

## Future Enhancements

- Automated deployment pipeline
- Additional case study pages
- Blog section for articles and insights
- Dark mode toggle

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

Portfolio of Blossom Herbison | [Visit Site](https://blossom-4.github.io)