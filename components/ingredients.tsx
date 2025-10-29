export default function Ingredients() {
  const ingredients = [
    { name: "B. Coagulans", benefit: "Probiotic strain" },
    { name: "Babchi", benefit: "Skin support" },
    { name: "Dandelion", benefit: "Digestive health" },
    { name: "Fennel", benefit: "Gut comfort" },
    { name: "Inulin", benefit: "Prebiotic fiber" },
    { name: "Fenugreek", benefit: "Wellness support" },
    { name: "Lemon Balm", benefit: "Calming effect" },
    { name: "Organic Ceylon Ginger", benefit: "Anti-inflammatory" },
    { name: "Organic Lion's Mane", benefit: "Cognitive support" },
    { name: "Slippery Elm Bark", benefit: "Gut lining support" },
  ]

  return (
    <section className="w-full bg-[#F5F5F5] py-12 px-4 sm:py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4 text-center text-balance">
          Powerful, Natural Ingredients
        </h2>

        <p className="text-center text-gray-700 mb-10 text-lg">
          An optimally-dosed proprietary blend of nourishing ingredients, carefully mixed to complement one another.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {ingredients.map((ing, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 text-center shadow-sm">
              <p className="font-poppins font-bold text-[#1A1A1A] text-sm mb-1">{ing.name}</p>
              <p className="text-xs text-[#4ECDC4]">{ing.benefit}</p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center gap-6 mt-10 flex-wrap">
          <div className="text-center">
            <p className="text-2xl mb-1">✓</p>
            <p className="text-sm font-semibold text-[#1A1A1A]">Natural Formula</p>
          </div>
          <div className="text-center">
            <p className="text-2xl mb-1">✓</p>
            <p className="text-sm font-semibold text-[#1A1A1A]">Non-GMO</p>
          </div>
          <div className="text-center">
            <p className="text-2xl mb-1">✓</p>
            <p className="text-sm font-semibold text-[#1A1A1A]">No Stimulants</p>
          </div>
        </div>
      </div>
    </section>
  )
}
