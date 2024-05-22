"use client"
import { useEffect } from "react"

export default function Forma() {
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
          <h1 className="font-extrabold text-6xl sm:text-9xl">Forma</h1>
        </div>
      </div>
      <div className="services container padding px-6">
        <div className="services-flex">
          <div className="services-flex-left">
            <h2>About Forma</h2>
            <p>
              Forma is the perfect pain-free and needless solution to skin
              tightening. It’s a non-surgical and non-invasive treatment. Think
              of Forma as the gentler sister of Morpheus 8. Forma uses bipolar
              radiofrequency technology to provide skin re-modelling treatments
              to improve the appearance of your skin. The device causes the
              treated area of the skin to contract and tighten, encouraging the
              production of collagen and elastin, which leaves the skin looking
              firmer and healthier. Forma uses precise thermal temperatures to
              stimulate collagen production. This boosts the skin with fibres
              that naturally occur in your youth, leaving you with the best
              version of your skin.
            </p>
          </div>
          <div className="about-flex-right">
            <h2>AREAS OF TREATMENT</h2>
            <p>
              The procedure is painless and non-invasive. All areas of the face
              and body can be treated, including:
            </p>
            <ul>
              <li>Crow’s feet</li>
              <li>Smile lines</li>
              <li>Neck</li>
              <li>Nasolabial folds</li>
              <li>Jowls</li>
              <li>Forehead</li>
              <li>Arms</li>
              <li>Abdomen</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
