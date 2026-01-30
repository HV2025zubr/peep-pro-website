import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { BrandName } from './BrandName';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-red-600 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-10 h-10">
                <path 
                  d="M20 2 L35 10 L35 22 Q35 32 20 38 Q5 32 5 22 L5 10 Z" 
                  fill="#dc2626" 
                  stroke="white" 
                  strokeWidth="2"
                />
                <text 
                  x="20" 
                  y="26" 
                  textAnchor="middle"
                  fontSize="14" 
                  fontWeight="bold"
                  fontFamily="Inter, sans-serif"
                >
                  <tspan fill="black">P</tspan><tspan fill="#60a5fa">P</tspan>
                </text>
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <BrandName className="text-xl !text-white" />
              <span className="text-xs text-red-100 font-medium">Tech Solutions for Building Managers and Fire Services</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-white hover:text-red-100 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-red-100 transition-colors">
              About
            </Link>
            <Link to="/regulations" className="text-white hover:text-red-100 transition-colors">
              The Regulations
            </Link>
            <Link to="/for-building-managers" className="text-white hover:text-red-100 transition-colors">
              For Building Managers
            </Link>
            <Link to="/for-fire-services" className="text-white hover:text-red-100 transition-colors">
              For Fire Services
            </Link>
            <Link to="/contact" className="text-white hover:text-red-100 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-red-700 text-white"
          >
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              to="/"
              className="block text-white hover:text-red-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-white hover:text-red-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/regulations"
              className="block text-white hover:text-red-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              The Regulations
            </Link>
            <Link
              to="/for-building-managers"
              className="block text-white hover:text-red-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              For Building Managers
            </Link>
            <Link
              to="/for-fire-services"
              className="block text-white hover:text-red-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              For Fire Services
            </Link>
            <Link
              to="/contact"
              className="block text-white hover:text-red-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}