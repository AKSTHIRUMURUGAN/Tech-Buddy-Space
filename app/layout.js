import "@/styles/globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TechBuddySpace - Learn, Build, and Grow in Tech with Tanglish",
  description:
    "Join our community-driven platform for hands-on learning, real-world projects, and career advancement in tech using Tanglish.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Script src="https://unpkg.com/aos@next/dist/aos.js" />
        <Script id="aos-init">
          {`
            AOS.init({
              duration: 800,
              once: false,
            });
          `}
        </Script>
        <Script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js" />
      </body>
    </html>
  )
}

