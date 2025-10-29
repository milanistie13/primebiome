"use client"

export default function SocialProof() {
  return (
    <section className="w-full bg-[#FFE5E5] py-16 px-4 sm:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-12 text-balance">
          Trusted by Thousands of Satisfied Customers
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <p className="font-poppins text-4xl font-bold text-[#FF6B6B] mb-3">19,479+</p>
            <p className="text-lg font-semibold text-gray-700">5-Star Reviews</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <p className="font-poppins text-4xl font-bold text-[#4ECDC4] mb-3">98%</p>
            <p className="text-lg font-semibold text-gray-700">Would Recommend</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <p className="font-poppins text-4xl font-bold text-[#FFD700] mb-3">30 Days</p>
            <p className="text-lg font-semibold text-gray-700">Avg. to See Results</p>
          </div>
        </div>

        {/* Additional Trust Signals */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-700">
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-xl">✓</span>
            <span className="font-medium">Clinically Formulated</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-xl">✓</span>
            <span className="font-medium">Natural Ingredients</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-xl">✓</span>
            <span className="font-medium">Money-Back Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  )
}
