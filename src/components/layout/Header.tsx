'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { HiMenu, HiX } from 'react-icons/hi';
import LanguageToggle from './LanguageToggle';

export default function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', href: '/' },
    { key: 'about', href: '/about' },
    { key: 'programs', href: '/programs' },
    { key: 'enrollment', href: '/enrollment' },
    { key: 'resources', href: '/resources' },
    { key: 'events', href: '/events' },
    { key: 'contact', href: '/contact' },
    { key: 'volunteer', href: '/volunteer' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">PTS</span>
            </div>
            <span className="text-xl font-bold text-gray-800 hidden sm:block">
              Peninsula Tamil School
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3 border-t pt-4">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
            <div className="pt-3">
              <LanguageToggle />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}