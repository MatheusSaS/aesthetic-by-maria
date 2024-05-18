export default function Navbar() {
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
                <p>+44 7494 281058</p>
              </div>
              <div className="absolute top-1/2 right-0 md:left-1/2 transform -translate-x-0 md:-translate-x-1/2 -translate-y-1/2 inline-block text-lg font-bold  md:hidden">
                <div className="dropdown relative">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-0"
                  >
                    <li>
                      <a>Homepage</a>
                    </li>
                    <li>
                      <a>Portfolio</a>
                    </li>
                    <li>
                      <a>About</a>
                    </li>
                  </ul>
                </div>
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
                <li className="group relative">
                  <a
                    className="inline-block text-lg text-gray-900 hover:text-orange-900 font-medium"
                    href="#"
                    data-config-id="auto-txt-1-10"
                  >
                    Featured
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block text-lg text-gray-900 hover:text-orange-900 font-medium"
                    href="#"
                    data-config-id="auto-txt-11-10"
                  >
                    Solutions
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block text-lg text-gray-900 hover:text-orange-900 font-medium"
                    href="#"
                    data-config-id="auto-txt-12-10"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block text-lg text-gray-900 hover:text-orange-900 font-medium"
                    href="#"
                    data-config-id="auto-txt-13-10"
                  >
                    Articles
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
