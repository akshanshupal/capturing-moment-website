"use client";

import React from "react";
import { Typography, Input, Textarea, Button, Card, CardBody } from "@material-tailwind/react";
import { Magnetic } from "@/components/reactbits/Magnetic";
import { Reveal } from "@/components/reactbits/Reveal";

const MTTypography = Typography as unknown as React.ComponentType<Record<string, unknown>>;
const MTInput = Input as unknown as React.ComponentType<Record<string, unknown>>;
const MTTextarea = Textarea as unknown as React.ComponentType<Record<string, unknown>>;
const MTCard = Card as unknown as React.ComponentType<Record<string, unknown>>;
const MTCardBody = CardBody as unknown as React.ComponentType<Record<string, unknown>>;
const MTButton = Button as unknown as React.ComponentType<Record<string, unknown>>;

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <MTTypography variant="h5" color="blue" className="mb-2 font-bold uppercase tracking-widest text-primary-600">
              Get in Touch
            </MTTypography>
          </Reveal>
          <Reveal delay={0.08}>
            <MTTypography variant="h2" color="blue-gray" className="mb-6 font-serif text-gray-900">
              {"Let's Start a Conversation"}
            </MTTypography>
          </Reveal>
          <Reveal delay={0.14}>
            <MTTypography className="mb-8 text-gray-600 font-normal">
              {"Have a question or want to book a session? We'd love to hear from you. Fill out the form or reach us directly."}
            </MTTypography>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.06} y={10}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 rounded-full text-primary-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <MTTypography variant="h6" color="blue-gray" className="text-gray-900">Visit Us</MTTypography>
                  <MTTypography color="gray" className="font-normal text-gray-600">
                    123 Photography Lane, Hauz Khas Village,<br />New Delhi, India 110016
                  </MTTypography>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12} y={10}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 rounded-full text-primary-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <MTTypography variant="h6" color="blue-gray" className="text-gray-900">Call Us</MTTypography>
                  <MTTypography color="gray" className="font-normal text-gray-600">
                    +91 98765 43210
                  </MTTypography>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.18} y={10}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 rounded-full text-primary-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <MTTypography variant="h6" color="blue-gray" className="text-gray-900">Email Us</MTTypography>
                  <MTTypography color="gray" className="font-normal text-gray-600">
                    info@capturingmoment.com
                  </MTTypography>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Form */}
        <div>
          <Reveal delay={0.08} y={18}>
            <MTCard className="shadow-2xl">
              <MTCardBody className="p-8">
                <form className="flex flex-col gap-6">
                  <MTInput label="Your Name" size="lg" />
                  <MTInput label="Email Address" size="lg" />
                  <MTInput label="Phone Number" size="lg" />
                  <div className="w-full">
                    <label className="mb-2 block text-sm font-medium text-gray-900">Service Type</label>
                    <select className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-200">
                      <option value="">Select Service</option>
                      <option value="wedding">Wedding Photography</option>
                      <option value="pre-wedding">Pre-Wedding Shoot</option>
                      <option value="maternity">Maternity/Baby</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <MTTextarea label="Message" size="lg" rows={4} />
                  <Magnetic className="w-full">
                    <MTButton
                      color="blue"
                      size="lg"
                      fullWidth
                      className="px-8 py-3 rounded-full bg-primary-500 text-white hover:bg-primary-600"
                    >
                      Send Enquiry
                    </MTButton>
                  </Magnetic>
                </form>
              </MTCardBody>
            </MTCard>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
