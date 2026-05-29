/**
 * Theme preset definitions — 5 presets (3 dark, 2 light).
 * Barrel file: re-exports preset data from split modules.
 * Extracted from original presets.ts for single-responsibility.
 */

import type { ThemeMode, ThemePreset } from './theme'
import { zincPreset, champagnePreset, cyanNightPreset } from './presets-dark'
import { champagneLightPreset, cyanMorningPreset } from './presets-light'
import type { ThemeTokens } from './theme'

// ─── Preset Metadata ─────────────────────────────────────────

export interface ThemePresetMeta {
  tokens: ThemeTokens
  label: string
  description: string
  accent: string
  bg: string
  mode: ThemeMode
  pair?: ThemePreset
}

export const themePresets: Record<ThemePreset, ThemePresetMeta> = {
  champagne: {
    tokens: champagnePreset,
    label: 'Champagne',
    description: 'Premium gold + Playfair serif',
    accent: '#C8A97E',
    bg: '#0B0B0F',
    mode: 'dark',
    pair: 'champagne-light',
  },
  'cyan-night': {
    tokens: cyanNightPreset,
    label: 'Cyan Night',
    description: '#00E5FF cyan + sharp edges',
    accent: '#00E5FF',
    bg: '#080810',
    mode: 'dark',
    pair: 'cyan-morning',
  },
  zinc: {
    tokens: zincPreset,
    label: 'Zinc',
    description: 'Monochrome + emerald + amber',
    accent: '#10B981',
    bg: '#0A0A0F',
    mode: 'dark',
  },
  'champagne-light': {
    tokens: champagneLightPreset,
    label: 'Champagne Light',
    description: 'Warm cream + gold + Playfair',
    accent: '#B08D57',
    bg: '#FAF8F5',
    mode: 'light',
    pair: 'champagne',
  },
  'cyan-morning': {
    tokens: cyanMorningPreset,
    label: 'Cyan Morning',
    description: 'Cool white + cyan + sharp',
    accent: '#0891B2',
    bg: '#F0F9FF',
    mode: 'light',
    pair: 'cyan-night',
  },
}

// ─── Preset pairs for dark/light toggle ─────────────────────

export const DARK_TO_LIGHT: Partial<Record<ThemePreset, ThemePreset>> = {
  champagne: 'champagne-light',
  'cyan-night': 'cyan-morning',
  zinc: 'champagne-light',
}

export const LIGHT_TO_DARK: Partial<Record<ThemePreset, ThemePreset>> = {
  'champagne-light': 'champagne',
  'cyan-morning': 'cyan-night',
}
