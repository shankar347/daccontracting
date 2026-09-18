import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowRight, BriefcaseBusiness, Check, Clock, Mail, MapPin, Phone, Upload } from 'lucide-react'
import { careers, company, industries, process, projects, services } from '../data/content'
import { Button, PageHero, PlaceholderNote, Reveal, SectionHeading, SEO } from '../components/UI'

const images = {
  about: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2200&q=86',
  services: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2200&q=86',
  projects: 'https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=2200&q=86',
  industries: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=86',
  careers: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2200&q=86',
  contact: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=86',
}

export function About() {
  return <><SEO title="About Us" description="Learn about DAC Contracting W.L.L., a Bahrain-based HVAC, maintenance and contracting service company." />
    <PageHero eyebrow="ABOUT DAC" title="A practical partner for dependable property services." text="DAC Contracting W.L.L. supports customers across Bahrain with responsive HVAC service, planned care and contracting capability." image={images.about} />
    <section className="section"><div className="container narrative-grid"><SectionHeading eyebrow="OUR COMPANY" title="DAC Means Total Solutions." /><div><p className="lead">DAC brings technical service, coordination and customer support together under one accountable company.</p><p>The supplied company reference identifies DAC Contracting W.L.L. as a Bahrain-based provider of AC repair, preventive maintenance, installation, commercial HVAC, duct and airflow services, VRF/VRV support, spare parts and broader contracting support.</p><p>Our website has been structured around a clear service journey: respond to the immediate requirement, understand the equipment, deliver the right work, and build a maintenance relationship that protects performance over time.</p></div></div></section>
    <section className="section soft-section"><div className="container"><SectionHeading align="center" eyebrow="PURPOSE & DIRECTION" title="Built to earn long-term confidence." /><div className="purpose-grid"><Reveal><span>01</span><h3>Our Mission</h3><p>To deliver responsive, carefully coordinated HVAC and contracting services that help customers operate their properties with confidence.</p></Reveal><Reveal delay={.08}><span>02</span><h3>Our Vision</h3><p>To become a trusted long-term service partner for homes, businesses and facilities across the Kingdom of Bahrain.</p></Reveal><Reveal delay={.16}><span>03</span><h3>Our Values</h3><p>Responsibility, clear communication, practical expertise, safe working practices and respect for every customer&apos;s property.</p></Reveal></div></div></section>
    <section className="section dark-section"><div className="container narrative-grid"><SectionHeading light eyebrow="COMPANY INFORMATION" title="Established locally. Ready to support." /><div className="company-facts"><p><span>Registered name</span><strong>{company.name}</strong></p><p><span>Commercial Registration</span><strong>{company.cr}</strong></p><p><span>Registered address</span><strong>{company.address}</strong></p><p><span>Service area</span><strong>Kingdom of Bahrain</strong></p></div></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="LEADERSHIP" title="Company leadership information" text="Leadership names and biographies were not included in the supplied company reference." /><PlaceholderNote>Add verified leadership names, roles and approved biographies before publication.</PlaceholderNote></div></section>
  </>
}

export function Services() {
  return <><SEO title="Services" description="Explore DAC's AC repair, maintenance, installation, commercial HVAC and contracting services in Bahrain." />
    <PageHero eyebrow="OUR SERVICES" title="Technical capability for every stage of your HVAC requirement." text="From responsive repair to planned commercial support, DAC delivers practical solutions around the property and its operating needs." image={images.services} />
    <section className="section"><div className="container"><SectionHeading eyebrow="COMPLETE CAPABILITY" title="Responsive service. Long-term support." text="Our service structure helps customers move from reactive repairs to informed maintenance and lifecycle planning." />
      <div className="service-detail-list">{services.map((service) => { const Icon = service.icon; return <Reveal id={service.id} className="service-detail" key={service.id}><div className="service-detail-image"><img src={service.image} alt={`${service.title} service`} loading="lazy" /><span>{service.number}</span></div><div><Icon /><span className="eyebrow">DAC SERVICE {service.number}</span><h2>{service.title}</h2><p className="lead">{service.summary}</p><p>{service.detail}</p><Button to="/contact" variant="text">Discuss This Service</Button></div></Reveal> })}</div>
    </div></section>
    <ProcessBlock />
  </>
}

