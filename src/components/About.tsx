"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { 
  FaHospital, 
  FaHeartbeat, 
  FaStar,
  FaShieldAlt,
  FaHandsHelping,
  FaHandHoldingMedical,
  FaLightbulb,
  FaStethoscope,
  FaUserMd,
  FaUserInjured,
  FaBaby,
  FaHeart,
  FaProcedures,
  FaBone,
  FaHandHoldingHeart,
  FaAllergies,
  FaVial,
  FaAward,
  FaUserFriends,
  FaBuilding,
  FaChartLine
} from "react-icons/fa";

export const AboutSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [sectionInView, setSectionInView] = useState(false);
  const [itemInView, setItemInView] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionInView(true);
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            if (!itemInView.includes(index)) {
              setItemInView(prev => [...prev, index]);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    document.querySelectorAll('[data-section-item]').forEach((el, index) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkMobile);
    };
  }, [itemInView]);

  // Animations
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const slideInFromRight: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInFromLeft: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardHover: Variants = {
    rest: { y: 0, scale: 1 },
    hover: { 
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Core Values
  const coreValues = [
    { 
      icon: <FaAward className="h-6 w-6" />, 
      title: "Excellence", 
      description: "Setting the highest standards in medical care",
      color: "from-[#064E3B] to-[#0B6E5E]"
    },
    { 
      icon: <FaHeartbeat className="h-6 w-6" />, 
      title: "Compassion", 
      description: "Delivering care with empathy and understanding",
      color: "from-[#1FB6A6] to-[#0B6E5E]"
    },
    { 
      icon: <FaShieldAlt className="h-6 w-6" />, 
      title: "Integrity", 
      description: "Upholding ethical practices and transparency",
      color: "from-[#064E3B] to-[#1FB6A6]"
    },
    { 
      icon: <FaUserFriends className="h-6 w-6" />, 
      title: "Patient-Centered", 
      description: "Focusing on individual patient needs",
      color: "from-[#0B6E5E] to-[#1FB6A6]"
    }
  ];

  // Services data - Updated with comprehensive list
  const services = [
    { 
      icon: <FaStethoscope className="h-6 w-6" />, 
      title: "Essential Healthcare", 
      description: "Comprehensive primary care services with modern diagnostics" 
    },
    { 
      icon: <FaProcedures className="h-6 w-6" />, 
      title: "Surgery Services", 
      description: "Advanced surgical procedures with cutting-edge technology" 
    },
    { 
      icon: <FaBaby className="h-6 w-6" />, 
      title: "Women's Well-being", 
      description: "Complete maternity, gynecology & women's health services" 
    },
    { 
      icon: <FaHeart className="h-6 w-6" />, 
      title: "Cardiovascular Care", 
      description: "Advanced cardiac diagnostics, treatment & rehabilitation" 
    },
    { 
      icon: <FaUserInjured className="h-6 w-6" />, 
      title: "Gastrointestinal Wellness", 
      description: "Specialized care for digestive disorders & liver diseases" 
    },
    { 
      icon: <FaBone className="h-6 w-6" />, 
      title: "Spine & Ortho Care", 
      description: "Expert orthopedic surgery and spinal treatment" 
    },
    { 
      icon: <FaHandHoldingHeart className="h-6 w-6" />, 
      title: "Physiotherapy", 
      description: "Custom rehabilitation programs for recovery & mobility" 
    },
    { 
      icon: <FaAllergies className="h-6 w-6" />, 
      title: "Dermatology", 
      description: "Advanced skin care, cosmetic & laser treatments" 
    },
    { 
      icon: <FaVial className="h-6 w-6" />, 
      title: "Laboratory Services", 
      description: "State-of-the-art diagnostic testing & pathology services" 
    }
  ];

  return (
    <section ref={ref} className="relative py-16 md:py-20 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#064E3B]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tr from-[#1FB6A6]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-r from-transparent via-[#064E3B]/3 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <motion.div
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-block mb-4">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-[#064E3B]/10 to-[#1FB6A6]/10 rounded-full border border-[#064E3B]/20">
              <div className="w-2 h-2 bg-[#064E3B] rounded-full animate-pulse" />
              <span className="text-[#064E3B] text-xs font-semibold tracking-wider uppercase">
                Our Journey of Excellence
              </span>
            </div>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight"
          >
            Redefining Healthcare Excellence in Pakistan
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            className="text-gray-600 text-base md:text-lg max-w-4xl mx-auto leading-relaxed"
          >
            Siddiq Hospital & Maternity Complex - Where advanced medical technology meets compassionate care
          </motion.p>
        </motion.div>

        {/* Featured Image Card */}
        <motion.div
          data-section-item
          data-index="1"
          initial="hidden"
          animate={itemInView.includes(1) ? "visible" : "hidden"}
          variants={scaleIn}
          className="relative mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <div className="aspect-[21/9] relative bg-gradient-to-r from-[#064E3B] to-[#0B6E5E]">
              <Image
                src="/about/about1.jpg"
                alt="Siddiq Hospital & Maternity Complex - Premier Healthcare Facility"
                fill
                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
                sizes="100vw"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#064E3B]/80 via-[#064E3B]/60 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-3xl px-6 md:px-10 py-8">
                  
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">
                    100-Bed Tertiary Care Excellence
                  </h3>
                  <p className="text-white/90 text-sm md:text-base">
                    A state-of-the-art multi-specialty hospital bringing international medical standards to Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <motion.div
            data-section-item
            data-index="2"
            initial="hidden"
            animate={itemInView.includes(2) ? "visible" : "hidden"}
            variants={slideInFromLeft}
            className="relative"
          >
            <div className="h-full bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-[#064E3B]/10 to-[#1FB6A6]/10 rounded-lg">
                  <FaLightbulb className="h-6 w-6 text-[#064E3B]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-base">
                To establish Siddiq Hospital & Maternity Complex as the most trusted and advanced healthcare institution in Pakistan, 
                setting new benchmarks in medical excellence, patient care, and innovative treatment methodologies.
              </p>
            </div>
          </motion.div>

          <motion.div
            data-section-item
            data-index="3"
            initial="hidden"
            animate={itemInView.includes(3) ? "visible" : "hidden"}
            variants={slideInFromRight}
            className="relative"
          >
            <div className="h-full bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-[#1FB6A6]/10 to-[#064E3B]/10 rounded-lg">
                  <FaHandHoldingMedical className="h-6 w-6 text-[#064E3B]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-base">
                To provide comprehensive, compassionate, and accessible healthcare services through cutting-edge technology, 
                expert medical professionals, and a patient-centered approach that prioritizes safety, comfort, and positive outcomes.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          data-section-item
          data-index="4"
          initial="hidden"
          animate={itemInView.includes(4) ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#064E3B]" />
              <span className="text-[#064E3B] font-semibold text-xs uppercase tracking-wider">
                Our Core Values
              </span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#064E3B]" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Principles That Guide Us
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="group"
              >
                <div className="h-full bg-white rounded-xl border border-gray-200 shadow-md p-5 transition-all duration-300 group-hover:shadow-lg group-hover:border-[#064E3B]/30">
                  <div className={`mb-4 p-3 bg-gradient-to-br ${value.color}/10 rounded-lg w-fit`}>
                    <div className="text-[#064E3B]">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#064E3B] transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {value.description}
                  </p>
                  <div className="mt-4 h-1 w-10 bg-gradient-to-r from-transparent to-[#064E3B] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          data-section-item
          data-index="5"
          initial="hidden"
          animate={itemInView.includes(5) ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#064E3B]" />
              <span className="text-[#064E3B] font-semibold text-xs uppercase tracking-wider">
                Our Medical Services
              </span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#064E3B]" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Comprehensive Healthcare Services
            </h3>
            <p className="text-gray-600 text-sm max-w-3xl mx-auto mb-8">
              Offering specialized medical care across multiple disciplines with state-of-the-art facilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="group"
              >
                <div className="h-full bg-white rounded-xl border border-gray-200 shadow-md p-5 transition-all duration-300 group-hover:shadow-lg group-hover:border-[#064E3B]/30">
                  <div className="mb-4 p-3 bg-gradient-to-br from-[#064E3B]/10 to-[#1FB6A6]/10 rounded-lg w-fit">
                    <div className="text-[#064E3B]">
                      {service.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#064E3B] transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm mb-4">
                    {service.description}
                  </p>
                  <button
                    onClick={() => window.location.href = "/portfolio/services"}
                    className="text-[#064E3B] text-xs font-medium hover:text-[#1FB6A6] transition-colors flex items-center gap-1"
                  >
                    Learn more
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Innovation & Technology */}
        <motion.div
          data-section-item
          data-index="6"
          initial="hidden"
          animate={itemInView.includes(6) ? "visible" : "hidden"}
          variants={slideInFromLeft}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-gradient-to-br from-[#064E3B]/10 to-[#1FB6A6]/10 rounded-lg">
                    <FaChartLine className="h-6 w-6 text-[#064E3B]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Innovation & Technology</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  SHMC continuously invests in cutting-edge medical technology and advanced treatment methodologies. 
                  Our commitment to innovation ensures we provide world-class healthcare solutions.
                </p>
                <ul className="space-y-3">
                  {[
                    "State-of-the-art diagnostic imaging",
                    "Advanced surgical equipment",
                    "Digital patient records system",
                    "Telemedicine capabilities"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#1FB6A6] rounded-full" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-56 md:h-auto">
                <Image
                  src="/about/about2.jpg"
                  alt="Advanced Medical Technology at SHMC"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent md:hidden" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          data-section-item
          data-index="7"
          initial="hidden"
          animate={itemInView.includes(7) ? "visible" : "hidden"}
          variants={scaleIn}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#064E3B] to-[#0B6E5E] rounded-2xl p-6 md:p-8 shadow-xl">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Experience Healthcare Excellence
            </h3>
            <p className="text-white/90 text-base mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied patients who have trusted SHMC for their healthcare needs
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => window.location.href = "/portfolio/contact"}
                className="px-6 py-2.5 bg-white text-[#064E3B] font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-md text-sm"
              >
                Book Appointment
              </button>
              <button
                onClick={() => window.location.href = "/portfolio/services"}
                className="px-6 py-2.5 bg-transparent border border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors text-sm"
              >
                View Services
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};