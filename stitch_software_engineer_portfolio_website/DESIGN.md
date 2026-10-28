---
name: Obsidian Infrastructure
colors:
  surface: '#10131a'
  surface-dim: '#10131a'
  surface-bright: '#363941'
  surface-container-lowest: '#0b0e15'
  surface-container-low: '#191b23'
  surface-container: '#1d1f27'
  surface-container-high: '#272a32'
  surface-container-highest: '#32353d'
  on-surface: '#e1e2ec'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e1e2ec'
  inverse-on-surface: '#2d3038'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dce6'
  primary: '#e0fdff'
  on-primary: '#00373a'
  primary-container: '#00f2fe'
  on-primary-container: '#006a70'
  inverse-primary: '#00696f'
  secondary: '#c0c1ff'
  on-secondary: '#1000a9'
  secondary-container: '#3131c0'
  on-secondary-container: '#b0b2ff'
  tertiary: '#e1ffec'
  on-tertiary: '#003824'
  tertiary-container: '#67f4b7'
  on-tertiary-container: '#006e4b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ff6ff'
  primary-fixed-dim: '#00dce6'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f53'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#10131a'
  on-background: '#e1e2ec'
  surface-variant: '#32353d'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 3.5rem
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: '1.15'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 2.25rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: '1.25'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 1.25rem
    fontWeight: '500'
    lineHeight: '1.35'
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: '1.55'
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.04em
  metric-display:
    fontFamily: Space Grotesk
    fontSize: 2.75rem
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: -0.03em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 1.5rem
  margin-md: 2.5rem
  margin-lg: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system expresses high-order engineering credibility, distributed systems rigor, and architectural precision. Built for an elite backend software engineer and researcher, the visual language synthesizes the refined execution of modern engineering-first platforms like Linear and Vercel with research-grade telemetry aesthetics.

The personality balances computational authority with understated restraint:
- **Atmospheric & Subterranean:** Deep obsidian and slate foundations evoke low-level kernel runtimes, terminal interfaces, and high-availability server control planes.
- **Architectural & Rigorous:** Strict grid structures, hairline demarcations, and precise monospaced callouts convey reliability, idempotency, and sub-millisecond discipline.
- **Luminescent Telemetry:** Kinetic cyan pulses and indigo field gradients mimic active network streams, fiber nodes, and operational health states.

The overall style combines **Minimalism** with **Technical Blueprint Glassmorphism**—characterized by micro-dot coordinates, hairline translucent borders, structural typography pairings, and functional data density over decorative vanity.

## Colors

The palette establishes an ultra-deep visual field where light functions as an indicator of state and precision.

### Foundation & Surfaces
- **Canvas Base:** `#0a0d14` (Deep obsidian black ground)
- **Sub-canvas / Recessed:** `#0f1420` (Secondary panel backdrop and section banding)
- **Surface Elevation 1:** `#141a29` (Standard card and module body)
- **Surface Elevation 2:** `#1c2438` (Interactive hover states and elevated overlays)
- **Surface Glass Overlay:** `rgba(20, 26, 41, 0.65)` with backdrop blur

### Accents & Signal Flow
- **Primary Signal (Electric Cyan):** `#00f2fe` — Primary actions, focus rings, and high-priority pipeline triggers. Supporting hues: `#38bdf8` (hover), `#06b6d4` (pressed/borders).
- **Secondary Luminescence (Deep Indigo/Violet):** `#6366f1` — Research themes, background ambient radial light, secondary interactive states. Light variant: `#818cf8`.
- **Telemetry Semantics:**
  - *Operational / Stable:* `#10b981` (Emerald — 99.99% uptime, live nodes, benchmark wins)
  - *Compute / Alert:* `#f59e0b` (Amber — warning metrics, high memory pressure)
  - *Architecture / Experimental:* `#8b5cf6` (Deep Purple — RFCs, speculative research tags)

### Typography & Structure
- **Text High-Contrast:** `#f8fafc` (Primary technical documentation, headings, key figures)
- **Text Muted:** `#94a3b8` (Body prose, architectural descriptions)
- **Text Sub-Muted:** `#64748b` (Meta-labels, timestamps, column indicators)
- **Hairline Structural Borders:** `rgba(255, 255, 255, 0.08)` (Default boundary) and `rgba(0, 242, 254, 0.2)` (Active/focused border glow)

## Typography

Typography establishes an intentional cadence between editorial presentation and raw algorithmic precision:

- **Display & Headings (Space Grotesk):** Engineered with geometric rhythm and subtle ink-trap quirks that reflect structural design. Tightly tracked (`-0.02em` to `-0.03em`) for high technical impact.
- **Narrative & Analysis (Inter):** Highly legible, neutral workhorse optimized for multi-column research breakdowns, technical explanations, and complex specifications.
- **Telemetry & Metadata (JetBrains Mono):** Governs system tags, architectural badges, metric identifiers, benchmark stats, and code blocks. Applied with deliberate uppercase transforms and wider letter-spacing for sub-component labels.

## Layout & Spacing

The layout model is anchored by a **12-column responsive fluid grid** enclosed inside a strict max-width shell of `1280px` (`80rem`), referencing the structured, dashboard-like efficiency of backend observability portals.

