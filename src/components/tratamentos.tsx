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
        <h1 className="font-semibold text-2xl">TRATAMENTS</h1>
      </div>

      <div className="carousel w-full">
        <div className="carousel-item relative">
          <Image
            className="w-[300px] h-[450px]"
            src={Antiwrinkles}
            priority
            alt="Burger"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 text-2xl font-medium">
            Anti-wrinkles
          </div>
        </div>
        <div className="carousel-item relative">
          <Image
            className="w-[300px] h-[450px]"
            src={Forma}
            priority
            alt="Burger"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 text-2xl font-medium">
            Forma
          </div>
        </div>
        <div className="carousel-item relative">
          <Image
            className="w-[300px] h-[450px]"
            src={Ivdrip}
            priority
            alt="Burger"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 text-2xl font-medium">
            Iv Drip
          </div>
        </div>
        <div className="carousel-item relative">
          <Image
            className="w-[300px] h-[450px]"
            src={Morpheus}
            priority
            alt="Burger"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 text-2xl font-medium">
            Morpheus
          </div>
        </div>
        <div className="carousel-item relative">
          <Image
            className="w-[300px] h-[450px]"
            src={Teethwhitening}
            priority
            alt="Burger"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 text-2xl font-medium">
            Teeth Whitening
          </div>
        </div>
        <div className="carousel-item relative">
          <Image
            className="w-[300px] h-[450px]"
            src={Votiva}
            priority
            alt="Burger"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 text-2xl font-medium">
            Votiva
          </div>
        </div>
      </div>
    </div>
  )
}
