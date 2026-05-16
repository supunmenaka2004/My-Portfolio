"use client";

import { Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook, FaMedium } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-full w-full py-16 md:py-32 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between w-full gap-12">

        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 w-full md:w-1/2 order-2 md:order-1"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.1] mb-2">
            Hello I&apos;m <br />
            <span className="text-accent">Supun Menaka</span>
          </h1>
          <span className="text-xl md:text-2xl text-white/90 font-mono font-bold tracking-wide leading-relaxed">
            Cloud Computing Undergraduate | Cloud | AWS | DevOps | Networking
          </span>
          <p className="text-white/70 max-w-[500px] leading-loose font-mono text-sm md:text-base mt-4 mb-6">
            I am interested in cloud computing and DevOps technologies like CI/CD, containers, and automation. Basic experience with Linux, AWS, and Docker, and enjoy learning and building new things.
          </p>

          {/* Buttons and Socials */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 border border-accent text-accent px-6 py-3 rounded-full hover:bg-accent hover:text-black transition-all font-medium uppercase text-sm tracking-widest"
            >
              DOWNLOAD CV <Download size={16} />
            </a>

            <div className="flex items-center gap-4">
              <a href="https://github.com/supunmenaka2004" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-black transition-all">
                <FaGithub size={16} />
              </a>
              <a href="https://www.linkedin.com/in/supun-menaka-aa725b319/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-black transition-all">
                <FaLinkedin size={16} />
              </a>
              <a href="https://www.facebook.com/supun.menaka.7505" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-black transition-all">
                <FaFacebook size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-black transition-all">
                <FaMedium size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center md:justify-end relative order-1 md:order-2 mb-8 md:mb-0"
        >
          <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] relative">
            {/* The spinning SVG dashed circle */}
            <svg
              className="absolute inset-0 w-full h-full text-accent animate-[spin_20s_linear_infinite]"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="49" fill="transparent" stroke="currentColor" strokeWidth="0.5" strokeDasharray="15 10 5 10" strokeLinecap="round" />
            </svg>

            {/* The Image inside */}
            <div className="absolute inset-4 md:inset-5 rounded-full overflow-hidden bg-zinc-900 flex items-center justify-center border-b-[2px] border-transparent">
              <Image
                src="/photo.jpg"
                alt="Supun Menaka"
                fill
                priority
                className="object-cover scale-[1.1] -translate-y-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
