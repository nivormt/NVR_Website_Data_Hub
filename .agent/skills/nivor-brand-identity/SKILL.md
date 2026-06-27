---
name: nivor-brand-identity
description: NIVOR Premium Travel brand identity system. Use this skill whenever generating, reviewing, or refactoring any NIVOR-branded media — web pages, social media graphics, print materials, landing pages, emails, forms, dashboards, or any digital/physical asset. Triggers on any mention of NIVOR branding, brand compliance, brand-consistent design, or NIVOR visual identity.
---

# NIVOR Master Brand Identity System

This document is the single source of truth for the NIVOR brand. Follow every specification exactly when generating or refactoring NIVOR-branded media. Desktop-first approach with full responsive coverage for tablet (≤1024px) and mobile (≤768px).

---

## 0. CRITICAL — nivor.css Workflow

Whenever generating or refactoring HTML code for a NIVOR project, follow this procedure **before writing any HTML**:

### Step 1: Check for existing nivor.css
Look in the project root (and common subdirectories like `css/`, `styles/`, `assets/css/`) for a file named `nivor.css`.

### Step 2a: If nivor.css EXISTS
- Link to it from the HTML `<head>`: `<link rel="stylesheet" href="nivor.css">` (adjust path as needed)
- Do NOT duplicate any of its contents in `<style>` tags or inline styles
- Page-specific styles go in a separate `<style>` block or a page-specific CSS file

### Step 2b: If nivor.css DOES NOT EXIST
- Create `nivor.css` in the project root (or the appropriate styles directory)
- Populate it with the full content specified in **Section 11: nivor.css Reference Content**
- Link to it from the HTML `<head>`: `<link rel="stylesheet" href="nivor.css">`

### What goes in nivor.css (and what does NOT)

**nivor.css contains ONLY:**
- CSS custom properties (`:root` block with all brand tokens)
- Global reset (`*`, `body`, `::selection`, scrollbar, tap highlight)
- Base typography rules (h1–h4, p, small, a/button type styles)
- Responsive typography media queries
- Core component classes (`.btn-nvr`, `.section-tag`, `.nvr-highlight`, `.glass`, `.editorial-wrapper`)
- Scrollbar styling
- Brand utility classes (`.text-muted`, `.text-accent`, etc.)

**nivor.css does NOT contain:**
- Page-specific layouts or section-specific grid configurations
- One-off component styles (specific hero designs, unique card layouts)
- JavaScript-dependent animation states
- Third-party overrides

These page-specific styles go in the HTML's own `<style>` block or a separate page CSS file.

---

## 1. Brand Essence

**NIVOR Premium Travel** is a hybrid travel service combining independent travel freedom with professional planning security. The brand personality is: **premium, calm, precise, warm, and elevated**.

- **Tagline (EN):** "Elevated Journeys"
- **Tagline (HU):** "Utazástervezés új dimenziója."
- **Positioning:** Luxury-adjacent, not ostentatious. Think boutique hotel, not palace.
- **Voice:** Confident, minimal, editorial. Never salesy or loud.

### Five Service Pillars
1. **Tervezés** — Personalized itineraries, flights, accommodation
2. **Tanácsadás** — Expert brainstorming and validation
3. **Asszisztencia** — Technical booking help, avoiding marketing traps
4. **Támogatás** — Real-time trip support via live chat
5. **Emlékmegőrzés** — Premium photo albums, canvas prints, recap videos

---

## 2. Logo System

The NIVOR logo is a **stylized palm tree on an island silhouette** — a single-color vector mark.

### Logo Variants

| ID | Description | Usage |
|---|---|---|
| `AB_MT_logoB` | Prussian Blue mark, transparent bg | Light backgrounds |
| `AB_MTlogoO` | Burnt Peach mark, transparent bg | Dark backgrounds or white bg |
| `AB_MT_logoW` | White mark, transparent bg | Dark/colored backgrounds |
| `FIT_logoB` | Full-width Prussian Blue mark | Hero sections, large displays |
| `FIT_logoO` | Full-width Burnt Peach mark | Accent usage |
| `AB_TT_logoB_bgO` | Blue mark on Burnt Peach bg (rounded rect) | Social avatars, app icons |
| `AB_TT_logoO_bgB` | Peach mark on Prussian Blue bg (rounded rect) | Social avatars, app icons |