function ProcessBlock() {
  return <section className="section dark-section"><div className="container"><SectionHeading light eyebrow="OUR PROCESS" title="Clear steps from enquiry to support." /><div className="process-line light">{process.map(([n, title, text]) => <Reveal className="process-step" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>
}

export function Projects() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', ...new Set(projects.map(p => p.category))]
  const visible = filter === 'All' ? projects : projects.filter(p => p.category === filter)
  return <><SEO title="Projects" description="Explore DAC Contracting project capabilities across HVAC maintenance, installation and system upgrades." />
    <PageHero eyebrow="OUR WORK" title="Work that demonstrates care, coordination and technical discipline." text="This portfolio is ready for DAC's approved photography, project scopes and client-authorised results." image={images.projects} />
    <section className="section"><div className="container"><div className="heading-row"><SectionHeading eyebrow="PROJECT SHOWCASE" title="Representative project formats." /><div className="filters" aria-label="Filter projects">{categories.map(category => <button className={filter === category ? 'active' : ''} onClick={() => setFilter(category)} key={category}>{category}</button>)}</div></div><PlaceholderNote />
      <div className="project-list">{visible.map((project) => <Reveal className="project-wide" key={project.id}><Link to={`/projects/${project.id}`}><img src={project.image} alt={`${project.title} representative`} /><div><span>{project.category} · {project.location}</span><h2>{project.title}</h2><p>{project.description}</p><strong>View project <ArrowRight /></strong></div></Link></Reveal>)}</div>
    </div></section>
  </>
}

export function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(item => item.id === id)
  if (!project) return <NotFound />
  return <><SEO title={project.title} description={project.description} /><PageHero eyebrow={`${project.category} · REPRESENTATIVE PROJECT`} title={project.title} text={project.description} image={project.image} />
    <section className="section"><div className="container narrative-grid"><div><PlaceholderNote /><h2>Project information</h2></div><div><p className="lead">{project.meta}</p><p>This page demonstrates the final case-study structure. It intentionally does not invent a client name, project value, date, equipment quantity or measured result.</p><h3>Recommended verified content</h3><ul className="check-list"><li><Check />Client-approved project photography</li><li><Check />Location, scope and equipment details</li><li><Check />Challenge, delivery method and outcome</li><li><Check />Completion date and authorised testimonial</li></ul><Button to="/contact">Discuss a Similar Requirement</Button></div></div></section>
  </>
}

export function Industries() {
  return <><SEO title="Industries" description="HVAC and maintenance support for commercial, retail, residential and facility customers in Bahrain." />
    <PageHero eyebrow="SECTORS" title="Property services shaped around the way you operate." text="Different environments carry different comfort, continuity and maintenance priorities. DAC aligns service around those realities." image={images.industries} />
    <section className="section"><div className="container industry-list">{industries.map((industry, i) => <Reveal className="industry-wide" key={industry.title}><img src={industry.image} alt={industry.title} loading="lazy" /><div><span>0{i + 1}</span><h2>{industry.title}</h2><p className="lead">{industry.description}</p><strong>{industry.services}</strong><Button to="/contact" variant="text">Discuss Your Property</Button></div></Reveal>)}</div></section>
    <ProcessBlock />
  </>
}

export function Careers() {
  return <><SEO title="Careers" description="Explore career opportunities with DAC Contracting W.L.L. in Bahrain." />
    <PageHero eyebrow="CAREERS AT DAC" title="Build Your Career With Us" text="Join a practical, service-focused company supporting customers and properties across Bahrain." image={images.careers} />
    <section className="section"><div className="container"><div className="narrative-grid"><SectionHeading eyebrow="WORK WITH US" title="Grow through real responsibility." /><p className="lead">DAC values people who communicate clearly, solve problems carefully and take ownership of the work. Roles below are frontend sample listings and require management confirmation before recruitment begins.</p></div><PlaceholderNote>Sample vacancies — availability and requirements must be confirmed by DAC.</PlaceholderNote>
      <div className="job-list">{careers.map(job => <Reveal key={job.id}><Link className="job-card" to={`/careers/${job.id}`}><div><span>{job.department}</span><h2>{job.title}</h2><p>{job.summary}</p></div><div className="job-meta"><span><MapPin />{job.location}</span><span><BriefcaseBusiness />{job.type}</span><span><Clock />{job.experience}</span></div><ArrowRight /></Link></Reveal>)}</div>
    </div></section>
  </>
}

export function JobDetail() {
  const { id } = useParams()
  const job = careers.find(item => item.id === id)
  if (!job) return <NotFound />
  return <><SEO title={`${job.title} Career`} description={`Sample ${job.title} opportunity with DAC Contracting in Bahrain.`} />
    <PageHero eyebrow={`${job.department} · ${job.type}`} title={job.title} text={job.summary} image={images.careers} />
    <section className="section"><div className="container job-detail"><article><PlaceholderNote>This is a sample vacancy pending DAC management confirmation.</PlaceholderNote><h2>Role overview</h2><p className="lead">{job.summary}</p><h3>Responsibilities</h3><ul className="check-list">{job.responsibilities.map(item => <li key={item}><Check />{item}</li>)}</ul><h3>Requirements & qualifications</h3><ul className="check-list">{job.requirements.map(item => <li key={item}><Check />{item}</li>)}</ul><h3>Benefits</h3><p>Compensation, benefits and employment terms will be confirmed directly by DAC during the recruitment process.</p></article><ApplicationForm job={job} /></div></section>
  </>
}

