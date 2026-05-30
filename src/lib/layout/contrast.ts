/**
 * WCAG Contrast Utility — from Code-Realm palette.tsx
 *
 * Provides contrast ratio calculation and WCAG 2.1 compliance checks.
 * Used to validate theme presets and generated palettes.
 *
 * WCAG 2.1 AA requirements:
 *   - Normal text (< 18px): 4.5:1 minimum
 *   - Large text (>= 18px bold or >= 24px): 3:1 minimum
 *   - UI components / graphical objects: 3:1 minimum
 *
 * WCAG 2.1 AAA requirements:
 *   - Normal text: 7:1 minimum
 *   - Large text: 4.5:1 minimum
 */

import { hexToRgb, type RGB } from './color-convert'

// ─── Luminance Calculation ───────────────────────────────────────

/**
 * Calculate relative luminance of an RGB color per WCAG 2.1 spec.
 * https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
 */
function linearize(channel: number): number {
  const srgb = channel / 255
  return srgb <= 0.04045
    ? srgb / 12.92
    : Math.pow((srgb + 0.055) / 1.055, 2.4)
}

export function getLuminance(rgb: RGB): number {
  const r = linearize(rgb.r)
  const g = linearize(rgb.g)
  const b = linearize(rgb.b)
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

// ─── Contrast Ratio ──────────────────────────────────────────────

/**
 * Calculate contrast ratio between two RGB colors.
 * Returns a value from 1:1 (same color) to 21:1 (black vs white).
 * https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio
 */
export function getContrastRatio(rgb1: RGB, rgb2: RGB): number {
  const l1 = getLuminance(rgb1)
  const l2 = getLuminance(rgb2)
  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)
  return (lighter + 0.05) / (darker + 0.05)
}

/**
 * Calculate contrast ratio from two hex color strings.
 */
export function getContrastRatioHex(fg: string, bg: string): number {
  return getContrastRatio(hexToRgb(fg), hexToRgb(bg))
}

// ─── WCAG Compliance Checks ──────────────────────────────────────

export interface ContrastResult {
  ratio: number
  aa: boolean       // WCAG 2.1 AA (4.5:1 for normal text)
  aaLarge: boolean  // WCAG 2.1 AA for large text (3:1)
  aaa: boolean      // WCAG 2.1 AAA (7:1 for normal text)
  aaaLarge: boolean // WCAG 2.1 AAA for large text (4.5:1)
  level: 'fail' | 'AA-large' | 'AA' | 'AAA-large' | 'AAA'
}

export function checkContrast(fg: string, bg: string): ContrastResult {
  const ratio = getContrastRatioHex(fg, bg)

  const aaLarge = ratio >= 3
  const aa = ratio >= 4.5
  const aaaLarge = ratio >= 4.5
  const aaa = ratio >= 7

  let level: ContrastResult['level'] = 'fail'
  if (aaa) level = 'AAA'
  else if (aaaLarge) level = 'AAA-large'
  else if (aa) level = 'AA'
  else if (aaLarge) level = 'AA-large'

  return { ratio: Math.round(ratio * 100) / 100, aa, aaLarge, aaa, aaaLarge, level }
}

// ─── Convenience Helpers ─────────────────────────────────────────

/**
 * Check if two hex colors meet WCAG 2.1 AA contrast ratio (4.5:1 for normal text).
 * Convenience wrapper around checkContrast().
 */
export function meetsWcagAA(fg: string, bg: string): boolean {
  return checkContrast(fg, bg).aa
}

// Theme audit moved to contrast-audit.ts for anti-monolith compliance.
// Re-export for backward compatibility.
export { auditThemeContrast } from './contrast-audit'
export type { ThemeContrastAudit, ContrastCheck } from './contrast-audit'
