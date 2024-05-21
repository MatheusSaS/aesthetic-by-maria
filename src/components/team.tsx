import { useState, useRef, useEffect } from "react"
import Image, { StaticImageData } from "next/image"
import { Transition } from "@headlessui/react"

import DrPaulo from "public/Dr.PaulTulley.jpg"
import TestimonialImg02 from "public/Dr.CamilaAzzini.jpg"
import TestimonialImg03 from "public/Dra.Bianca.jpg"
import Maria from "public/MarianaAlmanza.jpg"
import Jaime from "public/Jamie.jpg"
import MariaFernanda from "public/MariaFernanda.jpg"

export default function Team() {
  const [active, setActive] = useState<number>(0)
  const [autorotate, setAutorotate] = useState<boolean>(true)
  const [autorotateTiming] = useState<number>(7000)

  interface Item {
    img: StaticImageData
    quote: string
    name: string
  }

  const items: Item[] = [
    {
      img: MariaFernanda,
      quote: `I’m Maria Fernanda. I am a passionate aesthetic practitioner with a
      deep understanding of injectables treatments. My journey in the
      field of aesthetic began with a committment to enhancing natural
      beauty and empowering my clients to feel confident and elegant with
      their skin. My passion is to develop results to increase the quality
      of the skin and help my clients to gain back their self-esteem.`,
      name: "Maria Fernanda Monteiro",
    },
    {
      img: DrPaulo,
      quote: `Paul Tulley is a Consultant Plastic and Reconstructive Surgeon based in London and the South-East of the UK. He specialises in all aspects of cosmetic surgery for female and male patients including facial rejuvenation surgery, rhinoplasty, cosmetic breast surgery, abdominoplasty and body contouring.
        He also specialises in reconstructive surgery for facial palsy, skin cancer and the abdominal wall.
        He utilises the latest plastic surgery techniques and his aesthetic skill to produce exceptional, natural results, in the safe environment of the highest quality hospitals in and around London.
        Paul is a member of leading plastic surgery associations, including the British Association of Aesthetic Plastic Surgeons (BAAPS) and the American Society of Plastic Surgeons (ASPS).`,
      name: "Dr. Paul Tulley",
    },
    {
      img: TestimonialImg02,
      quote: `I am Dr. Camila Azzini, dermatologist graduated more than 20 years ago from the Rio de Janeiro State University with post-graduation in clinical – surgical dermatology and cosmiatrics.
      I am passionate about the study of skin and hair and their relationship to holistic health. I am a full member of the SBD (Brazilian Society of Dermatology), the AAD (American Academy of Dermatology), and the Brazilian Society of Dermatologic Surgery.
      Today I divide my time between studies, face-to-face appointments in London – UK, online appointments and share my love for dermatology and life on my Youtube and Instagram channels.`,
      name: "Dr. Camila Azzini",
    },
    {
      img: Maria,
      quote: `Mariana Almanza I specialize in skin cleansing and massage. My massage therapy can provide clients a relaxation, stress reduction and pain free. I customize the service based on your individual needs and ensuring a great experience and results. As skin specialist, I focus on enhancing skin health and appearance. I believe that healthy skin contributes to overall confidence and vitality.`,
      name: "Mariana Almanza",
    },
    {
      img: TestimonialImg03,
      quote: `Dr Bianca is a fully qualified General Practitioner with extensive experience in Aesthetic Medicine. She previously trained as a General surgeon in Brazil and as a General Practitioner in the NHS. Her passion is to help patients excel their true beauty.`,
      name: "Dr. Bianca",
    },
    {
      img: Jaime,
      quote: `Jamie, the aesthetic paramedic, is a compassionate healer with a keen eye for beauty in both medicine and life. With a background in emergency medicine, Jamie combines clinical expertise with an artistic touch, ensuring that each patient receives not only the best care but also an experience that soothes the soul. From stitching wounds with precision to comforting patients with words of reassurance, Jamie's holistic approach to healthcare extends beyond physical healing to encompass emotional well-being. With a flair for aesthetics, Jamie brings a touch of elegance to every aspect of their practice, from the sleek design of medical equipment to the calming ambiance of the treatment room. Whether responding to emergencies or providing routine care, Jamie's dedication to both form and function makes them a true artist of the paramedic world.`,
      name: "Jamie",
    },
  ]

  const testimonials = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!autorotate) return
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % items.length)
    }, autorotateTiming)
    return () => clearInterval(interval)
  }, [autorotate, autorotateTiming, items.length])

  const heightFix = () => {
    if (testimonials.current && testimonials.current.parentElement)
      testimonials.current.parentElement.style.height = `${testimonials.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [active])

  return (
    <section>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="relative pb-12 md:pb-20">
          {/* Carousel */}
          <div className="text-center">
            {/* Testimonial image */}
            <div className="relative h-80 bg-white flex justify-center items-center overflow-hidden">
              {items.map((item, index) => (
                <Transition
                  key={index}
                  show={active === index}
                  className="absolute transition-all duration-700 ease-in-out"
                  enter="transform transition duration-700 ease-in-out"
                  enterFrom="-translate-x-full opacity-0"
                  enterTo="translate-x-0 opacity-100"
                  leave="transform transition duration-700 ease-in-out absolute"
                  leaveFrom="translate-x-0 opacity-100"
                  leaveTo="translate-x-full opacity-0"
                  beforeEnter={() => heightFix()}
                >
                  <Image
                    className="rounded-full"
                    src={item.img}
                    width={200}
                    height={200}
                    alt={item.name}
                  />
                </Transition>
              ))}
            </div>
            {/* Text */}
            <div className="mb-10 transition-all duration-150 delay-300 ease-in-out">
              <div className="relative flex flex-col" ref={testimonials}>
                {items.map((item, index) => (
                  <Transition
                    key={index}
                    show={active === index}
                    enter="transition ease-in-out duration-500 delay-200 order-first"
                    enterFrom="opacity-0 -translate-x-4"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-out duration-300 delay-300 absolute"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 translate-x-4"
                    beforeEnter={() => heightFix()}
                  >
                    <h3 className="text-lg font-heading mb-1 font-semibold mt-3">
                      {item.name}
                    </h3>
                    <div className="text-lg  bg-clip-text bg-gradient-to-r mt-3 text-justify">
                      {item.quote}
                    </div>
                  </Transition>
                ))}
              </div>
            </div>
            {/* Buttons */}
            <div className="flex flex-wrap justify-center -m-1.5">
              {items.map((item, index) => (
                <button
                  className={`btn-md m-1.5 text-md py-1.5 text-white transition duration-150 ease-in-out  relative before:absolute before:inset-0  before:rounded-full before:pointer-events-none ${
                    index === 0
                      ? "bg-orange-900"
                      : "before:bg-slate-800/30 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box]"
                  } ${
                    active === index
                      ? "opacity-100"
                      : "opacity-30 hover:opacity-60"
                  }`}
                  key={index}
                  onClick={() => {
                    setActive(index)
                    setAutorotate(false)
                  }}
                >
                  <span className="relative">
                    <span className="text-white">{item.name}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
