"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#FFE5D9] to-[#FDF6F0] pt-24 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1A1060] leading-tight">
              Connecting Pets, People & Care – All in One Place!
            </h1>
            <p className="text-xl text-gray-600">
              Adopt a pet, find lost pets, connect with vets, and join a loving pet community.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#FF5C35] hover:bg-[#FF5C35]/90">
                Adopt a Pet
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#FF5C35] text-[#FF5C35] hover:bg-[#FF5C35] hover:text-white"
              >
                Find a Vet
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#FF5C35] text-[#FF5C35] hover:bg-[#FF5C35] hover:text-white"
              >
                Join the Community
              </Button>
            </div>
            <div className="relative max-w-xl">
              <Input
                type="text"
                placeholder="Search for pets, vets, or community posts..."
                className="pl-12 py-6 rounded-full"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <Image
              src="/placeholder.svg"
              alt="Happy pets and owners"
              width={600}
              height={500}
              className="rounded-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

