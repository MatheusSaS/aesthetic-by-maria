"use client"

import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Procedimentos from "@/components/procedimentos"
import Tratamentos from "@/components/tratamentos"
import Image from "next/image"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "/scroll.js"
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Tratamentos />
      <Procedimentos />
      <Footer />
      <button className="fixed -bottom-1 left-1/2 transform -translate-x-1/2 bg-black text-white p-4 w-full sm:w-36 font-semibold text-xl z-50">
        BOOK
      </button>
    </>
  )
}
