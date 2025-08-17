import { Hero } from "@/components/sections/hero"
import { FeaturedWork } from "@/components/sections/featured-work"
import { CallToAction } from "@/components/sections/call-to-action"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedWork />
      <CallToAction />
    </main>
  )
}
