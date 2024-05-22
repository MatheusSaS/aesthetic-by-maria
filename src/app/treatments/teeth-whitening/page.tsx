"use client"
import { useEffect } from "react"

export default function TeethWhitening() {
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
          <h1 className="font-extrabold text-6xl sm:text-9xl">
            Teeth Whitening
          </h1>
        </div>
      </div>
      <section id="services">
        <div className="services container padding px-6">
          <div className="services-flex">
            <div className="services-flex-left">
              <h2>About Teeth Whitening</h2>
              <p>
                Tooth whitening can be a very effective way of lightening the
                natural colour of your teeth without removing any of the tooth
                surface. It cannot make a complete colour change, but it may
                lighten the existing shade. There are a number of reasons why
                you might get your teeth whitened. Everyone is different; and
                just as our hair and skin colour vary, so do our teeth. Very few
                people have brilliant-white teeth, and our teeth can also become
                more discoloured as we get older.
              </p>
              <p>
                Your teeth can also be stained on the surface by food and drinks
                such as tea, coffee, red wine and blackcurrant. Smoking can also
                stain teeth.
              </p>
            </div>
            <div className="about-flex-right"></div>
          </div>
        </div>
      </section>
    </div>
  )
}
