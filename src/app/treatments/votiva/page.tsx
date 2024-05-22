"use client"
import { useEffect } from "react"

export default function Votiva() {
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
          <h1 className="font-extrabold text-6xl sm:text-9xl">Votiva</h1>
        </div>
      </div>
      <section id="services">
        <div className="services container padding px-6">
          <div className="services-flex">
            <div className="services-flex-left">
              <h2>About Votiva</h2>
              <p>
                Vaginal Rejuvenation is a NON-Surgical procedure designed to
                enhance the function of the vaginal tissue. Vaginal Rejuvenation
                uses a unique and high-end, energy-based device to restore and
                improve vaginal laxity or relaxation by tightening the entire
                vaginal canal, treating stress, Incontinence, and Vaginal
                dryness. Thanks to cutting-edge technologies, the results are
                truly unique!
              </p>
            </div>
            <div className="about-flex-right sm:min-w-96">
              <h2>Conditions</h2>

              <ul>
                <li>Enhance Sexual Gratification</li>
                <li>Vaginal Laxity</li>
                <li>Total Vaginal Tightening</li>
                <li>Vaginal Dryness</li>
                <li>Stress Urinary Incontinence</li>
                <li>Post Delivery Rehabilitation</li>
                <li>Pelvic Floor Dysfunction</li>
                <li>Pelvic Muscles Relaxation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
