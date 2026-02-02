"use client";

import React from "react";
import { Typography, Card, CardHeader, CardBody, Button } from "@material-tailwind/react";
import Image from "next/image";
import { Magnetic } from "@/components/reactbits/Magnetic";
import { Reveal } from "@/components/reactbits/Reveal";
import { blogposts } from "@/lib/blogdata";

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
        {blogposts.map((post, idx) => (
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
