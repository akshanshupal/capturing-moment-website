"use client";

import React, { useState } from "react";
import { Typography, Tabs, TabsHeader, Tab } from "@material-tailwind/react";
import Image from "next/image";
import { Reveal } from "@/components/reactbits/Reveal";
import { galleryimages, gallerytabs } from "@/lib/gallerydata";

const MTTypography = Typography as unknown as React.ComponentType<Record<string, unknown>>;
const MTTabs = Tabs as unknown as React.ComponentType<Record<string, unknown>>;
const MTTabsHeader = TabsHeader as unknown as React.ComponentType<Record<string, unknown>>;
const MTTab = Tab as unknown as React.ComponentType<Record<string, unknown>>;



export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredImages = activeTab === "all" 
    ? galleryimages 
    :galleryimages.filter(img => img.category === activeTab);

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="pt-32 pb-12 px-4 text-center">
        <Reveal>
          <MTTypography variant="h1" color="blue-gray" className="mb-4 font-serif text-gray-900">
            Portfolio Gallery
          </MTTypography>
        </Reveal>
        <Reveal delay={0.08}>
          <MTTypography variant="lead" className="text-gray-500 max-w-2xl mx-auto mb-12">
            Explore our visual journey through different genres of photography.
          </MTTypography>
        </Reveal>

        <div className="flex justify-center mb-12 overflow-x-auto">
          <MTTabs value={activeTab} className="w-full max-w-3xl">
            <MTTabsHeader 
                className="bg-gray-100 p-1 rounded-full"
                indicatorProps={{
                    className: "bg-white shadow-md rounded-full",
                }}
            >
              {gallerytabs.map(({ label, value }) => (
                <MTTab 
                    key={value} 
                    value={value} 
                    onClick={() => setActiveTab(value)}
                    className={`rounded-full py-2 px-6 transition-colors ${activeTab === value ? "text-primary-600 font-medium" : "text-gray-600"}`}
                >
                  {label}
                </MTTab>
              ))}
            </MTTabsHeader>
          </MTTabs>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredImages.map((img, idx) => (
            <Reveal key={idx} delay={idx * 0.03} y={14}>
              <div className="break-inside-avoid relative group rounded-lg overflow-hidden">
                <Image
                  src={img.src}
                  alt={`Gallery ${idx}`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <MTTypography color="white" className="font-medium uppercase tracking-widest text-sm">
                    {img.category}
                  </MTTypography>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
