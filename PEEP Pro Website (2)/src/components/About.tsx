import { BrandName } from './BrandName';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <div>
      {/* Mission & Values */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6 text-justify">
                <BrandName /> was founded in 2025 with a simple ambition - to make it easier to comply with <span className="italic">The Fire Safety (Residential Evacuation Plans) (England) Regulations 2025</span>. As professionals in the building management, legal and technological industries we have seen first hand how new regulations have dramatically increased the compliance burden on Building Managers, and the information requirements for Fire Services.
              </p>
              <p className="text-lg text-gray-700 mb-6 text-justify">
                The 2025 Regulations introduced the "Personal Emergency Evacuation Plan" (PEEP), a tailored evacuation plan for residents who may require assistance during a fire emergency. <BrandName /> was designed to streamline this process, making it simple for Building Managers to create, manage, and maintain PEEPs in accordance with the law.
              </p>
              <p className="text-lg text-gray-700 text-justify">
                Our platform was built from the ground up to address these challenges. We combine intuitive technology with deep regulatory knowledge to create a solution that does not just tick compliance boxes—it genuinely makes buildings safer and gives peace of mind. By streamlining the entire Personal Emergency Evacuation Plan lifecycle, from creation and review to sharing with Fire Services, we are helping transform fire safety compliance from a burden into a manageable, efficient process.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1660233868862-6afdfab81ae1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwbW9kZXJuJTIwcmVzaWRlbnRpYWwlMjBhcGFydG1lbnRzJTIwVW5pdGVkJTIwS2luZ2RvbXxlbnwxfHx8fDE3Njk1MjczMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern residential apartment building"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}