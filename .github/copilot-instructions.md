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

## Security Guidelines

### API Key Management
- **Never commit API keys**: All API keys (Google Gemini, OpenCorporates) should be handled client-side or through environment variables
- **Review JavaScript**: Before committing changes to JavaScript that handles API calls, ensure no hardcoded credentials are present
- **External API calls**: Always validate and sanitize user inputs before sending to external APIs

### Content Security
- Maintain existing CORS policies
- Avoid introducing inline JavaScript unless it matches existing patterns
- Keep CDN resources to trusted sources only (Tailwind, Alpine.js, Google Fonts)

### Input Validation
- Validate all user inputs in forms and interactive elements
- Sanitize data displayed from external APIs to prevent XSS attacks
- Use Alpine.js's built-in protections for data binding

## Testing and Validation

### Browser Testing Workflow
1. **Local Testing**: Open HTML files directly in a browser using `file://` protocol or a simple HTTP server
2. **Manual Testing Checklist**:
   - Test all interactive elements (buttons, forms, navigation)
   - Verify responsive design on mobile (375px), tablet (768px), and desktop (1280px) viewports
   - Check Alpine.js functionality (dropdowns, modals, dynamic content)
   - Verify all external links and internal navigation
   - Test with JavaScript disabled to ensure graceful degradation

3. **HTML Validation**: Use [W3C Validator](https://validator.w3.org/nu/) for structural changes
4. **Accessibility Testing**: Use browser DevTools accessibility features or [WAVE tool](https://wave.webaim.org/)

### Simple Local Server for Testing
```bash
# Python 3
python3 -m http.server 8000

# Then visit http://localhost:8000 in your browser
```

## Troubleshooting

### Common Issues
- **Alpine.js not working**: Check that `defer` is used on the Alpine.js script tag and components are loaded after DOM
- **Tailwind classes not applying**: Verify CDN is accessible and config is properly set in the `<script>` tag
- **Responsive design broken**: Test with DevTools mobile view and check Tailwind responsive prefixes (sm:, md:, lg:)
- **Links broken**: Ensure all internal links use relative paths and external links include `https://`

### When Things Go Wrong
1. Validate HTML structure first
2. Check browser console for JavaScript errors
3. Verify CDN resources are loading (Network tab in DevTools)
4. Test in an incognito window to rule out cache issues

## Examples

### Good Changes ✅
```html
<!-- Adding a new feature with proper Tailwind classes and Alpine.js -->
<div x-data="{ open: false }" class="relative">
  <button @click="open = !open" 
          class="px-4 py-2 bg-brand-green text-white rounded-lg hover:bg-opacity-90 transition-colors">
    Toggle Menu
  </button>
  <div x-show="open" 
       x-transition
       class="absolute mt-2 bg-white rounded-lg shadow-lg border border-brand-border">
    <!-- Menu content -->
  </div>
</div>
```

### Changes to Avoid ❌
```html
<!-- DON'T: Introducing new dependencies or build tools -->
<script src="node_modules/some-library/dist/lib.js"></script>

<!-- DON'T: Inline styles when Tailwind utilities exist -->
<div style="background-color: #00C09A; padding: 16px;">

<!-- DON'T: Breaking existing CDN patterns -->
<link rel="stylesheet" href="custom-local-styles.css">

<!-- DON'T: Complex JavaScript that should use Alpine.js -->
<script>
  document.getElementById('btn').addEventListener('click', function() {
    // Complex logic...
  });
</script>
```

## What Not to Change

- **CNAME file**: Do not modify unless explicitly asked - it's required for custom domain
- **CDN URLs**: Keep using CDN-hosted libraries (don't download and host locally)
- **Brand colors**: Use the defined color tokens, don't introduce new colors without approval
- **File structure**: Keep the flat structure - don't create subdirectories unless necessary
- **Core Alpine.js patterns**: Maintain the existing Alpine.js coding patterns across files
