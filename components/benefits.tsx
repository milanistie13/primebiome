export default function Benefits() {
  const benefits = [
    {
      title: "Supports Skin Cell Turnover",
      description: "Helps your skin naturally shed old cells and reveal fresh, youthful skin underneath.",
      icon: "✨",
    },
    {
      title: "Promotes Youthful Appearance",
      description: "Reduces fine lines, improves texture, and gives your skin a natural glow.",
      icon: "🌟",
    },
    {
      title: "Improves Digestion",
      description: "Beneficial bacteria support healthy gut function and nutrient absorption.",
      icon: "💪",
    },
    {
      title: "Boosts Energy & Vitality",
      description: "A healthy gut means better energy levels and overall wellness.",
      icon: "⚡",
    },
    {
      title: "Easy Daily Routine",
      description: "Just one gummy per day—no pills, no hassle, no stimulants.",
      icon: "✓",
    },
    {
      title: "Natural & Safe Formula",
      description: "Non-GMO, scientifically-formulated with proven ingredients.",
      icon: "🌿",
    },
  ]

  return (
    <section className="w-full bg-white py-12 px-4 sm:py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-12 text-center text-balance">
          What You'll Experience
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex-shrink-0 text-3xl">{benefit.icon}</div>
              <div>
                <h3 className="font-poppins font-bold text-lg text-[#1A1A1A] mb-2">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