### Breakpoints & Fluidity
- **Mobile (< 768px):** 4 columns, `gutter-sm: 1rem`, `margin: 1.5rem`. Modules reflow into a strictly vertical, high-density telemetry stream.
- **Tablet (768px - 1024px):** 8 columns, `gutter: 1.5rem`, `margin-md: 2.5rem`. Complex metric matrices collapse into balanced 2x2 grids.
- **Desktop (1024px+):** 12 columns, `gutter-lg: 2rem`, `margin-lg: 4rem`. Asymmetric arrangements: 4-column contextual sidebar / 8-column systems analysis.

### Structural Blueprint Grid
Background surfaces incorporate an engineered blueprint dot matrix:
- Dot pattern: `radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px)` repeating on a fixed `24px x 24px` grid.
- Border intersections are highlighted with coordinate-style corner brackets or subtle crosshair markers on primary hero sections.

## Elevation & Depth

This design system avoids traditional drop shadows in favor of **Tonal Layers**, **Hairline Boundaries**, and **Atmospheric Edge Glows**. Depth is created through surface contrast and luminosity rather than spatial elevation.

1. **Elevation Base (Canvas):** Flat `#0a0d14` with the blueprint dot matrix.
2. **Elevation Level 1 (Surface Cards & Modules):** Backfilled with `#141a29` at `80%` opacity, reinforced with `backdrop-filter: blur(12px)` and bordered by a crisp `1px solid rgba(255, 255, 255, 0.08)`.
3. **Elevation Level 2 (Focused Nodes / Hover States):** Surface increases to `#1c2438`. Border transitions smoothly to `rgba(0, 242, 254, 0.35)` with an ambient peripheral glow: `box-shadow: 0 0 24px -4px rgba(0, 242, 254, 0.12), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)`.
4. **Elevation Level 3 (System Modals & Overlays):** `#0f1420` surrounded by dual borders: an inner hairline `rgba(255,255,255,0.12)` and an ambient secondary glow `box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 40px -10px rgba(99, 102, 241, 0.15)`.

## Shapes

The design system maintains a **Soft / Architectural (Level 1)** corner geometry, avoiding overly circular motifs in functional containers to preserve an engineered, instrumentation-grade feel:

- **Cards, Code Panels & Modals:** `0.5rem` (`8px`) radius. Clean, disciplined, sharp enough to convey mathematical stability while remaining contemporary.
- **Form Controls & Interactive Buttons:** `0.375rem` (`6px`) radius for compact input density.
- **Pills, System Badges & Telemetry Dots:** Fully rounded (`9999px`) to create intentional structural contrast against the rectilinear layout grid.

## Components

### Buttons
- **Primary (Signal Pulse):** Background `linear-gradient(135deg, #00f2fe 0%, #06b6d4 100%)`, text `#0a0d14` (ultra-bold weight for contrast), border `none`. Hover initiates an external ambient halo (`0 0 16px rgba(0, 242, 254, 0.45)`).
- **Secondary (Obsidian Wire):** Background `rgba(20, 26, 41, 0.8)`, text `#f8fafc`, border `1px solid rgba(255, 255, 255, 0.1)`. Hover shifts background to `#1c2438` and border to `rgba(255, 255, 255, 0.25)`.
- **Tertiary (Ghost Monospace):** Background transparent, text `#94a3b8`, font `JetBrains Mono`. Hover transitions color to `#00f2fe`.

### Architectural & Telemetry Chips (Badges)
- Pill format (`rounded-full`, height `24px`, font `label-sm`).
- **Live / Operational:** Background `rgba(16, 185, 129, 0.08)`, border `1px solid rgba(16, 185, 129, 0.25)`, text `#10b981`. Includes a pulsing `6px` status dot.
- **Research / Protocol:** Background `rgba(99, 102, 241, 0.08)`, border `1px solid rgba(99, 102, 241, 0.25)`, text `#818cf8`.
- **Latency / Metric Tag:** Background `rgba(255, 255, 255, 0.04)`, border `1px solid rgba(255, 255, 255, 0.08)`, text `#94a3b8`.

### Metric Callout Cards
- Enclosed in `Level 1` surface with hairline borders.
- Top label in `label-sm` muted uppercase (e.g., `LATENCY (P99.9)`, `THROUGHPUT`).
- Center value rendered in `metric-display` (`Space Grotesk` bold) in crisp white with a subtle cyan gradient tint on terminal characters.
- Sub-text reflects architectural context (e.g., `< 4ms under 50k req/s`, `Zero-copy ring buffer`).

### Timeline & Research Stream
- Monospaced timestamp column on the left edge (`#64748b`).
- Vertical connecting bus line: `1px solid rgba(255, 255, 255, 0.08)`.
- Timeline anchor node: `8px` square or diamond node with `#00f2fe` accent and inner glow.
- Content panel: Indented slate card containing project milestones, benchmark graphs, or research publication summaries.

### Input Fields & Terminal Emulators
- Background `#0f1420`, border `1px solid rgba(255, 255, 255, 0.08)`, text `#f8fafc`, typography `JetBrains Mono`.
- Active focus state: Border shifts to `#00f2fe` accompanied by a localized inner glow `inset 0 0 0 1px #00f2fe`.
- Prefix indicators incorporate shell glyphs (`$`, `>`) rendered in `#64748b`.