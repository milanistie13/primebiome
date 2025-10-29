"use client"

export default function Footer() {
  const affiliateLink = "https://getprimebiome.com/text.php?affiliate=redirectn"

  return (
    <footer className="w-full bg-[#1A1A1A] text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Final CTA */}
        <div className="text-center mb-12 pb-12 border-b border-gray-700">
          <h3 className="font-poppins text-2xl font-bold mb-4">Don't Wait—Transform Your Skin Today</h3>
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2ECC71] hover:bg-green-600 text-white font-poppins font-bold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Get PrimeBiome Now →
          </a>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="font-poppins font-bold mb-4">About PrimeBiome</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              PrimeBiome is a scientifically-formulated probiotic supplement designed to support gut health, promote
              skin cell turnover, and help you achieve a more youthful appearance naturally.
            </p>
          </div>

          <div>
            <h4 className="font-poppins font-bold mb-4">Our Promise</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>✓ 100% Natural Ingredients</li>
              <li>✓ Non-GMO & No Stimulants</li>
              <li>✓ 60-Day Money-Back Guarantee</li>
              <li>✓ Free Shipping Worldwide</li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-gray-900 rounded-lg p-4 mb-8">
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong>Affiliate Disclosure:</strong> This is an affiliate link. We may earn a commission if you purchase
            through this link at no additional cost to you. We only recommend products we believe in.
          </p>
        </div>

        {/* Bottom Footer */}
        <div className="text-center text-gray-500 text-xs">
          <p>© 2025 PrimeBiome Bridge. All rights reserved.</p>
          <p className="mt-2">
            These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure,
            or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  )
}
