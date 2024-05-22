"use client"
import { useEffect } from "react"

export default function AntiWrinkle() {
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
          <h1 className="font-extrabold text-6xl sm:text-9xl">Anti-Wrinkle</h1>
        </div>
      </div>
      <section id="services px-6">
        <div className="services container padding px-6">
          <div className="services-flex">
            <div className="services-flex-left">
              <h2>About Anti-Wrinkle</h2>
              <p>
                Anti-Wrinkle Injectables work to prevent the formation of static
                wrinkles by stopping the signal between the nerve and muscle.
                The decreased movement in the muscle places less stress on the
                skin helping you maintain a fresh and youthful appearance. This
                treatment is most effective when used as a preventative measure.
              </p>

              <p>
                After the injection has entered the muscles, the botulinum toxin
                temporarily stops muscle activity. This causes wrinkles to
                smooth and spasms to stop. Anti wrinkle injections also release
                pain and inflammatory mediators, and can provide relief from
                migraines.
              </p>
            </div>
            <div className="about-flex-right">
              <img
                src="/botox-1.jpg"
                className="w-[630px] h-[350px]"
                alt="Liquid being filled into syringe"
              />
            </div>
          </div>

          <div className="services-flex">
            <div className="services-flex-left order-swap">
              <h2>Areas</h2>
              <ul>
                <li>
                  Frown lines – appear on the forehead above the eyebrows.
                </li>
                <li>Crow's feet – wrinkles around the eyes.</li>
                <li>
                  Bunny lines – fine lines on either side of the nose, seen when
                  you wrinkle your nose.
                </li>
                <li>Top lip lines – obvious when you purse your lips.</li>
              </ul>
            </div>
            <div className="about-flex-right">
              <img
                src="/botox-2.jpg"
                className="w-[630px] h-[350px]"
                alt="Liquid being filled into syringe"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
