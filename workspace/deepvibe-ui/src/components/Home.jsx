import React, { useEffect } from 'react';
import AOS from 'aos';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import {
  FaCloud,
  FaRobot,
  FaCode,
  FaShieldAlt,
  FaBolt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaCheckCircle,
} from 'react-icons/fa';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 40 });
  }, []);

  const heroBg =
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1974&auto=format&fit=crop';

  return (
    <div className="bg-light text-dark">
      {/* NAVIGATION BAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-lg">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#home">
            <span className="text-primary">Deepvibe</span> IT
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
              <li className="nav-item"><a className="nav-link fw-semibold" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link fw-semibold" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link fw-semibold" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link fw-semibold" href="#about">About</a></li>
              <li className="nav-item">
                <a className="nav-link fw-semibold btn btn-primary text-white px-3 py-1 ms-2" href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="position-relative min-vh-100 d-flex align-items-center justify-content-center text-center text-white overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 hero-overlay"></div>

        {/* Floating elements */}
        <motion.div
          className="position-absolute rounded-circle bg-primary opacity-25"
          style={{ width: 120, height: 120, left: '5%', top: '15%' }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="position-absolute rounded-circle bg-warning opacity-25"
          style={{ width: 80, height: 80, right: '10%', top: '25%' }}
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        />
        <motion.div
          className="position-absolute rounded-circle bg-info opacity-25"
          style={{ width: 160, height: 160, right: '20%', bottom: '10%' }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        />

        <div className="container position-relative" data-aos="fade-up">
          <h1 className="display-4 fw-bold mb-3">Empowering Your Digital Future</h1>
          <p className="lead mb-4">Innovative IT Solutions for Businesses Worldwide</p>
          <div className="d-flex gap-3 justify-content-center">
            <a href="#contact" className="btn btn-gradient px-4 py-2 shadow-lg">Get in Touch</a>
            <a href="#services" className="btn btn-outline-light px-4 py-2">Explore Services</a>
          </div>

          {/* Floating badges */}
          <div className="d-flex gap-3 justify-content-center flex-wrap mt-4">
            <span className="badge bg-primary-subtle text-primary d-flex align-items-center gap-2 py-2 px-3">
              <FaShieldAlt /> Secure by Design
            </span>
            <span className="badge bg-warning-subtle text-warning d-flex align-items-center gap-2 py-2 px-3">
              <FaBolt /> Lightning Fast
            </span>
            <span className="badge bg-info-subtle text-info d-flex align-items-center gap-2 py-2 px-3">
              <FaCheckCircle /> Trusted Partner
            </span>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS SECTION */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md-4" data-aos="fade-up">
              <h2 className="display-5 fw-bold text-primary">
                <CountUp end={10} duration={3} />+
              </h2>
              <p className="mt-2 fs-5">Years in Business</p>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="150">
              <h2 className="display-5 fw-bold text-primary">
                <CountUp end={200} duration={3} />+
              </h2>
              <p className="mt-2 fs-5">Happy Clients</p>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <h2 className="display-5 fw-bold text-primary">
                <CountUp end={500} duration={3} />+
              </h2>
              <p className="mt-2 fs-5">Projects Delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold display-6 mb-4" data-aos="fade-up">Our Core Services</h2>
          <div className="row g-4">
            <div className="col-md-4" data-aos="zoom-in">
              <div className="card h-100 border-0 shadow-lg glass-card hover-lift">
                <img
                  src="https://images.unsplash.com/photo-1518779551543-51755d3b6b83?q=80&w=2070&auto=format&fit=crop"
                  className="card-img-top"
                  alt="Cloud Solutions"
                />
                <div className="card-body">
                  <FaCloud className="text-primary fs-1 mb-2" />
                  <h5 className="card-title fw-bold">Cloud Solutions</h5>
                  <p className="card-text">Secure, scalable cloud infrastructure for your business needs.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="zoom-in" data-aos-delay="150">
              <div className="card h-100 border-0 shadow-lg glass-card hover-lift">
                <img
                  src="https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?q=80&w=2070&auto=format&fit=crop"
                  className="card-img-top"
                  alt="AI Automation"
                />
                <div className="card-body">
                  <FaRobot className="text-info fs-1 mb-2" />
                  <h5 className="card-title fw-bold">AI Automation</h5>
                  <p className="card-text">Automating workflows with intelligent AI-driven systems.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="zoom-in" data-aos-delay="300">
              <div className="card h-100 border-0 shadow-lg glass-card hover-lift">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2069&auto=format&fit=crop"
                  className="card-img-top"
                  alt="Web Development"
                />
                <div className="card-body">
                  <FaCode className="text-warning fs-1 mb-2" />
                  <h5 className="card-title fw-bold">Web Development</h5>
                  <p className="card-text">Modern, responsive websites that engage and convert.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold display-6 mb-4" data-aos="fade-up">Our Projects</h2>
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up">
              <div className="card h-100 border-0 shadow hover-lift">
                <img src="https://source.unsplash.com/600x400/?website,design" className="card-img-top" alt="E-Commerce Platform" />
                <div className="card-body">
                  <h5 className="card-title">E-Commerce Platform</h5>
                  <p className="card-text">A scalable online store with payment gateway integration and responsive design.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="150">
              <div className="card h-100 border-0 shadow hover-lift">
                <img src="https://source.unsplash.com/600x400/?app,development" className="card-img-top" alt="Mobile Banking App" />
                <div className="card-body">
                  <h5 className="card-title">Mobile Banking App</h5>
                  <p className="card-text">Secure and intuitive mobile application for seamless banking experiences.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 border-0 shadow hover-lift">
                <img src="https://source.unsplash.com/600x400/?dashboard,analytics" className="card-img-top" alt="Analytics Dashboard" />
                <div className="card-body">
                  <h5 className="card-title">Analytics Dashboard</h5>
                  <p className="card-text">Real-time analytics dashboard for business insights and decision-making.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-6" data-aos="fade-right">
              <h2 className="fw-bold display-6 mb-3">About Deepvibe IT Solutions</h2>
              <p className="mb-4">
                We are a forward-thinking IT services provider, helping businesses grow with
                innovative technology solutions. Our mission is to deliver excellence in
                every project we undertake.
              </p>
              <a href="#contact" className="btn btn-outline-primary px-4 py-2">Learn More</a>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2069&auto=format&fit=crop"
                alt="About Us"
                className="img-fluid rounded-4 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contact" className="py-5 text-white text-center position-relative" style={{ background: 'linear-gradient(135deg, #0d6efd, #6f42c1)' }}>
        <div className="container" data-aos="zoom-in">
          <h2 className="display-6 fw-bold mb-2">Let’s Build Something Great Together</h2>
          <p className="mb-4">Partner with Deepvibe IT Solutions for your next big project.</p>
          <a href="#" className="btn btn-light px-4 py-2">Contact Us Now</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-light pt-5 pb-4">
        <div className="container text-center text-md-start">
          <div className="row text-center text-md-start g-4">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-3 fw-bold text-primary">Deepvibe IT</h5>
              <p>Empowering your digital future with innovative IT solutions tailored to your business needs.</p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-3 fw-bold text-primary">Quick Links</h5>
              <p className="mb-2"><a href="#home" className="text-light text-decoration-none">Home</a></p>
              <p className="mb-2"><a href="#services" className="text-light text-decoration-none">Services</a></p>
              <p className="mb-2"><a href="#projects" className="text-light text-decoration-none">Projects</a></p>
              <p className="mb-2"><a href="#about" className="text-light text-decoration-none">About</a></p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-3 fw-bold text-primary">Contact</h5>
              <p className="mb-1">Hyderabad, India</p>
              <p className="mb-1">info@deepvibeit.com</p>
              <p>+91 98765 43210</p>
            </div>
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mt-3 text-center">
              <h5 className="text-uppercase mb-3 fw-bold text-primary">Follow Us</h5>
              <div className="d-flex justify-content-center gap-2">
                <a href="#" className="btn btn-outline-light btn-sm rounded-circle"><FaFacebookF /></a>
                <a href="#" className="btn btn-outline-light btn-sm rounded-circle"><FaTwitter /></a>
                <a href="#" className="btn btn-outline-light btn-sm rounded-circle"><FaLinkedinIn /></a>
                <a href="#" className="btn btn-outline-light btn-sm rounded-circle"><FaInstagram /></a>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row align-items-center">
            <div className="col text-center">
              <p className="mb-0">© {new Date().getFullYear()} Deepvibe IT Solutions Pvt Ltd. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}