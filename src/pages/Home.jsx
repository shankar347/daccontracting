import { useEffect, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight, CheckCircle2, Clock3, RefreshCw, ShieldCheck, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { industries, process, projects, services } from '../data/content'
import { AnimatedCounter, Button, PlaceholderNote, Reveal, SectionHeading, SEO } from '../components/UI'

const heroImage = 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=2200&q=88'

function ServiceCarousel() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduce = useReducedMotion()
  const items = services.slice(0, 6)
  const step = 360 / items.length

  useEffect(() => {
    if (reduce || paused) return undefined
    const timer = window.setInterval(() => setActive(current => (current + 1) % items.length), 2800)
    return () => window.clearInterval(timer)
  }, [items.length, paused, reduce])

  return (
    <motion.div className="hero-3d" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .35 }}
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="hero-3d-scene">
        <div className="hero-3d-ring" style={{ transform: `rotateY(${-active * step}deg)` }}>
          {items.map((service, index) => (
            <div className="hero-3d-card" key={service.id} style={{ transform: `rotateY(${index * step}deg) translateZ(270px)` }}>
              <div className="hero-3d-visual" style={{ backgroundImage: `linear-gradient(180deg,rgba(4,34,57,.05),rgba(4,34,57,.72)),url("${service.image}")` }}>
                <span>{service.title.toUpperCase()}</span>
              </div>
              <strong>{service.title}</strong><small>{service.summary}</small>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-3d-caption"><span>{items[active].title}</span><i /><span>DAC Total Solutions</span></div>
    </motion.div>
  )
}

export default function Home() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 900], [0, reduce ? 0 : 90])
  return (
    <>
      <SEO title="HVAC & Contracting Solutions in Bahrain" description="DAC Contracting W.L.L. provides AC repair, planned maintenance, installation, commercial HVAC and contracting support across Bahrain." />
      <section className="home-hero">
        <motion.div className="hero-photo" style={{ backgroundImage: `url("${heroImage}")`, y: imageY }} aria-hidden="true" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <motion.span className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .15 }}>DAC CONTRACTING W.L.L. · BAHRAIN</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}>Complete contracting.<br /><em>Dependable comfort.</em></motion.h1>
          <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .18 }}>DAC provides AC repair, preventive maintenance, installation and commercial HVAC support—delivered by one accountable team across the Kingdom of Bahrain.</motion.p>
          <ServiceCarousel />
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .3 }}>
            <Button to="/contact">Book a Service</Button><Button href="https://wa.me/97334370655?text=Hello%20DAC%20Contracting%2C%20I%20would%20like%20to%20book%20a%20service." variant="whatsapp">WhatsApp DAC</Button><Button to="/services" variant="light">View Our Services</Button>
          </motion.div>
        </div>
        <div className="hero-proof"><div className="container"><span><CheckCircle2 />Professional field team</span><span><Clock3 />Priority response workflow</span><span><ShieldCheck />Quality-focused delivery</span></div></div>
        <a href="#introduction" className="scroll-cue"><ArrowDown /><span>Discover DAC</span></a>
      </section>

      <section id="introduction" className="section intro-section"><div className="container intro-grid">
        <Reveal><span className="eyebrow">DAC MEANS TOTAL SOLUTIONS</span><h2>A service company built around long-term reliability.</h2></Reveal>
        <Reveal delay={.1}><p className="lead">From an urgent cooling fault to a commercial maintenance programme, DAC brings clear communication, disciplined field service and practical technical support to every assignment.</p><Button to="/about" variant="text">Learn about DAC</Button></Reveal>
      </div></section>

      <section className="section services-preview">
        <div className="container">
          <SectionHeading eyebrow="OUR CAPABILITIES" title="One team. Every stage of your HVAC requirement." text="Responsive service for everyday needs, backed by the capability to support larger properties and long-term maintenance." />
          <div className="service-editorial">
            {services.slice(0, 4).map((service, i) => {
              const Icon = service.icon
              return <Reveal className={`service-row ${i === 0 ? 'featured' : ''}`} key={service.id} delay={i * .04}>
                {i === 0 && <img src={service.image} alt="HVAC technician completing professional service work" loading="lazy" />}
                <span className="service-number">{service.number}</span><Icon className="service-icon" />
                <div><h3>{service.title}</h3><p>{service.summary}</p></div>
                <Link to={`/services#${service.id}`} aria-label={`Learn about ${service.title}`}><ArrowUpRight /></Link>
              </Reveal>
            })}
          </div>
          <Button to="/services" variant="outline">View All Services</Button>
        </div>
      </section>

      <section className="section dark-section why-section"><div className="container why-grid">
        <div><SectionHeading light eyebrow="WHY DAC" title="Accountability from first call to final handover." text="Customers need more than a quick fix. They need a service partner who communicates clearly, works carefully and stays responsible for the outcome." /><Button to="/contact" variant="light">Talk to Our Team</Button></div>
        <div className="why-list">
          {[[Users, 'Professional field team', 'Technicians and supervisors coordinated around the work.'], [Clock3, 'Reliable execution', 'Clear scheduling, practical updates and responsive follow-up.'], [ShieldCheck, 'Quality control', 'Assessment, testing and documented completion where appropriate.'], [RefreshCw, 'Ongoing support', 'Maintenance relationships designed around system performance.']].map(([Icon, title, text], i) =>
            <Reveal className="why-item" key={title} delay={i * .06}><Icon /><div><h3>{title}</h3><p>{text}</p></div></Reveal>
          )}
        </div>
      </div></section>

      <section className="section"><div className="container">
        <SectionHeading align="center" eyebrow="HOW WE WORK" title="A clear process, built around the property." text="A disciplined workflow keeps decisions clear and delivery accountable." />
        <div className="process-line">{process.map(([number, title, text], i) => <Reveal className="process-step" key={number} delay={i * .05}><span>{number}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div>
      </div></section>

      <section className="section soft-section"><div className="container">
        <div className="heading-row"><SectionHeading eyebrow="SELECTED WORK" title="Service capability, shown through real outcomes." text="Project records below are structured placeholders until DAC supplies approved project photography and client details." /><Button to="/projects" variant="outline">View Projects</Button></div>
        <PlaceholderNote />
        <div className="project-grid">{projects.map((project, i) => <Reveal className={`project-card project-${i + 1}`} key={project.id}>
          <Link to={`/projects/${project.id}`}><div className="project-image"><img src={project.image} alt={`${project.title} representative project`} loading="lazy" /><span>{project.category}</span></div><div className="project-copy"><div><h3>{project.title}</h3><p>{project.location}</p></div><ArrowUpRight /></div></Link>
        </Reveal>)}</div>
      </div></section>

      <section className="section industry-preview"><div className="container">
        <SectionHeading eyebrow="SECTORS WE SUPPORT" title="Service shaped around how your property operates." />
        <div className="industry-strip">{industries.map((industry, i) => <Reveal className="industry-tile" key={industry.title} delay={i * .06}><img src={industry.image} alt={`${industry.title} property`} loading="lazy" /><div><span>0{i + 1}</span><h3>{industry.title}</h3><p>{industry.description}</p></div></Reveal>)}</div>
      </div></section>

      <section className="section testimonial-section"><div className="container testimonial-grid">
        <SectionHeading eyebrow="CLIENT FEEDBACK" title="Customer feedback, published with permission." text="DAC values long-term relationships and accountable service. Testimonials will appear here only after the customer has approved the quotation and attribution." />
        <Reveal className="testimonial-panel">
          <span className="testimonial-label">CLIENT REFERENCES</span>
          <h3>Customer references are available on request.</h3>
          <p>Speak with the DAC team about relevant service experience for your property type or HVAC requirement.</p>
          <div className="testimonial-policy"><span><CheckCircle2 />Approved quotations only</span><span><CheckCircle2 />Verified client attribution</span></div>
          <Button to="/contact" variant="outline">Request a Reference</Button>
        </Reveal>
      </div></section>

      <section className="section stats-band"><div className="container stats-grid">
        <div><span className="eyebrow">COMPANY SNAPSHOT</span><h2>Serving customers across Bahrain.</h2><PlaceholderNote>Only verified figures from the supplied DAC reference are shown.</PlaceholderNote></div>
        <AnimatedCounter value="100+" label="Customers (reference value)" /><AnimatedCounter value="20+" label="Technicians (reference value)" /><AnimatedCounter value="24/7" label="Emergency option" /><AnimatedCounter value="Bahrain" label="Service coverage" />
      </div></section>

      <section className="cta-section"><div className="container cta-inner"><div><span className="eyebrow">NEED TECHNICAL SUPPORT?</span><h2>Let&apos;s discuss your cooling or contracting requirement.</h2></div><Button to="/contact" variant="light">Contact DAC</Button></div></section>
    </>
  )
}
