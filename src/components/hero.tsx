import Image from "next/image"
import HeroHome from "public/hero-home.jpg"
import HeroHomeMobile from "public/hero-home-mobile.png"

export default function Hero() {
  return (
    <div className="items-center justify-center w-full px-6 sm:px-36 sm:mt-16">
      <div className="relative">
        <Image
          src={HeroHome}
          alt="Sample Image"
          width={1570}
          height={790}
          priority
          className="object-cover w-full h-full hidden md:flex"
        />
        <Image
          src={HeroHomeMobile}
          alt="Sample Image"
          width={580}
          height={880}
          priority
          className="object-cover w-full h-full flex md:hidden"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-2xl sm:text-4xl font-bold text-center">
            WHERE BEAUTY, BODY AND MIND ALIGN
          </span>
        </div>
      </div>
    </div>
  )
}
