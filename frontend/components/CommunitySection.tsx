import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import Image from "next/image"

export function CommunitySection() {
  return (
    <section className="py-12 bg-[#F4F7FE]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1A1060] mb-4">Join Our Pet-Loving Community</h2>
          <p className="text-gray-600">Share experiences, get advice, and connect with other pet owners</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((post) => (
            <div key={post} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt="Community post"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold mb-2">Tips for First-Time Pet Parents</h3>
                <p className="text-gray-600 text-sm">Essential advice for new pet owners...</p>
                <div className="flex items-center gap-4 mt-4">
                  <Button variant="outline" size="sm">
                    <Heart className="w-4 h-4 mr-2" />
                    Like
                  </Button>
                  <Button variant="outline" size="sm">
                    Share
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

