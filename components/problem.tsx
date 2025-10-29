export default function Problem() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:py-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-8 text-center text-balance">
          The Hidden Connection Between Your Gut & Skin
        </h2>

        <div className="space-y-6">
          {/* Problem 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[#FFE5E5] rounded-full flex items-center justify-center font-poppins font-bold text-[#FF6B6B]">
              1
            </div>
            <div>
              <h3 className="font-poppins font-bold text-lg text-[#1A1A1A] mb-2">Aging Skin Cells Accumulate</h3>
              <p className="text-gray-700 leading-relaxed">
                Without proper cell turnover, dead skin cells build up, leading to dullness, fine lines, and an uneven
                complexion.
              </p>
            </div>
          </div>

          {/* Problem 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[#FFE5E5] rounded-full flex items-center justify-center font-poppins font-bold text-[#FF6B6B]">
              2
            </div>
            <div>
              <h3 className="font-poppins font-bold text-lg text-[#1A1A1A] mb-2">Gut Imbalance Affects Everything</h3>
              <p className="text-gray-700 leading-relaxed">
                An unhealthy microbiome disrupts digestion, weakens immunity, and shows up as skin problems, bloating,
                and low energy.
              </p>
            </div>
          </div>

          {/* Problem 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[#FFE5E5] rounded-full flex items-center justify-center font-poppins font-bold text-[#FF6B6B]">
              3
            </div>
            <div>
              <h3 className="font-poppins font-bold text-lg text-[#1A1A1A] mb-2">Most Solutions Miss the Root Cause</h3>
              <p className="text-gray-700 leading-relaxed">
                Topical creams and quick fixes don't address the gut-skin connection. Real transformation requires
                internal support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
