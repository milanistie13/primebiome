"use client"

export default function Hero() {
  const affiliateLink = "https://getprimebiome.com/text.php?affiliate=redirectn"

  return (
    <section className="w-full bg-gradient-to-b from-[#FFE5E5] to-white pt-8 pb-12 px-4 sm:pt-12 sm:pb-16">
      <div className="max-w-2xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block bg-[#E8F8F6] text-[#4ECDC4] px-4 py-2 rounded-full text-sm font-semibold mb-4">
          ✓ Clinically Formulated • 19,479+ Reviews
        </div>

        {/* Headline */}
        <h1 className="font-poppins text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-4 text-balance leading-tight">
          Youthful Skin Starts From Within
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-700 mb-8 text-balance leading-relaxed">
          Support your skin's natural cell turnover and gut health with PrimeBiome's scientifically-formulated probiotic
          blend.
        </p>

        {/* CTA Button */}
        <a
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#FFD700] hover:bg-yellow-500 text-black font-poppins font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Claim Your Bottle Now →
        </a>

        {/* Trust Signal */}
        <p className="text-sm text-gray-600 mt-6">60-Day Money-Back Guarantee • Free Shipping • No Hidden Charges</p>
      </div>
    </section>
  )
}
