import AOS from "aos";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { FaCloud, FaRobot, FaCode, FaRocket, FaLightbulb, FaUsers, FaChartLine, FaShieldAlt, FaMobile, FaGlobe, FaDatabase, FaCog, FaStar, FaArrowRight, FaPlay, FaCheck, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { MdComputer, MdSecurity, MdAnalytics, MdSpeed, MdSupport } from "react-icons/md";
import { BiTrendingUp, BiTime, BiTargetLock } from "react-icons/bi";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import heroImg from "../assets/hero.jpg";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        AOS.init({ 
            duration: 1000, 
            once: true,
            easing: 'ease-in-out',
            offset: 100
        });
        
        // Floating animation trigger
        const timer = setTimeout(() => setIsVisible(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A scalable online store with payment gateway integration and responsive design.",
            image: "https://source.unsplash.com/600x400/?website,design",
            tech: ["React", "Node.js", "MongoDB"],
            category: "Web Development"
        },
        {
            id: 2,
            title: "Mobile Banking App",
            description: "Secure and intuitive mobile application for seamless banking experiences.",
            image: "https://source.unsplash.com/600x400/?app,development",
            tech: ["React Native", "Firebase", "Stripe"],
            category: "Mobile App"
        },
        {
            id: 3,
            title: "Analytics Dashboard",
            description: "Real-time analytics dashboard for business insights and decision-making.",
            image: "https://source.unsplash.com/600x400/?dashboard,analytics",
            tech: ["Vue.js", "Python", "PostgreSQL"],
            category: "Data Analytics"
        }
    ];

    const services = [
        {
            icon: <FaCloud className="text-6xl text-blue-500" />,
            title: "Cloud Solutions",
            description: "Secure, scalable cloud infrastructure for your business needs.",
            features: ["AWS/Azure Setup", "Cloud Migration", "24/7 Monitoring"],
            color: "blue"
        },
        {
            icon: <FaRobot className="text-6xl text-teal-500" />,
            title: "AI Automation",
            description: "Automating workflows with intelligent AI-driven systems.",
            features: ["Process Automation", "Machine Learning", "Predictive Analytics"],
            color: "teal"
        },
        {
            icon: <FaCode className="text-6xl text-amber-500" />,
            title: "Web Development",
            description: "Modern, responsive websites that engage and convert.",
            features: ["Custom Development", "E-commerce", "Progressive Web Apps"],
            color: "amber"
        }
    ];

    return (
        <div className="font-sans text-gray-800 overflow-x-hidden">
            {/* Floating Background Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className={`absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse transition-all duration-3000 ${isVisible ? 'translate-y-0' : '-translate-y-20'}`}></div>
                <div className={`absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse transition-all duration-3000 delay-1000 ${isVisible ? 'translate-y-0' : 'translate-y-20'}`}></div>
                <div className={`absolute bottom-40 left-20 w-24 h-24 bg-green-200 rounded-full opacity-20 animate-pulse transition-all duration-3000 delay-2000 ${isVisible ? 'translate-y-0' : '-translate-y-20'}`}></div>
                <div className={`absolute bottom-20 right-10 w-12 h-12 bg-red-200 rounded-full opacity-20 animate-pulse transition-all duration-3000 delay-3000 ${isVisible ? 'translate-y-0' : 'translate-y-20'}`}></div>
            </div>

            {/* Enhanced Navigation Bar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 fixed-top shadow-2xl backdrop-blur-sm bg-opacity-95 z-50">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-4 d-flex align-items-center" href="#home">
                        <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-2 rounded-lg me-2">
                            <FaRocket className="text-white" />
                        </div>
                        <span className="text-gradient">Deepvibe</span> IT
                    </a>

                    <button
                        className="navbar-toggler border-0"
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
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link fw-semibold position-relative" href="#home">
                                    Home
                                    <span className="nav-indicator"></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-semibold position-relative" href="#services">
                                    Services
                                    <span className="nav-indicator"></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-semibold position-relative" href="#projects">
                                    Projects
                                    <span className="nav-indicator"></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-semibold position-relative" href="#about">
                                    About
                                    <span className="nav-indicator"></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn btn-primary text-white px-4 py-2 ms-3 rounded-pill shadow-lg hover:scale-105 transition-all duration-300" href="#contact">
                                    <FaPhone className="me-2" />
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Enhanced Hero Section */}
            <section
                id="home"
                className="relative bg-cover bg-center h-screen flex items-center justify-center text-center text-white overflow-hidden"
                style={{ backgroundImage: `url(${heroImg})` }}
            >
                {/* Animated Background Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-900/50 to-purple-900/50"></div>
                
                {/* Floating Particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-white rounded-full opacity-60 animate-float"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${3 + Math.random() * 2}s`
                            }}
                        ></div>
                    ))}
                </div>

                <div className="relative z-10 bg-black/30 backdrop-blur-sm p-12 rounded-3xl border border-white/20 shadow-2xl max-w-4xl mx-4">
                    <div className="mb-6">
                        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                            <FaRocket className="text-yellow-400 me-2 animate-bounce" />
                            <span className="text-sm font-medium">Innovation at its Best</span>
                        </div>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent" data-aos="fade-up">
                        Empowering Your Digital Future
                    </h1>
                    
                    <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                        Innovative IT Solutions for Businesses Worldwide
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-aos="fade-up" data-aos-delay="400">
                        <a
                            href="#contact"
                            className="group bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 font-semibold text-lg flex items-center"
                        >
                            Get in Touch
                            <IoIosArrowForward className="ms-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                        
                        <button className="group bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 font-semibold text-lg flex items-center">
                            <FaPlay className="me-2" />
                            Watch Demo
                        </button>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* Enhanced Highlights Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
                <div className="container mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4" data-aos="fade-up">
                            Why Choose <span className="text-gradient">Deepvibe IT</span>?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            We deliver exceptional results through innovation, expertise, and dedication
                        </p>
                    </div>
                    
                    <div className="row text-center">
                        <div className="col-md-4 mb-8" data-aos="fade-up">
                            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                    <BiTime className="text-white text-3xl" />
                                </div>
                                <h3 className="text-4xl font-bold text-blue-600 mb-2">
                                    <CountUp end={10} duration={3} />+
                                </h3>
                                <p className="text-lg text-gray-600 font-medium">Years in Business</p>
                                <p className="text-gray-500 mt-2">Proven track record of success</p>
                            </div>
                        </div>
                        
                        <div className="col-md-4 mb-8" data-aos="fade-up" data-aos-delay="200">
                            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                    <FaUsers className="text-white text-3xl" />
                                </div>
                                <h3 className="text-4xl font-bold text-green-600 mb-2">
                                    <CountUp end={200} duration={3} />+
                                </h3>
                                <p className="text-lg text-gray-600 font-medium">Happy Clients</p>
                                <p className="text-gray-500 mt-2">Satisfied customers worldwide</p>
                            </div>
                        </div>
                        
                        <div className="col-md-4 mb-8" data-aos="fade-up" data-aos-delay="400">
                            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                    <FaChartLine className="text-white text-3xl" />
                                </div>
                                <h3 className="text-4xl font-bold text-purple-600 mb-2">
                                    <CountUp end={500} duration={3} />+
                                </h3>
                                <p className="text-lg text-gray-600 font-medium">Projects Delivered</p>
                                <p className="text-gray-500 mt-2">Quality solutions delivered</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Services Section */}
            <section id="services" className="py-20 bg-white relative">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4" data-aos="fade-up">
                            Our <span className="text-gradient">Core Services</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            Comprehensive IT solutions tailored to your business needs
                        </p>
                    </div>
                    
                    <div className="row">
                        {services.map((service, index) => (
                            <div className="col-md-4 mb-8" key={index} data-aos="fade-up" data-aos-delay={index * 200}>
                                <div className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100 relative overflow-hidden">
                                    {/* Hover Effect Background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}-500/5 to-${service.color}-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                    
                                    <div className="relative z-10">
                                        <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                            {service.icon}
                                        </div>
                                        
                                        <h4 className="font-bold text-2xl mb-4 text-gray-800 group-hover:text-gray-900 transition-colors">
                                            {service.title}
                                        </h4>
                                        
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {service.description}
                                        </p>
                                        
                                        <ul className="space-y-2 mb-6">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center text-gray-600">
                                                    <FaCheck className="text-green-500 me-3 flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        
                                        <button className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3 rounded-xl font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-300 flex items-center justify-center group">
                                            Learn More
                                            <IoIosArrowForward className="ms-2 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Projects Section */}
            <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4" data-aos="fade-up">
                            Featured <span className="text-gradient">Projects</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            Showcase of our innovative solutions and successful implementations
                        </p>
                    </div>
                    
                    <div className="row">
                        {projects.map((project, index) => (
                            <div className="col-md-4 mb-8" key={project.id} data-aos="fade-up" data-aos-delay={index * 200}>
                                <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden">
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        
                                        {/* Project Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                                {project.category}
                                            </span>
                                        </div>
                                        
                                        {/* View Project Button */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <button className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center">
                                                <FaArrowRight className="me-2" />
                                                View Project
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div className="p-6">
                                        <h4 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-gray-900 transition-colors">
                                            {project.title}
                                        </h4>
                                        
                                        <p className="text-gray-600 mb-4 leading-relaxed">
                                            {project.description}
                                        </p>
                                        
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center text-yellow-500">
                                                {[...Array(5)].map((_, i) => (
                                                    <FaStar key={i} className="text-sm" />
                                                ))}
                                            </div>
                                            <span className="text-sm text-gray-500">4.9/5</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced About Section */}
            <section id="about" className="py-20 bg-white relative">
                <div className="container mx-auto">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-8" data-aos="fade-right">
                            <div className="pr-lg-5">
                                <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
                                    <FaLightbulb className="me-2 text-yellow-500" />
                                    <span className="font-medium">About Us</span>
                                </div>
                                
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                                    About <span className="text-gradient">Deepvibe IT</span> Solutions
                                </h2>
                                
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    We are a forward-thinking IT services provider, helping businesses grow with
                                    innovative technology solutions. Our mission is to deliver excellence in
                                    every project we undertake.
                                </p>
                                
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start">
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center me-4 mt-1">
                                            <FaCheck className="text-green-600 text-sm" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">Expert Team</h4>
                                            <p className="text-gray-600">Skilled professionals with years of experience</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center me-4 mt-1">
                                            <FaCheck className="text-blue-600 text-sm" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">Quality Assurance</h4>
                                            <p className="text-gray-600">Rigorous testing and quality control processes</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start">
                                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center me-4 mt-1">
                                            <FaCheck className="text-purple-600 text-sm" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">24/7 Support</h4>
                                            <p className="text-gray-600">Round-the-clock technical support and maintenance</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a href="/about" className="btn btn-primary px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                                        Learn More
                                        <IoIosArrowForward className="ms-2" />
                                    </a>
                                    
                                    <button className="btn btn-outline-primary px-8 py-3 rounded-full font-semibold text-lg border-2 hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center">
                                        <FaPlay className="me-2" />
                                        Watch Video
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6" data-aos="fade-left">
                            <div className="relative">
                                <img
                                    src="https://source.unsplash.com/600x400/?office,technology"
                                    alt="About Us"
                                    className="rounded-2xl shadow-2xl w-full"
                                />
                                
                                {/* Floating Stats Card */}
                                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                                        <div className="text-gray-600 font-medium">Team Members</div>
                                    </div>
                                </div>
                                
                                {/* Floating Achievement Badge */}
                                <div className="absolute -top-6 -left-6 bg-gradient-to-br from-yellow-400 to-orange-500 p-4 rounded-full shadow-xl">
                                    <FaStar className="text-white text-2xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced CTA Section */}
            <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px'
                    }}></div>
                </div>
                
                <div className="container mx-auto relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6" data-aos="fade-up">
                            Let's Build Something <span className="text-yellow-300">Great</span> Together
                        </h2>
                        
                        <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                            Partner with Deepvibe IT Solutions for your next big project. 
                            Transform your ideas into reality with our expertise.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12" data-aos="fade-up" data-aos-delay="400">
                            <a
                                href="#contact"
                                className="group bg-yellow-400 text-gray-900 px-10 py-4 rounded-full shadow-2xl hover:shadow-yellow-400/25 hover:scale-105 transition-all duration-300 font-bold text-xl flex items-center"
                            >
                                Start Your Project
                                <FaRocket className="ms-3 group-hover:translate-x-1 transition-transform" />
                            </a>
                            
                            <button className="group bg-white/20 backdrop-blur-sm px-10 py-4 rounded-full border-2 border-white/30 hover:bg-white/30 transition-all duration-300 font-bold text-xl flex items-center">
                                <FaPhone className="me-3" />
                                Call Now
                            </button>
                        </div>
                        
                        {/* Contact Info Cards */}
                        <div className="row text-center">
                            <div className="col-md-4 mb-6" data-aos="fade-up" data-aos-delay="600">
                                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                                    <FaPhone className="text-3xl text-yellow-300 mx-auto mb-4" />
                                    <h4 className="font-semibold mb-2">Phone</h4>
                                    <p className="text-blue-100">+91 98765 43210</p>
                                </div>
                            </div>
                            
                            <div className="col-md-4 mb-6" data-aos="fade-up" data-aos-delay="800">
                                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                                    <FaEnvelope className="text-3xl text-yellow-300 mx-auto mb-4" />
                                    <h4 className="font-semibold mb-2">Email</h4>
                                    <p className="text-blue-100">info@deepvibeit.com</p>
                                </div>
                            </div>
                            
                            <div className="col-md-4 mb-6" data-aos="fade-up" data-aos-delay="1000">
                                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                                    <FaMapMarkerAlt className="text-3xl text-yellow-300 mx-auto mb-4" />
                                    <h4 className="font-semibold mb-2">Location</h4>
                                    <p className="text-blue-100">Hyderabad, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Footer */}
            <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>
                
                <div className="container mx-auto relative z-10">
                    <div className="row text-center text-md-start">
                        {/* Company Info */}
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 mb-8">
                            <div className="d-flex align-items-center mb-4">
                                <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-3 rounded-xl me-3">
                                    <FaRocket className="text-white text-xl" />
                                </div>
                                <h5 className="text-uppercase mb-0 font-weight-bold text-gradient fs-4">
                                    Deepvibe IT
                                </h5>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                Empowering your digital future with innovative IT solutions tailored
                                to your business needs. We transform ideas into reality.
                            </p>
                            
                            {/* Social Media Icons */}
                            <div className="flex gap-3 mt-6 justify-center justify-md-start">
                                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 group">
                                    <FaFacebookF className="text-white group-hover:scale-110 transition-transform" />
                                </a>
                                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-400 transition-all duration-300 group">
                                    <FaTwitter className="text-white group-hover:scale-110 transition-transform" />
                                </a>
                                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group">
                                    <FaLinkedinIn className="text-white group-hover:scale-110 transition-transform" />
                                </a>
                                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-500 transition-all duration-300 group">
                                    <FaInstagram className="text-white group-hover:scale-110 transition-transform" />
                                </a>
                                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 group">
                                    <FaGithub className="text-white group-hover:scale-110 transition-transform" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 mb-8">
                            <h5 className="text-uppercase mb-6 font-weight-bold text-gradient">
                                Quick Links
                            </h5>
                            <div className="space-y-3">
                                <p><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                                    <IoIosArrowForward className="me-2 text-blue-400 group-hover:translate-x-1 transition-transform" />
                                    Home
                                </a></p>
                                <p><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                                    <IoIosArrowForward className="me-2 text-blue-400 group-hover:translate-x-1 transition-transform" />
                                    Services
                                </a></p>
                                <p><a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                                    <IoIosArrowForward className="me-2 text-blue-400 group-hover:translate-x-1 transition-transform" />
                                    Projects
                                </a></p>
                                <p><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                                    <IoIosArrowForward className="me-2 text-blue-400 group-hover:translate-x-1 transition-transform" />
                                    About
                                </a></p>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 mb-8">
                            <h5 className="text-uppercase mb-6 font-weight-bold text-gradient">
                                Services
                            </h5>
                            <div className="space-y-3">
                                <p><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                                    <IoIosArrowForward className="me-2 text-blue-400 group-hover:translate-x-1 transition-transform" />
                                    Web Development
                                </a></p>
                                <p><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                                    <IoIosArrowForward className="me-2 text-blue-400 group-hover:translate-x-1 transition-transform" />
                                    Mobile Apps
                                </a></p>
                                <p><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                                    <IoIosArrowForward className="me-2 text-blue-400 group-hover:translate-x-1 transition-transform" />
                                    Cloud Solutions
                                </a></p>
                                <p><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                                    <IoIosArrowForward className="me-2 text-blue-400 group-hover:translate-x-1 transition-transform" />
                                    AI & ML
                                </a></p>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 mb-8">
                            <h5 className="text-uppercase mb-6 font-weight-bold text-gradient">
                                Contact Info
                            </h5>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <FaMapMarkerAlt className="text-blue-400 mt-1 me-3 flex-shrink-0" />
                                    <p className="text-gray-300">Hyderabad, India</p>
                                </div>
                                <div className="flex items-start">
                                    <FaEnvelope className="text-blue-400 mt-1 me-3 flex-shrink-0" />
                                    <p className="text-gray-300">info@deepvibeit.com</p>
                                </div>
                                <div className="flex items-start">
                                    <FaPhone className="text-blue-400 mt-1 me-3 flex-shrink-0" />
                                    <p className="text-gray-300">+91 98765 43210</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="border-gray-700 my-8" />

                    {/* Copyright */}
                    <div className="row align-items-center">
                        <div className="col-md-7 col-lg-8">
                            <p className="mb-0 text-gray-400">
                                © {new Date().getFullYear()} Deepvibe IT Solutions Pvt Ltd. All rights reserved.
                            </p>
                        </div>
                        <div className="col-md-5 col-lg-4 text-md-end">
                            <p className="mb-0 text-gray-400">
                                Made with ❤️ by Deepvibe Team
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}