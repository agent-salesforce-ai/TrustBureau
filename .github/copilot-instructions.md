# GitHub Copilot Instructions for TrustBureau

## Project Overview

TrustBureau.ai is a static website project that serves as "The AI Verification Standard" platform. The website is built with plain HTML, CSS, and JavaScript, utilizing modern CDN-based libraries for styling and interactivity.

## Project Structure

```
/
├── index.html      # Main landing page
├── report.html     # Report page
├── search.html     # Search functionality page
├── share.html      # Share page
├── test.html       # Test page
├── CNAME          # Custom domain configuration (trustbureau.ai)
└── .github/       # GitHub configuration
```

## Technology Stack

- **HTML5**: Semantic markup for content structure
- **Tailwind CSS**: Utility-first CSS framework (via CDN: `https://cdn.tailwindcss.com`)
- **Alpine.js**: Lightweight JavaScript framework for interactivity (via CDN)
- **Google Fonts**: Plus Jakarta Sans and Inter font families

## Brand Guidelines

The project uses specific brand colors defined in the Tailwind configuration:

- `brand-green`: #00C09A (primary accent)
- `brand-dark`: #1A1A1A (text and dark backgrounds)
- `brand-gray`: #666666 (secondary text)
- `brand-light`: #F8F9FA (light backgrounds)
- `brand-border`: #E5E7EB (borders and dividers)

## Font Families

- **Headings**: Plus Jakarta Sans (weights: 600, 700, 800)
- **Body**: Inter (weights: 400, 500, 600)

## Development Guidelines

### Making Changes

1. **HTML Structure**: Maintain semantic HTML5 structure and accessibility best practices
2. **Styling**: Use Tailwind CSS utility classes consistently across all pages
3. **JavaScript**: Keep JavaScript minimal and leverage Alpine.js for interactive components
4. **Responsiveness**: Ensure all changes work on mobile, tablet, and desktop viewports
5. **Performance**: Keep the site lightweight - avoid adding unnecessary dependencies

### Testing Changes

Since this is a static website:

1. Open the HTML files in a browser to preview changes
2. Test on multiple screen sizes (mobile, tablet, desktop)
3. Verify all interactive elements work correctly
4. Check that fonts and styles load properly from CDNs
5. Ensure accessibility standards are maintained

### Code Style

- Use 2-space indentation for HTML
- Keep consistent attribute ordering in HTML tags
- Use semantic HTML elements where appropriate
- Follow Tailwind CSS naming conventions
- Keep JavaScript simple and readable

## Deployment

The website is hosted on GitHub Pages with a custom domain (trustbureau.ai) configured via the CNAME file. Any changes pushed to the main branch will be automatically deployed.

## Best Practices for Copilot Assistance

### Good Tasks for Copilot

- Adding new sections or content to existing pages
- Updating styling and layout improvements
- Fixing accessibility issues
- Optimizing responsive design
- Adding new interactive components with Alpine.js
- Content updates and copywriting improvements

### Tasks to Approach Carefully

- Major structural changes to the website
- Changes to the CNAME or domain configuration
- Removing or significantly altering existing functionality
- Changes that might impact SEO or page performance

### When Making Changes

1. Preserve the existing brand colors and typography
2. Maintain consistency across all pages
3. Test changes visually before committing
4. Keep the codebase simple and maintainable
5. Document any new patterns or components added

## Accessibility Requirements

- Use proper heading hierarchy (h1, h2, h3, etc.)
- Include alt text for all images
- Ensure sufficient color contrast ratios
- Make interactive elements keyboard accessible
- Use semantic HTML elements

## Browser Support

The website should work in all modern browsers:
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Common Commands

Since this is a static HTML website, there are no build commands needed. Simply:

1. Edit the HTML files directly
2. Preview changes by opening files in a browser
3. Commit and push changes to deploy

## Additional Notes

- The website uses CDN-based libraries for simplicity and performance
- No build process or package manager is required
- All styling is configured inline using Tailwind's CDN configuration
- Alpine.js is loaded with defer attribute for optimal performance
