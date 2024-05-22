"use client"
import { useEffect } from "react"

export default function Morpheus8() {
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
          <h1 className="font-extrabold text-6xl sm:text-9xl">Morpheus 8</h1>
        </div>
      </div>
      <div className="services container padding px-6">
        <div className="services-flex">
          <div className="services-flex-left">
            <h2>ABOUT MORPHEUS8</h2>
            <p>
              Morpheus8 is a revolutionary treatment that can be used on both
              the face and body to help rejuvenate the tone and texture of the
              skin. Its Subdermal Adipose Remodelling Device (SARD) works to
              increase the production of collagen in the skin to reverse the
              effects of natural ageing and cellular damage, for a reduced look
              to concerns such as: lines, wrinkles, sagging skin, acne scars and
              stretch marks. Deeper levels of the dermis are targeted through
              the delivery of microneedling and radiofrequency technologies,
              stimulating collagen and rebuilding the skin’s internal structure.
            </p>
          </div>
          <div className="about-flex-right max-w-xl">
            <h2>AREAS OF TREATMENT</h2>
            <p>
              Morpheus8 is most commonly used on the lower face and neck as the
              treatment is used on parts of the body that exhibit wrinkles, skin
              laxity, discolouration, acne scarring or stretch marks. With that
              being said Morpheus8 can be used on most parts of the body that
              patients wish to tighten.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
