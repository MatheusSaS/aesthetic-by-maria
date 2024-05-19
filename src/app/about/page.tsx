"use client"

import Team from "@/components/team"
import { useEffect } from "react"

export default function About() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "/scroll.js"
    script.async = true
    document.body.appendChild(script)
  }, [])
  return (
    <>
      <div className="relative w-full min-h-75 h-80">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-home.jpg')" }}
        >
          <span className="absolute top-0 left-0 w-full h-full bg-[#a16b52] opacity-60"></span>
        </div>
      </div>

      <div className="relative h-full transition-all duration-200 ease-in-out xl:ml-68">
        <div className="w-full mx-auto -mt-7">
          <div className="relative flex flex-col flex-auto min-w-0 p-4 mx-6 overflow-hidden break-words bg-white bg-clip-border ">
            <div className="container px-4 mx-auto mt-5">
              <div className="flex flex-wrap items-center -m-8">
                <div className="w-full md:w-1/2 p-8">
                  <div className="md:max-w-md">
                    <h2
                      className="mb-8 text-6xl md:text-7xl tracking-tighter-xl text-[#a16b52]"
                      data-config-id="auto-txt-2-3"
                    >
                      About Our Clinic
                    </h2>
                    <p className="mb-8 text-lg text-justify">
                      Welcome to Aesthetic by Maria, nestled in the heart of
                      High Street Kensington, where beauty meets expertise in a
                      serene and welcoming environment. Founded by Maria Smith,
                      our clinic is dedicated to providing top-notch aesthetic
                      treatments tailored to enhance your natural beauty and
                      boost your confidence. With years of experience in the
                      beauty industry and a passion for skincare and aesthetics,
                      Maria leads our team of skilled professionals committed to
                      delivering exceptional results. Our mission is to offer
                      personalized care and innovative treatments that address
                      your unique concerns and goals. At Aesthetic by Maria, we
                      believe in the power of self-care and the transformative
                      impact it can have on your life. Whether you're seeking
                      rejuvenating facials, advanced skincare solutions, or
                      non-invasive cosmetic procedures, we're here to guide you
                      on your journey to radiant skin and timeless beauty. Visit
                      us today at our conveniently located clinic in High Street
                      Kensington and experience the difference at Aesthetic by
                      Maria. Your beauty, our passion.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-8">
                  <div className="mx-auto max-w-lg md:mr-0">
                    <div className="flex flex-wrap -m-4">
                      <div className="w-1/2 p-4">
                        <div className="flex flex-wrap">
                          <div className="mb-8 w-full">
                            <img
                              className="w-full rounded-3xl"
                              src="MariaFernanda.jpg"
                              alt=""
                            />
                          </div>

                          <div className="mb-8 w-full">
                            <img
                              className="w-full rounded-3xl"
                              src="/MarianaAlmanza.jpg"
                              alt=""
                            />
                          </div>
                          <div className="mb-8 w-full">
                            <img
                              className="w-full rounded-3xl"
                              src="/Jamie.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-1/2 p-4">
                        <div className="flex flex-wrap mt-24">
                          <div className="mb-8 w-full">
                            <img
                              className="w-full rounded-3xl"
                              src="/Dra.Bianca.jpg"
                              alt=""
                            />
                          </div>
                          <div className="mb-8 w-full">
                            <img
                              className="w-full rounded-3xl"
                              src="/Dr.PaulTulley.jpg"
                              alt=""
                            />
                          </div>
                          <div className="mb-8 w-full">
                            <img
                              className="w-full rounded-3xl"
                              src="/Dr.CamilaAzzini.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16">
              <div className="flex text-center justify-center mb-16">
                <h1 className="font-semibold text-2xl">ABOUT OUR TEAM</h1>
              </div>
              <Team />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
