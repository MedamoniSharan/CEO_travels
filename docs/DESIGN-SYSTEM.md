# Design System — Best Travel Agency in Hyderabad

## Context and goals

**Intent:** Deliver a clean, token-driven marketing UI for CEO Travels (Hyderabad / travelnexy-style) that is consistent, WCAG 2.2 AA accessible, and fast to extend.

| Field | Value |
|-------|-------|
| Brand reference | Best Travel Agency in Hyderabad |
| URL | https://travelnexy.com/ |
| Surface | Marketing site |
| Audience | Travel customers seeking flights, visas, packages |

---

## Design tokens and foundations

### Typography

| Token | Value |
|-------|-------|
| `font.family.primary` | Manrope |
| `font.size.base` | 16px body (marketing); 24px for hero emphasis |
| `font.weight.base` | 600 |
| Scale | xs 14 → 4xl 48 (see `src/styles/tokens.css`) |

### Color

| Token | Hex | Usage |
|-------|-----|-------|
| `color.text.primary` | `#113d48` | Headings, primary copy |
| `color.text.secondary` | `#6e7070` | Supporting text |
| `color.text.tertiary` | `#0d0d0c` | Strong emphasis |
| `color.text.inverse` | `#ffffff` | Text on dark/orange surfaces |
| `color.surface.base` | `#000000` | Header, footer, dark sections |
| `color.surface.raised` | `#eb6326` | Primary CTAs |
| `color.surface.strong` | `#6d358a` | Focus rings, secondary accent |

### Spacing, radius, motion

- Spacing: `space.1` (2px) through `space.12` (48px)
- Radius: `radius.xs` 10px, `radius.sm/md` pill CTAs, `radius.pill` full
- Motion: instant 200ms, fast 300ms, normal 400ms

**Implementation:** `src/styles/tokens.css` + Tailwind `@theme` in `globals.css`

---

## Component-level rules

### Buttons (22 expected on site)

**Anatomy:** label, optional icon, min-height 48px, `radius-pill`

| Variant | Background | Text |
|---------|------------|------|
| primary | `surface.raised` | `text.inverse` |
| secondary | transparent | `text.primary` + border |
| ghost | transparent | `text.inverse` on dark |

**States (all variants):**

| State | Rule |
|-------|------|
| default | Token colors, no shadow |
| hover | Darken raised ~8%, `translateY(-2px)` max |
| focus-visible | 3px `surface.strong` outline, 3px offset |
| active | `translateY(0)`, darken 12% |
| disabled | 50% opacity, `pointer-events: none` |
| loading | Spinner + `aria-busy`, label hidden visually |
| error | Border `surface.raised`, `role="alert"` message |

**Keyboard:** Enter/Space activate; Tab order follows visual order.  
**Touch:** Min target 44×44px.  
**Responsive:** Full-width on `<640px` for primary CTAs in forms.

### Cards (39 expected)

- Background `surface.card`, border `border.default`, `radius-xs`
- Hover: lift 4px + shadow; focus-visible on interactive cards
- Long titles: `line-clamp-2` + `title` attribute full text
- Empty: illustration + “No packages yet” + CTA

### Links (200 expected)

- Default `text.primary`, underline on hover only
- focus-visible: strong outline, never `outline: none` without replacement
- External links: `rel="noopener noreferrer"` when `target="_blank"`

### Inputs (4 expected)

- Border `border.default`, focus border `border.strong` + focus ring
- Error: red border + `aria-invalid` + describedby error id
- Labels must be visible (no placeholder-only labels)

### Navigation (2 expected)

- Sticky header, keyboard-trap in mobile menu when open
- `aria-expanded` on menu toggle; Escape closes menu

---

## Accessibility requirements

**Target:** WCAG 2.2 AA

| Criterion | Pass condition |
|-----------|----------------|
| Contrast | Body text ≥ 4.5:1; large text ≥ 3:1 |
| Focus | Every interactive element shows `:focus-visible` ring |
| Keyboard | All actions reachable without mouse |
| Motion | `prefers-reduced-motion` pauses infinite animations |
| Images | Meaningful `alt`; decorative `alt=""` + `aria-hidden` |

---

## Content and tone

- **Do:** Short, confident sentences. Name the service (“Book flight”, not “Click here”).
- **Don’t:** Vague CTAs, ALL CAPS paragraphs, legal jargon in hero.

**Example CTA:** “Enquire on WhatsApp” not “Submit”.

---

## Anti-patterns

- Raw hex in components (use CSS variables / Tailwind semantic colors)
- Removing focus outlines without custom replacement
- One-off font sizes outside the scale
- Orange body text on white (fails contrast)
- Auto-playing video with sound

---

## QA checklist

- [ ] Manrope loads; no FOUT on headings
- [ ] Primary buttons use `surface.raised` + inverse text
- [ ] Tab through header, carousel, forms — focus always visible
- [ ] Mobile menu opens/closes with keyboard
- [ ] `prefers-reduced-motion` disables flight carousel auto-scroll and image stream
- [ ] Lighthouse accessibility ≥ 90 on home page
- [ ] All images have appropriate alt text
- [ ] WhatsApp links include pre-filled accessible labels
