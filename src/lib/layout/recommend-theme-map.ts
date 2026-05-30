/**
 * Context-to-theme quick map for instant recommendations.
 * Extracted from recommend-theme.ts for anti-monolith compliance.
 */

import type { ThemePreset } from './theme-types'

/**
 * Direct mapping table for common contexts.
 * Used by the Studio UI for instant recommendations without scoring.
 */
export const CONTEXT_THEME_MAP: Record<string, { dark: ThemePreset; light: ThemePreset }> = {
  'saas+premium':          { dark: 'champagne',       light: 'champagne-light' },
  'saas+tech':             { dark: 'cyan-night',      light: 'cyan-morning' },
  'saas+minimal':          { dark: 'zinc',            light: 'champagne-light' },
  'ecommerce+premium':     { dark: 'champagne',       light: 'champagne-light' },
  'ecommerce+tech':        { dark: 'cyan-night',      light: 'cyan-morning' },
  'blog+editorial':        { dark: 'champagne',       light: 'champagne-light' },
  'blog+minimal':          { dark: 'zinc',            light: 'cyan-morning' },
  'documentation+dev':     { dark: 'cyan-night',      light: 'cyan-morning' },
  'documentation+clean':   { dark: 'cyan-night',      light: 'cyan-morning' },
  'portfolio+premium':     { dark: 'champagne',       light: 'champagne-light' },
  'portfolio+tech':        { dark: 'cyan-night',      light: 'cyan-morning' },
  'crm+enterprise':        { dark: 'zinc',            light: 'cyan-morning' },
  'dashboard+tech':        { dark: 'cyan-night',      light: 'cyan-morning' },
  'dashboard+minimal':     { dark: 'zinc',            light: 'champagne-light' },
  'analytics+tech':        { dark: 'cyan-night',      light: 'cyan-morning' },
  'admin+enterprise':      { dark: 'zinc',            light: 'cyan-morning' },
  'landing+premium':       { dark: 'champagne',       light: 'champagne-light' },
  'landing+tech':          { dark: 'cyan-night',      light: 'cyan-morning' },
}
