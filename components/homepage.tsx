import React from "react";
import {
  BlogSection,
  CoreFeatures,
  DetailedOverview,
  Footer,
  Header,
  HeroSection,
  HowItWorksSection,
  PartnersSection,
} from "@/components";
import { dataForBlogSection } from "@/utils/data";

export function Homepage() {
  return (
    <div className="flex flex-col">
      <Header />
      <main>
        {/*  Hero Section */}
        <HeroSection />

        {/* Our Partners Section */}

        <PartnersSection />

        {/* Our Core Features */}
        <CoreFeatures />

        {/* How it works section */}
        <HowItWorksSection />

        {/* Blog Section */}
        <BlogSection title="Blog Post" data={dataForBlogSection} />
        {/* Detailed Overview */}
        <DetailedOverview />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
