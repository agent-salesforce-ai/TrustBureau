# Copilot Instructions for TrustBureau

## Project Overview

TrustBureau.ai is a client-side web application that provides AI verification standards and business verification reports. While the HTML files are statically hosted (no server-side rendering), the site features dynamic functionality through JavaScript that makes API calls to external services for live AI-powered business verification and reporting.

## Project Structure

- `index.html` - Main landing page for TrustBureau.ai
- `report.html` - Live AI business report page
- `search.html` - Search functionality for business verification
- `share.html` - Share functionality for reports
- `test.html` - Testing/demo page
- `CNAME` - Custom domain configuration for GitHub Pages (trustbureau.ai)

## Technology Stack

- **Frontend Framework**: Static HTML with Tailwind CSS (via CDN)
- **JavaScript Library**: Alpine.js (via CDN) for UI interactivity
- **External APIs**: Google Gemini API for AI processing, OpenCorporates API for business data
- **Client-side Dynamic Features**: JavaScript makes API calls to external services for live data
- **Fonts**: Google Fonts (Inter, Plus Jakarta Sans)
- **Hosting**: GitHub Pages (static file hosting)
- **No build process**: Files are served directly without compilation or bundling

## Brand Guidelines

When making changes to the UI, use these brand colors:
- Primary Green: `#00C09A` (brand-green)
- Dark: `#1A1A1A` (brand-dark)
- Gray: `#666666` (brand-gray)
- Light: `#F8F9FA` (brand-light)
- Border: `#E5E7EB` (brand-border)

Typography:
- Headings: Plus Jakarta Sans (weights: 600, 700, 800)
- Body text: Inter (weights: 400, 500, 600)

## Development Guidelines

### Making Changes

1. **HTML Structure**: All pages use semantic HTML5 with Tailwind CSS utility classes
2. **Responsive Design**: Always ensure mobile-first responsive design using Tailwind's responsive prefixes
3. **CDN Dependencies**: The site uses CDN-hosted libraries (Tailwind CSS, Alpine.js) - avoid introducing build dependencies unless absolutely necessary
4. **Accessibility**: Maintain ARIA labels and semantic HTML for screen readers

### Code Style

- Use consistent indentation (2 spaces)
- Keep HTML classes organized and readable
- Use Tailwind utility classes rather than custom CSS when possible
- Add comments for complex sections or JavaScript logic
- Maintain consistent spacing and formatting across all files

### Testing Changes

Since this is a static site:
1. Open HTML files directly in a browser to test changes
2. Test on multiple screen sizes (mobile, tablet, desktop)
3. Verify all interactive elements work with Alpine.js
4. Check that all links and navigation work correctly
5. Validate HTML using W3C validator if making structural changes

### Making Updates

When asked to:
- **Add new features**: Create them using the existing Tailwind + Alpine.js pattern
- **Update styling**: Use Tailwind utility classes and the brand color palette
- **Add interactivity**: Use Alpine.js directives (x-data, x-on, x-show, etc.)
- **Fix bugs**: Test thoroughly in browser before committing
- **Add new pages**: Follow the structure and style of existing HTML files

### Deployment

- Changes are automatically deployed via GitHub Pages when pushed to the main branch
- No build step required - HTML files are served directly
- The custom domain (trustbureau.ai) is configured via the CNAME file

## Common Tasks

### Adding a new section to a page
1. Use existing Tailwind classes for consistency
2. Follow the responsive design patterns in the existing code
3. Ensure proper spacing using Tailwind's spacing utilities
4. Test on mobile and desktop viewports

### Modifying interactive elements
1. Use Alpine.js directives for client-side interactivity
2. Keep JavaScript logic simple and inline where appropriate
3. Test all interactive states (hover, click, active)

### Updating content
1. Maintain consistent tone and messaging
2. Keep content accessible and clear
3. Use appropriate heading hierarchy (h1, h2, h3)

## Important Notes

- **No package.json**: This project intentionally has no npm dependencies
- **No build tools**: Changes take effect immediately without compilation
- **Static hosting, dynamic functionality**: HTML files are served statically via GitHub Pages, but the site uses client-side JavaScript to make API calls to external services (Google Gemini, OpenCorporates) for dynamic content
- **Keep it simple**: Avoid introducing build complexity or server-side dependencies
- **Minimal changes**: When making updates, change only what's necessary to accomplish the task

## Quality Standards

- All HTML should be valid and semantic
- Maintain consistent code formatting
- Test changes in multiple browsers (Chrome, Firefox, Safari)
- Ensure mobile responsiveness
- Keep page load times fast by avoiding unnecessary assets
- Maintain accessibility standards (WCAG 2.1)
