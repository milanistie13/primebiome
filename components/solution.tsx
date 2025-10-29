"use client"

export default function Solution() {
  const affiliateLink = "https://getprimebiome.com/text.php?affiliate=redirectn"

  return (
    <section className="w-full bg-[#E8F8F6] py-12 px-4 sm:py-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4 text-center text-balance">
          The PrimeBiome Solution
        </h2>

        <p className="text-center text-gray-700 mb-10 text-lg leading-relaxed">
          A scientifically-formulated probiotic blend that supports your gut microbiome, promotes healthy skin cell
          turnover, and helps you achieve a more youthful appearance—naturally.
        </p>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-4xl mb-3">🧬</div>
            <h3 className="font-poppins font-bold text-[#1A1A1A] mb-2">Dermal Balance</h3>
            <p className="text-sm text-gray-700">Supports skin health from the inside out</p>
          </div>

          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-4xl mb-3">🫘</div>
            <h3 className="font-poppins font-bold text-[#1A1A1A] mb-2">Digestive Support</h3>
            <p className="text-sm text-gray-700">Promotes healthy digestion and nutrient absorption</p>
          </div>

          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-4xl mb-3">⚖️</div>
            <h3 className="font-poppins font-bold text-[#1A1A1A] mb-2">Healthy Weight</h3>
            <p className="text-sm text-gray-700">Supports natural weight management</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2ECC71] hover:bg-green-600 text-white font-poppins font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Get Started Today →
          </a>
        </div>
      </div>
    </section>
  )
}
