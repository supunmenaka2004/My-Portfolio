"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 text-white flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Mobile Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black text-accent mb-8 tracking-wide text-center md:hidden"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

        {/* Picture Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex justify-center md:justify-start order-1 md:order-1 relative"
        >
          <div className="relative w-[300px] h-[350px] md:w-[450px] md:h-[500px] rounded-[30px] border-[3px] border-accent p-2 shadow-[0_0_20px_rgba(28,177,0,0.3)]">
            <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-zinc-900">
              <Image
                src="/about-photo-2.jpg"
                alt="Supun Menaka"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </motion.div>

        {/* Details Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2 flex flex-col gap-6 order-2 md:order-2"
        >
          <h2 className="hidden md:block text-5xl md:text-6xl font-black text-accent mb-2 tracking-wide">
            About Me
          </h2>
          <div className="text-gray-300 leading-loose font-mono text-sm md:text-[15px] flex flex-col gap-6">
            <p>
              I’m <span className="font-bold text-white">Supun Menaka</span>, an undergraduate student pursuing a BSc (Hons) in Cloud Computing Engineering at <span className="font-bold text-white">Sri Lanka Technology Campus</span>. I am passionate about cloud computing, DevOps, and infrastructure engineering, with hands-on experience in Linux, AWS, Docker, Kubernetes, monitoring tools, and modern cloud technologies.
            </p>
            <p>
              My interests include cloud-native technologies, CI/CD automation, containerization, monitoring &amp; logging, and infrastructure management. I enjoy building scalable, reliable, and automated solutions while continuously improving my technical skills through practical projects and self-learning. I aspire to contribute to impactful projects in DevOps and Cloud Computing.
            </p>
          </div>

          {/* Education Section */}
          <div className="mt-4 pt-6 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-accent"></span>
              Education
            </h3>

            <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:border-accent/30 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent group-hover:w-2 transition-all duration-300"></div>

              <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-2 gap-2">
                <h4 className="text-lg md:text-xl font-bold text-white">BSc (Hons) in Cloud Computing </h4>
                <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-mono rounded-full w-fit">
                  Present
                </span>
              </div>

              <p className="text-accent text-sm font-mono">SLTC Research University</p>
            </div>
          </div>

        </motion.div>

        </div>
      </div>
    </section>
  );
}
