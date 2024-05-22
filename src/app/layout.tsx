import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Procedimentos from "@/components/procedimentos"
import ItensNav from "@/components/itensNav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aesthetic by Maria",
  description:
    "Get the best of advanced aesthetics with Maria. A fully qualified & experienced Harley Street expert",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="light" className="min-h-screen">
      <body className={inter.className}>
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <Navbar />
            {children}
          </div>
          <ItensNav />
        </div>
        <Procedimentos />
        <a href="https://www.fresha.com/pt/a/aesthetic-by-maria-london-10-adam-eve-mews-aderzrq0">
          <button className="fixed -bottom-1 left-1/2 transform -translate-x-1/2 bg-black text-white p-4 w-full sm:w-36 font-semibold text-xl z-50">
            BOOK
          </button>
        </a>

        <Footer />
      </body>
    </html>
  )
}
