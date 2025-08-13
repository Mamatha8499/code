import { useEffect } from 'react'
import { FaCloud, FaRobot, FaCode, FaArrowDown, FaPlay } from 'react-icons/fa'
import CountUp from 'react-countup'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-extrabold text-xl tracking-tight">
            <span className="text-brand">Deepvibe</span> IT
          </a>
          <div className="hidden md:flex items-center gap-6 font-medium">
            <a href="#home" className="hover:text-brand transition-colors">Home</a>
            <a href="#services" className="hover:text-brand transition-colors">Services</a>
            <a href="#projects" className="hover:text-brand transition-colors">Projects</a>
            <a href="#about" className="hover:text-brand transition-colors">About</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-white shadow hover:shadow-md transition">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section id="home" className="relative isolate pt-28 overflow-hidden">
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-200 blur-3xl opacity-60" />
      <div className="absolute top-64 -left-24 h-72 w-72 rounded-full bg-amber-200 blur-3xl opacity-50" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight"
            >
              Empowering Your Digital Future
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg md:text-xl text-gray-600"
            >
              Innovative IT Solutions for Businesses Worldwide
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex items-center gap-4"
            >
              <a href="#contact" className="rounded-full bg-brand px-6 py-3 font-semibold text-white shadow-lg hover:shadow-xl transition">
                Get in Touch
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gray-300 hover:border-brand hover:text-brand transition">
                <FaPlay className="text-brand" /> View Work
              </a>
            </motion.div>
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[{label: 'Years', end: 10}, {label: 'Clients', end: 200}, {label: 'Projects', end: 500}].map(({label,end},i)=> (
                <div key={label} className="text-center">
                  <div className="text-4xl font-extrabold text-brand">
                    <CountUp end={end} duration={2.2} />+
                  </div>
                  <p className="mt-1 text-gray-600">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable={true} glareMaxOpacity={0.2} className="block rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
                  alt="Hero"
                  className="h-[420px] w-full object-cover"
                />
              </Tilt>
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-lg floating"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <FaCloud />
                  </span>
                  <div>
                    <p className="text-sm text-gray-500">Uptime</p>
                    <p className="font-semibold">99.99%</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-6 -right-6 rounded-xl bg-white p-4 shadow-lg floating"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    <FaRobot />
                  </span>
                  <div>
                    <p className="text-sm text-gray-500">AI Tasks</p>
                    <p className="font-semibold">1.2M/day</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <a href="#services" className="absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 text-gray-500 hover:text-brand">
        <FaArrowDown />
      </a>
    </section>
  )
}

function ServiceCard({ icon: Icon, title, text, img, delay = 0 }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5, delay }}>
      <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden">
        <img src={img} alt={title} className="h-44 w-full object-cover" />
        <div className="p-6">
          <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-brand"><Icon /></div>
          <h4 className="font-bold text-lg">{title}</h4>
          <p className="mt-2 text-gray-600">{text}</p>
        </div>
      </Tilt>
    </motion.div>
  )
}

function Services() {
  const cards = [
    {
      icon: FaCloud,
      title: 'Cloud Solutions',
      text: 'Secure, scalable cloud infrastructure for your business needs.',
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    },
    {
      icon: FaRobot,
      title: 'AI Automation',
      text: 'Automating workflows with intelligent AI-driven systems.',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    },
    {
      icon: FaCode,
      title: 'Web Development',
      text: 'Modern, responsive websites that engage and convert.',
      img: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1200&auto=format&fit=crop',
    },
  ]
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold">Our Core Services</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <ServiceCard key={c.title} {...c} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const items = [
    {
      title: 'E-Commerce Platform',
      img: 'https://images.unsplash.com/photo-1519336367661-eba9c1dfa5e6?q=80&w=1200&auto=format&fit=crop',
      text: 'A scalable online store with payment gateway integration and responsive design.'
    },
    {
      title: 'Mobile Banking App',
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
      text: 'Secure and intuitive mobile application for seamless banking experiences.'
    },
    {
      title: 'Analytics Dashboard',
      img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
      text: 'Real-time analytics dashboard for business insights and decision-making.'
    },
  ]
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold">Our Projects</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {items.map((it, i) => (
            <motion.div key={it.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
              <img src={it.img} alt={it.title} className="h-44 w-full object-cover" />
              <div className="p-5">
                <h4 className="font-bold">{it.title}</h4>
                <p className="mt-2 text-gray-600">{it.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-extrabold mb-4">About Deepvibe IT Solutions</h2>
          <p className="text-gray-600">We are a forward-thinking IT services provider, helping businesses grow with innovative technology solutions. Our mission is to deliver excellence in every project we undertake.</p>
          <a href="#contact" className="mt-6 inline-block rounded-full border border-gray-300 px-5 py-2 hover:border-brand hover:text-brand transition">Learn More</a>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <img className="rounded-2xl shadow-2xl" src="https://images.unsplash.com/photo-1529336953121-ad5a0d43d0ee?q=80&w=1400&auto=format&fit=crop" alt="About" />
        </motion.div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="contact" className="relative py-20 text-center text-white">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 to-indigo-600" />
      <h2 className="text-3xl font-extrabold" data-aos="fade-up">Let’s Build Something Great Together</h2>
      <p className="mt-3" data-aos="fade-up" data-aos-delay="150">Partner with Deepvibe IT Solutions for your next big project.</p>
      <a href="#contact" className="mt-8 inline-block rounded-full bg-white px-6 py-3 font-semibold text-brand shadow-lg hover:shadow-xl transition" data-aos="fade-up" data-aos-delay="300">
        Contact Us Now
      </a>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-gray-600">
        © {new Date().getFullYear()} Deepvibe IT Solutions Pvt Ltd. All rights reserved.
      </div>
    </footer>
  )
}

export default function App() {
  useEffect(() => {
    // noop; AOS is initialized in Root
  }, [])
  return (
    <div className="font-sans">
      <Nav />
      <Hero />
      <Services />
      <Projects />
      <About />
      <CTA />
      <Footer />
    </div>
  )
}
