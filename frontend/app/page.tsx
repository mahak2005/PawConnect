"use client"

import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { SearchExploreSection } from "@/components/SearchExploreSection"
import { PetAdoptionSection } from "@/components/PetAdoptionSection"
import { LostFoundSection } from "@/components/LostFoundSection"
import { VetServicesSection } from "@/components/VetServicesSection"
import { CommunitySection } from "@/components/CommunitySection"
import { NewsletterSection } from "@/components/NewsletterSection"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDF6F0]">
      <Navbar />
      <HeroSection />
      <SearchExploreSection />
      <PetAdoptionSection />
      <LostFoundSection />
      <VetServicesSection />
      <CommunitySection />
      <NewsletterSection />
      <Footer />
    </div>
  )
}