### Logo Lockup Configurations
- **1:1 Square** — Icon only, for avatars and favicons
- **2:1 Horizontal** — Icon + "NIVOR" wordmark + optional subtitle ("Premium Services" or "Elevated Journeys")
- **3:1 Wide** — Icon + "NIVOR" wordmark + divider + descriptor ("Master Brand Hub")

### Logo Rules
- Minimum clear space: **25% of icon width** on all sides
- The wordmark "NIVOR" always uses **Manrope 800, letter-spacing: -0.05em**
- Subtitles use **Manrope 500, letter-spacing: 0.4em, uppercase**
- Never distort, rotate, or add effects (drop shadow, glow, outline) to the logo
- Never place logo on busy photo backgrounds without a solid/semi-transparent container

---

## 3. Color System

### 3.1 Primary Palette

| Name | HEX | RGB | CMYK | CSS Variable | Role |
|---|---|---|---|---|---|
| Prussian Blue | `#1A2238` | 26, 34, 56 | C91 M79 Y45 K48 | `--brand-prussian-blue` | Primary text, dark backgrounds, authority |
| Burnt Peach | `#E67E5D` | 230, 126, 93 | C5 M62 Y65 K0 | `--brand-burnt-peach` | CTAs, accents, highlights, energy |

### 3.2 Secondary Palette

| Name | HEX | CSS Variable | Role |
|---|---|---|---|
| Platinum | `#F5F6F7` | `--brand-platinum` | Page backgrounds, dividers |
| Pale Sky | `#F1F9FC` | `--brand-pale-sky` | Content cards, info areas |
| Soft Blush | `#F8E0E0` | `--brand-soft-blush` | Warm accents, testimonials |
| Luxury Mono | `#0F1420` | `--brand-luxury-mono` | Ultra-dark exclusive contexts |
| Bone White | `#FAF9F6` | `--brand-bone-white` | Print-friendly white, paper feel |
| Surface White | `#FFFFFF` | `--surface-white` | Cards, modals, content containers |

### 3.3 Color Rules

1. **Never use raw grayscale** (`#333`, `#666`, `#999`). Use Prussian Blue at reduced opacity instead.
2. **Text on light bg:** Prussian Blue at opacity 1.0 (headings) or 0.7 (body) or 0.5 (captions)
3. **Text on dark bg:** White at opacity 1.0 (headings) or 0.6-0.7 (body) or 0.4 (captions)
4. **Accent color for CTAs and links:** Always Burnt Peach
5. **Text selection:** `rgba(230, 126, 93, 0.2)` — never use browser default blue
6. **All colors must be referenced via CSS custom properties**, never hardcoded in components

### 3.4 Approved Gradients

| Name | CSS | Usage |
|---|---|---|
| Deep Gradient | `linear-gradient(135deg, #1A2238 0%, #2a3a5a 100%)` | Immersive dark sections |
| Sunset Gradient | `linear-gradient(135deg, #E67E5D 0%, #f39c82 100%)` | Warm hero sections, CTA areas |

### 3.5 Background Textures

- **Matrix Grid:** `radial-gradient(var(--brand-burnt-peach) 1px, transparent 1px); background-size: 20px 20px` at low opacity
- **Digital Mesh:** Grid lines at `rgba(26, 34, 56, 0.05)`, 40px spacing
- **Scanline:** Repeating horizontal lines with Burnt Peach at 0.2 opacity

---

## 4. Typography

**Font Family:** `'Manrope', sans-serif`
**Google Fonts import:** `Manrope:wght@400;500;600;800`
**Weights used:** 400 (Regular), 500 (Medium — logo subtitles only), 600 (SemiBold), 800 (ExtraBold)
**Rendering:** `-webkit-font-smoothing: antialiased`

### 4.1 Type Scale — Desktop (≥1025px)

