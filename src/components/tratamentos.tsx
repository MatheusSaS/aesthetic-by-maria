import Image from "next/image"

import Antiwrinkles from "public/Antiwrinkles.jpg"
import Forma from "public/Forma.jpg"
import Ivdrip from "public/Ivdrip.jpg"
import Morpheus from "public/Morpheus.jpg"
import Teethwhitening from "public/Teethwhitening.jpg"

export default function Tratamentos() {
  return (
    <div className="mt-16">
      <div className="flex text-center justify-center mb-16">
        <h1 className="font-semibold text-2xl">TRATAMENTS</h1>
      </div>

      <div className="carousel w-full">
        <div className="carousel-item relative">
          <Image
            className="w-96 h-[500px]"
            src={Antiwrinkles}
            priority
            alt="Burger"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 text-2xl font-medium">
            Anti-wrinkles
          </div>
        </div>
        <div className="carousel-item relative">
          <Image className="w-96 h-[500px]" src={Forma} priority alt="Burger" />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 text-2xl font-medium">
            Forma
          </div>
        </div>
        <div className="carousel-item relative">
          <Image
            className="w-96 h-[500px]"
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
            className="w-96 h-[500px]"
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
            className="w-96 h-[500px]"
            src={Teethwhitening}
            priority
            alt="Burger"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 text-2xl font-medium">
            Teeth Whitening
          </div>
        </div>
      </div>
    </div>
  )
}
