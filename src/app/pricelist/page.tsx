"use client"
import { Suspense, useEffect } from "react"
import Loading from "../loading"

import "./style.css"

export default function Pricelist() {
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
          style={{ backgroundImage: "url('/Clínica03.jpg')" }}
        >
          <span className="absolute top-0 left-0 w-full h-full bg-[#a16b52] opacity-60"></span>
        </div>
      </div>

      <div className="relative h-full transition-all duration-200 ease-in-out xl:ml-68">
        <div className="w-full mx-auto -mt-7">
          <div className="relative flex flex-col flex-auto min-w-0 p-4 mx-6 overflow-hidden break-words bg-white bg-clip-border ">
            <div className="pricelist md:p-4 md:mx-6 ">
              <div className="pricelist-flex">
                <div className="pricelist-flex-left">
                  <h3>CONSULTATION</h3>
                  <p>(To be deducted on the service)</p>
                  <a
                    href="https://www.fresha.com/a/aesthetic-by-maria-london-10-adam-eve-mews-aderzrq0"
                    className="btn bg-black text-white rounded-none"
                  >
                    Book now
                  </a>
                </div>
                <div className="pricelist-flex-right">
                  <ul>
                    <li>
                      PATCH TEST (FREE) <span>£0</span>
                    </li>
                    <li>
                      ON-LINE CONSULTATION
                      <span>
                        From <br />
                        £100
                      </span>
                    </li>
                    <li>
                      CONSULTATION IN CLINIC
                      <span>
                        From <br />
                        £100
                      </span>
                    </li>
                    <li>
                      DERMATOLOGIST CONSULTATION <span>£250</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pricelist-flex">
                <div className="pricelist-flex-left">
                  <h3>VOTIVA - INTIMATE REJUVENATION</h3>

                  <a
                    href="https://www.fresha.com/a/aesthetic-by-maria-london-10-adam-eve-mews-aderzrq0"
                    className="btn bg-black text-white rounded-none"
                  >
                    Book now
                  </a>
                </div>
                <div className="pricelist-flex-right">
                  <ul>
                    <li>
                      1 SESSION <span>£500</span>
                    </li>
                    <li>
                      3 SESSIONS <span>£1400</span>
                    </li>
                    <li>
                      RADIASSE <span>£500</span>
                    </li>
                    <li>
                      FILLER 2ml <span>£700</span>
                    </li>
                    <li>
                      SCULPTURE <span>£700</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pricelist-flex">
                <div className="pricelist-flex-left">
                  <h3>FILLERS</h3>

                  <a
                    href="https://www.fresha.com/a/aesthetic-by-maria-london-10-adam-eve-mews-aderzrq0"
                    className="btn bg-black text-white rounded-none"
                  >
                    Book now
                  </a>
                </div>
                <div className="pricelist-flex-right">
                  <ul>
                    <li>
                      CONTOUR PACKAGE <br />
                      *3ml Excluding Tear Trough and Non-surgical Rhinoplasty
                      <span>
                        From <br />
                        £1,000
                      </span>
                    </li>
                    <li>
                      CONTOUR PACKAGE <br />
                      *4ml Excluding Tear Trough and Non-surgical Rhinoplasty
                      <span>
                        From <br />
                        £1,150
                      </span>
                    </li>
                    <li>
                      CONTOUR PACKAGE
                      <b />
                      *5ml Excluding Tear Trough and Non-surgical Rhinoplasty
                      <span>
                        From <br />
                        £1,350
                      </span>
                    </li>
                    <li>
                      CONTOUR PACKAGE
                      <br />
                      *6ml Excluding Tear Trough and Non-surgical Rhinoplasty
                      <span>£1,450</span>
                    </li>
                    <li>
                      CONTOUR PACKAGE
                      <br />
                      *7ml Excluding Tear Trough and Non-surgical Rhinoplasty
                      <span>£1,600</span>
                    </li>
                    <li>
                      CONTOUR PACKAGE
                      <br />
                      *8ml Excluding Tear Trough and Non-surgical Rhinoplasty
                      <span>£1,750</span>
                    </li>
                    <li>
                      CONTOUR PACKAGE
                      <br />
                      *9ml Excluding Tear Trough and Non-surgical Rhinoplasty
                      <span>£1,900</span>
                    </li>
                    <li>
                      CONTOUR PACKAGE
                      <br />
                      *10ml Excluding Tear Trough and Non-surgical Rhinoplasty
                      <span>£2,050</span>
                    </li>
                    <li>
                      FILLER DISSOLVING
                      <span>
                        From <br />
                        £200
                      </span>
                    </li>
                    <li>
                      MARIONETTE LINES
                      <span>
                        From <br />
                        £350
                      </span>
                    </li>
                    <li>
                      NASOLABIAL
                      <span>
                        From <br />
                        £350
                      </span>
                    </li>
                    <li>
                      CHIN CONTOURING
                      <span>
                        From <br />
                        £350
                      </span>
                    </li>
                    <li>
                      LIP ENHANCEMENT
                      <span>
                        From <br />
                        £350
                      </span>
                    </li>
                    <li>
                      CHEEK CONTOURING
                      <span>
                        From <br />
                        £400
                      </span>
                    </li>
                    <li>
                      JAW CONTOURING
                      <span>
                        From <br />
                        £400
                      </span>
                    </li>
                    <li>
                      TEMPLE FILLER <span>£400</span>
                    </li>
                    <li>
                      NON-SURGICAL RHINOPLASTY
                      <span>
                        From <br />
                        £450
                      </span>
                    </li>
                    <li>
                      TEAR TROUGH
                      <span>
                        From <br />
                        £450
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pricelist-flex">
                <div className="pricelist-flex-left">
                  <h3>FACIAL</h3>

                  <a
                    href="https://www.fresha.com/a/aesthetic-by-maria-london-10-adam-eve-mews-aderzrq0"
                    className="btn bg-black text-white rounded-none"
                  >
                    Book now
                  </a>
                </div>
                <div className="pricelist-flex-right">
                  <ul>
                    <li>
                      KOBIDO FACE MASSAGE <span>£160</span>
                    </li>
                    <li>
                      DEEP FACIAL WITH HIGH-FREQUENCY AND MESOTHERAPY LIGHT{" "}
                      <span>£170</span>
                    </li>
                    <li>
                      FACIALS <span>£170</span>
                    </li>
                    <li>
                      SKIN PEEL
                      <span>
                        From <br />
                        £250
                      </span>
                    </li>
                    <li>
                      MICRO NEEDLING
                      <span>
                        From <br />
                        £280
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pricelist-flex">
                <div className="pricelist-flex-left">
                  <h3>LUMECCA</h3>
                  <p>Skin Pigmentation Removal</p>

                  <a
                    href="https://www.fresha.com/a/aesthetic-by-maria-london-10-adam-eve-mews-aderzrq0"
                    className="btn bg-black text-white rounded-none"
                  >
                    Book now
                  </a>
                </div>
                <div className="pricelist-flex-right">
                  <ul>
                    <li>
                      LUMECCA - 1 SESSION <br />
                      Face or Chest <span>£200</span>
                    </li>
                    <li>
                      LUMECCA - 3 SESSIONS <br />
                      Face or Chest <span>£540</span>
                    </li>
                    <li>
                      LUMECCA - 6 SESSIONS <br />
                      Face or Chest <span>£999</span>
                    </li>
                    <li>
                      LUMECCA - 1 SESSION <br />
                      Face &amp; Chest <span>£300</span>
                    </li>
                    <li>
                      LUMECCA - 3 SESSIONS <br />
                      Face &amp; Chest <span>£800</span>
                    </li>
                    <li>
                      LUMECCA - 6 SESSIONS <br />
                      Face &amp; Chest <span>£1,500</span>
                    </li>
                    <li>
                      LUMECCA - 1 SESSION <br />
                      Hands <span>£150</span>
                    </li>
                    <li>
                      LUMECCA - 3 SESSION <br />
                      Hands <span>£400</span>
                    </li>
                    <li>
                      LUMECCA - 6 SESSIONS <br />
                      Hands <span>£750</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pricelist-flex">
                <div className="pricelist-flex-left">
                  <h3>MORPHEUS 8</h3>
                  <p>
                    Skin Tightening with Radio Frequency pulses at the tip of
                    Microneedles
                  </p>

                  <a
                    href="https://www.fresha.com/a/aesthetic-by-maria-london-10-adam-eve-mews-aderzrq0"
                    className="btn bg-black text-white rounded-none"
                  >
                    Book now
                  </a>
                </div>
                <div className="pricelist-flex-right">
                  <ul>
                    <li>
                      MORPHEUS 8 <br />
                      Face <span>£550</span>
                    </li>
                    <li>
                      MORPHEUS 8 <br />
                      Face &amp; Neck <span>£750</span>
                    </li>
                    <li>
                      MORPHEUS 8 <br />
                      Face &amp; Neck with Exosomes <span>£1,000</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pricelist-flex">
                <div className="pricelist-flex-left">
                  <h3>FORMA</h3>
                  <p>Skin Tightening applied topically without Microneedling</p>

                  <a
                    href="https://www.fresha.com/a/aesthetic-by-maria-london-10-adam-eve-mews-aderzrq0"
                    className="btn bg-black text-white rounded-none"
                  >
                    Book now
                  </a>
                </div>
                <div className="pricelist-flex-right">
                  <ul>
                    <li>
                      FORMA RF - 1 AREA <span>£250</span>
                    </li>
                    <li>
                      FORMA RF - 2 AREAS <span>£300</span>
                    </li>
                    <li>
                      FORMA RF - 3 AREAS <span>£350</span>
                    </li>
                    <li>
                      FORMA RF - 1 AREA (5 SESSION OF 6) <span>£1,250</span>
                    </li>
                    <li>
                      FORMA RF - 2 AREAS (5 SESSION OF 6) <span>£1,500</span>
                    </li>
                    <li>
                      FORMA RF - 3 AREAS (5 SESSION OF 6) <span>£1,750</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pricelist-flex">
                <div className="pricelist-flex-left">
                  <h3>COSMETIC INJECTABLES</h3>

                  <a
                    href="https://www.fresha.com/a/aesthetic-by-maria-london-10-adam-eve-mews-aderzrq0"
                    className="btn bg-black text-white rounded-none"
                  >
                    Book now
                  </a>
                </div>
                <div className="pricelist-flex-right">
                  <ul>
                    <li>
                      ANTI-WRINKLE - TOP-UP
                      <span>
                        From <br />
                        £100
                      </span>
                    </li>
                    <li>
                      ANTI-WRINKLE - 1 AREA
                      <span>
                        From <br />
                        £210
                      </span>
                    </li>
                    <li>
                      ANTI-WRINKLE - 2 AREAS
                      <span>
                        From <br />
                        £265
                      </span>
                    </li>
                    <li>
                      ANTI-WRINKLE - 3 AREAS
                      <span>
                        From <br />
                        £325
                      </span>
                    </li>
                    <li>
                      ANTI-WRINKLE - FULL FACE <span>£550</span>
                    </li>
                    <li>
                      ANTI-WRINKLE - FULL FACE &amp; NECK <span>£750</span>
                    </li>
                    <li>
                      NEFERTITI NECK LIFT
                      <span>
                        From <br />
                        £495
                      </span>
                    </li>
                    <li>
                      JAWLINE FACAL SLIMMING/TEETH GRINDING
                      <span>
                        From <br />
                        £450
                      </span>
                    </li>
                    <li>
                      LIP FLIP
                      <span>
                        From <br />
                        £150
                      </span>
                    </li>
                    <li>
                      GUMMY SMILE
                      <span>
                        From <br />
                        £150
                      </span>
                    </li>
                    <li>
                      CHIN PEBBLING
                      <span>
                        From <br />
                        £150
                      </span>
                    </li>
                    <li>
                      UNDER ARM SWEATING
                      <span>
                        From <br />
                        £495
                      </span>
                    </li>
                    <li>
                      CALF SLIMMING <span>£750</span>
                    </li>
                    <li>
                      SHOULDER SLIMMING <span>£750</span>
                    </li>
                    <li>
                      POLYNUCLEOTIDES{" "}
                      <span>
                        From <br />
                        £350
                      </span>
                    </li>
                    <li>
                      PROFHILO
                      <span>
                        From <br />
                        £300
                      </span>
                    </li>
                    <li>
                      RADIASSE
                      <span>
                        From <br />
                        £500
                      </span>
                    </li>
                    <li>
                      SCULPTRA
                      <span>
                        From <br />
                        £700
                      </span>
                    </li>
                    <li>
                      MESOTHERAPY
                      <span>
                        From <br />
                        £280
                      </span>
                    </li>
                    <li>
                      NON-SURGICAL FACELIFT
                      <span>
                        From <br />
                        £895
                      </span>
                    </li>
                    <li>
                      PRP HAIR RESTORATION
                      <span>
                        From <br />
                        £300
                      </span>
                    </li>
                    <li>
                      PRP BEARD RESTORATION
                      <span>
                        From <br />
                        £300
                      </span>
                    </li>
                    <li>
                      PRP HAIR &amp; BEARD RESTORATION
                      <span>
                        From <br />
                        £500
                      </span>
                    </li>
                    <li>
                      PRP VAMPIRE FACIAL &amp; MICRO NEEDLING
                      <span>
                        From <br />
                        £395
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pricelist-flex">
                <div className="pricelist-flex-left">
                  <h3>FAT DISSOLVING</h3>

                  <a
                    href="https://www.fresha.com/a/aesthetic-by-maria-london-10-adam-eve-mews-aderzrq0"
                    className="btn bg-black text-white rounded-none"
                  >
                    Book now
                  </a>
                </div>
                <div className="pricelist-flex-right">
                  <ul>
                    <li>
                      FAT DISSOLVING (SMALL AREA)
                      <span>
                        From <br />
                        £195
                      </span>
                    </li>
                    <li>
                      FAT DISSOLVING (LARGE AREA)
                      <span>
                        From <br />
                        £295
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pricelist-flex">
                <div className="pricelist-flex-left">
                  <h3>DIOLASE LASER HAIR REMOVAL</h3>

                  <a
                    href="https://www.fresha.com/a/aesthetic-by-maria-london-10-adam-eve-mews-aderzrq0"
                    className="btn bg-black text-white rounded-none"
                  >
                    Book now
                  </a>
                </div>
                <div className="pricelist-flex-right">
                  <ul>
                    <li>
                      FACE SIDES <span>£40</span>
                    </li>
                    <li>
                      NAVEL LINE <span>£40</span>
                    </li>
                    <li>
                      STANDARD BIKINI <span>£55</span>
                    </li>
                    <li>
                      HALF FACE <span>£70</span>
                    </li>
                    <li>
                      HIGH BIKINI <span>£80</span>
                    </li>
                    <li>
                      FACE AND NECK <span>£100</span>
                    </li>
                    <li>
                      LOWER BACK <span>£100</span>
                    </li>
                    <li>
                      FULL FACE <span>£120</span>
                    </li>
                    <li>
                      BRAZILIAN <span>£130</span>
                    </li>
                    <li>
                      HALF LEG <span>£140</span>
                    </li>
                    <li>
                      HOLLYWOOD <span>£150</span>
                    </li>
                    <li>
                      FULL LEG <span>£180</span>
                    </li>
                    <li>
                      FEMALE FULL BODY <span>£380</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pricelist-flex">
                <div className="pricelist-flex-left">
                  <h3>MASSAGE &amp; BODY TREATMENTS</h3>

                  <a
                    href="https://www.fresha.com/a/aesthetic-by-maria-london-10-adam-eve-mews-aderzrq0"
                    className="btn bg-black text-white rounded-none"
                  >
                    Book now
                  </a>
                </div>
                <div className="pricelist-flex-right">
                  <ul>
                    <li>
                      HOT STONE MASSAGE 60min <span>£80</span>
                    </li>
                    <li>
                      HOT STONE MASSAGE 80min <span>£100</span>
                    </li>
                    <li>
                      HOT STONE MASSAGE 90min <span>£120</span>
                    </li>
                    <li>
                      LYMPHATIC DRAINAGE MASSAGE <span>£160</span>
                    </li>
                    <li>
                      POST-SURGICAL MODELLING MASSAGE <span>£160</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pricelist-flex">
                <div className="pricelist-flex-left">
                  <h3>BOOSTER SHOT INJECTIONS</h3>

                  <a
                    href="https://www.fresha.com/a/aesthetic-by-maria-london-10-adam-eve-mews-aderzrq0"
                    className="btn bg-black text-white rounded-none"
                  >
                    Book now
                  </a>
                </div>
                <div className="pricelist-flex-right">
                  <ul>
                    <li>
                      VITAMIN B12
                      <span>
                        From <br />
                        £40
                      </span>
                    </li>
                    <li>
                      BIOTIN
                      <span>
                        From <br />
                        £50
                      </span>
                    </li>
                    <li>
                      VITAMIN D
                      <span>
                        From <br />
                        £60
                      </span>
                    </li>
                    <li>
                      HIGH POTENCY VITAMIN B &amp; C COMPLEX
                      <span>
                        From <br />
                        £60
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pricelist-flex">
                <div className="pricelist-flex-left">
                  <h3>IV DRIPS</h3>

                  <a
                    href="https://www.fresha.com/a/aesthetic-by-maria-london-10-adam-eve-mews-aderzrq0"
                    className="btn bg-black text-white rounded-none"
                  >
                    Book now
                  </a>
                </div>
                <div className="pricelist-flex-right">
                  <ul>
                    <li>
                      HIGH-DOSE VITAMIN C DRIP
                      <span>
                        From <br />
                        £280
                      </span>
                    </li>
                    <li>
                      ENERGY BOOST DRIP
                      <span>
                        From <br />
                        £300
                      </span>
                    </li>
                    <li>
                      IMMUNITY BOOST DRIP
                      <span>
                        From <br />
                        £300
                      </span>
                    </li>
                    <li>
                      DETOX IV DRIP <span>£300</span>
                    </li>
                    <li>
                      ANTI-AGEING DRIP
                      <span>
                        From <br />
                        £350
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pricelist-flex">
                <div className="pricelist-flex-left">
                  <h3>IV DRIP ADD ONS</h3>
                  <p>To be used in conjunction with an IV Drip</p>

                  <a
                    href="https://www.fresha.com/a/aesthetic-by-maria-london-10-adam-eve-mews-aderzrq0"
                    className="btn bg-black text-white rounded-none"
                  >
                    Book now
                  </a>
                </div>
                <div className="pricelist-flex-right">
                  <ul>
                    <li>
                      CALCIUM <span>£30</span>
                    </li>
                    <li>
                      MAGNESIUM <span>£30</span>
                    </li>
                    <li>
                      ZINC <span>£30</span>
                    </li>
                    <li>
                      VITAMIN C <span>£40</span>
                    </li>
                    <li>
                      B12 <span>£40</span>
                    </li>
                    <li>
                      BIOTIN <span>£50</span>
                    </li>
                    <li>
                      GLUTAMINE <span>£60</span>
                    </li>
                    <li>
                      HIGH POTENCY VITAMINS B AND C COMPLEX <span>£60</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pricelist-flex">
                <div className="pricelist-flex-left">
                  <h3>TEETH WHITENING</h3>

                  <a
                    href="https://www.fresha.com/a/aesthetic-by-maria-london-10-adam-eve-mews-aderzrq0"
                    className="btn bg-black text-white rounded-none"
                  >
                    Book now
                  </a>
                </div>
                <div className="pricelist-flex-right">
                  <ul>
                    <li>
                      1 SESSION <span>£150</span>
                    </li>
                    <li>
                      3 SESSIONS <span>£400</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  )
}
