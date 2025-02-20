import Link from "next/link"
import { Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/adoption" className="text-gray-600 hover:text-gray-900">
                  Adoption
                </Link>
              </li>
              <li>
                <Link href="/vets" className="text-gray-600 hover:text-gray-900">
                  Veterinarians
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-gray-600 hover:text-gray-900">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="/lost-found" className="text-gray-600 hover:text-gray-900">
                  Lost & Found
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-600 hover:text-gray-900">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/forum" className="text-gray-600 hover:text-gray-900">
                  Forum
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-gray-600 hover:text-gray-900">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-gray-900">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>1-800-PAW-CONNECT</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>support@pawconnect.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} PawConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

