"use client"

import { useState } from "react"

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const faqs = [
    {
      q: "How long does it take to see results?",
      a: "Most customers notice improvements in energy and digestion within 2-3 weeks. Skin improvements typically appear within 4-6 weeks as your skin cell turnover cycle completes.",
    },
    {
      q: "Is PrimeBiome safe?",
      a: "Yes! PrimeBiome is made with natural, non-GMO ingredients and contains no stimulants. It's formulated to be gentle on your system while delivering powerful results.",
    },
    {
      q: "How do I take PrimeBiome?",
      a: "Simply take 1 gummy per day. No pills, no powder, no hassle. You can take it anytime that works for you.",
    },
    {
      q: "Is there a subscription or auto-ship?",
      a: "No! Your order is a one-time purchase with no hidden auto-ship, clauses, or charges. The price you see is the only price you pay.",
    },
    {
      q: "What if I'm not satisfied?",
      a: "We offer a 60-day money-back guarantee. If you're not completely impressed with the results, just contact us and we'll refund every cent.",
    },
    {
      q: "Where does PrimeBiome ship?",
      a: "We ship worldwide! US orders ship free in 5-7 days. International orders (Canada, UK, Australia, etc.) are $15.95 and take 10-15 days.",
    },
  ]

  return (
    <section className="w-full bg-white py-12 px-4 sm:py-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-10 text-center text-balance">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-poppins font-bold text-[#1A1A1A] text-left">{faq.q}</h3>
                <span className="text-[#4ECDC4] font-bold text-xl flex-shrink-0 ml-4">
                  {openIdx === idx ? "−" : "+"}
                </span>
              </button>
              {openIdx === idx && (
                <div className="p-4 bg-white border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
