"use client";

import React from "react";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { Magnetic } from "@/components/reactbits/Magnetic";
import { Reveal } from "@/components/reactbits/Reveal";
import { aboutFeatures, aboutHero, aboutStory } from "@/lib/aboutdata";

const featureIcons = [

  <svg key="icon-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M12 9a3 3 0 100 6 3 3 0 000-6z" />
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75S21.75 6.615 21.75 12 17.385 21.75 12 21.75 2.25 17.385 2.25 12z" clipRule="evenodd" />
  </svg>,

  <svg key="icon-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75S6.615 21.75 12 21.75 21.75 17.385 21.75 12 17.385 2.25 12 2.25zm.75 6a.75.75 0 00-1.5 0v4.5l3 1.5a.75.75 0 00.75-1.299l-2.25-1.125V8.25z" clipRule="evenodd" />
  </svg>,

  <svg key="icon-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M3.75 5.25A2.25 2.25 0 016 3h12a2.25 2.25 0 012.25 2.25v13.5A2.25 2.25 0 0118 21H6a2.25 2.25 0 01-2.25-2.25V5.25z" />
    <path d="M7.5 7.5h9v1.5h-9zM7.5 10.5h9V12h-9zM7.5 13.5h6V15h-6z" />
  </svg>,

  
  <svg key="icon-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M12 2.25c-4.556 0-8.25 3.694-8.25 8.25 0 5.5 7.013 11.002 7.31 11.233a1.5 1.5 0 001.88 0c.297-.231 7.31-5.733 7.31-11.233 0-4.556-3.694-8.25-8.25-8.25zm0 12a3.75 3.75 0 110-7.5 3.75 3.75 0 010 7.5z" />
  </svg>,
];



const MTTypography = Typography as unknown as React.ComponentType<Record<string, unknown>>;
const MTCard = Card as unknown as React.ComponentType<Record<string, unknown>>;
const MTCardBody = CardBody as unknown as React.ComponentType<Record<string, unknown>>;
const MTButton = Button as unknown as React.ComponentType<Record<string, unknown>>;

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black">
          <Image
            src={aboutHero.image}
            alt="Camera Lens"
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl px-4">
          <Reveal>
            <MTTypography variant="h1" color="white" className="mb-4 font-serif">
             {aboutHero.title}
            </MTTypography>
          </Reveal>
          <Reveal delay={0.08}>
            <MTTypography variant="lead" color="white" className="opacity-90">
              {aboutHero.subtitle}
            </MTTypography>
          </Reveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div>
            <MTTypography variant="h3" color="blue-gray" className="mb-4 font-serif text-gray-900">
              {aboutStory.heading}
            </MTTypography>
            {aboutStory.paragraphs.map((para,idx)=>
            <MTTypography key={idx} className="mb-6 text-gray-600 font-normal">
              {para}
            </MTTypography>
            )}
            
          </div>
        </Reveal>
        <Reveal delay={0.08} y={18}>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src={aboutStory.image}
              alt="Our Team"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Reveal>
              <MTTypography variant="h5" color="blue" className="mb-2 font-bold uppercase tracking-widest text-primary-600">
                Why Choose Us
              </MTTypography>
            </Reveal>
            <Reveal delay={0.08}>
              <MTTypography variant="h3" color="blue-gray" className="font-serif text-gray-900">
                What You Get With Capturing Moment
              </MTTypography>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutFeatures.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.07} y={16}>
                <Magnetic className="h-full">
                  <MTCard className="h-full border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white">
                    <MTCardBody className="p-6">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                        {featureIcons[idx] ?? null}
                      </div>
                      <MTTypography variant="h5" color="blue-gray" className="mb-2 font-serif text-gray-900">
                        {item.title}
                      </MTTypography>
                      <MTTypography className="font-normal text-gray-600">
                        {item.desc}
                      </MTTypography>
                    </MTCardBody>
                  </MTCard>
                </Magnetic>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Reveal delay={0.12} y={10}>
              <Magnetic className="inline-block">
                <Link href="/contact">
                  <MTButton
                    size="lg"
                    color="blue"
                    className="rounded-full px-8 py-3 bg-primary-500 text-white hover:bg-primary-600"
                  >
                    Book a Session
                  </MTButton>
                </Link>
              </Magnetic>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
