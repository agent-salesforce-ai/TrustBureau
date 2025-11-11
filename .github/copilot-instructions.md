# TrustBureau.ai - Copilot Custom Instructions

## Project Overview

TrustBureau.ai is a static website for an AI verification platform that provides trust scores and verification services for AI-generated content and businesses. The platform helps users verify AI authenticity and build trust in AI interactions.

**Website:** https://trustbureau.ai  
**Repository Type:** Static website hosted on GitHub Pages  
**Primary Purpose:** Marketing and product demonstration site

## Technology Stack

- **Frontend Framework:** Pure HTML with no build process
- **CSS Framework:** Tailwind CSS (via CDN - https://cdn.tailwindcss.com)
- **JavaScript Framework:** Alpine.js (via CDN for interactive components)
- **Font Services:** Google Fonts (Inter, Plus Jakarta Sans)
- **Hosting:** GitHub Pages
- **Version Control:** Git/GitHub

## File Structure

```
/
├── index.html       # Main landing page with hero, features, pricing
├── report.html      # Live AI business report demo
├── search.html      # Business search interface
├── share.html       # AI share verification page
├── test.html        # Test/demo page
├── CNAME            # Custom domain configuration (trustbureau.ai)
└── .github/
    └── copilot-instructions.md
```

## Coding Standards

### HTML
- Use semantic HTML5 elements where appropriate
- Maintain proper indentation (2 spaces)
- Include descriptive comments for major sections
- Keep inline styles minimal; prefer Tailwind utility classes
- Ensure all pages have proper meta tags for SEO and mobile responsiveness
- Use accessibility attributes (ARIA labels, alt text) where needed

### CSS/Tailwind
- Use Tailwind utility classes as the primary styling method
- Custom CSS should be placed in `<style>` tags within each HTML file
- Follow the brand color scheme:
  - Primary Green: `#00C09A` (brand-green)
  - Dark: `#1A1A1A` (brand-dark)
  - Gray: `#666666` (brand-gray)
  - Light: `#F8F9FA` (brand-light)
  - Border: `#E5E7EB` (brand-border)
- Maintain consistent spacing and typography using Tailwind's spacing scale
- Use responsive design breakpoints (sm, md, lg, xl, 2xl)

### JavaScript/Alpine.js
- Keep JavaScript minimal and declarative using Alpine.js directives
- Use `x-data`, `x-show`, `x-if`, `x-on` for reactive behavior
- Avoid adding complex JavaScript logic; keep interactions simple
- Defer script loading when possible for performance

### Design Principles
- **Mobile-First:** All pages should be responsive and mobile-friendly
- **Performance:** Use CDN resources; avoid heavy dependencies
- **Accessibility:** Maintain WCAG 2.1 AA compliance where possible
- **Consistency:** Use the same header, navigation, and footer patterns across pages
- **Visual Cohesion:** Maintain consistent spacing, colors, and component styles

## Component Patterns

### Common Components
1. **Header/Navigation:** Sticky header with logo, navigation links, and mobile menu
2. **Hero Sections:** Large heading with gradient text, description, and CTA buttons
3. **Widget Cards:** `.widget-card` class with hover effects, consistent border and shadow
4. **CTA Buttons:** `.cta-button` or `.widget-btn` with brand-green background and hover lift
5. **Score Circles:** `.score-circle` with color variants (red, yellow, green) for trust scores

### Reusable Styles
- Gradient text: Use `.gradient-text` for brand-green gradient on headings
- Card hover effects: Cards should have subtle lift and shadow on hover
- Smooth scrolling: Enabled via `scroll-smooth` class on `<html>`
- Backdrop blur: Used for sticky headers

## Development Workflow

### Making Changes
1. **Edit HTML files directly** - No build process required
2. **Test locally** - Open HTML files in a browser or use a simple HTTP server
3. **Preview changes** - GitHub Pages auto-deploys from the default branch
4. **Maintain consistency** - Keep design patterns and styling consistent across all pages

### Testing
- Manually test in multiple browsers (Chrome, Firefox, Safari, Edge)
- Test responsive behavior at different viewport sizes
- Verify all links and navigation work correctly
- Check for console errors in browser developer tools
- Validate HTML using W3C validator when making significant changes

### Deployment
- Changes to the default branch are automatically deployed to GitHub Pages
- CNAME file ensures custom domain (trustbureau.ai) works correctly
- No deployment scripts or CI/CD pipelines required

## Contribution Guidelines

### Code Changes
- **Minimal Changes:** Make the smallest possible changes to achieve the goal
- **Consistency:** Follow existing patterns and styles
- **No Breaking Changes:** Don't modify working functionality unless fixing a bug
- **Documentation:** Update this file if adding new patterns or conventions

### Pull Requests
- Provide clear description of changes
- Include before/after screenshots for visual changes
- Test on multiple devices/browsers before submitting
- Keep PRs focused on a single feature or fix

### Quality Standards
- All HTML must be valid and well-formed
- Pages must be responsive and mobile-friendly
- Maintain accessibility standards
- No console errors or warnings
- Consistent with existing design language

## Common Tasks

### Adding a New Page
1. Copy an existing HTML file as a template
2. Update the `<title>` tag and meta description
3. Maintain the same header/navigation structure
4. Use consistent styling classes and patterns
5. Test navigation links to/from the new page

### Updating Styles
1. Prefer Tailwind utility classes over custom CSS
2. If custom CSS is needed, add it to the `<style>` tag in the same file
3. Maintain brand color consistency
4. Test responsive behavior

### Adding Interactive Features
1. Use Alpine.js for simple interactivity
2. Keep state management simple with `x-data`
3. Avoid complex JavaScript; keep it declarative
4. Test across different browsers

### Updating Content
1. Maintain consistent heading hierarchy (h1, h2, h3)
2. Use brand voice: professional, trustworthy, clear
3. Keep paragraphs concise and scannable
4. Use whitespace effectively

## Known Issues and Limitations

- No build process; all dependencies via CDN
- Limited JavaScript functionality (Alpine.js only)
- No backend or dynamic content
- Static content only; no database or API integration

## Resources

- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **Alpine.js Docs:** https://alpinejs.dev/
- **GitHub Pages Docs:** https://docs.github.com/en/pages
- **W3C HTML Validator:** https://validator.w3.org/

## Notes for AI Assistants

- This is a **static website** with no build process or backend
- Focus on **visual consistency** and maintaining the existing design language
- Prioritize **simplicity** - don't add unnecessary complexity
- All changes should work immediately without compilation or build steps
- Keep the codebase **lightweight** and **performant**
- Maintain **mobile-first** responsive design principles
