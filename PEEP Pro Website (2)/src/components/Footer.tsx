import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import { BrandName } from './BrandName';

export function Footer() {
  return (
    <footer className="bg-red-600 text-white border-t border-red-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
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
              <div className="flex flex-col leading-none">
                <span className="text-xl tracking-tight"><BrandName className="!text-white" /></span>
                <span className="text-xs text-red-100 font-medium">Tech Solutions for Building Managers and Fire Services</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="md:justify-self-end">
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-red-100">
              <li className="flex items-center gap-2">
                <Mail className="size-4" />
                <span>info@peeppro.co.uk</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4" />
                <span>0800 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4" />
                <span>England, UK</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}