"use client"

export default function BridgeCTA() {
  const affiliateLink = "https://getprimebiome.com/text.php?affiliate=redirectn"

  return (
    <section className="w-full bg-gradient-to-b from-white to-[#F0F9F8] py-12 px-4 sm:py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-6 text-balance">
          Ready to See the Difference?
        </h2>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Get your first bottle today with our 60-day money-back guarantee. If you don't love it, we'll refund every
          penny.
        </p>

        {/* Primary CTA */}
        <a
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#2ECC71] hover:bg-green-600 text-white font-poppins font-bold py-4 px-10 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl mb-6"
        >
          Claim Your Bottle Now →
        </a>

        {/* Trust Signals */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-600">
          <span>✓ Free Shipping</span>
          <span>✓ 60-Day Guarantee</span>
          <span>✓ No Hidden Charges</span>
        </div>
      </div>
    </section>
  )
}
