import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 border-t border-gray-200 dark:border-white/10 mt-12 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl tracking-tighter">
            Supun<span className="text-accent">.</span>
          </Link>
          <span className="text-gray-400 dark:text-gray-600 hidden md:inline">|</span>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} Supun Menaka.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/supunmenaka2004" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-accent transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/supun-menaka-aa725b319/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-accent transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="https://medium.com/@supunmenaka693" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-accent transition-colors">
            <FaMedium size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