function ApplicationForm({ job }) {
  const [sent, setSent] = useState(false)
  if (sent) return <aside className="form-card success-state"><Check /><h2>Application submitted</h2><p>Thank you for applying to DAC Contracting. This is a frontend confirmation only; connect the recruitment API before launch to transmit and store applications.</p><button className="button button-outline" onClick={() => setSent(false)}>Submit another application</button></aside>
  return <form className="form-card" onSubmit={e => { e.preventDefault(); setSent(true) }}><span className="eyebrow">FRONTEND APPLICATION</span><h2>Apply for this role</h2><p className="form-note">No data is uploaded or transmitted in this demo.</p><label>Full name<input required autoComplete="name" /></label><label>Email address<input required type="email" autoComplete="email" /></label><label>Phone number<input required type="tel" autoComplete="tel" /></label><label>Position<input value={job.title} readOnly /></label><label>Relevant experience<input required /></label><label className="upload"><Upload />Resume upload <input required type="file" accept=".pdf,.doc,.docx" /></label><label>Cover message<textarea rows="5" required /></label><button className="button button-primary" type="submit">Review Application <ArrowRight /></button></form>
}

export function Contact() {
  const [sent, setSent] = useState(false)
  return <><SEO title="Contact Us" description="Contact DAC Contracting W.L.L. for AC repair, maintenance, commercial HVAC and contracting support in Bahrain." />
    <PageHero eyebrow="CONTACT DAC" title="Let’s solve your property service requirement." text="Speak with our team about AC repair, maintenance, installation, commercial HVAC or contracting support." image={images.contact} />
      <section className="section"><div className="container contact-grid"><div><SectionHeading eyebrow="GET IN TOUCH" title="Direct, practical support." /><div className="contact-details"><a href={company.phoneHref}><Phone /><span>Call us<strong>{company.phone}</strong></span></a><a href={`mailto:${company.email}`}><Mail /><span>Email us<strong>{company.email}</strong></span></a><p><MapPin /><span>Visit us<strong>{company.address}</strong></span></p><p><Clock /><span>Business hours<strong>Hours to be confirmed by DAC</strong></span></p></div><div className="map-embed"><iframe title="DAC Contracting location in Al Hamala, Bahrain" src="https://www.google.com/maps?q=Al+Hamala,+Kingdom+of+Bahrain&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><div className="map-caption"><span><MapPin />DAC Contracting · Al Hamala</span><a href="https://www.google.com/maps/search/?api=1&query=Al+Hamala%2C+Kingdom+of+Bahrain" target="_blank" rel="noreferrer">Open in Google Maps <ArrowRight /></a></div></div></div>
      {sent ? <div className="form-card success-state"><Check /><h2>Message prepared</h2><p>This demonstration did not transmit your information. Please call, email or WhatsApp DAC directly while the website backend is not connected.</p><button className="button button-outline" onClick={() => setSent(false)}>Send another message</button></div> : <form className="form-card contact-form" onSubmit={e => { e.preventDefault(); setSent(true) }}><h2>Send an enquiry</h2><p className="form-note">Frontend demonstration — this form does not transmit data.</p><div className="form-two"><label>Name<input required autoComplete="name" /></label><label>Email<input required type="email" autoComplete="email" /></label><label>Phone<input required type="tel" autoComplete="tel" /></label><label>Company<input autoComplete="organization" /></label></div><label>Subject<select required defaultValue=""><option value="" disabled>Select a subject</option>{services.slice(0, 6).map(s => <option key={s.id}>{s.title}</option>)}<option>General enquiry</option></select></label><label>Message<textarea required rows="6" /></label><button type="submit" className="button button-primary">Prepare Enquiry <ArrowRight /></button></form>}
    </div></section>
  </>
}

export function Legal({ type }) {
  const privacy = type === 'privacy'
  return <><SEO title={privacy ? 'Privacy Policy' : 'Terms & Conditions'} description={`${privacy ? 'Privacy' : 'Terms'} information for the DAC Contracting website.`} /><section className="legal-hero"><div className="container"><span className="eyebrow">LEGAL</span><h1>{privacy ? 'Privacy Policy' : 'Terms & Conditions'}</h1><p>Draft placeholder · Legal review required before publication</p></div></section><section className="section"><article className="container legal-copy"><PlaceholderNote>This page is a drafting framework, not legal advice. DAC must approve final wording.</PlaceholderNote><h2>{privacy ? 'How website information will be handled' : 'Use of this website'}</h2><p>{privacy ? 'The current frontend demonstration does not submit contact or career application data to a server. When backend services are connected, this policy should identify the information collected, lawful purpose, retention period, processors, security measures and user rights.' : 'Information on this website is provided for general company and service enquiries. Service availability, scope, timing and price are only confirmed through an authorised DAC quotation or agreement.'}</p><h2>Contact</h2><p>Questions can be directed to <a href={`mailto:${company.email}`}>{company.email}</a> or {company.phone}.</p></article></section></>
}

export function NotFound() {
  return <section className="not-found"><div><span className="eyebrow">404</span><h1>Page not found.</h1><p>The requested page may have moved or does not exist.</p><Button to="/">Return Home</Button></div></section>
}
