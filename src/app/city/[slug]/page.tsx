"use client";

import React from "react";
import { Typography, Button, Card, CardHeader, CardBody } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Magnetic } from "@/components/reactbits/Magnetic";
import { Reveal } from "@/components/reactbits/Reveal";

const MTTypography = Typography as unknown as React.ComponentType<Record<string, unknown>>;
const MTButton = Button as unknown as React.ComponentType<Record<string, unknown>>;
const MTCard = Card as unknown as React.ComponentType<Record<string, unknown>>;
const MTCardHeader = CardHeader as unknown as React.ComponentType<Record<string, unknown>>;
const MTCardBody = CardBody as unknown as React.ComponentType<Record<string, unknown>>;

export default function CityPage() {
  const params = useParams();
  const slug = params.slug as string;
  const city = slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : "Your City";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center bg-primary-900">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt={`${city} Photography`}
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <Reveal>
            <MTTypography variant="h1" color="white" className="mb-4 font-serif">
              Best Photographers in {city}
            </MTTypography>
          </Reveal>
          <Reveal delay={0.08}>
            <MTTypography variant="lead" color="white" className="opacity-90 max-w-2xl mx-auto">
              Capturing weddings, events, and portraits with a cinematic touch in {city}.
            </MTTypography>
          </Reveal>
        </div>
      </section>

      {/* Services in City */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Reveal>
            <MTTypography variant="h2" color="blue-gray" className="mb-4 font-serif text-gray-900">
              Our Services in {city}
            </MTTypography>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We bring our expert team to {city} to provide you with world-class photography services.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: `Wedding Photography in ${city}`,
              desc: `From traditional ceremonies to modern receptions, we cover it all in ${city}.`,
              img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
              title: `Pre-Wedding Shoots in ${city}`,
              desc: `Discover the most beautiful locations in ${city} for your romantic shoot.`,
              img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
              title: `Event Coverage in ${city}`,
              desc: `Corporate events, birthdays, and anniversaries captured perfectly in ${city}.`,
              img: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
          ].map((service, idx) => (
            <Reveal key={idx} delay={idx * 0.08} y={16}>
              <Magnetic className="h-full">
                <MTCard className="h-full hover:shadow-lg transition-shadow">
                  <MTCardHeader floated={false} className="h-48 m-0 rounded-b-none relative">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </MTCardHeader>
                  <MTCardBody className="text-center p-6">
                    <MTTypography variant="h5" color="blue-gray" className="mb-2 font-serif text-gray-900">
                      {service.title}
                    </MTTypography>
                    <MTTypography className="font-normal text-gray-600 mb-4">
                      {service.desc}
                    </MTTypography>
                    <Magnetic className="inline-block">
                      <Link href="/contact">
                        <MTButton
                          variant="outlined"
                          size="sm"
                          color="blue"
                          className="px-5 py-2.5 rounded-full border-primary-500 text-primary-600 hover:bg-primary-50"
                        >
                          Book in {city}
                        </MTButton>
                      </Link>
                    </Magnetic>
                  </MTCardBody>
                </MTCard>
              </Magnetic>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Reveal>
            <MTTypography variant="h3" color="blue-gray" className="mb-4 font-serif text-gray-900">
              Looking for a Photographer in {city}?
            </MTTypography>
          </Reveal>
          <Reveal delay={0.08}>
            <MTTypography className="mb-8 text-gray-600">
              Contact us today to discuss your requirements and get a custom quote.
            </MTTypography>
          </Reveal>
          <Reveal delay={0.14} y={10}>
            <Magnetic className="inline-block">
              <Link href="/contact">
                <MTButton
                  size="lg"
                  color="blue"
                  className="px-8 py-3 rounded-full bg-primary-500 text-white hover:bg-primary-600"
                >
                  Contact Us Now
                </MTButton>
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
