import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Layout Explorer — AI-Powered Layout Designer",
  description: "Parses prompts, scores layout recipes, recommends themes, wireframe preview",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground">{children}</body>
    </html>
  )
}