| Element | Tag | Size | Weight | Line-H | Letter-sp | Color | Opacity |
|---|---|---|---|---|---|---|---|
| Display Heading | `h1` | 3.5rem | 800 | 1.05 | -0.02em | #1A2238 | 1.0 |
| Section Title | `h2` | 2.25rem | 600 | 1.15 | -0.015em | #1A2238 | 1.0 |
| Subheading | `h3` | 1.5rem | 600 | 1.3 | 0 | #1A2238 | 0.9 |
| Technical Label | `h4` | 1.1rem | 800 | 1.2 | 0.1em | #E67E5D | 1.0 |
| Body Text | `p` | 1.2rem | 400 | 1.6 | 0.01em | #1A2238 | 0.7 |
| Action/Link | `a/button` | 0.85rem | 800 | 1.0 | 0.1em | #E67E5D | 1.0 |
| Caption | `small` | 0.75rem | 400 | 1.4 | 0.05em | #1A2238 | 0.5 |

### 4.2 Type Scale — Tablet (≤1024px)

| Element | Size | Weight | Line-H | Letter-sp |
|---|---|---|---|---|
| `h1` | 2.75rem | 800 | 1.1 | -0.015em |
| `h2` | 2rem | 600 | 1.2 | -0.01em |
| `h3` | 1.25rem | 600 | 1.3 | 0 |
| `h4` | 1rem | 800 | 1.2 | 0.1em |
| `p` | 1.1rem | 400 | 1.55 | 0.01em |
| `a/button` | 0.8rem | 800 | 1.0 | 0.1em |
| `small` | 0.7rem | 400 | 1.4 | 0.04em |

### 4.3 Type Scale — Mobile (≤768px)

| Element | Size | Weight | Line-H | Letter-sp |
|---|---|---|---|---|
| `h1` | 2rem | 800 | 1.15 | -0.01em |
| `h2` | 1.5rem | 600 | 1.25 | 0 |
| `h3` | 1.15rem | 600 | 1.3 | 0 |
| `h4` | 0.9rem | 800 | 1.2 | 0.05em |
| `p` | 1rem | 400 | 1.5 | 0 |
| `a/button` | 0.8rem | 800 | 1.0 | 0.05em |
| `small` | 0.7rem | 400 | 1.4 | 0.02em |

### 4.4 Hero/Display Typography
For hero sections and dramatic layouts, use `clamp()` for fluid scaling:
- Hero title: `font-size: clamp(5rem, 15vw, 12rem); font-weight: 800; letter-spacing: -0.05em; line-height: 0.8`
- Section display: `font-size: clamp(2.5rem, 8vw, 4.5rem); font-weight: 800; letter-spacing: -0.02em; line-height: 0.9`

### 4.5 Text Decorations

| Pattern | Implementation | When to use |
|---|---|---|
| **NIVOR Highlight** | Pseudo-element `::before` — `rgba(230, 126, 93, 0.35)` pill behind text baseline, 12px height | Emphasize key phrases in marketing copy |
| **Bold Emphasis** | `font-weight: 800` | Critical terms |
| **Italic Nuance** | `font-style: italic; color: var(--brand-burnt-peach)` | Artistic quotes, subtle highlights |
| **Interactive Underline** | CSS underline that expands left-to-right on hover, 3px Burnt Peach | Navigation links |
| **Strikethrough** | Standard `line-through` at opacity 0.3 | "Old vs New" comparisons only |

### 4.6 Section Tag Pattern
Section labels (category identifiers above titles):
```css
.section-tag {
    font-size: 0.9rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.4em;
    color: var(--brand-burnt-peach);
    margin-bottom: 1.5rem;
}
```

---

## 5. Spacing, Radius & Shadows

### 5.1 Corner Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 0.5rem (8px) | Buttons, chips, inputs, small cards |
| `--radius-md` | 1rem (16px) | Content cards, modals |
| `--radius-lg` | 2rem (32px) | Hero sections, large panels |
| `--radius-full` | 9999px | Pills, tags, fully rounded buttons |

### 5.2 Shadow System

| Token | Value | Usage |
|---|---|---|
| `--shadow-subtle` | `0 4px 12px rgba(26, 34, 56, 0.05)` | Cards at rest |
| `--shadow-elevated` | `0 20px 40px rgba(26, 34, 56, 0.05)` | Hovered cards, modals |
| `--shadow-floating` | `0 40px 80px rgba(26, 34, 56, 0.12)` | Floating CTAs, hero elements |

### 5.3 Layout Spacing
- **Page wrapper:** `max-width: 1600px; margin: 0 auto; padding: 0 4rem`
- **Tablet wrapper padding:** `0 2rem`
- **Mobile wrapper padding:** `0 1.5rem`
- **Section margin-bottom:** Desktop `15rem`, Tablet `10rem`, Mobile `8rem`
- **Grid gap (standard):** `2rem`
- **Content internal padding:** Large panels `5-6rem`, Medium cards `3-4rem`, Mobile `2rem`

