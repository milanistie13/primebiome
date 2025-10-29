import Hero from "@/components/hero"
import SocialProof from "@/components/social-proof"
import BridgeCTA from "@/components/bridge-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <Hero />
      <SocialProof />
      <BridgeCTA />
      <Footer />
    </main>
  )
}
