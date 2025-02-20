import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram } from "lucide-react"

export function NewsletterSection() {
  return (
    <section className="py-12 bg-[#1A1060] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected with PawConnect</h2>

          <p className="mb-8">Get the latest updates on pet care, adoption events, and community news</p>
          <div className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button className="bg-[#FF5C35] hover:bg-[#FF5C35]/90">Subscribe</Button>
          </div>
          <div className="flex justify-center gap-6 mt-8">
            <Button variant="ghost" size="icon">
              <Facebook className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <Instagram className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

