import Image from "next/image"

import Antiwrinkles from "public/Anti-wrinkles.png"
import Forma from "public/Forma.png"
import Ivdrip from "public/Iv-drip.png"
import Morpheus from "public/Morpheus.png"
import Teethwhitening from "public/Teeth-whitening.png"
import Votiva from "public/Votiva.png"

export default function Tratamentos() {
  return (
    <div className="mt-16">
      <div className="flex text-center justify-center mb-16">
        <h1 className="font-semibold text-2xl">TREATMENTS</h1>
      </div>

      <div className="carousel w-full">
        <div className="carousel-item relative">
          <a href="/treatments/anti-wrinkle">
            <Image
              className="w-[300px] h-[450px]"
              src={Antiwrinkles}
              priority
              alt="Burger"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 text-2xl font-medium">
              Anti-wrinkles
            </div>
          </a>
        </div>
        <div className="carousel-item relative">
          <a href="/treatments/forma">
            <Image
              className="w-[300px] h-[450px]"
              src={Forma}
              priority
              alt="Burger"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 text-2xl font-medium">
              Forma
            </div>
          </a>
        </div>
        <div className="carousel-item relative">
          <a href="/treatments/iv-drips">
            <Image
              className="w-[300px] h-[450px]"
              src={Ivdrip}
              priority
              alt="Burger"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 text-2xl font-medium">
              Iv Drip
            </div>
          </a>
        </div>
        <div className="carousel-item relative">
          <a href="/treatments/morpheus8">
            <Image
              className="w-[300px] h-[450px]"
              src={Morpheus}
              priority
              alt="Burger"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 text-2xl font-medium">
              Morpheus
            </div>
          </a>
        </div>
        <div className="carousel-item relative">
          <a href="/treatments/teeth-whitening">
            <Image
              className="w-[300px] h-[450px]"
              src={Teethwhitening}
              priority
              alt="Burger"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 text-2xl font-medium">
              Teeth Whitening
            </div>
          </a>
        </div>
        <div className="carousel-item relative">
          <a href="/treatments/votiva">
            <Image
              className="w-[300px] h-[450px]"
              src={Votiva}
              priority
              alt="Burger"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 text-2xl font-medium">
              Votiva
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
