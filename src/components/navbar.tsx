import { Route } from "next"
import Link from "next/link"

export default function Navbar() {
  const navItems = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/about",
      title: "About",
    },
    {
      href: "/treatments",
      title: "Treatments",
    },
    {
      href: "/pricelist",
      title: "Pricelist",
    },
    {
      href: "https://wa.me/447494281058",
      title: "Contact",
    },
  ] satisfies { href: Route; title: string }[]
  return (
    <div className="sticky left-0 right-0 top-0 z-20 bg-white">
      <div className="mx-auto w-full max-w-screen-xl sm:px-2.5 lg:px-20">
        <nav
          id="navbranding"
          className="relative py-9 bg-transparent z-50 transition-all duration-500 ease-in-out"
        >
          <div className="container px-4 mx-auto">
            <div className="flex justify-between items-center relative">
              <a
                className="absolute top-1/2 left-0 md:left-1/2 transform -translate-x-0 md:-translate-x-1/2 -translate-y-1/2 inline-block text-lg font-bold"
                href="#"
              >
                <img
                  id="imgbranding"
                  className="h-4 sm:h-7 transition-all duration-500 ease-in-out"
                  src="/wordmark.svg"
                  alt=""
                />
              </a>
              <div className="hidden lg:flex lg:w-auto lg:space-x-12">
                <a href="https://wa.me/447494281058">
                  <p>+44 7494 281058</p>
                </a>
              </div>
              <div className="absolute top-1/2 right-0 md:left-1/2 transform -translate-x-0 md:-translate-x-1/2 -translate-y-1/2 inline-block text-lg font-bold  md:hidden">
                <label htmlFor="my-drawer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </label>
              </div>
            </div>
          </div>
        </nav>

        <div
          id="navli"
          className="relative pb-8 pt-8 bg-transparent z-50 hidden md:flex transition-all duration-500 ease-in-out mb-6"
        >
          <div className="container px-4 mx-auto">
            <div className="flex items-center relative">
              <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden xl:flex lg:w-auto lg:space-x-12">
                {navItems.map((item, id) => (
                  <Link
                    className="inline-block text-lg text-gray-900 hover:text-orange-900 font-medium"
                    href={item.href}
                    key={`${item.href}-${id}`}
                  >
                    {item.title}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
