import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center p-4 shadow-lg backdrop-blur-md
                      bg-light-primary/90 dark:bg-dark-primary/90 
                      text-light-primary dark:text-dark-primary 
                      sticky top-0 z-50 border-b border-gray-200/20 dark:border-dark-700/30
                      transition-all duration-300">
        
        {/* Logo - Your Picture */}
        <Link href="/">
          <div className="flex items-center space-x-3 cursor-pointer group">
            {/* Profile Image */}
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden
                           ring-2 ring-transparent group-hover:ring-accent-light dark:group-hover:ring-accent-dark
                           transition-all duration-300 group-hover:scale-105">
              <Image
                src="/images/waliu-profile.jpg" // Update this path to your image
                alt="Waliu - Creative Developer"
                width={48}
                height={48}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            
            {/* Optional: Name beside image (you can remove this if you want image only) */}
            <div className="hidden sm:block">
              <h1 className="font-neue-machina font-light text-lg 
                           text-light-primary dark:text-dark-primary
                           group-hover:text-accent-light dark:group-hover:text-accent-dark
                           transition-colors duration-200">
                Waliu
              </h1>
              <p className="text-xs text-light-secondary dark:text-dark-secondary
                          font-neue-machina font-normal">
                Full Stack Developer
              </p>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <span className={`font-neue-machina font-normal text-sm uppercase tracking-wide
                               transition-all duration-200 cursor-pointer relative
                               hover:text-accent-light dark:hover:text-accent-dark
                               ${router.pathname === item.href
                                 ? 'text-accent-light dark:text-accent-dark font-normal'
                                 : 'text-light-secondary dark:text-dark-secondary'
                               }`}>
                {item.name}
                {/* Active indicator */}
                {router.pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 
                                   bg-accent-light dark:bg-accent-dark rounded-full" />
                )}
              </span>
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-3">
          <ThemeToggle />
          <button 
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 
                      transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <svg 
              className={`w-5 h-5 transition-transform duration-200 ${mobileMenuOpen ? 'rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[81px] left-0 right-0 z-40 
                        bg-light-primary/95 dark:bg-dark-primary/95 backdrop-blur-md
                        border-b border-gray-200/20 dark:border-dark-700/30
                        shadow-lg transition-all duration-300">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <div 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-neue-machina font-normal
                             transition-all duration-200 cursor-pointer
                             hover:bg-gray-100 dark:hover:bg-dark-700
                             ${router.pathname === item.href
                               ? 'text-accent-light dark:text-accent-dark bg-gray-50 dark:bg-dark-800'
                               : 'text-light-secondary dark:text-dark-secondary'
                             }`}>
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}