# NovaStrada Website Templating System

This document explains how to use the JavaScript-based templating system for the NovaStrada LLC website.

## Overview

The templating system allows you to maintain consistent navigation, footer, and other common elements across all pages without duplicating code. When you need to update the navbar or footer, you only need to edit one file: `js/templates.js`.

## How It Works

1. **Template Containers**: Each page has placeholder containers that get populated by JavaScript
2. **Template JavaScript**: The `js/templates.js` file contains all reusable HTML templates
3. **Automatic Injection**: Templates are automatically injected when the page loads
4. **Active Page Highlighting**: The current page is automatically highlighted in navigation

## File Structure

```
├── js/
│   └── templates.js          # Main templating system
├── includes/                 # Static include files (optional)
│   ├── navbar.html
│   ├── footer.html
│   └── head.html
├── build-templates.js        # Validation tool
└── TEMPLATING.md            # This documentation
```

## Using Templates in Your Pages

### Basic Page Structure

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Your page description" />
        <meta name="author" content="NovaStrada LLC" />
        <title>Your Page Title</title>
        <!-- Favicon-->
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        <!-- Bootstrap icons-->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="css/styles.css" rel="stylesheet" />
        <!-- Custom CSS-->
        <link href="css/custom.css" rel="stylesheet" />
    </head>
    <body class="d-flex flex-column h-100">
        <main class="flex-shrink-0">
            <!-- Navigation Container - Will be populated by JavaScript -->
            <div id="navbar-container"></div>
            
            <!-- Your page content goes here -->
            
        </main>
        
        <!-- Footer Container - Will be populated by JavaScript -->
        <div id="footer-container"></div>
        
        <!-- Bootstrap core JS-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <!-- Core theme JS-->
        <script src="js/scripts.js"></script>
        <!-- Template JS-->
        <script src="js/templates.js"></script>
    </body>
</html>
```

### Required Elements

1. **Navbar Container**: `<div id="navbar-container"></div>`
2. **Footer Container**: `<div id="footer-container"></div>`
3. **Template Script**: `<script src="js/templates.js"></script>`

## Available Templates

### Core Templates

- `NovaStradaTemplates.navbar()` - Main navigation bar
- `NovaStradaTemplates.footer()` - Site footer
- `NovaStradaTemplates.head(title, description, author)` - HTML head section

### Utility Templates

- `NovaStradaTemplates.callToAction(title, subtitle, buttonText, buttonLink)` - Call-to-action section
- `NovaStradaTemplates.newsletter(title, subtitle)` - Newsletter signup
- `NovaStradaTemplates.featureCard(icon, title, description)` - Feature card component

### Using Utility Templates

```javascript
// Add a call-to-action section
document.getElementById('cta-container').innerHTML = 
    NovaStradaTemplates.callToAction(
        "Ready to start your project?",
        "Let's build something amazing together.",
        "Get Started",
        "contact.html"
    );

// Add a newsletter signup
document.getElementById('newsletter-container').innerHTML = 
    NovaStradaTemplates.newsletter(
        "Stay in the Loop",
        "Get updates on our latest projects and insights."
    );
```

## Customizing Templates

### Updating Navigation

To add, remove, or modify navigation items, edit the `navbar()` method in `js/templates.js`:

```javascript
static navbar() {
    return `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container px-5">
                <a class="navbar-brand" href="index.html">
                    <img src="assets/logo_crop.PNG" alt="NovaStrada LLC" height="120" class="me-2">
                </a>
                <!-- Add your navigation items here -->
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item"><a class="nav-link" href="new-page.html">New Page</a></li>
                    <!-- ... other items ... -->
                </ul>
            </div>
        </nav>
    `;
}
```

### Updating Footer

Modify the `footer()` method in `js/templates.js`:

```javascript
static footer() {
    return `
        <footer class="bg-dark py-4 mt-auto">
            <div class="container px-5">
                <!-- Your footer content -->
            </div>
        </footer>
    `;
}
```

## Validation Tool

Use the build tool to validate your templating setup:

```bash
node build-templates.js
```

This will:
- Find all HTML files
- Check if they use the templating system correctly
- Warn about any hardcoded navigation/footer elements
- Generate a validation report

## Benefits

1. **DRY Principle**: Don't repeat yourself - maintain navigation/footer in one place
2. **Consistency**: All pages automatically use the same navigation and footer
3. **Easy Updates**: Change navigation once, updates everywhere
4. **Active Page Highlighting**: Current page is automatically highlighted
5. **No Server Required**: Works with static hosting (GitHub Pages, Netlify, etc.)
6. **SEO Friendly**: Content loads immediately, templates inject after

## Migration from Hardcoded Elements

If you have existing pages with hardcoded navigation/footer:

1. Replace the `<nav>` element with `<div id="navbar-container"></div>`
2. Replace the `<footer>` element with `<div id="footer-container"></div>`
3. Add `<script src="js/templates.js"></script>` before closing `</body>`
4. Run `node build-templates.js` to validate

## Troubleshooting

### Templates Not Loading

- Check that `js/templates.js` is included in your page
- Verify the container IDs are correct: `navbar-container` and `footer-container`
- Check browser console for JavaScript errors

### Navigation Not Highlighting Current Page

- Ensure your page filename matches the href in the navigation
- Check that the `highlightCurrentPage()` method is running

### Styling Issues

- Verify that your CSS files are loaded before the templates inject
- Check that Bootstrap CSS is included
- Ensure custom CSS overrides are applied correctly

## Best Practices

1. Always include the template script last (after other JS dependencies)
2. Use semantic HTML structure in your page content
3. Test template changes across all pages
4. Run the validation tool before deploying
5. Keep template methods focused and reusable

## Future Enhancements

Potential improvements to consider:

1. **Template Caching**: Cache templates in localStorage for faster loading
2. **Dynamic Content**: Load navigation items from a JSON configuration
3. **Internationalization**: Support multiple languages
4. **Theme Switching**: Dynamic theme/style switching
5. **Component Library**: Expand utility templates for common UI patterns 