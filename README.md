# Markdown Resume Builder

Markdown Resume Builder is a browser-first CV tool by RA Fahim. Write a resume in Markdown, edit it with keyboard shortcuts and toolbar controls, preview it on an A4 page, switch between five templates, and export through the browser's native print-to-PDF flow.

## Usage

1. Open `index.html` in a modern browser.
2. Choose a template from the top toolbar.
3. Write or edit Markdown in the left panel.
4. Use the preview to check A4 layout.
5. Select a zoom level between 50% and 200%.
6. Use the controls for font, accent, text color, and spacing.
7. Add optional CSS through `Custom CSS`.
8. Export `.md` or `.json` backups from the preview toolbar.
9. Import existing `.md` or `.json` files when needed.
10. Click `Export PDF` and choose the browser's PDF destination.

## Markdown Syntax Guide

### Headings

`# Name`

`## Section`

`### Role`

### Emphasis

`**bold**`

`*italic*`

### Links

`[Portfolio](https://rafahim.com)`

### Lists

`- Skill one`

`1. Achievement one`

### Quote

`> Short profile statement`

### Code

Use inline backticks or fenced blocks with three backticks.

## Templates

### Classic
Traditional resume structure with strong section headings and predictable spacing.

### Modern
Clean accent bars and contemporary hierarchy for product, design, and business profiles.

### Minimal
Low-decoration layout focused on typography and scanability.

### Two-column
Compact two-column layout for dense project and skill sections.

### Developer
Monospace-forward presentation for engineering and developer portfolios.

For ATS-first applications, Classic, Modern, and Minimal are the safest default choices. Always confirm a target employer's parsing requirements before using a highly stylized layout.

## Autosave

The app stores the current document and the last 20 saved versions in browser localStorage. No server-side account is required.

## Export Formats

Markdown export stores the exact editor text.

JSON export stores Markdown, template, theme, design controls, and custom CSS so a project can be restored later.

PDF export uses the browser's native print engine. Select a PDF printer or Save to PDF, keep A4 paper, and use the browser's default print scaling where possible.

## Privacy

Resume content stays in the browser unless you explicitly save, share, upload, or print it yourself. The app does not include a backend service.

The editor uses the marked.js CDN for Markdown parsing, so the browser makes an external request to load that library. Resume text is not sent to the CDN by the app.

## Author

**RA Fahim**

Web Developer & Creator

Dhaka, Bangladesh

Website: https://rafahim.com

GitHub: https://github.com/rafahim

Twitter: https://twitter.com/rafahimn

LinkedIn: https://www.linkedin.com/in/rafahimn

Email: dev@rafahim.com

## SEO Checklist

- Unique title and description
- Canonical URL configured
- Open Graph title, description, URL, and image
- Twitter Card metadata
- Author metadata
- WebApplication and Person JSON-LD
- `robots.txt` included
- `sitemap.xml` included
- Semantic headings and accessible controls
- Crawlable static HTML shell
- Mobile-responsive layout

## License

MIT. See `LICENSE`.
