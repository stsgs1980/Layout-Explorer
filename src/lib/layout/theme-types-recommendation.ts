/**
 * Theme recommendation types — extracted from theme-types.ts
 * for anti-monolith compliance.
 */

import type { ThemePreset } from './theme-types'

// ─── Theme Recommendation ────────────────────────────────────────

export interface ThemeRecommendationInput {
  /** Goal category (saas, ecommerce, blog, etc.) */
  goal: string
  /** Mood preference (premium, tech, playful, minimal) */
  mood?: string
  /** Target audience (developers, consumers, enterprise) */
  audience?: string
}

export interface ThemeRecommendation {
  presetId: ThemePreset
  confidence: number    // 0-1
  reason: string
  mood?: string
}
