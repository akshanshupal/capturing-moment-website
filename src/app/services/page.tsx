"use client";

import React from "react";
import { Typography, Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { Magnetic } from "@/components/reactbits/Magnetic";
import { Reveal } from "@/components/reactbits/Reveal";

const MTTypography = Typography as unknown as React.ComponentType<Record<string, unknown>>;
const MTCard = Card as unknown as React.ComponentType<Record<string, unknown>>;
const MTCardBody = CardBody as unknown as React.ComponentType<Record<string, unknown>>;
const MTCardHeader = CardHeader as unknown as React.ComponentType<Record<string, unknown>>;
const MTButton = Button as unknown as React.ComponentType<Record<string, unknown>>;

const services = [
  {
    title: "Wedding Photography",
    desc: "Your wedding is a once-in-a-lifetime event. We capture the joy, tears, and laughter with a cinematic approach, ensuring every moment is preserved beautifully.",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Pre-Wedding Shoots",
    desc: "Celebrate your love story before the big day. Whether it's a beachside romance or a royal heritage shoot, we create magic.",
    img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Maternity & Baby",
    desc: "The journey of parenthood is special. We capture the glow of maternity and the innocence of your newborn in timeless portraits.",
    img: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Corporate Events",
    desc: "Professional coverage for conferences, product launches, and gala dinners. Enhance your brand image with high-quality imagery.",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Fashion & Portfolio",
    desc: "For models, actors, and influencers. We help you build a stunning portfolio that stands out in the industry.",
    img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Product Photography",
    desc: "Showcase your products in the best light. Crisp, clean, and creative product shots for e-commerce and advertising.",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-primary-900 text-white py-20 text-center px-4">
        <Reveal>
          <MTTypography variant="h1" className="mb-4 font-serif">Our Services</MTTypography>
        </Reveal>
        <Reveal delay={0.08}>
          <MTTypography variant="lead" className="opacity-90 max-w-2xl mx-auto">
            Comprehensive photography solutions tailored to your needs.
          </MTTypography>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-[-50px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Reveal key={idx} delay={idx * 0.06} y={16}>
              <Magnetic className="h-full">
                <MTCard className="h-full hover:shadow-xl transition-shadow duration-300">
                  <MTCardHeader floated={false} className="h-64 relative m-0 rounded-b-none">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </MTCardHeader>
                  <MTCardBody className="text-center p-8">
                    <MTTypography variant="h4" color="blue-gray" className="mb-4 font-serif text-gray-900">
                      {service.title}
                    </MTTypography>
                    <MTTypography className="font-normal text-gray-600 mb-6">
                      {service.desc}
                    </MTTypography>
                    <Magnetic className="w-full">
                      <Link href="/contact">
                        <MTButton
                          variant="outlined"
                          color="blue"
                          fullWidth
                          className="border-primary-500 text-primary-600 px-8 py-3 rounded-full hover:bg-primary-50"
                        >
                          Book Now
                        </MTButton>
                      </Link>
                    </Magnetic>
                  </MTCardBody>
                </MTCard>
              </Magnetic>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
