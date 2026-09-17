import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Reveal({ children, className = '', delay = 0, ...props }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      {...props}
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({ eyebrow, title, text, align = 'left', light = false }) {
  return (
    <Reveal className={`section-heading ${align === 'center' ? 'center' : ''} ${light ? 'light' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  )
}

export function Button({ to, href, children, variant = 'primary', className = '' }) {
  const classes = `button button-${variant} ${className}`
  const content = <>{children}<ArrowRight size={17} aria-hidden="true" /></>
  if (to) return <Link className={classes} to={to}>{content}</Link>
  return <a className={classes} href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel={href?.startsWith('http') ? 'noreferrer' : undefined}>{content}</a>
}

export function PageHero({ eyebrow, title, text, image }) {
  return (
    <section className="page-hero">
      <div className="page-hero-image" style={{ backgroundImage: `url("${image}")` }} aria-hidden="true" />
      <div className="page-hero-shade" />
      <div className="container page-hero-content">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="eyebrow">{eyebrow}</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>{title}</motion.h1>
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .12 }}>{text}</motion.p>
      </div>
    </section>
  )
}

export function AnimatedCounter({ value, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const numeric = Number.parseInt(value, 10)
  const suffix = value.replace(String(numeric), '')
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView || Number.isNaN(numeric)) return
    let frame
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / 1100, 1)
      setCount(Math.round(numeric * (1 - Math.pow(1 - progress, 3))))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, numeric])

  return <div className="counter" ref={ref}><strong>{Number.isNaN(numeric) ? value : `${count}${suffix}`}</strong><span>{label}</span></div>
}

export function PlaceholderNote({ children = 'Representative content — replace with verified company information before publication.' }) {
  return <span className="placeholder-note">{children}</span>
}

export function SEO({ title, description }) {
  useEffect(() => {
    document.title = `${title} | DAC Contracting W.L.L.`
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = description
  }, [title, description])
  return null
}
