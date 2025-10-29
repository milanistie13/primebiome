export default function Testimonials() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4 text-center text-balance">
          Trusted by Thousands
        </h2>

        <div className="text-center mb-10">
          <p className="text-5xl font-poppins font-bold text-[#FF6B6B] mb-2">19,479+</p>
          <p className="text-lg text-gray-700">5-star reviews from real customers</p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-[#FFE5E5] rounded-lg p-6">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#FF6B6B]">
                  ★
                </span>
              ))}
            </div>
            <p className="text-gray-800 mb-4 leading-relaxed">
              "My skin has never looked better! Within 3 weeks, I noticed my complexion was clearer and more radiant.
              Highly recommend!"
            </p>
            <p className="font-poppins font-bold text-[#1A1A1A]">Sarah M.</p>
            <p className="text-sm text-gray-600">Verified Buyer</p>
          </div>

          <div className="bg-[#E8F8F6] rounded-lg p-6">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#4ECDC4]">
                  ★
                </span>
              ))}
            </div>
            <p className="text-gray-800 mb-4 leading-relaxed">
              "I've tried so many supplements. This one actually works. My digestion improved and I feel more
              energized!"
            </p>
            <p className="font-poppins font-bold text-[#1A1A1A]">James T.</p>
            <p className="text-sm text-gray-600">Verified Buyer</p>
          </div>
        </div>
      </div>
    </section>
  )
}
