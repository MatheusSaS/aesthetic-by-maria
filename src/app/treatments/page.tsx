"use client"
import { Suspense, useEffect } from "react"
import Loading from "../loading"
import "./style.css"

export default function Treatments() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "/scroll.js"
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <Suspense fallback={<Loading />}>
      <div className="relative w-full min-h-75 h-80">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/Clínica02.jpg')" }}
        >
          <span className="absolute top-0 left-0 w-full h-full bg-[#a16b52] opacity-60"></span>
        </div>
      </div>

      <div className="relative h-full transition-all duration-200 ease-in-out xl:ml-68">
        <div className="w-full mx-auto -mt-7">
          <div className="relative flex flex-col flex-auto min-w-0 p-4 mx-6 overflow-hidden break-words bg-white bg-clip-border ">
            <div className="two-col container">
              <div className="two-col-left">
                <picture>
                  <img
                    src="/Anti wrinklesf.jpg"
                    alt="Anti-Wrinkle"
                    width="640"
                    height="960"
                  />
                </picture>
              </div>
              <div className="two-col-right bg-zinc-50">
                <div className="wrapper padding">
                  <h2>Anti-Wrinkle</h2>
                  <p>
                    Anti-Wrinkle Injectables work to prevent the formation of
                    static wrinkles by stopping the signal between the nerve and
                    muscle.
                  </p>

                  <div className="btn-wrapper">
                    <a
                      href="https://www.fresha.com/a/aesthetic-by-maria-london-10-adam-eve-mews-aderzrq0"
                      className="btn bg-black text-white rounded-none"
                    >
                      Book now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="two-col container">
              <div className="two-col-left order-1 mt-2">
                <picture>
                  <img src="/Formaf.jpg" alt="Forma" width="640" height="960" />
                </picture>
              </div>
              <div className="two-col-right order-1 bg-zinc-50">
                <div className="wrapper padding">
                  <h2>FORMA</h2>
                  <p>
                    Forma is the perfect pain-free and needless solution to skin
                    tightening. It’s a non-surgical and non-invasive treatment.
                  </p>

                  <div className="btn-wrapper">
                    <a
                      href="https://www.fresha.com/a/aesthetic-by-maria-london-10-adam-eve-mews-aderzrq0"
                      className="btn bg-black text-white rounded-none"
                    >
                      Book now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="two-col container mt-2">
              <div className="two-col-left">
                <picture>
                  <img
                    src="/Lumeccaf.jpg"
                    alt="Lumeccaf"
                    width="640"
                    height="960"
                  />
                </picture>
              </div>
              <div className="two-col-right bg-zinc-50">
                <div className="wrapper padding">
                  <h2>LUMECCA</h2>
                  <p>
                    Lumecca is the most powerful intense pulsed light (IPL) to
                    treat pigmented and vascular lesions.
                  </p>

                  <div className="btn-wrapper">
                    <a
                      href="https://www.fresha.com/a/aesthetic-by-maria-london-10-adam-eve-mews-aderzrq0"
                      className="btn bg-black text-white rounded-none"
                    >
                      Book now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="two-col container">
              <div className="two-col-left order-1 mt-2">
                <picture>
                  <img
                    src="/Morpheusf.jpg"
                    alt="Dermal Fillers"
                    width="640"
                    height="960"
                  />
                </picture>
              </div>
              <div className="two-col-right order-1 bg-zinc-50">
                <div className="wrapper padding">
                  <h2>MORPEHUS8</h2>
                  <p>
                    Morpheus8 is a revolutionary treatment that can be used on
                    both the face and body to help rejuvenate the tone and
                    texture of the skin.
                  </p>

                  <div className="btn-wrapper">
                    <a
                      href="https://www.fresha.com/a/aesthetic-by-maria-london-10-adam-eve-mews-aderzrq0"
                      className="btn bg-black text-white rounded-none"
                    >
                      Book now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="two-col container mt-2">
              <div className="two-col-left">
                <picture>
                  <img
                    src="/Teeth whiteningf.jpg"
                    alt="Anti-Wrinkle"
                    width="640"
                    height="960"
                  />
                </picture>
              </div>
              <div className="two-col-right bg-zinc-50">
                <div className="wrapper padding">
                  <h2>TEETH WHITENING</h2>
                  <p>
                    Tooth whitening can be a very effective way of lightening
                    the natural colour of your teeth without removing any of the
                    tooth surface.
                  </p>

                  <div className="btn-wrapper">
                    <a
                      href="https://www.fresha.com/a/aesthetic-by-maria-london-10-adam-eve-mews-aderzrq0"
                      className="btn bg-black text-white rounded-none"
                    >
                      Book now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="two-col container">
              <div className="two-col-left order-1 mt-2">
                <picture>
                  <img
                    src="/Votivaf.jpg"
                    alt="Dermal Fillers"
                    width="640"
                    height="960"
                  />
                </picture>
              </div>
              <div className="two-col-right order-1 bg-zinc-50">
                <div className="wrapper padding">
                  <h2>VOTIVA</h2>
                  <p>
                    Vaginal Rejuvenation is a NON-Surgical procedure designed to
                    enhance the function of the vaginal tissue.
                  </p>

                  <div className="btn-wrapper">
                    <a
                      href="https://www.fresha.com/a/aesthetic-by-maria-london-10-adam-eve-mews-aderzrq0"
                      className="btn bg-black text-white rounded-none"
                    >
                      Book now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  )
}
