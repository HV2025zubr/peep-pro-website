import { ImageWithFallback } from './figma/ImageWithFallback';
import { CountdownTimer } from './CountdownTimer';
import { Link } from 'react-router';
import { BrandName } from './BrandName';

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Urgent Countdown Section - Top Priority */}
      <CountdownTimer />

      {/* Hero Section */}
      <section className="relative bg-white text-black border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl mb-6">
                Fire Safety Compliance Made Simple
              </h1>
              <p className="text-lg mb-4 text-gray-700 text-justify">
                On 6 April 2026 <span className="italic">The Fire Safety (Residential Evacuation Plans) (England) Regulations 2025</span> come into force. These will impose new duties on managers of residential buildings. They will have to identify vulnerable residents and for each:
              </p>
              <ul className="list-disc text-lg space-y-2 text-gray-700 mb-4 pl-5">
                <li>Carry out a Person Centred Fire Risk Assessment (PCFRA)</li>
                <li>Prepare a bespoke Emergency Evacuation Statement (EES)</li>
                <li>Share the EES with Fire Services</li>
                <li>Agree and carry out mitigation measures</li>
                <li>Review the PCFRA and EES not less than annually</li>
              </ul>
              <p className="text-lg mb-8 text-gray-700 text-justify">
                <BrandName />'s intuitive and bespoke programme streamlines this process, dramatically reducing the work for building managers. We estimate <BrandName /> slashes the time per vulnerable resident from half a day to one hour and that around 30% of vulnerable residents may qualify as vulnerable.
              </p>
              <p className="text-lg mb-4 text-gray-700 font-semibold">Find out more:</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/regulations" className="w-full sm:w-auto bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors text-center font-medium">
                  The Regulations
                </Link>
                <Link to="/for-building-managers" className="w-full sm:w-auto bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors text-center font-medium">
                  For Building Managers
                </Link>
                <Link to="/for-fire-services" className="w-full sm:w-auto bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors text-center font-medium">
                  For Fire Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760213790972-2e68b4df2f21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwTG9uZG9uJTIwRW5nbGFuZHxlbnwxfHx8fDE3Njk3ODA0MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Residential building in England"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}