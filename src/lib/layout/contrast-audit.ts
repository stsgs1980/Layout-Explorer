/**
 * Theme contrast audit — WCAG validation for theme presets.
 * Extracted from contrast.ts for anti-monolith compliance.
 */

import { checkContrast, type ContrastResult } from './contrast'

// ─── Theme Validation ────────────────────────────────────────────

export interface ThemeContrastAudit {
  presetId: string
  mode: 'dark' | 'light'
  checks: ContrastCheck[]
  failures: ContrastCheck[]
  passRate: number  // 0-1
}

export interface ContrastCheck {
  name: string
  fg: string
  bg: string
  result: ContrastResult
}

/**
 * Key token pairs to check for WCAG compliance.
 * Each pair maps to a semantic use case.
 */
const CRITICAL_TOKEN_PAIRS: Array<{
  name: string
  fgKey: keyof import('./theme-types').ThemeTokens
  bgKey: keyof import('./theme-types').ThemeTokens
}> = [
  { name: 'Primary text on deep bg',   fgKey: 'textPrimary',   bgKey: 'bgDeep' },
  { name: 'Secondary text on deep bg', fgKey: 'textSecondary', bgKey: 'bgDeep' },
  { name: 'Muted text on deep bg',     fgKey: 'textMuted',     bgKey: 'bgDeep' },
  { name: 'Dim text on deep bg',       fgKey: 'textDim',       bgKey: 'bgDeep' },
  { name: 'Sidebar text on sidebar',   fgKey: 'sidebarText',   bgKey: 'sidebarBg' },
  { name: 'Sidebar muted on sidebar',  fgKey: 'sidebarMuted',  bgKey: 'sidebarBg' },
  { name: 'Cell text on cell bg',      fgKey: 'cellText',      bgKey: 'cellBg' },
  { name: 'Accent on deep bg',         fgKey: 'accentPrimary', bgKey: 'bgDeep' },
  { name: 'Code text on code bg',      fgKey: 'codeText',      bgKey: 'codeBg' },
  { name: 'Code muted on code bg',     fgKey: 'codeMuted',     bgKey: 'codeBg' },
]

/**
 * Audit a theme preset for WCAG contrast compliance.
 */
export function auditThemeContrast(
  presetId: string,
  mode: 'dark' | 'light',
  tokens: import('./theme-types').ThemeTokens
): ThemeContrastAudit {
  const checks: ContrastCheck[] = CRITICAL_TOKEN_PAIRS.map(({ name, fgKey, bgKey }) => {
    const fg = String(tokens[fgKey])
    const bg = String(tokens[bgKey])
    return { name, fg, bg, result: checkContrast(fg, bg) }
  })

  const failures = checks.filter((c) => !c.result.aa)

  return {
    presetId,
    mode,
    checks,
    failures,
    passRate: (checks.length - failures.length) / checks.length,
  }
}
