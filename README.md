# Business Single-Page Website

A modern, beautifully animated single-page business website built with Next.js 16, React 19, TypeScript, Tailwind CSS, and Framer Motion.

## 🏗️ Architecture

This project follows a **top-tier developer architecture** with clear separation of concerns, reusable components, and optimized animation performance.

### Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── Button.tsx      # Animated button with variants
│   ├── Card.tsx        # Animated card component
│   ├── Container.tsx   # Section container with animations
│   ├── Footer.tsx      # Site footer
│   └── Navbar.tsx      # Sticky navigation with smooth scroll
├── sections/           # Page sections (feature-based)
│   ├── Hero.tsx        # Hero section with animated background
│   ├── Features.tsx    # Features grid with stagger animations
│   ├── About.tsx       # About section with stats
│   ├── Testimonials.tsx # Client testimonials
│   └── Contact.tsx     # Contact form and information
├── hooks/              # Custom React hooks
│   └── useScrollAnimation.ts # Intersection Observer hook
├── lib/                # Utilities and constants
│   ├── animations.ts   # Framer Motion animation variants
│   └── constants.ts    # Business data and configuration
├── types/              # TypeScript type definitions
│   └── index.ts        # Shared types and interfaces
├── layout.tsx          # Root layout with metadata
├── page.tsx            # Main page composition
└── globals.css         # Global styles with animation optimizations
```

## ✨ Features

### Architecture Highlights

1. **Component-Based Architecture**
   - Reusable, composable components
   - Clear separation between UI components and business logic
   - Type-safe with TypeScript

2. **Animation System**
   - Centralized animation variants in `lib/animations.ts`
   - Reusable animation patterns (fadeIn, slideIn, scaleIn, etc.)
   - Optimized for performance with `will-change` and GPU acceleration
   - Respects `prefers-reduced-motion` for accessibility

3. **Custom Hooks**
   - `useScrollAnimation` for scroll-triggered animations
   - Uses Intersection Observer API for performance

4. **Type Safety**
   - Comprehensive TypeScript types
   - Shared interfaces for data structures
   - Type-safe component props

5. **Performance Optimizations**
   - Smooth scroll behavior
   - Optimized animation performance
   - Lazy loading with viewport detection
   - CSS optimizations for animations

### Animations

- **Hero Section**: Animated gradient backgrounds, floating elements
- **Features**: Staggered card animations on scroll
- **About**: Slide-in animations from left and right
- **Testimonials**: Scale-in animations with delays
- **Contact**: Form and info panel slide animations
- **Navigation**: Sticky navbar with backdrop blur on scroll
- **Buttons**: Hover and tap animations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🎨 Customization

### Update Business Information

Edit `app/lib/constants.ts` to update:
- Business name, tagline, and description
- Contact information (email, phone, address)
- Features list
- Testimonials

### Modify Animations

All animation variants are defined in `app/lib/animations.ts`. You can:
- Adjust timing and easing
- Create new animation variants
- Modify existing animations

### Styling

The project uses Tailwind CSS v4. Customize:
- Colors in `globals.css`
- Component styles in individual component files
- Global styles in `globals.css`

## 📦 Dependencies

- **Next.js 16**: React framework
- **React 19**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS 4**: Utility-first CSS
- **Framer Motion**: Animation library

## 🎯 Best Practices Implemented

1. **Code Organization**: Clear folder structure with separation of concerns
2. **Reusability**: Components and utilities are highly reusable
3. **Performance**: Optimized animations and lazy loading
4. **Accessibility**: Respects motion preferences, semantic HTML
5. **Type Safety**: Full TypeScript coverage
6. **Maintainability**: Well-documented, clean code structure
7. **Scalability**: Easy to add new sections or features

## 📝 License

This project is open source and available for use.
