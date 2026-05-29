'use client'

import { VariantLayoutExplorer } from '@/components/layout'

// Load recipes from static data
import recipesData from '@/data/recipes.json'

export default function Home() {
  return <VariantLayoutExplorer recipes={recipesData} />
}
