"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState("/");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // If not on the home page, just use the pathname
    if (pathname !== "/") {
      setActivePath(pathname);
      return;
    }

    // Scrollspy logic for the single-page sections
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "/";

      sections.forEach((section) => {
        // Adjust the offset to trigger when section is near the top of viewport
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 300) {
          const id = section.getAttribute("id");
          if (id) {
            current = `/#${id}`;
          } else {
            current = "/"; // Hero section has no id
          }
        }
      });

      setActivePath(current);
    };

    window.addEventListener("scroll", handleScroll);
    // Call once to set initial state based on scroll position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const links = [
    { name: "Home", path: "/" },
    { name: "About me", path: "/#about" },
    { name: "Project", path: "/#projects" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/#contact" },
  ];

  return (
    <header className="py-8 text-white w-full z-50 sticky top-0 bg-[#1c1c22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-baseline" onClick={() => setActivePath("/")}>
          <h1 className="text-4xl font-black tracking-wide">
            <span className="text-accent text-5xl">S</span>upun.
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8">
            {links.map((link) => (
              <Link
                href={link.path}
                key={link.name}
                onClick={() => setActivePath(link.path)}
                className={`${
                  link.path === activePath ? "text-accent" : ""
                } text-sm font-medium hover:text-accent transition-all relative py-1`}
              >
                {link.name}
                {link.path === activePath && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 bottom-0 w-full h-[2px] bg-accent"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-accent hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#1c1c22]/95 backdrop-blur-sm border-t border-white/10 overflow-hidden shadow-2xl"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {links.map((link) => (
                <Link
                  href={link.path}
                  key={link.name}
                  onClick={() => {
                    setActivePath(link.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`${
                    link.path === activePath ? "text-accent border-l-2 border-accent pl-2" : "text-white pl-2 border-l-2 border-transparent"
                  } text-base font-medium hover:text-accent transition-all py-2`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
