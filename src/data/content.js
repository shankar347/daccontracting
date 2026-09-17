import {
  AirVent, Building2, CircleGauge, Construction, Fan, ShieldCheck,
  Sparkles, Wrench, Zap
} from 'lucide-react'

export const company = {
  name: 'DAC Contracting W.L.L.',
  tagline: 'DAC Means Total Solutions',
  cr: '154943-1',
  phone: '+973 7708 3282',
  phoneHref: 'tel:+97377083282',
  whatsapp: '+973 3437 0655',
  whatsappHref: 'https://wa.me/97334370655?text=Hello%20DAC%20Contracting%2C%20I%20need%20assistance.',
  alternateWhatsapp: '+973 3399 9341',
  email: 'dacwll19@gmail.com',
  address: 'Bldg. 0717, Road 1212, Block 1012, Al Hamala, Kingdom of Bahrain',
}

export const services = [
  { id: 'ac-repair', icon: Wrench, number: '01', title: 'AC Repair', summary: 'Fast, methodical diagnosis for cooling, drainage, electrical and control faults.', detail: 'Our field team assesses the complete system before recommending a repair, helping customers avoid repeated callouts and unnecessary replacements.', image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=82' },
  { id: 'maintenance', icon: ShieldCheck, number: '02', title: 'Preventive Maintenance', summary: 'Planned cleaning, inspection and performance care for dependable operation.', detail: 'Flexible maintenance programmes cover residential units, offices, retail properties and critical commercial sites, with condition notes and service records.', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=82' },
  { id: 'installation', icon: AirVent, number: '03', title: 'Installation & Replacement', summary: 'Professional surveys, installation, testing and customer handover.', detail: 'From equipment selection to commissioning, DAC coordinates every stage to deliver efficient systems suited to the property and operating requirement.', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1400&q=82' },
  { id: 'commercial', icon: Building2, number: '04', title: 'Commercial HVAC', summary: 'Coordinated HVAC support for offices, retail, hospitality and facilities.', detail: 'A single service relationship for asset registers, planned visits, responsive repairs, reporting and lifecycle recommendations across your property.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=82' },
  { id: 'duct', icon: Fan, number: '05', title: 'Duct & Airflow Services', summary: 'Inspection and service focused on healthy, balanced air distribution.', detail: 'We review ducts, grilles, drainage and connected equipment to identify restrictions, contamination and performance issues.', image: 'https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?auto=format&fit=crop&w=1400&q=82' },
  { id: 'emergency', icon: Zap, number: '06', title: 'Priority & Emergency Service', summary: 'Responsive support for urgent failures and business-critical locations.', detail: 'Priority workflows help commercial customers limit disruption when cooling systems fail, with clear communication from assessment through resolution.', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1400&q=82' },
  { id: 'vrf', icon: CircleGauge, number: '07', title: 'VRF / VRV Support', summary: 'Specialist troubleshooting support for multi-zone commercial systems.', detail: 'Structured fault assessment and service coordination for complex HVAC installations and multi-unit properties.', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=82' },
  { id: 'contracting', icon: Construction, number: '08', title: 'Contracting Support', summary: 'Practical contracting capability for larger property requirements.', detail: 'DAC combines responsive field service with project coordination to support installations, upgrades and property improvement work.', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=82' },
  { id: 'parts', icon: Sparkles, number: '09', title: 'Spare Parts', summary: 'Sourcing and controlled use of suitable HVAC replacement components.', detail: 'Parts are selected to suit the equipment and job requirement, with clear quotation and installation support.', image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=1400&q=82' },
]

export const projects = [
  { id: 'commercial-maintenance', category: 'Maintenance', title: 'Multi-unit Preventive Service', location: 'Kingdom of Bahrain', description: 'A representative project format for planned maintenance, technician coordination, service reporting and renewal management.', meta: 'Client-approved details to be added', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=82', placeholder: true },
  { id: 'new-installation', category: 'Installation', title: 'New AC Installation', location: 'Kingdom of Bahrain', description: 'A representative installation workflow covering survey, recommendation, installation, testing and handover.', meta: 'Client-approved details to be added', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=82', placeholder: true },
  { id: 'system-retrofit', category: 'Retrofit', title: 'Replacement & Upgrade', location: 'Kingdom of Bahrain', description: 'A representative upgrade project focused on condition assessment, replacement planning and coordinated delivery.', meta: 'Client-approved details to be added', image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=82', placeholder: true },
]

export const industries = [
  { title: 'Commercial & Offices', services: 'Maintenance · Repair · Asset support', description: 'Reliable climate control and planned servicing designed around occupied workplaces.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1500&q=82' },
  { title: 'Retail & Hospitality', services: 'Priority response · Planned care', description: 'Responsive HVAC support where customer comfort and continuity directly affect operations.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1500&q=82' },
  { title: 'Residential Properties', services: 'Repair · Cleaning · Installation', description: 'Practical, clearly communicated cooling services for villas, apartments and managed portfolios.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=82' },
  { title: 'Warehousing & Facilities', services: 'Commercial HVAC · Contracts', description: 'Structured service and maintenance for larger sites, equipment registers and critical areas.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1500&q=82' },
]

export const careers = [
  { id: 'project-manager', title: 'Project Manager', department: 'Projects', location: 'Bahrain', type: 'Full-time', experience: 'Experience requirement to be confirmed', summary: 'Coordinate HVAC and contracting projects from planning through handover.', responsibilities: ['Coordinate programme, resources and project documentation', 'Maintain clear communication with clients and site teams', 'Monitor progress, quality and delivery risks'], requirements: ['Relevant project delivery experience', 'Strong coordination and communication skills', 'Bahrain market experience is an advantage'] },
  { id: 'site-engineer', title: 'Site Engineer', department: 'Operations', location: 'Bahrain', type: 'Full-time', experience: 'Experience requirement to be confirmed', summary: 'Support safe, accurate execution and reporting across active sites.', responsibilities: ['Coordinate day-to-day site activities', 'Review technical requirements and work quality', 'Prepare progress and completion records'], requirements: ['Relevant engineering qualification', 'Practical site coordination capability', 'Clear written and verbal communication'] },
  { id: 'hvac-technician', title: 'HVAC Technician', department: 'Service', location: 'Bahrain', type: 'Full-time', experience: 'Experience requirement to be confirmed', summary: 'Diagnose, maintain and repair residential and commercial HVAC systems.', responsibilities: ['Complete inspection, diagnosis and repair work', 'Record findings, parts and completion details', 'Maintain professional customer communication'], requirements: ['Relevant technical training', 'Hands-on HVAC service experience', 'Commitment to safe working practices'] },
  { id: 'business-development', title: 'Business Development Executive', department: 'Commercial', location: 'Bahrain', type: 'Full-time', experience: 'Experience requirement to be confirmed', summary: 'Develop long-term commercial maintenance and contracting relationships.', responsibilities: ['Identify and qualify commercial opportunities', 'Coordinate site assessments and proposals', 'Maintain disciplined customer follow-up'], requirements: ['B2B sales or service-sector experience', 'Strong relationship-building capability', 'Valid Bahrain driving licence is an advantage'] },
]

export const process = [
  ['01', 'Consultation', 'Understand the property, operating needs and immediate priorities.'],
  ['02', 'Assessment', 'Inspect equipment or review the project scope before recommending action.'],
  ['03', 'Planning', 'Define the method, schedule, commercial terms and responsible team.'],
  ['04', 'Execution', 'Complete the work with disciplined site coordination and communication.'],
  ['05', 'Quality Assurance', 'Test performance, document completion and resolve outstanding items.'],
  ['06', 'Handover & Support', 'Explain the outcome and establish the right ongoing service plan.'],
]
