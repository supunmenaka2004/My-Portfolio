import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 border-t border-gray-200 dark:border-white/10 mt-12 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl tracking-tighter">
            Portfolio<span className="text-purple-500">.</span>
          </Link>
          <span className="text-gray-400 dark:text-gray-600 hidden md:inline">|</span>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-purple-500 transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-purple-500 transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-purple-500 transition-colors">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