---

## 6. Component Library

### 6.1 Buttons

All buttons use class pattern:
```css
.btn-nvr {
    padding: 1.25rem 2.5rem;
    border-radius: var(--radius-full);
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.85rem;
    font-family: 'Manrope', sans-serif;
    cursor: pointer;
    border: none;
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    transition: transform 0.16s var(--ease-premium), background 0.3s var(--ease-out), box-shadow 0.3s var(--ease-out);
}
.btn-nvr:hover { transform: translateY(-4px); }
.btn-nvr:active { transform: scale(0.97); }
```

| Variant | Background | Text Color | Notes |
|---|---|---|---|
| Primary | `--brand-burnt-peach` | white | Main CTA, include arrow icon |
| Secondary | `--brand-prussian-blue` | white | Supporting actions |
| Outline | transparent + 2px border Prussian Blue | Prussian Blue | Tertiary actions |
| Glass | `rgba(255,255,255,0.4)` + `backdrop-filter: blur(20px)` | Prussian Blue | Over images/gradients |
| Night Mode | `--brand-luxury-mono` | white | Dark UI contexts, add `--shadow-floating` |
| Text Link | transparent, underlined | Burnt Peach | Inline text CTAs |
| Compact | Platinum bg, smaller padding `0.8rem 1.2rem`, font `0.7rem` | Prussian Blue | Filters, toolbar actions |
| Icon Button | 50×50px, centered icon | white on Burnt Peach | FABs, quick actions |

**Mobile override:** Buttons go `width: 100%; justify-content: center; padding: 1.25rem 1.5rem`

### 6.2 Form Inputs

- **Text input:** Bottom-border style — no box border, only `border-bottom: 2px solid var(--brand-platinum)`. Focus state: border color transitions to Burnt Peach.
- **Label:** `font-size: 0.75rem; font-weight: 800; opacity: 0.5; text-transform: uppercase`
- **Select:** Same bottom-border style, transparent background, cursor pointer
- **Checkbox (standard):** 24×24px, rounded 6px, checked = Burnt Peach bg + white checkmark, unchecked = 2px Platinum border
- **Checkbox (card pattern):** Full-width card with 2px border. Selected: Burnt Peach border + `rgba(230,126,93,0.05)` bg + filled circle indicator. Unselected: Platinum border + empty circle.

### 6.3 Cards & Containers
- Background: white
- Padding: 4-6rem desktop, 2-3rem mobile
- Border-radius: `--radius-lg`
- Shadow: `--shadow-elevated`
- Optional 1px border: `rgba(26, 34, 56, 0.08)`

### 6.4 Scrollbar
```css
::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: var(--brand-platinum); }
::-webkit-scrollbar-thumb {
    background: var(--brand-burnt-peach);
    border-radius: 10px;
    border: 2px solid var(--brand-platinum);
}
::-webkit-scrollbar-thumb:hover { background: #d46a4a; }
```

### 6.5 Text Selection
```css
::selection {
    background: rgba(230, 126, 93, 0.2);
    color: inherit;
}
```
Never allow browser-default blue selection. This rule is included in nivor.css.

### 6.6 Tap Highlight Suppression
```css
* { -webkit-tap-highlight-color: transparent; }
```
Removes the default blue/gray tap flash on mobile browsers. Included in nivor.css.

### 6.7 Gallery Grid
```css
.gallery-grid {
    columns: 3;
    gap: 2rem;
}
.gallery-item {
    break-inside: avoid;
    margin-bottom: 2rem;
    border-radius: var(--radius-md);
    overflow: hidden;
    box-shadow: var(--shadow-elevated);
    transition: transform 0.5s var(--ease-premium), box-shadow 0.5s var(--ease-premium);
}
.gallery-item img { width: 100%; display: block; }
.gallery-item:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: var(--shadow-floating);
}
```
Responsive: tablet `columns: 2`, mobile `columns: 1`.
Images inside gallery items use `cursor: zoom-in` when a lightbox is present.

