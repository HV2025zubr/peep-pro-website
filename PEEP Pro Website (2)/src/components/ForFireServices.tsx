import { Flame, MapPin, Clock, Database, Shield, CheckCircle, Lock, AlertTriangle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ForFireServices() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl mb-6">
              For Fire Services
            </h1>
            <p className="text-xl text-gray-700 text-justify">
              Access critical resident evacuation information instantly to support effective emergency response under <span className="italic">The Fire Safety (Residential Evacuation Plans) (England) Regulations 2025</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Operational Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
              Enhanced Emergency Response
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PEEP Pro provides Fire & Rescue Services with the information you need, when you need it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="size-8 text-red-600" />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900">Instant Location Information</h3>
              <p className="text-gray-600 mb-4 text-justify">
                Quickly identify which flats house residents who may need evacuation assistance during an emergency. Access flat numbers, floor levels, and degree of assistance required.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Flat and floor number mapping</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Assistance level indicators</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Building layout integration</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Emergency evacuation statement status</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Clock className="size-8 text-orange-600" />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900">Real-Time Access</h3>
              <p className="text-gray-600 mb-4 text-justify">
                Access up-to-date information 24/7 through our secure portal. View current resident information and building emergency evacuation plans whenever needed.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>24/7 portal access</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Mobile-responsive interface</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Automatic updates from building managers</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Offline data access options</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Database className="size-8 text-blue-600" />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900">Centralized Information</h3>
              <p className="text-gray-600 mb-4 text-justify">
                Access information from all residential buildings in your area through one unified platform. No more managing multiple information boxes or disparate systems.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Multi-building overview</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Geographic search and filtering</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Building-specific emergency plans</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Quick search by address</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Shield className="size-8 text-purple-600" />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900">Compliance Support</h3>
              <p className="text-gray-600 mb-4 text-justify">
                View which building managers have shared information with your service and ensure compliance across your jurisdiction. Support enforcement activities with audit trails.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Compliance status tracking</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Building manager contact details</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Last updated timestamps</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Document version history</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
              Platform Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed specifically for Fire & Rescue Service operational needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <Lock className="size-10 text-red-600 mb-4" />
              <h3 className="text-xl mb-3 text-gray-900">Secure Access</h3>
              <p className="text-gray-600">
                Secure, role-based access controls ensure only authorized Fire Service personnel can view sensitive resident information.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <Flame className="size-10 text-red-600 mb-4" />
              <h3 className="text-xl mb-3 text-gray-900">Emergency Optimized</h3>
              <p className="text-gray-600">
                Interface designed for rapid information retrieval during emergency operations with clear, concise presentation.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <AlertTriangle className="size-10 text-red-600 mb-4" />
              <h3 className="text-xl mb-3 text-gray-900">Priority Information</h3>
              <p className="text-gray-600">
                Focus on the essential information you need: location, assistance level, and evacuation statement status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Information Provided */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
              What Information You'll Receive
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building managers share prescribed information with resident consent.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm mb-6">
              <h3 className="text-2xl mb-4 text-gray-900">For Each Relevant Resident</h3>
              <p className="text-gray-600 mb-6">
                With explicit resident consent, building managers must share:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <CheckCircle className="size-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Flat Number:</span> The specific flat where the resident lives
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="size-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Floor Number:</span> The floor level within the building
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="size-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Degree of Assistance:</span> Basic information about the level of assistance the resident may require to evacuate
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="size-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Emergency Evacuation Statement:</span> Confirmation of whether the resident has an agreed evacuation statement
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl mb-4 text-gray-900">Building Emergency Evacuation Plan</h3>
              <p className="text-gray-600 mb-6">
                For each building, you'll receive:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <CheckCircle className="size-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Instructions to Residents:</span> The building's fire evacuation procedures
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="size-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Relevant Resident Confirmation:</span> Whether there are relevant residents in the building
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="size-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Special Arrangements:</span> Details of evacuation systems, refuge areas, or other relevant arrangements
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
                Data Protection & Security
              </h2>
              <p className="text-xl text-gray-600">
                PEEP Pro is designed to comply with UK data protection regulations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl mb-3 text-gray-900">Resident Consent</h3>
                <p className="text-gray-600">
                  All information sharing requires explicit resident consent. Residents can withdraw consent at any time.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl mb-3 text-gray-900">Secure Storage</h3>
                <p className="text-gray-600">
                  All data is encrypted and stored securely in compliance with UK data protection legislation.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl mb-3 text-gray-900">Access Controls</h3>
                <p className="text-gray-600">
                  Role-based permissions ensure only authorized Fire Service personnel can access information.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl mb-3 text-gray-900">Audit Trails</h3>
                <p className="text-gray-600">
                  Complete audit logs track all access to resident information for accountability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">
            Get Access to PEEP Pro
          </h2>
          <p className="text-xl mb-8 text-red-50">
            Contact us to set up access for your Fire & Rescue Service and start receiving critical resident information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-red-50 transition-colors">
              Contact Us
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-red-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
