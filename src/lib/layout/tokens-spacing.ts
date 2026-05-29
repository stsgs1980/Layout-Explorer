/**
 * @stsgs/ui Design Tokens — Spacing & Layout
 * Spacing scale, border radius, shadows, and wireframe tokens.
 */

// ─── Spacing Scale ────────────────────────────────────────────

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  '2xl': 32,
  '3xl': 48,
  '4xl': 64,
} as const

// ─── Border Radius ────────────────────────────────────────────

export const radius = {
  none: 0,
  sm: 4,
  md: 6,
  lg: 8,
  xl: 10,
  '2xl': 12,
  '3xl': 14,
  '4xl': 16,
  full: 9999,
} as const

// ─── Shadows ──────────────────────────────────────────────────

export const shadows = {
  card:  '0 4px 24px rgba(0,0,0,0.08)',
  input: '0 4px 20px rgba(0,0,0,0.06)',
  glow:  '0 4px 24px rgba(16,185,129,0.08)',
  glowAI: '0 4px 24px rgba(245,158,11,0.08)',
} as const

// ─── Wireframe Grid Tokens ────────────────────────────────────

export const wireframeTokens = {
  // Grid container
  borderWidth:  1,
  borderStyle:  'solid',
  gridGap:      1,  // px — tight

  // Cell styling
  cellFont: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
  cellFontSize: {
    compact: 8,
    normal:  10,
  },
} as const
