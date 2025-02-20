import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#FF5C35]">
              <path d="M21 6h-2l-1.27-1.27A2.49 2.49 0 0 0 16 4h-2.5A2.64 2.64 0 0 0 11 2a2.64 2.64 0 0 0-2.5 2H6a2.74 2.74 0 0 0-1.73.73L3 6H1a1 1 0 0 0 0 2h20a1 1 0 0 0 0-2z" />
            </svg>
            <span className="ml-2 text-xl font-bold text-[#1A1060]">PawConnect</span>
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/adopt" className="text-gray-600 hover:text-gray-900">
              Adopt
            </Link>
            <Link href="/lost-found" className="text-gray-600 hover:text-gray-900">
              Lost & Found
            </Link>
            <Link href="/find-vet" className="text-gray-600 hover:text-gray-900">
              Find a Vet
            </Link>
            <Link href="/community" className="text-gray-600 hover:text-gray-900">
              Community
            </Link>
            <Link href="/marketplace" className="text-gray-600 hover:text-gray-900">
              Marketplace
            </Link>
          </div>
          <Button className="bg-[#FF5C35] hover:bg-[#FF5C35]/90 text-white">Login / Signup</Button>
        </div>
      </div>
    </nav>
  )
}

