import { Building2, FileCheck, Users, Clock, Shield, CheckCircle, TrendingUp, Bell } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ForBuildingManagers() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl mb-6">
              For Building Managers
            </h1>
            <p className="text-xl text-gray-700 text-justify">
              Comprehensive digital solutions to help you comply with <span className="italic">The Fire Safety (Residential Evacuation Plans) (England) Regulations 2025</span> and protect your residents.
            </p>
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
              Your Compliance Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Managing fire safety compliance for residential buildings comes with unique challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl mb-3 text-gray-900">Complex Regulations</h3>
              <p className="text-gray-600">
                Understanding and implementing the new Residential PEEPs regulations across multiple buildings and residents.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl mb-3 text-gray-900">Time Constraints</h3>
              <p className="text-gray-600">
                Conducting person-centred fire risk assessments and creating evacuation plans for all relevant residents before the deadline.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl mb-3 text-gray-900">Document Management</h3>
              <p className="text-gray-600">
                Maintaining accurate, up-to-date records and ensuring documents are accessible to Fire Services when needed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl mb-3 text-gray-900">Annual Reviews</h3>
              <p className="text-gray-600">
                Tracking and completing mandatory annual reviews for every PEEP and emergency evacuation statement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl mb-3 text-gray-900">Data Protection</h3>
              <p className="text-gray-600">
                Handling sensitive resident information securely while sharing required data with Fire Services with proper consent.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl mb-3 text-gray-900">Audit Trails</h3>
              <p className="text-gray-600">
                Demonstrating compliance during inspections with comprehensive audit trails and reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
              How PEEP Pro Helps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform simplifies every aspect of Residential PEEPs compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <FileCheck className="size-8 text-red-600" />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900">Streamlined PEEP Creation</h3>
              <p className="text-gray-600 mb-4 text-justify">
                Create comprehensive Personal Emergency Evacuation Plans using our guided digital platform. Capture all required information accurately with step-by-step workflows.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Guided assessment templates</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Resident consent management</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Digital signatures</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Emergency evacuation statements</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Building2 className="size-8 text-blue-600" />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900">Multi-Building Management</h3>
              <p className="text-gray-600 mb-4 text-justify">
                Manage PEEPs across your entire property portfolio from one central platform. Organize residents by building, floor, and flat number.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Portfolio overview dashboard</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Building-specific reports</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Batch operations</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Compliance tracking per building</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Clock className="size-8 text-green-600" />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900">Automated Review Management</h3>
              <p className="text-gray-600 mb-4 text-justify">
                Never miss a mandatory review date with automated scheduling and reminders. Track review completion across all buildings.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>12-month review tracking</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Email and SMS reminders</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Overdue alerts</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Review history and audit trails</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Shield className="size-8 text-purple-600" />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900">Fire Service Integration</h3>
              <p className="text-gray-600 mb-4 text-justify">
                Share prescribed information with Fire & Rescue Services securely with resident consent. Provide instant access during emergencies.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Consent tracking</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Secure data sharing portal</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Building emergency evacuation plans</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>GDPR-compliant data management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
              Additional Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage fire safety compliance effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <TrendingUp className="size-10 text-red-600 mb-4" />
              <h3 className="text-xl mb-3 text-gray-900">Analytics Dashboard</h3>
              <p className="text-gray-600">
                Track compliance metrics and identify trends across your portfolio.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Bell className="size-10 text-red-600 mb-4" />
              <h3 className="text-xl mb-3 text-gray-900">Smart Notifications</h3>
              <p className="text-gray-600">
                Stay informed with customizable alerts for deadlines and updates.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <FileCheck className="size-10 text-red-600 mb-4" />
              <h3 className="text-xl mb-3 text-gray-900">Document Storage</h3>
              <p className="text-gray-600">
                Attach floor plans, risk assessments, and supporting documents.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Users className="size-10 text-red-600 mb-4" />
              <h3 className="text-xl mb-3 text-gray-900">Team Collaboration</h3>
              <p className="text-gray-600">
                Role-based access for building staff and property managers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">
            Ready to Simplify Your Compliance?
          </h2>
          <p className="text-xl mb-8 text-red-50">
            Contact us today to discuss how PEEP Pro can help you meet the 6 April 2026 deadline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-red-50 transition-colors">
              Contact Us
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-red-600 transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
