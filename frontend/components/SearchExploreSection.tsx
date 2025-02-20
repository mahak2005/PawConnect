import { Button } from "@/components/ui/button"

export function SearchExploreSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">🐶 Adoptable Pets</h3>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                By Breed
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                By Age
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                By Location
              </Button>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">🏥 Veterinary Services</h3>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                Online Consultation
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Nearby Clinics
              </Button>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">🛒 Marketplace</h3>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                Pet Food
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Grooming
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Toys & Accessories
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

