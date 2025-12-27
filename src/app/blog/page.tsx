"use client";

import React from "react";
import { Typography, Card, CardHeader, CardBody, Button } from "@material-tailwind/react";
import Image from "next/image";
import { Magnetic } from "@/components/reactbits/Magnetic";
import { Reveal } from "@/components/reactbits/Reveal";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MTTypography = Typography as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MTCard = Card as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MTCardHeader = CardHeader as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MTCardBody = CardBody as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MTButton = Button as any;

const posts = [
  {
    title: "10 Tips for the Perfect Pre-Wedding Shoot",
    excerpt: "Planning your pre-wedding shoot? Here are the top locations and outfit ideas to make it magical.",
    date: "Dec 20, 2024",
    img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Why Candid Photography is Essential for Weddings",
    excerpt: "Gone are the days of stiff poses. Learn why candid moments capture the true essence of your big day.",
    date: "Dec 15, 2024",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Top Wedding Venues in Delhi NCR",
    excerpt: "A curated list of the most luxurious and picturesque wedding venues in Delhi for 2025.",
    date: "Dec 10, 2024",
    img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white py-28">
      <div className="text-center max-w-4xl mx-auto px-4 mb-16">
        <Reveal>
          <MTTypography variant="h1" color="blue-gray" className="mb-4 font-serif text-gray-900">
            Photography Blog
          </MTTypography>
        </Reveal>
        <Reveal delay={0.08}>
          <MTTypography variant="lead" className="text-gray-500">
            Tips, trends, and stories from the world of photography.
          </MTTypography>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <Reveal key={idx} delay={idx * 0.08} y={16}>
            <Magnetic className="h-full">
              <MTCard className="h-full hover:shadow-xl transition-shadow duration-300">
                <MTCardHeader floated={false} className="h-56 relative m-0 rounded-b-none">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </MTCardHeader>
                <MTCardBody className="p-6">
                  <MTTypography variant="small" color="blue" className="mb-2 font-bold uppercase text-primary-600">
                    {post.date}
                  </MTTypography>
                  <MTTypography variant="h5" color="blue-gray" className="mb-2 font-serif text-gray-900">
                    {post.title}
                  </MTTypography>
                  <MTTypography className="font-normal text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </MTTypography>
                  <Magnetic className="inline-block">
                    <MTButton variant="text" className="flex items-center gap-2 px-4 py-2 text-primary-600 rounded-full hover:bg-primary-50">
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </MTButton>
                  </Magnetic>
                </MTCardBody>
              </MTCard>
            </Magnetic>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
