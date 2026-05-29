/**
 * @stsgs/ui Design Tokens — Typography
 * Font sizes, weights, line heights, and letter spacing.
 */

// ─── Typography Scale ────────────────────────────────────────

export const fontSize = {
  xs:   9,   // micro-labels, kbd hints
  sm:   10,  // tags, badges, kbd
  base: 12,  // meta, descriptions
  md:   13,  // buttons, body text
  lg:   15,  // card titles, subtitles
  xl:   20,  // section headings, sidebar title
  '2xl': 26, // page headings
  '3xl': 42, // hero / display
} as const

export const fontWeight = {
  light:     300,
  regular:   400,
  medium:    500,
  semibold:  600,
  bold:      700,
  black:     800,
} as const

export const lineHeight = {
  tight:  1.15,
  snug:   1.35,
  normal: 1.5,
  relaxed: 1.7,
  loose:  1.8,
} as const

export const letterSpacing = {
  tight:   '-0.02em',
  normal:  '0',
  wide:    '0.05em',
  wider:   '0.08em',
  widest:  '0.12em',
} as const
