import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Image from "next/image"

export function VetServicesSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1A1060] mb-4">Professional Vet Services</h2>
          <p className="text-gray-600">Connect with qualified veterinarians for your pet's health needs</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((vet) => (
            <div key={vet} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-start gap-4">
                <Image src="/placeholder.svg" alt="Vet" width={80} height={80} className="rounded-full" />
                <div>
                  <h3 className="font-semibold">Dr. Sarah Johnson</h3>
                  <p className="text-sm text-gray-600">Small Animal Specialist</p>
                  <div className="flex items-center gap-1 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <Button className="w-full mt-4">Book Consultation</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

