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
  FaVial
} from "react-icons/fa";

export const AboutSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [sectionInView, setSectionInView] = useState(false);
  const [itemInView, setItemInView] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and resize
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

  // Slide animations
  const slideInLeft:Variants = {
    hidden: { opacity: 0, x: isMobile ? 0 : -80 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: isMobile ? 0.6 : 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const slideInRight:Variants = {
    hidden: { opacity: 0, x: isMobile ? 0 : 80 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: isMobile ? 0.6 : 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // NEW: Special animation for services section on mobile
  const servicesContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.08 : 0.15,
        delayChildren: isMobile ? 0.1 : 0.2,
        duration: 0.8
      }
    }
  };

  const serviceCardAnimation: Variants = {
    hidden: { 
      opacity: 0, 
      y: isMobile ? 40 : 60,
      scale: isMobile ? 0.95 : 0.98
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const fadeInUp:Variants = {
    hidden: { opacity: 0, y: isMobile ? 20 : 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.15,
        delayChildren: isMobile ? 0.05 : 0.1
      }
    }
  };

  const cardHover:Variants = {
    rest: { y: 0, scale: 1 },
    hover: { 
      y: isMobile ? -4 : -6,
      scale: isMobile ? 1.01 : 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Services data
  const services = [
    { 
      icon: <FaStethoscope className="h-7 w-7" />, 
      title: "Essential Healthcare", 
      description: "Comprehensive primary care services with modern diagnostics" 
    },
    { 
      icon: <FaProcedures className="h-7 w-7" />, 
      title: "Surgery Services", 
      description: "Advanced surgical procedures with cutting-edge technology" 
    },
    { 
      icon: <FaBaby className="h-7 w-7" />, 
      title: "Women's Well-being", 
      description: "Complete maternity, gynecology & women's health services" 
    },
    { 
      icon: <FaHeart className="h-7 w-7" />, 
      title: "Cardiovascular Care", 
      description: "Advanced cardiac diagnostics, treatment & rehabilitation" 
    },
    { 
      icon: <FaUserInjured className="h-7 w-7" />, 
      title: "Gastrointestinal Wellness", 
      description: "Specialized care for digestive disorders & liver diseases" 
    },
    { 
      icon: <FaBone className="h-7 w-7" />, 
      title: "Spine & Ortho Care", 
      description: "Expert orthopedic surgery and spinal treatment" 
    },
    { 
      icon: <FaHandHoldingHeart className="h-7 w-7" />, 
      title: "Physiotherapy", 
      description: "Custom rehabilitation programs for recovery & mobility" 
    },
    { 
      icon: <FaAllergies className="h-7 w-7" />, 
      title: "Dermatology", 
      description: "Advanced skin care, cosmetic & laser treatments" 
    },
    { 
      icon: <FaVial className="h-7 w-7" />, 
      title: "Laboratory Test & Additional Services at SHMC", 
      description: "State-of-the-art diagnostic testing & comprehensive pathology services" 
    }
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
          className="text-center mb-20"
        >
          <motion.div variants={fadeInUp} className="inline-block mb-6">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-[#064E3B]/10 to-[#1FB6A6]/10 rounded-full">
              <div className="w-2 h-2 bg-[#064E3B] rounded-full animate-pulse" />
              <span className="text-[#064E3B] text-sm font-semibold tracking-wider uppercase">
                About Our Hospital
              </span>
            </div>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Siddiq Hospital & Maternity Complex
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            className="text-gray-600 text-xl max-w-3xl mx-auto"
          >
            Premier Healthcare Provider in Pakistan
          </motion.p>
        </motion.div>

        {/* First Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            data-section-item
            data-index="1"
            initial="hidden"
            animate={itemInView.includes(1) ? "visible" : "hidden"}
            variants={slideInLeft}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <div className="aspect-[4/3] relative bg-gray-100">
                <Image
                  src="/about/about1.jpg"
                  alt="Siddiq Hospital & Maternity Complex"
                  fill
                  className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onLoad={() => setImageLoaded(true)}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1516549655669-df6654e44780?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
                  }}
                />
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gray-100 animate-pulse" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              
              <div className="absolute inset-0 border-2 border-white/10 rounded-2xl pointer-events-none" />
            </div>
          </motion.div>

          <motion.div
            data-section-item
            data-index="2"
            initial="hidden"
            animate={itemInView.includes(2) ? "visible" : "hidden"}
            variants={slideInRight}
            className="space-y-6"
          >
            <h3 className="text-gray-900 text-3xl font-bold">
              Internationally Acclaimed Healthcare
            </h3>
            
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Siddiq Hospital & Maternity Complex stands as a 100-bed tertiary care multi-specialty hospital. 
                This modern facility features sub-specialized departments in Medical, Surgical, Obstetrics & Gynecology, 
                and Pediatrics, complemented by state-of-the-art anesthesia, radiology, and laboratory services.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                SHMC originated from the vision of a group of eminent medical specialists based in the United States 
                who wanted to bring their medical expertise back to their homeland, creating a beacon of healthcare 
                excellence in Pakistan.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Second Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            data-section-item
            data-index="3"
            initial="hidden"
            animate={itemInView.includes(3) ? "visible" : "hidden"}
            variants={slideInLeft}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 mb-2">
              <div className="h-px w-12 bg-gradient-to-r from-[#064E3B] to-[#1FB6A6]" />
              <span className="text-[#064E3B] font-semibold text-sm uppercase tracking-wider">
                Beyond Conventional
              </span>
            </div>

            <h3 className="text-gray-900 text-3xl font-bold">
              Comprehensive Healthcare Services
            </h3>
            
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                With a strong legacy of excellence, SHMC is committed to delivering high-quality medical care while 
                continuously improving standards across all departments.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                The hospital actively invests in the latest healthcare technologies to ensure exceptional patient 
                outcomes, while focusing on innovation in clinical results, infrastructure development, and continuous 
                staff training.
              </p>
            </div>
          </motion.div>

          <motion.div
            data-section-item
            data-index="4"
            initial="hidden"
            animate={itemInView.includes(4) ? "visible" : "hidden"}
            variants={slideInRight}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <div className="aspect-[4/3] relative bg-gray-100">
                <Image
                  src="/about/about2.jpg"
                  alt="SHMC Healthcare Services"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1586773860418-dc22f8b874bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              
              <div className="absolute inset-0 border-2 border-white/10 rounded-2xl pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Third Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            data-section-item
            data-index="5"
            initial="hidden"
            animate={itemInView.includes(5) ? "visible" : "hidden"}
            variants={slideInLeft}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <div className="aspect-[4/3] relative bg-gray-100">
                <Image
                  src="/about/about3.jpg"
                  alt="SHMC Patient Care"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              
              <div className="absolute inset-0 border-2 border-white/10 rounded-2xl pointer-events-none" />
            </div>
          </motion.div>

          <motion.div
            data-section-item
            data-index="6"
            initial="hidden"
            animate={itemInView.includes(6) ? "visible" : "hidden"}
            variants={slideInRight}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 mb-2">
              <div className="h-px w-12 bg-gradient-to-r from-[#064E3B] to-[#1FB6A6]" />
              <span className="text-[#064E3B] font-semibold text-sm uppercase tracking-wider">
                Our Commitment
              </span>
            </div>

            <h3 className="text-gray-900 text-3xl font-bold">
              Patient-Centered Excellence
            </h3>
            
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                At Siddiq Hospital & Maternity Complex, we provide comprehensive medical care with exceptional service 
                at every stage of the patient journey.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                We maintain professionalism, ethical medical practices, strict adherence to quality standards, patient 
                safety, and an inclusive work culture to be the preferred healthcare destination nationwide.
              </p>
            </div>

            <motion.div 
              initial="hidden"
              animate={itemInView.includes(6) ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4 pt-6"
            >
              {[
                { icon: <FaStar />, title: "Excellence", desc: "International standards" },
                { icon: <FaHeartbeat />, title: "Compassion", desc: "Personalized care" },
                { icon: <FaShieldAlt />, title: "Integrity", desc: "Ethical practices" },
                { icon: <FaHandsHelping />, title: "Trust", desc: "Patient confidence" }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                 
                  className="p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-[#064E3B]/10 to-[#1FB6A6]/10 rounded-lg">
                      <div className="text-[#064E3B] text-lg">
                        {value.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-bold text-sm mb-1">{value.title}</h4>
                      <p className="text-gray-600 text-xs">{value.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Services Section */}
        <div className="mb-24">
          {/* Services Header */}
          <motion.div
            data-section-item
            data-index="7"
            initial="hidden"
            animate={itemInView.includes(7) ? "visible" : "hidden"}
            variants={isMobile ? fadeInUp : slideInLeft}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-[#064E3B] to-[#1FB6A6]" />
              <span className="text-[#064E3B] font-semibold text-sm uppercase tracking-wider">
                Our Medical Services
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-[#064E3B] to-[#1FB6A6]" />
            </div>
            
            <h3 className="text-gray-900 text-3xl font-bold mb-6">
              Comprehensive Healthcare Services
            </h3>
            
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Offering specialized medical care across multiple disciplines with state-of-the-art facilities
            </p>
          </motion.div>

          {/* Services Grid - Updated animation */}
          <motion.div
            data-section-item
            data-index="8"
            initial="hidden"
            animate={itemInView.includes(8) ? "visible" : "hidden"}
            variants={servicesContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={serviceCardAnimation}
                whileHover="hover"
                initial="rest"
                animate="rest"
                
                className="group relative"
              >
                <div className="aspect-square bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                  {/* Background gradient effect */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#064E3B]/5 to-transparent rounded-bl-full" />
                  
                  {/* Content */}
                  <div className="p-8 flex flex-col items-center justify-center text-center h-full relative z-10">
                    {/* Icon Container */}
                    <div className="p-5 bg-gradient-to-br from-[#064E3B]/10 to-[#1FB6A6]/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-[#064E3B]">
                        {service.icon}
                      </div>
                    </div>
                    
                    {/* Service Title */}
                    <h4 className="text-gray-900 font-bold text-xl mb-4 group-hover:text-[#064E3B] transition-colors">
                      {service.title}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    {/* Learn More Indicator */}
                    <div
                      className="mt-auto pt-4 border-t border-gray-100 w-full cursor-pointer"
                      onClick={() => window.location.href = "/portfolio/services"}
                    >
                      <div className="flex items-center justify-center text-[#064E3B] font-medium text-sm group">
                        <span>Learn more</span>
                        <svg
                          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover bottom border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#064E3B] to-[#1FB6A6] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Decorative Line */}
          <motion.div
            data-section-item
            data-index="9"
            initial="hidden"
            animate={itemInView.includes(9) ? "visible" : "hidden"}
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center justify-center gap-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#064E3B]" />
              <span className="text-[#064E3B] font-semibold text-sm uppercase tracking-wider">
                24/7 Emergency Services Available
              </span>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#064E3B]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};