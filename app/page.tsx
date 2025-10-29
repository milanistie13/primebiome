import Hero from "@/components/hero"
import Curiosity from "@/components/curiosity"
import SocialProof from "@/components/social-proof"
import BridgeCTA from "@/components/bridge-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <Hero />
      <Curiosity />
      <SocialProof />
      <BridgeCTA />
      <Footer />
    </main>
  )
}
