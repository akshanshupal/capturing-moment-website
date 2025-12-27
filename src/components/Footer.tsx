"use client";

import { Typography } from "@material-tailwind/react";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MTTypography = Typography as any;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-blue-gray-900 text-white">
      <div className="mx-auto w-full max-w-7xl px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <MTTypography variant="h5" className="font-serif font-bold">
              Capturing Moment
            </MTTypography>
            <MTTypography variant="paragraph" className="font-normal text-gray-400">
              We capture your precious moments with unparalleled artistry and creativity. Based in Delhi, serving clients worldwide.
            </MTTypography>
          </div>
          <div className="flex flex-col gap-4">
            <MTTypography variant="h6" className="uppercase opacity-80">
              Services
            </MTTypography>
            <ul className="flex flex-col gap-2 text-gray-400">
              <li><Link href="/services" className="hover:text-primary-400 transition-colors">Wedding Photography</Link></li>
              <li><Link href="/services" className="hover:text-primary-400 transition-colors">Pre-Wedding Shoots</Link></li>
              <li><Link href="/services" className="hover:text-primary-400 transition-colors">Maternity & Baby</Link></li>
              <li><Link href="/services" className="hover:text-primary-400 transition-colors">Corporate Events</Link></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <MTTypography variant="h6" className="uppercase opacity-80">
              Quick Links
            </MTTypography>
            <ul className="flex flex-col gap-2 text-gray-400">
              <li><Link href="/gallery" className="hover:text-primary-400 transition-colors">Gallery</Link></li>
              <li><Link href="/packages" className="hover:text-primary-400 transition-colors">Packages</Link></li>
              <li><Link href="/blog" className="hover:text-primary-400 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <MTTypography variant="h6" className="uppercase opacity-80">
              Contact
            </MTTypography>
            <div className="flex flex-col gap-2 text-gray-400">
              <p>New Delhi, India</p>
              <p>+91 98765 43210</p>
              <p>info@capturingmoment.com</p>
              <div className="flex gap-4 mt-2">
                <i className="fab fa-instagram text-xl hover:text-pink-500 cursor-pointer"></i>
                <i className="fab fa-facebook text-xl hover:text-primary-600 cursor-pointer"></i>
                <i className="fab fa-twitter text-xl hover:text-primary-400 cursor-pointer"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 w-full border-t border-gray-800 py-4 text-center md:flex md:justify-between">
          <MTTypography
            variant="small"
            className="font-normal text-gray-400"
          >
            &copy; {currentYear} Capturing Moment. All Rights Reserved.
          </MTTypography>
          <div className="flex gap-4 text-gray-400 sm:justify-center">
            <MTTypography as="a" href="#" className="transition-colors hover:text-primary-400">Privacy Policy</MTTypography>
            <MTTypography as="a" href="#" className="transition-colors hover:text-primary-400">Terms of Service</MTTypography>
          </div>
        </div>
      </div>
    </footer>
  );
}
