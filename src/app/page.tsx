"use client"

import Wrapper from "@/components/general/Wrapper";
import AboutCards from "@/components/includes/about-us/AboutCards";
import AboutUsSection from "@/components/includes/about-us/AboutUsSection";
import StatsOverview from "@/components/includes/about-us/StatsOverview";
import CategoryGallery from "@/components/includes/category/CategoryGallery";
import CategorySection from "@/components/includes/category/CategorySection";
import ContactUsPage from "@/components/includes/contact-us/ContactUsPage";
import Footer from "@/components/includes/footer/Footer";
import ProgramsGallery from "@/components/includes/programs/ProgramsGallery";
import ProgramsSection from "@/components/includes/programs/ProgramsSection";
import ProgramsTabs from "@/components/includes/programs/ProgramsTabs";
import Spotlight from "@/components/includes/spotlight/Spotlight";
import TroupeCard from "@/components/includes/troupes/TroupeCard";
import TroupesSection from "@/components/includes/troupes/TroupesSection";
import { useState } from "react";

export default function Home() {

  const [activeTab, setActiveTab] = useState("All")

  return (
    <div className="">
      <Spotlight />
      <Wrapper>
        <ProgramsSection />
        <ProgramsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <ProgramsGallery activeTab={activeTab} />
      </Wrapper>
      <div className="bg-[#FDEBEA]">
        <Wrapper>
          <TroupesSection />
          <TroupeCard />
        </Wrapper>
      </div>
      <Wrapper>
        <CategorySection />
        <CategoryGallery />
      </Wrapper>
      <div className="bg-[#FDEBEA]">
        <Wrapper>
          <AboutUsSection />
          <AboutCards />
          <StatsOverview />
        </Wrapper>
      </div>
      <Wrapper>
        <ContactUsPage />
      </Wrapper>
      <div className="bg-[#FDEBEA]">
          <Footer />
      </div>
    </div>
  );
}
