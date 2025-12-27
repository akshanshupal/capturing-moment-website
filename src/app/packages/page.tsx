"use client";

import React from "react";
import { Typography, Card, CardBody, Button, CardHeader } from "@material-tailwind/react";
import { Magnetic } from "@/components/reactbits/Magnetic";
import { Reveal } from "@/components/reactbits/Reveal";

import { CountUp } from "@/components/reactbits/CountUp";

const MTTypography = Typography as unknown as React.ComponentType<Record<string, unknown>>;
const MTCard = Card as unknown as React.ComponentType<Record<string, unknown>>;
const MTCardBody = CardBody as unknown as React.ComponentType<Record<string, unknown>>;
const MTCardHeader = CardHeader as unknown as React.ComponentType<Record<string, unknown>>;
const MTButton = Button as unknown as React.ComponentType<Record<string, unknown>>;

const packages = [
  {
    title: "Essential",
    price: 50000,
    features: [
      "1 Day Wedding Coverage",
      "Traditional Photography",
      "Traditional Videography",
      "1 Album (30 Sheets)",
      "Digital Soft Copies",
    ],
    recommended: false,
  },
  {
    title: "Premium",
    price: 125000,
    features: [
      "2 Days Wedding Coverage",
      "Candid Photography",
      "Cinematic Videography",
      "Drone Coverage",
      "Pre-Wedding Shoot",
      "2 Premium Albums",
      "Instagram Teaser",
    ],
    recommended: true,
  },
  {
    title: "Luxury",
    price: 250000,
    features: [
      "3 Days Complete Coverage",
      "Senior Candid Team",
      "Cinematic Film (20-25 mins)",
      "Same Day Edit (Highlights)",
      "Pre-Wedding (Destination)",
      "3 Luxury Albums",
      "Live Streaming",
    ],
    recommended: false,
  },
];

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-28">
      <div className="text-center max-w-4xl mx-auto px-4 mb-16">
        <Reveal>
          <MTTypography variant="h1" color="blue-gray" className="mb-4 font-serif text-gray-900">
            Packages & Pricing
          </MTTypography>
        </Reveal>
        <Reveal delay={0.08}>
          <MTTypography variant="lead" className="text-gray-500">
            Transparent pricing for every budget. Choose the package that fits your dream wedding.
          </MTTypography>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg, idx) => (
          <Reveal key={idx} delay={idx * 0.08} y={16}>
            <MTCard 
              className={`relative ${pkg.recommended ? "border-2 border-primary-500 scale-105 shadow-2xl z-10" : "shadow-lg"}`}
            >
              {pkg.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              <MTCardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 p-8 text-center border-b border-gray-100"
              >
                <MTTypography variant="h4" color="blue-gray" className="font-normal uppercase mb-2 text-gray-900">
                  {pkg.title}
                </MTTypography>
                <MTTypography variant="h1" color="blue-gray" className="mt-6 flex justify-center gap-1 text-7xl font-normal text-gray-900">
                  <span className="mt-2 text-4xl">₹</span>
                  <CountUp to={pkg.price} />
                </MTTypography>
              </MTCardHeader>
              <MTCardBody className="p-8">
                <ul className="flex flex-col gap-4">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <span className="p-1 rounded-full bg-primary-50 text-primary-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      <MTTypography className="font-normal text-gray-600">{feature}</MTTypography>
                    </li>
                  ))}
                </ul>
              </MTCardBody>
              <div className="p-8 mt-auto">
                <Magnetic className="w-full">
                  <MTButton
                    fullWidth
                    variant={pkg.recommended ? "filled" : "outlined"}
                    color="blue"
                    className={`${
                      pkg.recommended
                        ? "bg-primary-500 text-white hover:bg-primary-600"
                        : "border-primary-500 text-primary-600 hover:bg-primary-50"
                    } px-8 py-3 rounded-full`}
                  >
                    Choose Plan
                  </MTButton>
                </Magnetic>
              </div>
            </MTCard>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
