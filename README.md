# Barry's Car Sales: Accessibility and Usability Enhancement

Individual coursework for 5WCM2000-0901-2026 - Accessibility and Usability (COM) 
(University of Hertfordshire).

This repository contains an enhanced version of the supplied starter site for Barry's Car Sales, a fictional used-car dealer in Hatfield, Hertfordshire. The site was evaluated for accessibility (WAVE plus manual checks, against WCAG 2.2) and usability (Nielsen's ten heuristics), then improved and re-tested. The written report explains the evaluation, the changes and the reasoning.

## Running the site

No build step or server is needed. Download or clone the repository, keep all files in the same folder, and open `index.html` in a browser.

```
git clone https://github.com/KKC-OCT/Barrys-Car-Sales.git
```

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Home page with the four vehicle listings |
| `about.html` | About us, team table, opening times |
| `enquiry.html` | Vehicle enquiry form |
| `privacy.html` | Privacy notice (new page, linked from the enquiry form) |
| `styles.css` | All styling, including responsive layout and focus styles |
| `script.js` | Pre-selects the vehicle from the home page link and shows the form confirmation |
| `hatchback.jpg`, `suv.jpg`, `saloon.jpg`, `electric.jpg` | Vehicle images |
| `evidence/` | Testing evidence: WAVE screenshots (before and after), manual test notes and the completed accessibility and heuristic evaluation forms |

## What was changed

**Accessibility**
- Descriptive alt text on all four vehicle images
- `lang="en"` on every page, and a viewport meta tag
- Headings in a strict h1, h2, h3 order, with fake bold headings replaced by real ones
- Every form control has a linked label; contact method is grouped in a fieldset with a legend
- `type="email"` and `type="tel"` on the matching fields, `required` on mandatory fields, and a visible `*` with a "Required fields" note so colour is not the only cue
- The 2020 Trail card is a real link instead of a `div` with a JavaScript click handler
- Link text names its target (for example "Enquire about 2020 Trail 1.5")
- Navigation is Home, About, Enquire on every page, with the current page marked by bold, an underline and `aria-current="page"`
- Fixed widths replaced with fluid, responsive layouts so content reflows at 200% and 400% zoom
- Team table has header cells with `scope="col"`
- Focus outlines changed to navy after the original gold failed 3:1 contrast (WCAG 1.4.11)

**Usability**
- Form gives native browser error messages for empty or invalid fields, and a confirmation message (announced to screen readers) on success
- The message box is no longer pre-filled; a placeholder hint is used instead
- Submit button reads "Submit Enquiry"
- Arriving from a car's enquiry link pre-selects that vehicle in the form
- Privacy note and link beside the submit button, at the point where personal data is collected

## Test results (WAVE)

Screenshots and the completed evaluation forms for every result below are in the `evidence/` folder.

| Page | Errors | Alerts | AIM score |
| --- | --- | --- | --- |
| `index.html` | 2 to 0 | 6 to 0 | 8.4 to 10 |
| `about.html` | 0 to 0 | 3 to 1 | 10 to 10 |
| `enquiry.html` | 4 to 0 | 2 to 0 | 7.3 to 10 |
| `privacy.html` (new) | n/a to 0 | n/a to 0 | n/a to 10 |

There were no contrast errors before or after. The one remaining alert, a redundant link on `about.html`, comes from the navigation and an in-text link both pointing to the enquiry page. Automated tools do not prove WCAG conformance, so manual checks (keyboard only, 200% and 400% zoom, styles off, contrast) were carried out as well.

## Development process

The project was managed with Git and GitHub between 12 and 16 November 2026. The first commit holds the unmodified starter site, so the original state (and the "before" evidence) is preserved. Work then followed a repeating pattern: test, fix page by page, re-test, and record the results on the evaluation forms. Some commits bundled several fixes and were larger than ideal; smaller, single-issue commits would be the aim in future.

## Image credits

Vehicle images are Getty Images preview files supplied with the starter material (credits visible in the images). They are used for coursework only.
