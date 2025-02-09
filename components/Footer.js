import Link from "next/link";
import { FaYoutube, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">TechBuddySpace</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Made for learners, by learners. Empowering the next generation of tech professionals through
              community-driven learning in Tanglish.
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#methodology" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  Methodology
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4 text-gray-900 dark:text-white">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4 text-gray-900 dark:text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="https://www.youtube.com/@TECHBUDDYSPACE" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                <FaYoutube />
              </Link>
              <Link href="https://www.instagram.com/techbuddyspace" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                <FaInstagram />
              </Link>
              <Link href="https://www.linkedin.com/in/techbuddyspace" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                <FaLinkedin />
              </Link>
              <Link href="https://github.com/TechBuddySpace" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">&copy; 2025 TechBuddySpace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
