"use client";

import React, { useState, useEffect } from "react";
import {
  Navbar as MTNavbarOrigin,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MTTypography = Typography as unknown as React.ComponentType<Record<string, unknown>>;
const MTButton = Button as unknown as React.ComponentType<Record<string, unknown>>;
const MTNavbar = MTNavbarOrigin as unknown as React.ComponentType<Record<string, unknown>>;
const MTIconButton = IconButton as unknown as React.ComponentType<Record<string, unknown>>;

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Packages", path: "/packages" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

function NavList({
  isMobile = false,
  isDark,
  pathname,
}: {
  isMobile?: boolean;
  isDark: boolean;
  pathname: string;
}) {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {NAV_ITEMS.map((item) => (
        <li key={item.name}>
          <Link href={item.path} className="flex items-center">
            <MTTypography
              as="span"
              variant="small"
              className={`p-1 font-medium transition-colors ${
                isMobile || isDark
                  ? "text-gray-900 hover:text-primary-600"
                  : "text-white hover:text-white/80"
              } ${pathname === item.path ? "font-bold text-primary-600" : ""}`}
            >
              {item.name}
            </MTTypography>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine if we should show the dark/scrolled version
  const isDark = scrolled || pathname !== "/";

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isDark ? "py-2" : "py-4"}`}>
      <MTNavbar 
        className={`mx-auto max-w-screen-2xl transition-all duration-300 border-none ${
          isDark 
            ? "bg-white/90 backdrop-blur-lg shadow-lg rounded-xl px-4 py-2 lg:px-8 lg:py-3" 
            : "bg-transparent shadow-none backdrop-blur-none rounded-none px-4 py-2 lg:px-8 lg:py-4"
        }`}
        fullWidth={!isDark}
      >
        <div className="flex items-center justify-between text-gray-900">
        <Link href="/">
          <MTTypography
            as="span"
            className={`mr-4 cursor-pointer py-1.5 font-bold text-2xl font-serif tracking-tight ${
              isDark ? "text-primary-600" : "text-white"
            }`}
          >
            Capturing Moment
          </MTTypography>
        </Link>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">
            <NavList isDark={isDark} pathname={pathname} />
          </div>
          <div className="flex items-center gap-x-1">
            <Link href="/contact">
              <MTButton
                variant={isDark ? "gradient" : "text"}
                size="sm"
                className={`hidden lg:inline-block ${
                  !isDark
                    ? "text-white hover:bg-white/20 border border-white"
                    : "bg-primary-500 text-white hover:bg-primary-600"
                } px-6 py-2 rounded-full`}
                color={isDark ? "blue" : "white"}
              >
                <span>Book Now</span>
              </MTButton>
            </Link>
          </div>
          <MTIconButton
            variant="text"
            className={`ml-auto h-6 w-6 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden ${
              isDark ? "text-gray-900" : "text-white"
            }`}
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </MTIconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          <div className="bg-white p-4 rounded-lg mt-2 text-gray-900 shadow-xl">
              <NavList isMobile={true} isDark={isDark} pathname={pathname} />
              <div className="flex items-center gap-x-1 mt-4">
              <Link href="/contact" className="w-full">
                  <MTButton
                    fullWidth
                    variant="gradient"
                    size="sm"
                    color="blue"
                    className="px-6 py-2 rounded-full bg-primary-500 text-white hover:bg-primary-600"
                  >
                  <span>Book Now</span>
                  </MTButton>
              </Link>
              </div>
          </div>
        </Collapse>
      </MTNavbar>
    </div>
  );
}
