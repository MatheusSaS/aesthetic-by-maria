"use client"

import { useEffect } from "react"
import Image from "next/image"
import LogoDiolase from "public/LogoDiolase.png"

// Import Swiper
import Swiper, { Autoplay } from "swiper"
import "swiper/swiper.min.css"
Swiper.use([Autoplay])

export default function Procedimentos() {
  useEffect(() => {
    const carousel = new Swiper(".clients-carousel", {
      slidesPerView: "auto",
      spaceBetween: 64,
      centeredSlides: true,
      loop: true,
      speed: 5000,
      noSwiping: true,
      noSwipingClass: "swiper-slide",
      autoplay: {
        delay: 0,
        disableOnInteraction: true,
      },
    })
  }, [])

  return (
    <section>
      <div className="mt-16">
        <div className="flex text-center justify-center">
          <h1 className="font-semibold text-2xl">IN PARTNERSHIP WITH</h1>
        </div>
      </div>
      <div className="relative w-full mx-auto sm:px-36">
        <div className="py-12 md:py-16">
          <div className="overflow-hidden">
            {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
            {/* * Custom styles in src/css/additional-styles/theme.scss */}
            <div className="clients-carousel swiper-container relative before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-white after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-white">
              <div className="swiper-wrapper !ease-linear select-none items-center">
                {/* Carousel items */}
                <div className="swiper-slide !w-auto">
                  <Image
                    src={LogoDiolase}
                    alt="Client 01"
                    priority
                    width={110}
                    height={21}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image
                    src="/LogoForma.png"
                    alt="Client 02"
                    width={110}
                    height={21}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image
                    className="mt-1"
                    src="/LogoInmode.png"
                    alt="Client 03"
                    width={110}
                    height={33}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image
                    src="/LogoLumeca.png"
                    alt="Client 04"
                    width={110}
                    height={36}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image
                    src="/LogoMorpheus.png"
                    alt="Client 05"
                    width={86}
                    height={18}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image
                    src="/LogoOptimas.png"
                    alt="Client 06"
                    width={78}
                    height={34}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image
                    src="/LogoVotiva.png"
                    alt="Client 07"
                    width={83}
                    height={23}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image
                    src="/LogoZoSkin.png"
                    alt="Client 08"
                    width={98}
                    height={26}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
