"use client"

export default function Curiosity() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:py-16">
      <div className="max-w-2xl mx-auto">
        {/* Problem Hook */}
        <div className="mb-12">
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-6 text-balance">
            Why Your Skincare Routine Isn't Working
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            You've tried the creams. The serums. The expensive treatments. But nothing seems to give you that youthful
            glow you're after.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Here's what dermatologists won't tell you:{" "}
            <span className="font-semibold text-[#FF6B6B]">beautiful skin starts from the inside.</span>
          </p>
        </div>

        {/* The Solution Teaser */}
        <div className="bg-[#F0F9F8] border-l-4 border-[#4ECDC4] p-6 rounded-lg">
          <h3 className="font-poppins text-xl font-bold text-[#1A1A1A] mb-3">What if there was a simpler way?</h3>
          <p className="text-gray-700 leading-relaxed">
            Thousands of people are discovering that one simple daily supplement can transform their skin—and their
            digestion—in just weeks.
          </p>
        </div>
      </div>
    </section>
  )
}
