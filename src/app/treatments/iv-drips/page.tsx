"use client"
import { useEffect } from "react"

export default function IvDrips() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "/scroll.js"
    script.async = true
    document.body.appendChild(script)
  }, [])
  return (
    <div>
      <div className="items-center justify-center w-full px-6 sm:mt-16">
        <div className="bg-zinc-100 w-full h-96 flex items-center text-center justify-center">
          <h1 className="font-extrabold text-6xl sm:text-9xl">Iv Drips</h1>
        </div>
      </div>
      <section id="services">
        <div className="services container padding px-6">
          <div className="services-flex">
            <div className="services-flex-left">
              <h2>About IV Drips</h2>
              <p>
                An IV drip is ideal if you have vitamin deficiencies, gut
                issues, chronic conditions, exercise intensely or are always on
                the go. Vitamins, minerals and amino acids are vital to your
                physical and mental health. They support your body’s processes,
                keeping your organs and even your DNA healthy and functioning
                normally.
              </p>
            </div>
            <div className="about-flex-right">
              <img
                src="/iv-drips-1.jpg"
                className="w-[630px] h-[350px]"
                alt="Hand squeezing saline packet loaded with fruits"
              />
            </div>
          </div>

          <div className="services-flex">
            <div className="services-flex-left order-swap">
              <h2>WHY USE AN IV DRIP?</h2>
              <p>
                While undergoing an IV Vitamin Drip, your body receives a higher
                concentration of vitamins than when consumed the oral way.
              </p>

              <p>
                A vitamin that is taken orally gets broken down in the stomach
                and digestive tract, meaning that the amount absorbed by the
                body is significantly less (50%), than when through an IV (90%).
              </p>

              <p>
                IV Drip cocktails are the best way of supplementing the
                patient's nutrition levels with the exact minerals and vitamins
                needed. See below the types of cocktails that we offer.
              </p>
            </div>
            <div className="about-flex-right">
              <img
                src="/iv-drips-2.jpg"
                className="w-[630px] h-[350px]"
                alt="Female nurse holding up saline packet loaded with fruits"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
