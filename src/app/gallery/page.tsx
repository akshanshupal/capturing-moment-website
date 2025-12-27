"use client";

import React, { useState } from "react";
import { Typography, Tabs, TabsHeader, Tab } from "@material-tailwind/react";
import Image from "next/image";
import { Reveal } from "@/components/reactbits/Reveal";

const MTTypography = Typography as unknown as React.ComponentType<Record<string, unknown>>;
const MTTabs = Tabs as unknown as React.ComponentType<Record<string, unknown>>;
const MTTabsHeader = TabsHeader as unknown as React.ComponentType<Record<string, unknown>>;
const MTTab = Tab as unknown as React.ComponentType<Record<string, unknown>>;

const images = [
  { src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "wedding" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "wedding" },
  { src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "pre-wedding" },
  { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "portrait" },
  { src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "maternity" },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "portrait" },
  { src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "fashion" },
  { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "wedding" },
  { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "events" },
  { src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "product" },
  { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "wedding" },
  { src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "wedding" },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredImages = activeTab === "all" 
    ? images 
    : images.filter(img => img.category === activeTab);

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
              {[
                { label: "All", value: "all" },
                { label: "Wedding", value: "wedding" },
                { label: "Pre-Wedding", value: "pre-wedding" },
                { label: "Maternity", value: "maternity" },
                { label: "Events", value: "events" },
              ].map(({ label, value }) => (
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
