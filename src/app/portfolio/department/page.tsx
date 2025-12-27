"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { 
  FaAmbulance, 
  FaStethoscope, 
  FaProcedures, 
  FaFemale, 
  FaHeartbeat,
  
  FaBone,
  FaHandsHelping,
  FaAllergies,
  FaVial,
  FaArrowRight,
  FaHospital,
  FaStar,
  FaUserMd,
  FaShieldAlt,
  FaHandHoldingHeart
} from "react-icons/fa";

 const DepartmentsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [sectionInView, setSectionInView] = useState(false);
  const [itemInView, setItemInView] = useState<number[]>([]);

  useEffect(() => {
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
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    // Observe each section item
    document.querySelectorAll('[data-section-item]').forEach((el, index) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [itemInView]);

  // Animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  // Actual departments data from Siddiq Hospital website
  const departments = [
    { 
      icon: <FaAmbulance className="h-8 w-8" />, 
      title: "Emergency Department", 
      description: "24/7 urgent care unit with advanced life support and trauma care facilities. Immediate medical attention for critical conditions."
    },
    { 
      icon: <FaStethoscope className="h-8 w-8" />, 
      title: "General/Essential Healthcare", 
      description: "Comprehensive primary care services with modern diagnostics, preventive medicine, and routine health check-ups."
    },
    { 
      icon: <FaProcedures className="h-8 w-8" />, 
      title: "Surgery Department", 
      description: "Advanced surgical unit for operations and procedures with state-of-the-art operation theaters and expert surgeons."
    },
    { 
      icon: <FaFemale className="h-8 w-8" />, 
      title: "Women's Well-being / Maternity", 
      description: "Specialized obstetrics and women's health services including prenatal care, delivery, and postnatal support."
    },
    { 
      icon: <FaHeartbeat className="h-8 w-8" />, 
      title: "Cardiology Department", 
      description: "Comprehensive heart and cardiovascular care with advanced diagnostics, treatment, and rehabilitation."
    },
   
    { 
      icon: <FaBone className="h-8 w-8" />, 
      title: "Orthopedics & Spine Department", 
      description: "Specialized treatments for bone, joint & spine conditions with advanced surgical and non-surgical options."
    },
    { 
      icon: <FaHandsHelping className="h-8 w-8" />, 
      title: "Physiotherapy / Rehabilitation", 
      description: "Comprehensive rehabilitation and therapy support for recovery, mobility improvement, and pain management."
    },
    { 
      icon: <FaAllergies className="h-8 w-8" />, 
      title: "Dermatology Department", 
      description: "Advanced skin care, cosmetic treatments, laser therapy, and management of skin diseases and disorders."
    },
    { 
      icon: <FaVial className="h-8 w-8" />, 
      title: "Laboratory / Diagnostics", 
      description: "State-of-the-art lab and diagnostic testing support with accurate results for effective treatment planning."
    }
  ];

  // Key Features
  const keyFeatures = [
    { icon: <FaHospital />, title: "100+ Beds", description: "Modern inpatient facilities" },
    { icon: <FaUserMd />, title: "Expert Specialists", description: "Highly qualified medical team" },
    { icon: <FaStar />, title: "Advanced Technology", description: "Latest medical equipment" },
    { icon: <FaShieldAlt />, title: "Quality Care", description: "International standards" }
  ];

  return (
    <section ref={ref} className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#064E3B]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-[#1FB6A6]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-block mb-6">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-[#064E3B]/10 to-[#1FB6A6]/10 rounded-full">
              <div className="w-2 h-2 bg-[#064E3B] rounded-full animate-pulse" />
              <span className="text-[#064E3B] text-sm font-semibold tracking-wider uppercase">
                Our Specialized Departments
              </span>
            </div>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#064E3B] mb-6"
          >
            Comprehensive Medical Services
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            className="text-[#1E293B] text-lg md:text-xl max-w-3xl mx-auto"
          >
            Providing exceptional healthcare across 10 specialized departments with advanced technology and compassionate care
          </motion.p>
        </motion.div>

        {/* Key Features - Top Section */}
        <motion.div
          data-section-item
          data-index="1"
          initial="hidden"
          animate={itemInView.includes(1) ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover="hover"
                initial="rest"
                animate="rest"
                
                className="group"
              >
                <div className="bg-white rounded-2xl border border-gray-300 p-6 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 bg-gradient-to-br from-[#064E3B]/10 to-[#1FB6A6]/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-2xl text-[#064E3B]">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[#064E3B] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#1E293B]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Departments Grid */}
        <motion.div
          data-section-item
          data-index="2"
          initial="hidden"
          animate={itemInView.includes(2) ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {departments.map((department, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover="hover"
                initial="rest"
                animate="rest"
                
                className="group"
              >
                <div className="bg-white rounded-2xl border border-gray-300 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                  {/* Top Icon Section */}
                  <div className="relative p-8 bg-gradient-to-br from-white to-gray-50">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#064E3B]/5 to-transparent rounded-bl-full" />
                    
                    <div className="flex items-center justify-center mb-6">
                      <div className="p-5 bg-gradient-to-br from-[#064E3B]/10 to-[#1FB6A6]/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <div className="text-[#064E3B] group-hover:text-[#1FB6A6] transition-colors duration-300">
                          {department.icon}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-[#064E3B] text-center mb-3">
                      {department.title}
                    </h3>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 pt-0 flex-1 flex flex-col">
                    <p className="text-[#1E293B] text-sm leading-relaxed mb-6 flex-1">
                      {department.description}
                    </p>

                    {/* Learn More Button */}
                   
                  </div>

                  {/* Hover Bottom Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#064E3B] to-[#1FB6A6] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          data-section-item
          data-index="3"
          initial="hidden"
          animate={itemInView.includes(3) ? "visible" : "hidden"}
          variants={fadeInUp}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-[#064E3B] to-[#0B6E5E] rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-white" />
                  <span className="text-white font-semibold text-sm uppercase tracking-wider">
                    Always Here for You
                  </span>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-white" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Need Emergency Medical Assistance?
                </h3>
                
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Our Emergency Department is staffed 24/7 with experienced medical professionals ready to provide immediate care.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => window.location.href = "tel:+924235110072"}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#064E3B] rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
                  >
                    <FaAmbulance className="h-6 w-6 transform group-hover:scale-110 transition-transform" />
                    <span>Emergency: +92 423 5110072</span>
                  </button>
                  
                  <button
                    onClick={() => window.location.href = "/portfolio/contact"}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-[#064E3B] transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
                  >
                    <FaHandHoldingHeart className="h-6 w-6 transform group-hover:scale-110 transition-transform" />
                    <span>Book Appointment</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      
      </div>
    </section>
  );
}; export default DepartmentsSection;