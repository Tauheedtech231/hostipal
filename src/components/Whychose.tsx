"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { 
  FaClock,
  FaStethoscope,
  FaUserMd,
  FaHospital,
  FaMapMarkerAlt,
  FaHeartbeat,
  FaShieldAlt,
  FaHandHoldingMedical,
  FaStar,
  FaAward,
  FaCheckCircle
} from "react-icons/fa";

export const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Key reasons data
  const keyReasons = [
    {
      icon: <FaClock />,
      title: "24/7 Emergency Services",
      description: "Immediate medical attention available round the clock for urgent cases."
    },
    {
      icon: <FaStethoscope />,
      title: "Wide Range of Medical Services",
      description: "Multi-specialty care including general medicine, surgery, maternity, cardiology, orthopedics, dermatology, physiotherapy, and diagnostics."
    },
    {
      icon: <FaUserMd />,
      title: "Experienced Medical Team",
      description: "Skilled doctors, nurses, and staff dedicated to personalized patient care."
    },
    {
      icon: <FaHospital />,
      title: "Modern Facilities & Technology",
      description: "Advanced medical equipment for accurate diagnosis, treatment, and faster recovery."
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Convenient Location",
      description: "Centrally located in Lahore for easy access to quality healthcare."
    }
  ];

  // Core values data
  const coreValues = [
    {
      icon: <FaAward />,
      title: "Pursuing Excellence",
      description: "We continually push ourselves to improve every day, ensuring the highest standard of medical care."
    },
    {
      icon: <FaHeartbeat />,
      title: "Compassion",
      description: "Providing unwavering support to our patients in every possible way."
    },
    {
      icon: <FaShieldAlt />,
      title: "Integrity",
      description: "Approaching every medical challenge with honesty and professionalism."
    },
    {
      icon: <FaHandHoldingMedical />,
      title: "Trust",
      description: "Respecting and upholding the trust our patients place in us."
    },
    {
      icon: <FaCheckCircle />,
      title: "Transparency",
      description: "Ensuring our patients fully understand every medical decision they make."
    }
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const cardHover: Variants = {
    hover: {
      y: -8,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="relative py-24 bg-[#000000] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #1FB6A6 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-[#1FB6A6]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-l from-[#1FB6A6]/10 to-transparent rounded-full blur-3xl" />
        
        {/* Animated dots */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#1FB6A6]/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `pulse ${2 + Math.random() * 3}s infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="inline-block mb-6">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#1FB6A6]/20 to-[#1FB6A6]/10 rounded-full border border-[#1FB6A6]/30">
              <div className="w-2 h-2 bg-[#1FB6A6] rounded-full animate-pulse" />
              <span className="text-[#1FB6A6] text-sm font-semibold tracking-wider uppercase">
                Excellence in Healthcare
              </span>
            </div>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Why Choose
            <span className="block text-[#1FB6A6] mt-2">Siddiq Hospital?</span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-[#E5E7EB] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Siddiq Hospital & Maternity Complex is a trusted healthcare provider in Lahore, 
            offering comprehensive medical services, modern facilities, and 24/7 emergency care. 
            We are committed to patient-centered treatment, ensuring every individual receives 
            compassionate, reliable, and high-quality healthcare.
          </motion.p>
        </motion.div>

        {/* Key Reasons Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-24"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Key Reasons to Choose Us
            </h3>
            <p className="text-[#E5E7EB] max-w-2xl mx-auto">
              Discover what makes Siddiq Hospital the preferred choice for healthcare in Lahore
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyReasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="group"
              >
                <div className="relative p-6 bg-[#111111] rounded-xl border border-[#1FB6A6]/10 hover:border-[#1FB6A6]/30 transition-all duration-500 h-full">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1FB6A6]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                  
                  {/* Icon */}
                  <div className="mb-5">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#1FB6A6] to-[#0B6E5E] flex items-center justify-center shadow-lg shadow-[#1FB6A6]/20">
                      <div className="text-white text-xl">
                        {reason.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {reason.title}
                  </h3>
                  
                  <p className="text-[#E5E7EB] text-sm leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#1FB6A6] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="relative"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Our Core Values
            </h3>
            <p className="text-[#E5E7EB] max-w-2xl mx-auto">
              These values reflect why patients trust Siddiq Hospital
            </p>
          </motion.div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {coreValues.slice(0, 3).map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="group"
              >
                <div className="relative p-6 bg-gradient-to-br from-[#111111] to-black rounded-xl border border-[#1FB6A6]/20 hover:border-[#1FB6A6]/40 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1FB6A6] to-[#0B6E5E] flex items-center justify-center">
                      <div className="text-white text-lg">
                        {value.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-[#E5E7EB] text-sm leading-relaxed">
                    {value.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="absolute top-0 right-0 mt-4 mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-[#1FB6A6] rounded-full" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Last two core values in a centered row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {coreValues.slice(3, 5).map((value, index) => (
              <motion.div
                key={index + 3}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="group"
              >
                <div className="relative p-6 bg-gradient-to-br from-[#111111] to-black rounded-xl border border-[#1FB6A6]/20 hover:border-[#1FB6A6]/40 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1FB6A6] to-[#0B6E5E] flex items-center justify-center">
                      <div className="text-white text-lg">
                        {value.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-[#E5E7EB] text-sm leading-relaxed">
                    {value.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="absolute top-0 right-0 mt-4 mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-[#1FB6A6] rounded-full" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block max-w-2xl">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Experience Our Care?
            </h3>
            <p className="text-[#E5E7EB] mb-8">
              Choose Siddiq Hospital for compassionate, reliable, and high-quality healthcare in Lahore
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3.5 bg-gradient-to-r from-[#1FB6A6] to-[#0B6E5E] text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-[#1FB6A6]/20 transition-all duration-300">
                Book Appointment Now
              </button>
              <button className="px-8 py-3.5 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                Call 0303 6828260
              </button>
            </div>
           
          </div>
        </motion.div>
      </div>

      {/* Add CSS for pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};