### 6.8 Lightbox
```css
.lightbox {
    position: fixed;
    inset: 0;
    background: rgba(26, 34, 56, 0.95);
    backdrop-filter: blur(20px);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    cursor: zoom-out;
    opacity: 0;
    transition: opacity 0.4s var(--ease-premium);
}
.lightbox.active { display: flex; opacity: 1; }
.lightbox img {
    max-width: 90%;
    max-height: 90vh;
    border-radius: 1rem;
    box-shadow: 0 50px 100px rgba(0, 0, 0, 0.5);
    transform: scale(0.9);
    transition: transform 0.5s var(--ease-premium);
}
.lightbox.active img { transform: scale(1); }
```
Lightbox background uses Prussian Blue at 95% opacity with blur. Close on click or Escape key.

### 6.9 NIVOR Highlight (Text Marker)
```css
.nvr-highlight {
    position: relative;
    display: inline-block;
    z-index: 1;
}
.nvr-highlight::before {
    content: "";
    position: absolute;
    bottom: 2px;
    left: -4px;
    right: -4px;
    height: 12px;
    background: rgba(230, 126, 93, 0.35);
    z-index: -1;
    border-radius: 99px;
}
```
Usage: `<span class="nvr-highlight">kiemelendő szöveg</span>`

---

## 7. Motion & Animation

### 7.1 Easing Curves
| Token | Value | Usage |
|---|---|---|
| `--ease-premium` | `cubic-bezier(0.25, 0.8, 0.25, 1)` | Default for all transitions |
| `--ease-out` | `cubic-bezier(0.23, 1, 0.32, 1)` | Exit animations, fast-out |

### 7.2 Timing
| Duration | Usage |
|---|---|
| 160ms | Instant feedback (button press, click) |
| 300ms | Standard transitions (hover, tab switch) |
| 500ms | Section entrances, reveals |

### 7.3 Choreographic Principles
1. **Staggered Entrance** — Elements cascade in with 100ms stagger delay, never all at once
2. **Elastic Snapback** — Interactive elements use elastic physics (GSAP `elastic.out(1, 0.5)`)
3. **Spatial Parallax** — Background layers at 0.5× speed vs foreground
4. **Reveal Pattern** — `opacity: 0; transform: translateY(40px)` → animate to `opacity: 1; y: 0` on scroll (trigger at `top 85%`)

### 7.4 Interaction Policy
- **Selective Motion:** Animate only to highlight actions, guide the eye, or reinforce spatial depth. Static content stays static.
- **Mobile Discipline:** Remove default tap highlights (`-webkit-tap-highlight-color: transparent`). Use custom subtle bg shifts for touch feedback.
- **Micro-Highlighting:** Use `scale(0.98)` and opacity shifts for touch feedback. No bouncy icon animations.
- **Hover effects:** Cards `translateY(-5px to -10px)`, buttons `translateY(-4px)`, gallery items `scale(1.05)` on images

### 7.5 Specialty Animations
- **Fluid Blob:** `border-radius` morph animation, 8s infinite, using Burnt Peach gradient
- **Scan Line:** 2px Burnt Peach line animating top→bottom at 0.3 opacity, 4s loop
- **Cursor Tracking:** Mouse position mapped to 3D transforms on glass elements (parallax cards)

---

## 8. Layout & Responsive System

### 8.1 Grid System
- Primary grid: CSS Grid with `repeat(auto-fit, minmax(Xpx, 1fr))`
- Logo grid: `minmax(280px, 1fr)` — tablet `minmax(200px, 1fr)` — mobile `1fr`
- Color row: `minmax(200px, 1fr)`
- Gallery masonry: CSS `columns: 3` — tablet `columns: 2` — mobile `columns: 1`
- Harmony grid: `repeat(4, 1fr)` — tablet `repeat(2, 1fr)` — mobile `1fr`
- Stage grid: `1fr 1fr` — mobile `1fr`

### 8.2 Breakpoints

| Breakpoint | Target | Key Changes |
|---|---|---|
| `≤1400px` | Large tablet/small desktop | Wrapper padding → 2rem |
| `≤1024px` | Tablet | Grids → 2-col or 1-col, sections margin ↓, narrative grids stack |
| `≤768px` | Mobile | Everything single-column, buttons full-width, padding reduced, typography scaled down |

