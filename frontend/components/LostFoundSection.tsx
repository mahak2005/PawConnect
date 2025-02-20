import { Button } from "@/components/ui/button"

export function LostFoundSection() {
  return (
    <section className="py-12 bg-[#F4F7FE]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1A1060] mb-4">Lost & Found Pets</h2>
          <p className="text-gray-600">Help reunite lost pets with their families</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Button size="lg" className="w-full bg-[#FF5C35] hover:bg-[#FF5C35]/90">
              Report a Lost Pet
            </Button>
            <Button size="lg" className="w-full" variant="outline">
              Find a Lost Pet
            </Button>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-4">Recently Reported</h3>
              {/* Add lost pet listings here */}
            </div>
          </div>
          <div className="bg-gray-200 rounded-xl h-[400px]">
            {/* Add Google Maps integration here */}
            <div className="h-full flex items-center justify-center text-gray-500">Interactive Map Coming Soon</div>
          </div>
        </div>
      </div>
    </section>
  )
}

