"use client";

import React from "react";
import {
  Typography,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import { Magnetic } from "@/components/reactbits/Magnetic";
import { Reveal, RevealText } from "@/components/reactbits/Reveal";
import { CountUp } from "@/components/reactbits/CountUp";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { heroSlides, homeGallery, homeServices, homeStats } from "@/lib/homedata";

const MTCard = Card as unknown as React.ComponentType<Record<string, unknown>>;
const MTCardHeader = CardHeader as unknown as React.ComponentType<Record<string, unknown>>;
const MTCardBody = CardBody as unknown as React.ComponentType<Record<string, unknown>>;
const MTCardFooter = CardFooter as unknown as React.ComponentType<Record<string, unknown>>;
const MTTypography = Typography as unknown as React.ComponentType<Record<string, unknown>>;
const MTButton = Button as unknown as React.ComponentType<Record<string, unknown>>;



export default function Home() {
  const reduceMotion = useReducedMotion();
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (reduceMotion) return;
    if (paused) return;
    const intervalId = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => window.clearInterval(intervalId);
  }, [paused, reduceMotion]);

  const slide = heroSlides[activeSlide];

  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-black overflow-hidden"
        onPointerEnter={() => setPaused(true)}
        onPointerLeave={() => setPaused(false)}
      >
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.05 }}
                animate={{ scale: reduceMotion ? 1.05 : 1.12 }}
                transition={{ duration: 8, ease: "easeOut" }}
              >
                <Image
                  src={slide.image}
                  alt={slide.badge}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover opacity-70"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12),rgba(0,0,0,0)_55%)]" />

          {!reduceMotion && (
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary-500/30 blur-3xl"
                animate={{ x: [0, 40, 0], y: [0, 30, 0], opacity: [0.22, 0.38, 0.22] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-24 -right-28 h-96 w-96 rounded-full bg-primary-300/25 blur-3xl"
                animate={{ x: [0, -50, 0], y: [0, -30, 0], opacity: [0.14, 0.32, 0.14] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[28rem] w-[28rem] rounded-full bg-white/10 blur-3xl"
                animate={{ scale: [1, 1.08, 1], opacity: [0.06, 0.14, 0.06] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          )}
        </div>
        
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              className="w-full flex flex-col items-center"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white/90 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-primary-400" />
                <span className="text-xs md:text-sm font-medium tracking-wide">
                  {slide.badge}
                </span>
              </div>

              <MTTypography
                variant="h1"
                color="white"
                className="mb-4 font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <RevealText
                  text={slide.titleLine1}
                  className="block"
                  stagger={0.08}
                  enableHover
                  wordClassName="cursor-pointer"
                />
                <RevealText
                  text={slide.titleLine2}
                  delay={0.1}
                  stagger={0.08}
                  enableHover
                  className="block"
                  wordClassName="cursor-pointer rb-shimmer-text text-transparent bg-clip-text bg-gradient-to-r from-primary-200 via-white to-primary-400"
                />
              </MTTypography>

              <MTTypography
                variant="lead"
                color="white"
                className="mb-8 opacity-90 text-lg md:text-xl max-w-2xl font-light"
              >
                <RevealText
                  text={slide.subtitle}
                  delay={0.16}
                  y={10}
                  stagger={0.012}
                  className="block"
                />
              </MTTypography>
            </motion.div>
          </AnimatePresence>

          <Reveal delay={0.22} y={10}>
            <div className="flex flex-col sm:flex-row gap-4">
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
              <Magnetic className="inline-block">
                <Link href="/gallery">
                  <MTButton
                    size="lg"
                    variant="outlined"
                    color="white"
                    className="rounded-full px-8 py-3 border-white text-white"
                  >
                    View Gallery
                  </MTButton>
                </Link>
              </Magnetic>
            </div>
          </Reveal>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() =>
                setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
              }
              className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/15"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              {heroSlides.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === activeSlide ? "w-8 bg-white/90" : "w-2.5 bg-white/35 hover:bg-white/55"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next slide"
              onClick={() => setActiveSlide((prev) => (prev + 1) % heroSlides.length)}
              className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/15"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white w-full border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {homeStats.map((stat, idx) => (
            <Reveal key={idx} delay={idx * 0.06} y={10}>
              <div>
                <MTTypography variant="h2" color="blue" className="font-bold text-primary-600 flex justify-center items-center gap-1">
                  <CountUp to={stat.value} />
                  {stat.suffix}
                </MTTypography>
                <MTTypography variant="paragraph" color="blue-gray" className="font-medium text-gray-600">
                  {stat.label}
                </MTTypography>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Reveal>
              <MTTypography variant="h5" color="blue" className="mb-2 font-bold uppercase tracking-widest text-primary-600">
                What We Do
              </MTTypography>
            </Reveal>
            <Reveal delay={0.08}>
              <MTTypography variant="h2" color="blue-gray" className="mb-4 font-serif text-gray-900">
                Our Premium Services
              </MTTypography>
            </Reveal>
            <Reveal delay={0.12} y={8}>
              <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full" />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeServices.map((service, index) => (
              <Reveal key={index} delay={index * 0.08} y={16}>
                <Magnetic className="h-full">
                  <MTCard className="h-full overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <MTCardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none h-64 relative">
                      <Image
                        src={service.img}
                        alt={service.title}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </MTCardHeader>
                    <MTCardBody>
                      <MTTypography variant="h4" color="blue-gray" className="mb-2 font-serif text-gray-900">
                        {service.title}
                      </MTTypography>
                      <MTTypography color="gray" className="font-normal text-gray-600">
                        {service.desc}
                      </MTTypography>
                    </MTCardBody>
                    <MTCardFooter className="pt-0">
                      <Link href="/services">
                        <MTButton
                          variant="text"
                          className="flex items-center gap-2 text-primary-600 px-4 py-2 rounded-full hover:bg-primary-50"
                        >
                          Learn More
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                          </svg>
                        </MTButton>
                      </Link>
                    </MTCardFooter>
                  </MTCard>
                </Magnetic>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Reveal y={10}>
              <Magnetic className="inline-block">
                <Link href="/services">
                  <MTButton
                    variant="outlined"
                    size="lg"
                    color="blue"
                    className="border-primary-500 text-primary-600 px-8 py-3 rounded-full hover:bg-primary-50"
                  >
                    View All Services
                  </MTButton>
                </Link>
              </Magnetic>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery Preview (Masonry Style) */}
      <section className="py-24 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <Reveal>
                <MTTypography variant="h5" color="blue" className="mb-2 font-bold uppercase tracking-widest text-primary-600">
                  Portfolio
                </MTTypography>
              </Reveal>
              <Reveal delay={0.08}>
                <MTTypography variant="h2" color="blue-gray" className="font-serif text-gray-900">
                  Recent Masterpieces
                </MTTypography>
              </Reveal>
            </div>
            <Link href="/gallery" className="hidden md:block">
              <MTButton
                variant="text"
                className="flex items-center gap-2 text-primary-600 px-4 py-2 rounded-full hover:bg-primary-50"
              >
                View Full Gallery
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </MTButton>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {homeGallery.map((item, idx) => (
              <Reveal
                key={idx}
                delay={idx * 0.07}
                y={14}
                className={`relative overflow-hidden rounded-lg group ${item.span}`}
              >
                <Image
                  src={item.src}
                  alt="Gallery Image"
                  fill
                  sizes="(min-width: 768px) 25vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <MTTypography color="white" className="font-medium">
                    View Project
                  </MTTypography>
                </div>
              </Reveal>
            ))}
          </div>
          
          <div className="text-center mt-8 md:hidden">
            <Link href="/gallery">
              <MTButton
                variant="outlined"
                color="blue"
                className="text-primary-600 border-primary-500 px-8 py-3 rounded-full hover:bg-primary-50"
              >
                View Full Gallery
              </MTButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 w-full relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Reveal>
            <MTTypography variant="h5" color="blue" className="mb-2 font-bold uppercase tracking-widest text-primary-600">
              Testimonials
            </MTTypography>
          </Reveal>
          <Reveal delay={0.08}>
            <MTTypography variant="h2" color="blue-gray" className="mb-12 font-serif text-gray-900">
              Love Letters from Our Clients
            </MTTypography>
          </Reveal>
          
          <Reveal delay={0.14} y={18}>
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
            <svg className="w-12 h-12 text-primary-200 mb-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21L14.017 18C14.017 16.0548 15.6513 15.1158 17.5193 15.1158C18.6654 15.1158 19.555 14.5026 19.555 13.5678C19.555 12.6843 18.6654 12.0702 17.5193 12.0702C15.4244 12.0702 14.017 9.87326 14.017 7.74768C14.017 5.76014 15.7062 4 18.2327 4C20.6923 4 22.8465 6.0357 22.8465 8.71182C22.8465 14.4158 18.5255 21 14.017 21ZM4.01724 21L4.01724 18C4.01724 16.0548 5.65151 15.1158 7.51953 15.1158C8.66555 15.1158 9.55513 14.5026 9.55513 13.5678C9.55513 12.6843 8.66555 12.0702 7.51953 12.0702C5.42465 12.0702 4.01724 9.87326 4.01724 7.74768C4.01724 5.76014 5.70644 4 8.23292 4C10.6925 4 12.8467 6.0357 12.8467 8.71182C12.8467 14.4158 8.5257 21 4.01724 21Z" />
            </svg>
            <MTTypography variant="h4" color="blue-gray" className="mb-6 font-medium leading-relaxed italic text-gray-800">
              {'"Capturing Moment made our wedding day unforgettable. The team was so professional and the photos are absolutely stunning. They captured emotions we didn\'t even know we were expressing!"'}
            </MTTypography>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-300 relative overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Client" fill className="object-cover" />
              </div>
              <div className="text-left">
                <MTTypography variant="h6" color="blue-gray" className="text-gray-900">Priya & Rahul</MTTypography>
                <MTTypography variant="small" color="gray">Married in Udaipur</MTTypography>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 w-full text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Reveal>
            <MTTypography variant="h2" className="mb-6 font-serif">
              Ready to Create Magic?
            </MTTypography>
          </Reveal>
          <Reveal delay={0.08}>
            <MTTypography variant="lead" className="mb-8 opacity-90">
              Dates fill up fast. Contact us today to check availability for your special day.
            </MTTypography>
          </Reveal>
          <Reveal delay={0.14} y={10}>
            <Magnetic className="inline-block">
              <Link href="/contact">
                <MTButton size="lg" color="white" className="text-primary-600 px-8 py-3 rounded-full bg-white">
                  Get a Quote
                </MTButton>
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