### 8.3 Mobile-Specific Overrides
- All multi-column grids collapse to `1fr`
- `span-2` and `span-3` grid items → `span 1`
- Typography matrix stacks vertically (flex-direction: column)
- Large padding (5-6rem) → 2rem
- Tables get `display: block; overflow-x: auto`
- 3D stages scale down: `height: 400px; border-radius: 2rem; transform: scale(0.85)`

---

## 9. Glass & Spatial Effects

### 9.1 Glassmorphism
```css
.glass {
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 2rem;
}
```
Use for floating UI modules, overlay cards, and spatial depth demonstrations.

### 9.2 3D Perspective
- Container: `perspective: 1000-2000px`
- Child elements: `transform-style: preserve-3d`
- Mouse-driven rotation: Map cursor X/Y to `rotateY(±40deg)` and `rotateX(±40deg)`
- Reset on mouseleave with elastic easing (duration: 1.5-2s)

---

## 10. Print & Physical Media

### 10.1 CMYK Values
- **Prussian Blue:** C:91 M:79 Y:45 K:48
- **Burnt Peach:** C:5 M:62 Y:65 K:0

### 10.2 Print Typography (pt)
| Element | Size Range |
|---|---|
| Headlines | 24pt – 48pt |
| Sub-heads | 14pt – 18pt |
| Body Text | 9pt – 11pt |
| Minimum size | 6pt |

### 10.3 Paper & Finish
- **Stock:** 300gsm+ Uncoated or Matte
- **Texture:** Subtle geometric embossing
- **Finish:** Spot UV on Burnt Peach accents

### 10.4 Technical Specs
- **Required Bleed:** 3mm
- **Safety Margin:** 5mm inward from trim line
- **Export Format:** PDF/X-1a:2001

---

## 11. nivor.css Reference Content

This is the complete content for `nivor.css`. When creating a new nivor.css file (per Section 0), use this exact content:

