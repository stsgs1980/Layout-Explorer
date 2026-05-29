import { NextResponse } from 'next/server'
import { readFileSync } from 'fs'
import { join } from 'path'

export async function GET() {
  const data = readFileSync(join(process.cwd(), 'src/data/recipes.json'), 'utf-8')
  return NextResponse.json(JSON.parse(data))
}
