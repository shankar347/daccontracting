import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Mail, MapPin, Menu, Phone, X } from 'lucide-react'
import { company, services } from '../data/content'
import { Button } from './UI'

const nav = [
  ['Home', '/'], ['About', '/about'], ['Services', '/services'], ['Projects', '/projects'],
  ['Industries', '/industries'], ['Careers', '/careers'], ['Contact', '/contact'],
]

function Brand({ inverse = false }) {
  return (
    <Link to="/" className={`brand ${inverse ? 'brand-inverse' : ''}`} aria-label="DAC Contracting home">
      <span className="brand-mark" aria-hidden="true"><i>D</i></span>
      <span><strong>DAC CONTRACTING</strong><small>W.L.L. · TOTAL SOLUTIONS</small></span>
    </Link>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <div className="topbar"><div className="container topbar-inner"><span>DAC MEANS TOTAL SOLUTIONS · KINGDOM OF BAHRAIN</span><div><a href={company.phoneHref}>{company.phone}</a><a href={company.whatsappHref} target="_blank" rel="noreferrer">WhatsApp Maintenance</a></div></div></div>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {nav.map(([label, path]) => <NavLink key={path} to={path}>{label}</NavLink>)}
          </nav>
          <Button to="/contact" className="nav-cta">Let&apos;s Talk</Button>
          <button className="menu-button" onClick={() => setOpen(true)} aria-label="Open navigation" aria-expanded={open}><Menu /></button>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="mobile-menu-panel" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ ease: [0.22, 1, 0.36, 1], duration: .5 }}>
              <div className="mobile-menu-head"><Brand /><button onClick={() => setOpen(false)} aria-label="Close navigation"><X /></button></div>
              <nav aria-label="Mobile navigation">{nav.map(([label, path], i) => <motion.div key={path} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .08 + i * .04 }}><NavLink onClick={() => setOpen(false)} to={path}>{label}<span>0{i + 1}</span></NavLink></motion.div>)}</nav>
              <div className="mobile-menu-contact"><a href={company.phoneHref}>{company.phone}</a><a href={`mailto:${company.email}`}>{company.email}</a></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-lead"><Brand inverse /><p>Professional AC repair, planned maintenance, commercial HVAC and contracting support across the Kingdom of Bahrain.</p><div className="social-placeholder">Official social profiles to be added</div></div>
        <div><h3>Company</h3><Link to="/about">About DAC</Link><Link to="/projects">Our Projects</Link><Link to="/industries">Industries</Link><Link to="/careers">Careers</Link></div>
        <div><h3>Services</h3>{services.slice(0, 5).map(service => <Link key={service.id} to={`/services#${service.id}`}>{service.title}</Link>)}</div>
        <div><h3>Contact</h3><a href={company.phoneHref}><Phone />{company.phone}</a><a href={`mailto:${company.email}`}><Mail />{company.email}</a><span><MapPin />{company.address}</span></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} DAC Contracting W.L.L. · CR {company.cr}</span><div><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms & Conditions</Link></div></div>
    </footer>
  )
}

export default function Layout() {
  const location = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [location.pathname])
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main id="main-content" key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .25 }}>
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <a className="whatsapp-fab" href={company.whatsappHref} target="_blank" rel="noreferrer" aria-label="Contact DAC on WhatsApp">WhatsApp</a>
    </>
  )
}