```css
/* ============================================
   NIVOR BRAND SYSTEM — nivor.css
   Master Brand Tokens & Base Styles
   Version: 5.0
   ============================================ */

/* --- 1. DESIGN TOKENS --- */
:root {
    /* Primary */
    --brand-prussian-blue: #1A2238;
    --brand-burnt-peach: #E67E5D;
    /* Secondary */
    --brand-platinum: #F5F6F7;
    --brand-soft-blush: #F8E0E0;
    --brand-pale-sky: #F1F9FC;
    --brand-luxury-mono: #0F1420;
    --brand-bone-white: #FAF9F6;
    --surface-white: #FFFFFF;
    /* Radius */
    --radius-sm: 0.5rem;
    --radius-md: 1rem;
    --radius-lg: 2rem;
    --radius-full: 9999px;
    /* Shadows */
    --shadow-subtle: 0 4px 12px rgba(26, 34, 56, 0.05);
    --shadow-elevated: 0 20px 40px rgba(26, 34, 56, 0.05);
    --shadow-floating: 0 40px 80px rgba(26, 34, 56, 0.12);
    /* Motion */
    --ease-premium: cubic-bezier(0.25, 0.8, 0.25, 1);
    --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
}

/* --- 2. GLOBAL RESET --- */
* { margin: 0; padding: 0; box-sizing: border-box; }
* { -webkit-tap-highlight-color: transparent; }

body {
    background-color: var(--brand-platinum);
    color: var(--brand-prussian-blue);
    font-family: 'Manrope', sans-serif;
    overflow-x: hidden;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
}

/* --- 3. BRAND SELECTION & SCROLLBAR --- */
::selection {
    background: rgba(230, 126, 93, 0.2);
    color: inherit;
}

::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: var(--brand-platinum); }
::-webkit-scrollbar-thumb {
    background: var(--brand-burnt-peach);
    border-radius: 10px;
    border: 2px solid var(--brand-platinum);
}
::-webkit-scrollbar-thumb:hover { background: #d46a4a; }

/* --- 4. BASE TYPOGRAPHY --- */
h1 {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.02em;
    color: var(--brand-prussian-blue);
}
h2 {
    font-size: 2.25rem;
    font-weight: 600;
    line-height: 1.15;
    letter-spacing: -0.015em;
    color: var(--brand-prussian-blue);
}
h3 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.3;
    color: var(--brand-prussian-blue);
    opacity: 0.9;
}
h4 {
    font-size: 1.1rem;
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--brand-burnt-peach);
}
p {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: 0.01em;
    color: var(--brand-prussian-blue);
    opacity: 0.7;
}
small {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.05em;
    color: var(--brand-prussian-blue);
    opacity: 0.5;
}
a {
    color: var(--brand-burnt-peach);
    text-decoration: none;
    font-weight: 600;
    transition: opacity 0.3s var(--ease-premium);
}
a:hover { opacity: 0.8; }

/* --- 5. LAYOUT WRAPPER --- */
.editorial-wrapper {
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 4rem;
    overflow-x: hidden;
}

/* --- 6. SECTION TAG --- */
.section-tag {
    font-size: 0.9rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.4em;
    color: var(--brand-burnt-peach);
    margin-bottom: 1.5rem;
    display: block;
}

/* --- 7. BUTTONS --- */
.btn-nvr {
    padding: 1.25rem 2.5rem;
    border-radius: var(--radius-full);
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.85rem;
    font-family: 'Manrope', sans-serif;
    cursor: pointer;
    border: none;
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    transition: transform 0.16s var(--ease-premium),
                background 0.3s var(--ease-out),
                box-shadow 0.3s var(--ease-out);
}
.btn-nvr:hover { transform: translateY(-4px); }
.btn-nvr:active { transform: scale(0.97); }

.btn-nvr--primary { background: var(--brand-burnt-peach); color: white; }
.btn-nvr--secondary { background: var(--brand-prussian-blue); color: white; }
.btn-nvr--outline {
    border: 2px solid var(--brand-prussian-blue);
    color: var(--brand-prussian-blue);
    background: transparent;
}
.btn-nvr--glass {
    background: rgba(255,255,255,0.4);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(0,0,0,0.1);
    color: var(--brand-prussian-blue);
}
.btn-nvr--night {
    background: var(--brand-luxury-mono);
    color: white;
    box-shadow: var(--shadow-floating);
}

/* --- 8. TEXT DECORATIONS --- */
.nvr-highlight {
    position: relative;
    display: inline-block;
    z-index: 1;
}
.nvr-highlight::before {
    content: "";
    position: absolute;
    bottom: 2px;
    left: -4px;
    right: -4px;
    height: 12px;
    background: rgba(230, 126, 93, 0.35);
    z-index: -1;
    border-radius: 99px;
}

/* --- 9. GLASSMORPHISM --- */
.glass {
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 2rem;
}

/* --- 10. LIGHTBOX --- */
.lightbox {
    position: fixed;
    inset: 0;
    background: rgba(26, 34, 56, 0.95);
    backdrop-filter: blur(20px);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    cursor: zoom-out;
    opacity: 0;
    transition: opacity 0.4s var(--ease-premium);
}
.lightbox.active { display: flex; opacity: 1; }
.lightbox img {
    max-width: 90%;
    max-height: 90vh;
    border-radius: 1rem;
    box-shadow: 0 50px 100px rgba(0,0,0,0.5);
    transform: scale(0.9);
    transition: transform 0.5s var(--ease-premium);
}
.lightbox.active img { transform: scale(1); }

/* --- 11. SCROLL REVEAL (base state) --- */
.reveal {
    opacity: 0;
    transform: translateY(40px);
}

/* --- 12. RESPONSIVE — Tablet (≤1024px) --- */
@media (max-width: 1400px) {
    .editorial-wrapper { padding: 0 2rem; }
}

@media (max-width: 1024px) {
    h1 { font-size: 2.75rem; line-height: 1.1; letter-spacing: -0.015em; }
    h2 { font-size: 2rem; line-height: 1.2; letter-spacing: -0.01em; }
    h3 { font-size: 1.25rem; }
    h4 { font-size: 1rem; }
    p  { font-size: 1.1rem; line-height: 1.55; }
    small { font-size: 0.7rem; letter-spacing: 0.04em; }
    .btn-nvr { font-size: 0.8rem; }
}

/* --- 13. RESPONSIVE — Mobile (≤768px) --- */
@media (max-width: 768px) {
    .editorial-wrapper { padding: 0 1.5rem; }
    h1 { font-size: 2rem; line-height: 1.15; letter-spacing: -0.01em; }
    h2 { font-size: 1.5rem; line-height: 1.25; letter-spacing: 0; }
    h3 { font-size: 1.15rem; }
    h4 { font-size: 0.9rem; letter-spacing: 0.05em; }
    p  { font-size: 1rem; line-height: 1.5; letter-spacing: 0; }
    small { font-size: 0.7rem; letter-spacing: 0.02em; }
    .btn-nvr {
        width: 100%;
        justify-content: center;
        padding: 1.25rem 1.5rem;
        font-size: 0.8rem;
    }
}
```

