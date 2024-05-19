"use client"
import Hero from "@/components/hero"
import Procedimentos from "@/components/procedimentos"
import Tratamentos from "@/components/tratamentos"
import { Suspense, useEffect, useState } from "react"
import Loading from "./loading"

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "/scroll.js"
    script.async = true
    document.body.appendChild(script)
  }, [])

  const [show, setShow] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 1000)
  }, [])
  return (
    <>
      {show ? (
        <Suspense fallback={<Loading />}>
          <Hero />
          <Tratamentos />
        </Suspense>
      ) : (
        <div className="cover">
          <div className="cover-logo">
            <span></span>
          </div>
        </div>
      )}
    </>
  )
}
