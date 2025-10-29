"use client"

export default function SocialProof() {
  return (
    <section className="w-full bg-[#FFE5E5] py-12 px-4 sm:py-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-poppins text-3xl font-bold text-[#1A1A1A] mb-12 text-center text-balance">
          Join 19,479+ People Who've Already Transformed Their Skin
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-3">
              <div className="text-[#FFD700] text-lg">★★★★★</div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              "My skin has never looked better. People keep asking what I'm doing differently!"
            </p>
            <p className="font-semibold text-[#1A1A1A]">Sarah M.</p>
            <p className="text-sm text-gray-600">Verified Buyer</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-3">
              <div className="text-[#FFD700] text-lg">★★★★★</div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              "Finally have energy again AND my skin looks 10 years younger. Worth every penny."
            </p>
            <p className="font-semibold text-[#1A1A1A]">James T.</p>
            <p className="text-sm text-gray-600">Verified Buyer</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-3">
              <div className="text-[#FFD700] text-lg">★★★★★</div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              "The results speak for themselves. My complexion is clearer and my digestion is better."
            </p>
            <p className="font-semibold text-[#1A1A1A]">Michelle R.</p>
            <p className="text-sm text-gray-600">Verified Buyer</p>
          </div>

          {/* Testimonial 4 */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-3">
              <div className="text-[#FFD700] text-lg">★★★★★</div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              "I was skeptical, but after 30 days I could see a real difference. Highly recommend!"
            </p>
            <p className="font-semibold text-[#1A1A1A]">David K.</p>
            <p className="text-sm text-gray-600">Verified Buyer</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="font-poppins text-2xl font-bold text-[#FF6B6B]">19,479+</p>
            <p className="text-sm text-gray-700">5-Star Reviews</p>
          </div>
          <div>
            <p className="font-poppins text-2xl font-bold text-[#4ECDC4]">98%</p>
            <p className="text-sm text-gray-700">Would Recommend</p>
          </div>
          <div>
            <p className="font-poppins text-2xl font-bold text-[#FFD700]">30 Days</p>
            <p className="text-sm text-gray-700">Avg. to See Results</p>
          </div>
        </div>
      </div>
    </section>
  )
}
