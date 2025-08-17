# Photographer Professional Website

A modern, responsive website built for professional photographers to showcase their portfolio and convert visitors into clients.

## 🎯 Project Overview

This website is designed with a mobile-first approach to create an exceptional user experience that highlights the photographer's work and drives client inquiries through strategic CTAs and smooth animations.

## 🚀 Technologies Used

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion & GSAP
- **Gallery**: Swiper.js
- **UI Components**: shadcn/ui
- **Deployment**: Vercel

## 📁 Project Structure

\`\`\`
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── portfolio/         # Portfolio gallery page
│   ├── contact/           # Contact page
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── sections/         # Page sections (Hero, Gallery, etc.)
│   └── forms/            # Form components
├── lib/                  # Business logic & utilities
│   ├── animations.ts     # Animation configurations
│   ├── constants.ts      # Site constants
│   └── utils.ts          # Utility functions
├── hooks/                # Custom React hooks
└── styles/               # Global styles
\`\`\`

## 🛠️ Development Workflow

### Phase 1: Foundation & Layout ✅
- [x] Project structure setup
- [x] README documentation
- [ ] Basic layout components (Header, Footer)
- [ ] Mobile-first responsive design

### Phase 2: Core Pages
- [ ] Hero section with compelling visuals
- [ ] About page with photographer story
- [ ] Contact page with inquiry form

### Phase 3: Portfolio Gallery
- [ ] Swiper.js integration
- [ ] Image optimization
- [ ] Gallery filtering/categories

### Phase 4: Animations & Polish
- [ ] Framer Motion page transitions
- [ ] GSAP scroll animations
- [ ] Performance optimization

### Phase 5: Deployment
- [ ] Vercel deployment setup
- [ ] SEO optimization
- [ ] Final testing

## 🎨 Design Principles

- **Mobile First**: Every component designed for mobile, then enhanced for desktop
- **Visual Hierarchy**: Clear CTAs and strategic content flow
- **Performance**: Optimized images and smooth animations
- **Accessibility**: WCAG compliant design and interactions

## 📧 Contact Form Integration

The contact form will be integrated with a reliable email service to ensure all client inquiries are captured and processed efficiently.

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Run development server: `pnpm dev`
4. Open [http://localhost:3000](http://localhost:3000)

## 📱 Mobile-First Approach

This website prioritizes mobile experience as the foundation, ensuring optimal performance and usability across all devices while maintaining the visual impact essential for a photographer's portfolio.
