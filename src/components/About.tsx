"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { 
  FaHospital, 
  FaUserMd, 
  FaHeartbeat, 
  FaUsers,
  FaAward,
  FaStethoscope,
  FaHandHoldingMedical,

  FaLightbulb,
  FaShieldAlt,
  FaStar,
  FaHandsHelping,
  FaBolt,
  FaChartLine,
  FaUsersCog,
  FaMicroscope
} from "react-icons/fa";

export const AboutSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Stop observing once in view
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: "0px 0px -50px 0px" // Adjust trigger point
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Stats data
  const stats = [
    { number: "100+", label: "Hospital Beds", icon: <FaHospital /> },
    { number: "50+", label: "Expert Doctors", icon: <FaUserMd /> },
    { number: "3000+", label: "Annual Procedures", icon: <FaStethoscope /> },
    { number: "20000+", label: "Annual Patients", icon: <FaUsers /> }
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants:Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12
      }
    }
  };

  const fadeInUp:Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const slideInLeft:Variants = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const slideInRight:Variants = {
    hidden: { x: 60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const scaleIn:Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Check if images exist function


  return (
    <section ref={ref} className="relative py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric patterns */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-[#064E3B]/5 to-[#1FB6A6]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tr from-[#064E3B]/5 to-[#0B6E5E]/5 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(90deg, #064E3B 1px, transparent 1px),
                             linear-gradient(180deg, #064E3B 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12 md:mb-20"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4 md:mb-5">
            <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-gradient-to-r from-[#064E3B]/10 to-[#1FB6A6]/10 rounded-full border border-[#064E3B]/20">
              <div className="w-2 h-2 bg-[#064E3B] rounded-full animate-pulse" />
              <span className="text-[#064E3B] text-xs md:text-sm font-semibold tracking-wider uppercase">
                About Siddiq
              </span>
            </div>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-[2rem] lg:text-[2.5rem] font-bold text-gray-900 mb-4 md:mb-5 leading-tight"
          >
            Hospital & Maternity Complex
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-gray-700 text-base md:text-[1.2rem] font-medium max-w-3xl mx-auto"
          >
            The Premier Healthcare Provider in Pakistan
          </motion.p>
        </motion.div>

        {/* First Section - Image 1 with Introduction */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-14 lg:gap-20 items-center mb-12 md:mb-24">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={scaleIn}
            className="relative group"
          >
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl">
              <div className="aspect-[4/3] relative bg-gray-200">
                {/* First, try your local image */}
                <Image
                  src="/about/about1.jpg"
                  alt="Siddiq Hospital & Maternity Complex - Premier Healthcare Provider"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => {
                    // If local image fails, use Unsplash fallback
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1516549655669-df6654e44780?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white rounded-lg md:rounded-xl shadow-lg md:shadow-2xl p-4 md:p-6 border border-gray-200"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-2 md:p-3 bg-gradient-to-br from-[#064E3B] to-[#0B6E5E] rounded-lg">
                  <FaAward className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div>
                  <div className="text-lg md:text-2xl font-bold text-gray-900">100+</div>
                  <div className="text-gray-600 text-xs md:text-sm font-medium">Hospital Beds</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="space-y-4 md:space-y-6"
          >
            <h3 className="text-gray-900 text-xl md:text-[1.8rem] font-bold leading-tight">
              Internationally Acclaimed Healthcare Excellence
            </h3>
            
            <div className="space-y-3 md:space-y-4">
              <p className="text-gray-700 text-sm md:text-[1rem] leading-relaxed">
                Nestled in the heart of Lahore, Siddiq Hospital & Maternity Complex stands as an internationally 
                acclaimed 100-bed tertiary care multi-specialty hospital and healthcare provider. This modern facility 
                boasts sub-specialized departments in Medical, Surgical, Obstetrics & Gynecology, and Pediatrics, 
                complemented by cutting-edge anesthesia, radiology, and laboratory services.
              </p>
              
              <p className="text-gray-700 text-sm md:text-[1rem] leading-relaxed">
                SHMC originated from the vision of a group of eminent medical specialists based in the United States. 
                Their aspiration to bring back their medical expertise to their homeland transformed into a beacon of 
                healthcare excellence in Pakistan, starting from an idea conceived during a Pennsylvania retreat.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 pt-3 md:pt-4">
              {stats.slice(0, 2).map((stat, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="p-1.5 md:p-2 bg-gray-100 rounded-lg">
                    <div className="text-[#064E3B] text-sm md:text-base">
                      {stat.icon}
                    </div>
                  </div>
                  <div>
                    <div className="text-lg md:text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-gray-600 text-xs md:text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Second Section - Image 2 with Beyond Conventional Healthcare */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-14 lg:gap-20 items-center mb-12 md:mb-24">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInRight}
            className="lg:order-2 relative group"
          >
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl">
              <div className="aspect-[4/3] relative bg-gray-200">
                <Image
                  src="/about/about2.jpg"
                  alt="SHMC Beyond Conventional Healthcare Offerings"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1586773860418-dc22f8b874bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>

            {/* Innovation Badge */}
            <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 bg-gradient-to-r from-[#064E3B] to-[#0B6E5E] text-white px-3 py-1.5 md:px-5 md:py-2.5 rounded-lg shadow-xl">
              <div className="flex items-center gap-1 md:gap-2">
                <FaBolt className="h-3 w-3 md:h-4 md:w-4" />
                <span className="font-bold text-xs md:text-sm">Innovation Leader</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInLeft}
            className="lg:order-1 space-y-4 md:space-y-6"
          >
            <div className="inline-flex items-center gap-2 mb-3 md:mb-4">
              <FaChartLine className="h-4 w-4 md:h-5 md:w-5 text-[#064E3B]" />
              <span className="text-[#064E3B] font-semibold text-xs md:text-sm uppercase tracking-wider">
                Beyond Conventional
              </span>
            </div>

            <h3 className="text-gray-900 text-xl md:text-[1.8rem] font-bold leading-tight">
              Beyond Conventional Healthcare Offerings
            </h3>
            
            <div className="space-y-3 md:space-y-4">
              <p className="text-gray-700 text-sm md:text-[1rem] leading-relaxed">
                Siddiq Hospital & Maternity Complex (SHMC) is at the forefront of innovative healthcare practices 
                in Pakistan. With a strong legacy of excellence, SHMC is committed to delivering high-quality 
                medical care while continuously improving standards across all departments.
              </p>
              
              <p className="text-gray-700 text-sm md:text-[1rem] leading-relaxed">
                The hospital actively invests in the latest healthcare technologies to ensure exceptional patient 
                outcomes. Alongside technological advancement, SHMC focuses on innovation in clinical results, 
                infrastructure development, and continuous staff training.
              </p>
              
              <p className="text-gray-700 text-sm md:text-[1rem] leading-relaxed">
                Supported by highly experienced, board-certified doctors from the United States and the United Kingdom, 
                as well as well-trained nurses and skilled paramedical staff, SHMC is dedicated to raising healthcare 
                service standards to new heights across the country.
              </p>
            </div>

            {/* Innovation Points */}
            <div className="space-y-2 md:space-y-3 pt-3 md:pt-4">
              {[
                "Latest Healthcare Technologies",
                "Board-Certified International Doctors",
                "Continuous Staff Training",
                "Infrastructure Development"
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#064E3B] rounded-full flex-shrink-0" />
                  <span className="text-gray-700 text-xs md:text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Third Section - Image 3 with Comprehensive Care */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-14 lg:gap-20 items-center">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={scaleIn}
            className="relative group"
          >
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl">
              <div className="aspect-[4/3] relative bg-gray-200">
                <Image
                  src="/about/about3.jpg"
                  alt="Comprehensive Care & Exceptional Service on Every Visit"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>

            {/* Service Excellence Badge */}
            <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-gradient-to-r from-[#1FB6A6] to-[#0B6E5E] text-white px-3 py-1.5 md:px-5 md:py-2.5 rounded-lg shadow-xl">
              <div className="flex items-center gap-1 md:gap-2">
                <FaUsersCog className="h-3 w-3 md:h-4 md:w-4" />
                <span className="font-bold text-xs md:text-sm">Service Excellence</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="space-y-4 md:space-y-6"
          >
            <div className="inline-flex items-center gap-2 mb-3 md:mb-4">
              <FaHandHoldingMedical className="h-4 w-4 md:h-5 md:w-5 text-[#064E3B]" />
              <span className="text-[#064E3B] font-semibold text-xs md:text-sm uppercase tracking-wider">
                Patient-Centered Care
              </span>
            </div>

            <h3 className="text-gray-900 text-xl md:text-[1.8rem] font-bold leading-tight">
              Comprehensive Care & Exceptional Service on Every Visit
            </h3>
            
            <div className="space-y-3 md:space-y-4">
              <p className="text-gray-700 text-sm md:text-[1rem] leading-relaxed">
                At Siddiq Hospital & Maternity Complex, we are committed to providing comprehensive medical care 
                combined with exceptional service at every stage of the patient journey. Our focus is on delivering 
                personalized, compassionate, and reliable healthcare experiences—every visit, every time.
              </p>
              
              <p className="text-gray-700 text-sm md:text-[1rem] leading-relaxed">
                By maintaining professionalism, ethical medical practices, strict adherence to quality standards, 
                patient safety, and an inclusive work culture, SHMC strives to be the preferred healthcare destination 
                for patients nationwide.
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 pt-4 md:pt-6">
              {[
                { icon: <FaStar />, title: "Excellence", desc: "International standards" },
                { icon: <FaHeartbeat />, title: "Compassion", desc: "Personalized care" },
                { icon: <FaShieldAlt />, title: "Integrity", desc: "Ethical practices" },
                { icon: <FaHandsHelping />, title: "Trust", desc: "Patient confidence" }
              ].map((value, index) => (
                <div key={index} className="p-3 md:p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="p-1.5 md:p-2 bg-gray-100 rounded-lg">
                      <div className="text-[#064E3B] text-sm md:text-base">
                        {value.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-bold text-xs md:text-sm">{value.title}</h4>
                      <p className="text-gray-600 text-[10px] md:text-xs">{value.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-16 md:mt-28"
        >
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {/* Mission Card */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="relative p-6 md:p-8 bg-white rounded-xl md:rounded-2xl border border-gray-200 shadow-lg overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#064E3B]/5 to-transparent rounded-bl-full" />
              
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="p-2 md:p-3 bg-gradient-to-br from-[#064E3B] to-[#0B6E5E] rounded-lg md:rounded-xl">
                  <FaMicroscope className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <h3 className="text-gray-900 font-bold text-lg md:text-xl">Our Mission</h3>
              </div>
              
              <p className="text-gray-700 text-sm md:text-[1rem] leading-relaxed">
                The healthcare professionals, including doctors, nurses, and staff, endeavor to deliver medical 
                care that is accessible, innovative, and comprehensive to our patients, aligning with international 
                standards.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="relative p-6 md:p-8 bg-white rounded-xl md:rounded-2xl border border-gray-200 shadow-lg overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#1FB6A6]/5 to-transparent rounded-br-full" />
              
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="p-2 md:p-3 bg-gradient-to-br from-[#1FB6A6] to-[#0B6E5E] rounded-lg md:rounded-xl">
                  <FaLightbulb className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <h3 className="text-gray-900 font-bold text-lg md:text-xl">Our Vision</h3>
              </div>
              
              <p className="text-gray-700 text-sm md:text-[1rem] leading-relaxed">
                Elevating Siddiq Hospital & Maternity Complex to the pinnacle of healthcare delivery in Pakistan, 
                we aim to advance our technology and embody the art of compassion in serving our patients.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 md:mt-24 bg-gradient-to-r from-[#064E3B] via-[#0B6E5E] to-[#064E3B] rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 p-8 md:p-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">{stat.number}</div>
                <div className="text-white/80 text-xs md:text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