---

## 12. Developer Rules & Anti-Patterns

### Do
- Use CSS custom properties for all colors, radii, shadows, and easing
- Use opacity on Prussian Blue instead of gray shades
- Use `will-change` for GPU-accelerated animated properties
- Use semantic HTML5 elements
- Use Manrope from Google Fonts (never system fonts)
- Maintain `overflow-x: hidden` on body
- Apply `box-sizing: border-box` globally

### Do Not
- Use any gray (#333, #666, #999, etc.) — always Prussian Blue + opacity
- Use hardcoded color values in components — always use CSS variables
- Use browser-default text selection color
- Use browser-default tap highlights on mobile
- Add drop shadows, glows, or outlines to the logo
- Use linear easing — always use `--ease-premium` or `--ease-out`
- Over-animate — motion must serve a purpose
- Use TailwindCSS utility classes — use vanilla CSS only
- Place inline styles when a class-based approach is possible

---

## 13. External Dependencies

| Resource | CDN/Source |
|---|---|
| Manrope Font | `https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;800&display=swap` |
| Bootstrap Icons | `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css` |
| GSAP (optional) | `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js` |
| GSAP ScrollTrigger | `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js` |

---

## 14. Quick-Start HTML Boilerplate

This boilerplate assumes `nivor.css` exists (see Section 0). If it doesn't, create it first with the content from Section 11.

```html
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NIVOR | [Page Title]</title>
    <!-- External Dependencies -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;800&display=swap" rel="stylesheet">
    <!-- NIVOR Brand System -->
    <link rel="stylesheet" href="nivor.css">
    <style>
        /* Page-specific styles ONLY — brand tokens are in nivor.css */
    </style>
</head>
<body>
    <div class="editorial-wrapper">
        <!-- Content here -->
    </div>

    <!-- Optional: GSAP for scroll reveals and interactions -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
    <script>
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray('.reveal').forEach(elem => {
            gsap.to(elem, {
                scrollTrigger: { trigger: elem, start: 'top 85%' },
                opacity: 1, y: 0, duration: 0.5, ease: 'power2.out'
            });
        });
    </script>
</body>
</html>
```

---

## 15. Brand Compliance Checklist

Before delivering any NIVOR asset, verify:

### CSS Architecture
- [ ] `nivor.css` exists and is linked (no brand tokens in `<style>` or inline)
- [ ] Page-specific styles are separate from brand styles
- [ ] All colors reference CSS custom properties (no hardcoded hex in components)
- [ ] No grayscale values anywhere — only Prussian Blue + opacity

### Typography & Fonts
- [ ] Manrope is loaded from Google Fonts with weights 400, 500, 600, 800
- [ ] Typography matches the responsive scale (Desktop → Tablet → Mobile)
- [ ] `-webkit-font-smoothing: antialiased` is applied on body

### Browser Behavior Overrides
- [ ] Text selection uses Burnt Peach at 20% opacity (`::selection`)
- [ ] Tap highlights are disabled (`-webkit-tap-highlight-color: transparent`)
- [ ] Custom scrollbar is styled (Burnt Peach thumb on Platinum track)
- [ ] `overflow-x: hidden` is set on body

### Components
- [ ] Buttons use `--radius-full` and uppercase letter-spacing 0.1em
- [ ] Shadows use the three-tier token system (subtle → elevated → floating)
- [ ] All animations use `--ease-premium` or `--ease-out` (never linear)
- [ ] Lightbox uses Prussian Blue at 95% + backdrop blur

### Layout
- [ ] `.editorial-wrapper` used for main content (max-width: 1600px)
- [ ] Layout is responsive at 1400px, 1024px, and 768px breakpoints
- [ ] Mobile: buttons full-width, grids single-column, padding reduced

### Brand Identity
- [ ] Logo has 25% clear space on all sides
- [ ] Logo variant is appropriate for background color
- [ ] Print assets use CMYK values with 3mm bleed
