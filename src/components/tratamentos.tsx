export default function Tratamentos() {
  return (
    <div className="mt-16">
      <div className="flex text-center justify-center mb-16">
        <h1 className="font-semibold text-2xl">TRATAMENTS</h1>
      </div>

      <div className="carousel w-full">
        <div className="carousel-item relative">
          <img className="w-96" src="/Antiwrinkles.jpg" alt="Burger" />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 text-2xl font-medium">
            Anti-wrinkles
          </div>
        </div>
        <div className="carousel-item relative">
          <img className="w-96" src="/Forma.jpg" alt="Burger" />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 text-2xl font-medium">
            Forma
          </div>
        </div>
        <div className="carousel-item relative">
          <img className="w-96" src="/Ivdrip.jpg" alt="Burger" />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 text-2xl font-medium">
            Iv Drip
          </div>
        </div>
        <div className="carousel-item relative">
          <img className="w-96" src="/Morpheus.jpg" alt="Burger" />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 text-2xl font-medium">
            Morpheus
          </div>
        </div>
        <div className="carousel-item relative">
          <img className="w-96" src="/Teethwhitening.jpg" alt="Burger" />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 text-2xl font-medium">
            Teeth Whitening
          </div>
        </div>
      </div>
    </div>
  )
}
