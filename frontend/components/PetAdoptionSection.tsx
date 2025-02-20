import useEmblaCarousel from "embla-carousel-react"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import Image from "next/image"

export function PetAdoptionSection() {
  const [emblaRef] = useEmblaCarousel()

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1A1060] mb-4">Find Your Perfect Companion</h2>
          <p className="text-gray-600">Browse through our adorable pets waiting for their forever homes</p>
        </div>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((pet) => (
              <div key={pet} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <Image src="/placeholder.svg" alt="Pet" width={300} height={200} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Buddy</h3>
                  <p className="text-sm text-gray-600">2 years old • Golden Retriever</p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>New York, NY</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-8">
          <Button size="lg" className="bg-[#FF5C35] hover:bg-[#FF5C35]/90">
            View All Available Pets
          </Button>
        </div>
      </div>
    </section>
  )
}

