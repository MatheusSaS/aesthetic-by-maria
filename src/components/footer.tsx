export default function Footer() {
  return (
    <div className="container mx-auto px-4 mt-16 mb-20">
      <div className="flex items-center md:items-start justify-center md:justify-between flex-wrap gap-8 mb-5 bg-[#f7f6f4] p-5">
        <a href="#" className="mt-0 md:mt-24">
          <img src="/logo.svg" alt="" className="h-32 w-32" />
        </a>
        <div className="flex flex-wrap gap-4 -mx-4">
          <ul className="flex flex-col gap-1 p-4 justify-center text-center">
            <li
              className="text-black font-medium"
              data-config-id="auto-txt-1-2"
            >
              Opening Hours
            </li>
            <li>
              <p>Monday - 9:30am - 7pm</p>
            </li>
            <li>
              <p>Tuesday - 9:30am - 7pm</p>
            </li>
            <li>
              <p>Wednesday - 9:30am - 7pm</p>
            </li>
            <li>
              <p>Thursday - 9:30am - 7pm</p>
            </li>
            <li>
              <p>Friday - 9:30am - 7pm</p>
            </li>

            <li>
              <p>Saturday - 9:30am - 7pm</p>
            </li>
            <li>
              <p>Sunday - 12:00pm - 4pm</p>
            </li>
          </ul>
        </div>
        <ul className="flex flex-col gap-6 p-4 justify-center text-center">
          <li className="text-black font-medium" data-config-id="auto-txt-1-2">
            Contact Us
          </li>
          <li>
            <p>
              10 Adam and Eve Mews <br />
              Kensington <br />
              London W8 6UJ
            </p>
          </li>

          <li>
            <p className="flex justify-center mr-8">
              <img src="casa.png" className="w-5 h-5 mr-1" alt="" />
              +44 208 129 5005
            </p>
          </li>
          <li>
            <p className="flex justify-center mr-8">
              <img src="whatsapp.png" className="w-5 h-5 mr-1" alt="" />
              +44 7494 281058
            </p>
          </li>
          <li>
            <p className="flex justify-center">
              <img src="instagram.png" className="w-5 h-5 mr-2 mt-1" alt="" />
              @aesthetic_by_maria
            </p>
          </li>
          <li>
            <p>hello@aesthetic-by-maria.co.uk</p>
          </li>
        </ul>
      </div>
      <p
        className="text-gray-500 text-sm text-center font-semibold"
        data-config-id="auto-txt-20-2"
      >
        COPYRIGHT © 2024 AESTHETIC BY MARIA
      </p>
    </div>
  )
}
