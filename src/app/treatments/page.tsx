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
          <span className="absolute top-0 left-0 w-full h-full opacity-60"></span>
        </div>
      </div>

      <div className="relative h-full transition-all duration-200 ease-in-out xl:ml-68">
        <div className="w-full mx-auto -mt-7">
          <div className="relative flex flex-col flex-auto min-w-0 p-4 mx-6 overflow-hidden break-words bg-white bg-clip-border justify-center items-center">
            <div className="two-col">
              <div className="">
                <picture>
                  <img
                    src="/Anti-wrinkles500x500.png"
                    alt="Anti-Wrinkle"
                    width="500"
                    height="500"
                  />
                </picture>
              </div>
              <div className="two-col-right bg-zinc-50 w-full mr-0">
                <div className="wrapper padding p-3">
                  <h2>ANTI-WRINKLE</h2>
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

            <div className="two-col">
              <div className="order-1 mt-2">
                <picture>
                  <img
                    src="/Forma500x500.png"
                    alt="Forma"
                    width="500"
                    height="500"
                  />
                </picture>
              </div>
              <div className="two-col-right order-1 bg-zinc-50">
                <div className="wrapper padding p-3">
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
            <div className="two-col mt-2">
              <div className="">
                <picture>
                  <img
                    src="/Lumecca500x500.png"
                    alt="Lumeccaf"
                    width="500"
                    height="500"
                  />
                </picture>
              </div>
              <div className="two-col-right bg-zinc-50">
                <div className="wrapper padding p-3">
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

            <div className="two-col">
              <div className=" order-1 mt-2">
                <picture>
                  <img
                    src="/Morpheus500x500.png"
                    alt="Dermal Fillers"
                    width="500"
                    height="500"
                  />
                </picture>
              </div>
              <div className="two-col-right order-1 bg-zinc-50">
                <div className="wrapper padding p-3">
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
            <div className="two-col mt-2">
              <div className="">
                <picture>
                  <img
                    src="/Teeth-whitening500x500.png"
                    alt="Anti-Wrinkle"
                    width="500"
                    height="500"
                  />
                </picture>
              </div>
              <div className="two-col-right bg-zinc-50">
                <div className="wrapper padding p-3">
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

            <div className="two-col">
              <div className="order-1 mt-2">
                <picture>
                  <img
                    src="/Votiva500x500.png"
                    alt="Dermal Fillers"
                    width="500"
                    height="500"
                  />
                </picture>
              </div>
              <div className="two-col-right order-1 bg-zinc-50">
                <div className="wrapper padding p-3">
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
