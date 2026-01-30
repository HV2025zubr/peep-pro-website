import { BrandName } from './BrandName';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ title, children, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left hover:bg-gray-50 transition-colors px-4"
      >
        <h2 className="text-3xl lg:text-4xl text-gray-900 pr-4">{title}</h2>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-8 h-8 text-red-600 flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-8 px-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Regulations() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div>
      {/* Summary and Obligations - Single Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Summary Text */}
            <div>
              <p className="text-lg text-gray-700 mb-6 text-justify">
                <a 
                  href="https://www.legislation.gov.uk/uksi/2025/797/contents/made" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="italic text-red-600 hover:text-red-700 underline"
                >
                  The Fire Safety (Residential Evacuation Plans) (England) Regulations 2025
                </a> aim to improve the fire safety and evacuation of residents in specified residential buildings in England who would have difficulties evacuating a building by themselves in the event of a fire. This may be due to a physical mobility issue, some other disability such as having a sight or hearing impairment, or a cognitive condition. The Regulations come into force on 6 April 2026, and are explored in more detail below:
              </p>

              <div className="mb-6">
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
                  <li>Understanding which buildings the Regulations apply to (see <strong>Specified Residential Building</strong>)</li>
                  <li>Identifying residents who may need assistance evacuating (see <strong>Relevant Resident</strong>)</li>
                  <li>Conducting a person-centred fire risk assessment – a conversation to understand the resident's particular risks (see <strong>Person-Centred Fire Risk Assessment</strong>)</li>
                  <li>Creating an emergency evacuation statement setting out what the resident should do in the event of a fire (see <strong>Emergency Evacuation Statement</strong>)</li>
                  <li>Discussing and implementing reasonable and proportionate mitigation measures to improve fire safety and evacuation (see <strong>Mitigation Measures</strong>)</li>
                  <li>Sharing prescribed information with the Fire and Rescue Authority, with the resident's explicit consent (see <strong>Information for Fire Services</strong>)</li>
                  <li>Conducting regular reviews of all assessments, measures and statements (see <strong>Annual Review and Updates</strong>)</li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="hidden lg:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1558559648-f7f5e0000b96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGFwYXJ0bWVudCUyMGJ1aWxkaW5nJTIwTG9uZG9uJTIwVUt8ZW58MXx8fHwxNzY5NjAxMDc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Residential building in England"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Definition Sections */}
          <div className="mb-16 space-y-12">
            <AccordionItem
              title="Specified Residential Building"
              isOpen={openSection === 0}
              onToggle={() => toggleSection(0)}
            >
              <p className="text-lg text-gray-700 mb-4 text-justify">
                The regulations apply to "specified residential buildings", which are defined as buildings in England that contain two or more sets of domestic premises (flats or apartments) and meet at least one of the following criteria:
              </p>
              <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 ml-4">
                <li>The building is at least 18 metres in height above ground level, <strong>OR</strong></li>
                <li>The building has at least seven storeys, <strong>OR</strong></li>
                <li>The building is more than 11 metres in height above ground level and has a simultaneous evacuation strategy</li>
              </ul>
              <p className="text-lg text-gray-700 mt-4 text-justify">
                A "simultaneous evacuation strategy" means a strategy whereby the responsible person (Building Manager) has determined that all persons in the building should leave the building immediately in the event of a fire, rather than following a "stay put" approach.
              </p>
              <p className="text-lg text-gray-700 mt-4 text-justify">
                When determining the number of storeys, any storey below ground level is ignored. A mezzanine floor counts as a storey if its internal floor area is at least 50% of the internal floor area of the largest storey that is not below ground level.
              </p>
            </AccordionItem>

            <AccordionItem
              title="Relevant Resident"
              isOpen={openSection === 1}
              onToggle={() => toggleSection(1)}
            >
              <p className="text-lg text-gray-700 mb-4 text-justify">
                A 'Relevant Resident', for the purpose of these Regulations, is someone for whom their domestic premises in the building is their only or principal residence, and who would have difficulty evacuating a building without assistance in the event of a fire.
              </p>
              <p className="text-lg text-gray-700 mb-4 text-justify">
                This may be due to a physical mobility issue or a cognitive condition. For example:
              </p>
              <br />
              <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 ml-4">
                <li>A person who habitually needs a wheelchair</li>
                <li>A blind person</li>
                <li>A person who is unable to go down several flights of steps or has other mobility difficulties</li>
                <li>A deaf or hard of hearing person</li>
                <li>A person who due to a cognitive condition may have difficulties understanding what to do in the event of a fire (for example, a learning disability or cognitive condition such as dementia)</li>
              </ul>
            </AccordionItem>

            <AccordionItem
              title="Person-Centred Fire Risk Assessment"
              isOpen={openSection === 2}
              onToggle={() => toggleSection(2)}
            >
              <p className="text-lg text-gray-700 mb-4 text-justify">
                A person-centred fire risk assessment (PCFRA) is a conversation between the Building Manager and a Relevant Resident to understand the specific fire safety challenges the resident faces due to their impairment or condition.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl mb-3 text-gray-900">Purpose</h3>
                  <p className="text-lg text-gray-700 text-justify">
                    The PCFRA identifies the resident's specific needs and circumstances that may affect their ability to evacuate safely during a fire emergency. It considers both the individual's capabilities and the building's characteristics.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl mb-3 text-gray-900">Key Areas to Assess</h3>
                  <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
                    <li>The resident's mobility and ability to move quickly</li>
                    <li>Sensory impairments (hearing, vision)</li>
                    <li>Cognitive conditions that may affect understanding of emergency procedures</li>
                    <li>The resident's location within the building (floor level, distance from exits)</li>
                    <li>The building's evacuation strategy (stay put vs. simultaneous evacuation)</li>
                    <li>Available escape routes and their accessibility</li>
                    <li>The resident's familiarity with the building and emergency procedures</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl mb-3 text-gray-900">Conducting the Assessment</h3>
                  <p className="text-lg text-gray-700 text-justify">
                    The assessment should be conducted in a sensitive, person-centred manner that respects the resident's dignity and privacy. It should involve open discussion about the resident's needs, concerns, and preferences regarding fire safety and evacuation.
                  </p>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem
              title="Emergency Evacuation Statement"
              isOpen={openSection === 3}
              onToggle={() => toggleSection(3)}
            >
              <p className="text-lg text-gray-700 mb-6 text-justify">
                An Emergency Evacuation Statement (EES) is a written record that sets out what a Relevant Resident should do in the event of a fire. It is developed collaboratively between the Building Manager and the resident following the PCFRA.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl mb-3 text-gray-900">What the EES Should Include</h3>
                  <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
                    <li>How the resident will be alerted to a fire (e.g., standard alarm, specialized alerting equipment)</li>
                    <li>What the resident should do when they become aware of a fire</li>
                    <li>The route the resident should take to evacuate</li>
                    <li>Any assistance the resident may require and how this will be provided</li>
                    <li>Details of any mitigation measures in place</li>
                    <li>Information about refuge areas if applicable</li>
                    <li>Contact details for emergency services and building management</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl mb-3 text-gray-900">Creating the Statement</h3>
                  <p className="text-lg text-gray-700 text-justify mb-4">
                    Building Managers must use reasonable endeavours to agree the content of the EES with the Relevant Resident. The statement should be clear, concise, and presented in a format that is accessible to the resident (considering any communication needs).
                  </p>
                  <p className="text-lg text-gray-700 text-justify">
                    A copy of the completed EES must be provided to the resident, and the Building Manager should retain a copy for record-keeping and information sharing purposes (with consent).
                  </p>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem
              title="Mitigation Measures"
              isOpen={openSection === 4}
              onToggle={() => toggleSection(4)}
            >
              <p className="text-lg text-gray-700 mb-6 text-justify">
                Following the PCFRA, Building Managers must discuss and implement reasonable and proportionate measures to mitigate the identified risks. These measures should be tailored to each resident's specific needs and circumstances.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl mb-3 text-gray-900">Types of Mitigation Measures</h3>
                  <p className="text-lg text-gray-700 mb-4 text-justify">
                    Mitigation measures can include physical adaptations, equipment provision, procedural changes, or support arrangements:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
                    <li><strong>Alerting equipment:</strong> Enhanced fire detection systems, vibrating pads, or visual alarms for residents with hearing impairments</li>
                    <li><strong>Communication aids:</strong> Clear signage, tactile indicators, or audio guidance for residents with visual impairments</li>
                    <li><strong>Physical adaptations:</strong> Ensuring corridors and exits are accessible for wheelchair users or those with mobility aids</li>
                    <li><strong>Evacuation equipment:</strong> Evacuation chairs or other specialized equipment where appropriate</li>
                    <li><strong>Buddy systems:</strong> Arrangements for neighbors or building staff to check on or assist the resident</li>
                    <li><strong>Refuge areas:</strong> Designated safe areas where residents can wait for assistance</li>
                    <li><strong>Enhanced information:</strong> Simplified or alternative format emergency instructions tailored to cognitive needs</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl mb-3 text-gray-900">Reasonable and Proportionate</h3>
                  <p className="text-lg text-gray-700 text-justify">
                    Measures must be reasonable and proportionate to the risk identified. Building Managers are required to implement agreed measures, except where costs would fall to the resident and the resident declines to pay. The focus should be on practical, effective solutions that genuinely enhance the resident's safety.
                  </p>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem
              title="Information for Fire Services"
              isOpen={openSection === 5}
              onToggle={() => toggleSection(5)}
            >
              <p className="text-lg text-gray-700 mb-6 text-justify">
                Building Managers must share specific information with their local Fire and Rescue Authority to help them respond effectively in emergencies. All information sharing requires the explicit consent of each Relevant Resident.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl mb-3 text-gray-900">Information About Relevant Residents</h3>
                  <p className="text-lg text-gray-700 mb-4 text-justify">
                    With each resident's explicit consent, Building Managers must share:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
                    <li>Flat number and floor number</li>
                    <li>The degree of assistance the resident may require to evacuate</li>
                    <li>Whether the resident has an EES</li>
                  </ul>
                  <p className="text-lg text-gray-700 mt-4 text-justify">
                    This information can be shared digitally or in a secure information box on-site, as preferred by the local Fire and Rescue Authority. Residents can refuse consent or withdraw it at any time.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl mb-3 text-gray-900">Building Emergency Evacuation Plan</h3>
                  <p className="text-lg text-gray-700 text-justify">
                    Building Managers must also prepare and share a building emergency evacuation plan with Fire Services. This must include instructions to residents, confirmation of whether there are Relevant Residents in the building, and details of any evacuation arrangements. The plan must be reviewed annually.
                  </p>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem
              title="Annual Review and Updates"
              isOpen={openSection === 6}
              onToggle={() => toggleSection(6)}
            >
              <p className="text-lg text-gray-700 mb-6 text-justify">
                The Residential PEEPs process is not a one-time activity. Regular reviews are essential to ensure that PCFRAs, mitigation measures, and EES remain current and effective.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl mb-3 text-gray-900">When Reviews Must Take Place</h3>
                  <p className="text-lg text-gray-700 mb-4 text-justify">
                    Building Managers must review each Relevant Resident's PCFRA, mitigation measures, and EES in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
                    <li><strong>At least annually:</strong> A review must be conducted at least once every 12 months</li>
                    <li><strong>When circumstances change:</strong> When there is reason to believe the assessment or statement requires updating (e.g., change in the resident's condition, building alterations, changes to evacuation strategy)</li>
                    <li><strong>On request:</strong> At the reasonable request of a Relevant Resident</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl mb-3 text-gray-900">What the Review Should Cover</h3>
                  <p className="text-lg text-gray-700 text-justify">
                    Reviews should reassess the resident's current needs and circumstances, verify that mitigation measures remain appropriate and functional, update the EES if necessary, and ensure that any information shared with Fire Services remains accurate and current.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl mb-3 text-gray-900">Building Emergency Evacuation Plans</h3>
                  <p className="text-lg text-gray-700 text-justify">
                    The building emergency evacuation plan must also be reviewed at least annually and updated as necessary to reflect changes in the building or resident population. Updated plans must be shared with the Fire and Rescue Authority.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl mb-3 text-gray-900">Record Keeping</h3>
                  <p className="text-lg text-gray-700 text-justify">
                    Building Managers should maintain records of when reviews were conducted, what was assessed, any changes made, and how residents were informed of updates. This documentation demonstrates compliance with the regulations and provides an audit trail.
                  </p>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem
              title="Further Information"
              isOpen={openSection === 7}
              onToggle={() => toggleSection(7)}
            >
              <p className="text-lg text-gray-700 text-justify">
                For comprehensive guidance on implementing the Residential PEEPs regulations, including detailed explanations of all requirements and practical examples, please refer to the official government guidance:
              </p>
              <p className="text-lg text-gray-700 mt-4">
                <a 
                  href="https://www.gov.uk/government/publications/residential-personal-emergency-evacuation-plans-residential-peeps" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 underline font-medium"
                >
                  Residential Personal Emergency Evacuation Plans (Residential PEEPs) - Government Guidance
                </a>
              </p>
            </AccordionItem>
          </div>
        </div>
      </section>
    </div>
  );
}