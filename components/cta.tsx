"use client"

export default function CTA() {
  const affiliateLink = "https://getprimebiome.com/text.php?affiliate=redirectn"

  return (
    <section className="w-full bg-[#F5F5F5] py-12 px-4 sm:py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4 text-balance">
          Ready to Transform Your Skin & Gut?
        </h2>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Join thousands of satisfied customers who've discovered the power of supporting their gut-skin connection.
        </p>

        <a
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#FFD700] hover:bg-yellow-500 text-black font-poppins font-bold py-4 px-10 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl mb-6"
        >
          Claim Your Bottle Now →
        </a>

        <p className="text-sm text-gray-600">60-Day Money-Back Guarantee • Free Shipping • No Hidden Charges</p>
      </div>
    </section>
  )
}
