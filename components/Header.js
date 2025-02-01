import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="TechBuddySpace Logo" width={32} height={32} />
          <span className="font-bold">TechBuddySpace</span>
        </Link>
        <nav className="ml-auto flex items-center space-x-6 text-sm font-medium">
          <Link href="#about">About</Link>
          <Link href="#features">Features</Link>
          <Link href="#methodology">Methodology</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#testimonials">Testimonials</Link>
        </nav>
      </div>
    </header>
  )
}

