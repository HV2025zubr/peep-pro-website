import { useState, useEffect } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function CountdownTimer({ compact = false }: { compact?: boolean }) {
  const targetDate = new Date('2026-04-06T00:00:00');
  
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  if (compact) {
    return (
      <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 text-gray-900 max-w-xs border border-gray-100">
        <div className="mb-2">
          <div className="text-sm font-bold text-red-600 uppercase tracking-wider mb-1">Urgent Deadline</div>
          <div className="text-sm font-semibold italic leading-tight">The Fire Safety (Residential Evacuation Plans) (England) Regulations 2025</div>
        </div>
        <div className="text-xs text-gray-600 mb-3 font-medium">Effective: 6 April 2026</div>
        <div className="flex gap-2">
          <div className="bg-gray-50 border border-gray-200 rounded px-3 py-2 text-center min-w-[48px]">
            <div className="text-xl font-bold text-red-600">{String(timeLeft.days).padStart(2, '0')}</div>
            <div className="text-[10px] text-gray-500 font-bold uppercase">Days</div>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded px-3 py-2 text-center min-w-[48px]">
            <div className="text-xl font-bold text-red-600">{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="text-[10px] text-gray-500 font-bold uppercase">Hrs</div>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded px-3 py-2 text-center min-w-[48px]">
            <div className="text-xl font-bold text-red-600">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="text-[10px] text-gray-500 font-bold uppercase">Min</div>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded px-3 py-2 text-center min-w-[48px]">
            <div className="text-xl font-bold text-red-600">{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="text-[10px] text-gray-500 font-bold uppercase">Sec</div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <section className="bg-[#0b1221] text-white py-16 px-4 relative overflow-hidden">
      {/* Background Dots Pattern (subtle) */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Urgent Badge */}
        <div className="inline-block bg-red-600 text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] px-6 py-2 rounded-full mb-8">
          Urgent Deadline Approaching
        </div>
        
        {/* Headline */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
          Are You Ready for the New Fire Safety Regulations?
        </h2>
        
        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed font-light">
          It's a legal requirement for all residential buildings over 18 metres or containing two or more residential units
        </p>
        
        {/* Deadline Subtitle */}
        <p className="text-red-600 font-semibold mb-10 tracking-wide uppercase text-sm md:text-base">
          Countdown to Compliance Deadline: April 6th, 2026
        </p>
        
        {/* Timer Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 max-w-4xl mx-auto">
          {[
            { label: 'DAYS', value: timeLeft.days },
            { label: 'HOURS', value: timeLeft.hours },
            { label: 'MINUTES', value: timeLeft.minutes },
            { label: 'SECONDS', value: timeLeft.seconds },
          ].map((unit, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center backdrop-blur-sm">
              <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-red-600 mb-2 tabular-nums">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="text-xs md:text-sm font-bold text-gray-400 tracking-[0.2em] uppercase">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="flex flex-col items-center gap-6">
          <Link 
            to="/regulations" 
            className="group bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl text-xl font-bold flex items-center gap-3 transition-all transform hover:scale-105 shadow-xl shadow-red-600/20"
          >
            Get Compliant Now
            <ArrowRight className="size-6 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <p className="text-gray-400 italic text-sm md:text-base font-light">
            Don't wait until the last minute - start your fire safety assessment today
          </p>
        </div>
      </div>
    </section>
  );
}
